const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();
const MongoClient = require('mongodb').MongoClient;
const AmazonCognitoIdentity = require('amazon-cognito-identity-js-node');

const url = 'mongodb+srv://Ron:ronronjesusron@taskapp.zgb31.mongodb.net/Quest?retryWrites=true&w=majority';

const client = new MongoClient(url);
client.connect();


const POOL_ID = 'us-east-2_KTrnylnKo'
const CLIENT_ID = '7n9tcm4ftueb79i4emtoef12kj'

const POOL_INFO = {
    UserPoolId: POOL_ID,
    ClientId: CLIENT_ID
};

const cogAccount = new AmazonCognitoIdentity.CognitoUserPool(POOL_INFO);

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => 
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.post('/api/ping', async (req, res, next) => 
{
    let ret = 'pong';
    res.status(200).json(ret);
});

app.post('/api/login', async (req, res, next) => 
{
    // incoming: email, password
    // outgoing: id, firstName, lastName, error

    const {email, password} = req.body;

    let ret = ''; 
    let id = -1;
    let fn = '';
    let ln = '';  
    let exists = 0;

    const db = client.db();
    const results = await db.collection('User').find({User:email}).toArray();
    if(results.length > 0)
    {
        id = results[0]._id;
        fn = results[0].FirstName;
        ln = results[0].LastName;
        exists = 1;
    }
    
    const loginInfo = {
        Username: email, 
        Password: password
    };

    const authData = new AmazonCognitoIdentity.AuthenticationDetails(loginInfo);

    const userData = {
        Username: email,
        Pool: cogAccount
    };

    const cogUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cogUser.authenticateUser(authData, 
    {
        onFailure: err =>
        {
            const ret = {error:err};

            res.status(200).json(ret);
        },
        onSuccess: data => 
        {   
            const ret = {ID:id, FirstName:fn, LastName:ln, values:data};

            if(exists == 0)
            {
                ret = {error:'DatabaseError'};
            }
            res.status(200).json(ret);
        }
    });
    
});

app.post('/api/register', async (req, res, next) => 
{
    // incoming: email, password, firstName, lastName
    // outgoing: error

    const { email, password, first, last } = req.body;

    let ret = '';
    let exists = 0;

    const db = client.db();
    const results = await db.collection('User').find({User:email}).toArray();
    if(results.length > 0)
    {
        exists = 1;
    }
 
    const emailAtt = new AmazonCognitoIdentity.CognitoUserAttribute('email', email);
    const firstAtt = new AmazonCognitoIdentity.CognitoUserAttribute('given_name', first);
    const lastAtt = new AmazonCognitoIdentity.CognitoUserAttribute('family_name', last);
    const attributeList = [emailAtt, firstAtt, lastAtt];    

    cogAccount.signUp(email, password, attributeList, null, (err, data) => 
    {
        if(err != null)
        {
            ret = {error:err};
        }
        else
        {
            if(exists == 0)
            {
                try
                {
                    const newUser = {User:email,FirstName:first,LastName:last};

                    const db = client.db();
                    const result = db.collection('User').insertOne(newUser);
                }
                catch(e)
                {
                    error = e.toString();
                }
            }

            ret = {error:err};
        }
        res.status(200).json(ret);    
    });
});

app.listen(5000); // start Node + Express server on port 5000




// app.set('port', PORT);
//
// app.use(cors());
// app.use(bodyParser.json());
// app.use((req, res, next) =>
// {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   );
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET, POST, PATCH, DELETE, OPTIONS'
//   );
//   next();
// });
//
//
// if (process.env.NODE_ENV === 'production')
// {
//   // Set static folder
//   app.use(express.static('frontend/build'));
//   app.get('*', (req, res) =>
//  {
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
//   });
// }

// require('dotenv').config();
/*
async function main(){

const url = "mongodb+srv://Ron:ronronjesusron@taskapp.zgb31.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url);

  try {
    await client.connect();

    await listDatabases(client);

  } catch (e){
    console.error(e);
  } finally {
    await client.close();
  }
}
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
*/
