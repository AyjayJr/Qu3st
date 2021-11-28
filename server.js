const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwkToPem = require('jwk-to-pem');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();
const MongoClient = require('mongodb').MongoClient;
const mongoDB = require('mongodb');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js-node');
const AWS = require('aws-sdk');
const cmd = require('node-cmd');
const { ObjectId } = require('bson');
const jwk = require('./jwks.json');

const url = 'mongodb+srv://Ron:ronronjesusron@taskapp.zgb31.mongodb.net/Quest?retryWrites=true&w=majority';

const client = new MongoClient(url);
client.connect();


const POOL_ID = 'us-east-2_KTrnylnKo'
const CLIENT_ID = '7n9tcm4ftueb79i4emtoef12kj'
//const tokenKey = 't0qC5-BPQGFoGTVTxaY4fkyzF9u99mzkxkBHREfjZevEoBQyMJeX8-hO3XkHB69_pcgGHBmErR2I_pn8xPK2hkwQz-piEKyZCEeV4nMai-gZYpmHdeY7s4muTOxsH6Jsdb2FQ90kyhJAiUr9LwcwtqRyb6lBS6aOOimMhpdHwUH8N-JHZIxywIIOd7gk0ORqRx2jWln5v-yxdn1kEVe1452zk3vkMnTbqdDSEx4oWBw4JuqVIWdl64yDAg3VfeVQkp3byaZcGeRcr216V8raVgUdF_XxDD49If8gwon3Xr8z3OnfSFp8WEUj-giHtSS5xzWvWQ8pgkfqTsH60IRt4w';

const jwks = jwk.keys[0];
const tokenKey = jwkToPem(jwks)


const POOL_INFO = {
    UserPoolId: POOL_ID,
    ClientId: CLIENT_ID
};

const cogAccount = new AmazonCognitoIdentity.CognitoUserPool(POOL_INFO);

const auth = (req, res, next) => 
{
    let token = req.headers.authorization;

    if(token) 
    {
        jwt.verify(token, tokenKey, {algorithms: 'RS256'}, (err, data) =>
        {
            if(err) 
            {
                let ret = {error: err, token: token};
                res.status(200).json(ret);
            }
            else
            {
                req.ID = data['custom:ID'];
                next();
            }
        });
    }
    else
    {
        let ret = {error: "Header Missing"};
        res.status(200).json(ret);
    }
};


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

app.post('/api/authTest', auth, async (req, res, next) => 
{
    let ret = {ID: req.ID};
    res.status(200).json(ret);
});

app.post('/api/confirm', async (req, res, next) => 
{
    // incoming: email, code
    // outgoing: error

    const {email, code} = req.body;

    const userData = {
        Username: email,
        Pool: cogAccount
    };

    const cogUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cogUser.confirmRegistration(code, null, (err,data) =>
    {
        const ret = {error:err};
        res.status(200).json(ret);  
    });
    
});

app.post('/api/resendCode', async (req, res, next) => 
{
    // incoming: email
    // outgoing: error

    const {email} = req.body;

    const userData = {
        Username: email,
        Pool: cogAccount
    };

    const cogUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cogUser.resendConfirmationCode((err,data) =>
    {
        const ret = {error:err};
        res.status(200).json(ret);  
    });
    
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

            if(results.length == 0)
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
    let id = -1;

    const db = client.db();
    const results = await db.collection('User').find({User:email}).toArray();
    if(results.length > 0)
    {
        exists = 1;
        id = results[0]._id;
    }
    else
    {
        const db = client.db();
        const result = await db.collection('User').insertOne({});
        id = result.insertedId;
    }
    
    let idStr = ObjectId(id).toString();
    idStr = idStr.toString();
    //console.log(idStr);
 
    const emailAtt = new AmazonCognitoIdentity.CognitoUserAttribute('email', email);
    const firstAtt = new AmazonCognitoIdentity.CognitoUserAttribute('given_name', first);
    const lastAtt = new AmazonCognitoIdentity.CognitoUserAttribute('family_name', last);
    const idAtt = new AmazonCognitoIdentity.CognitoUserAttribute('custom:ID', idStr);
    const attributeList = [emailAtt, firstAtt, lastAtt, idAtt];    

    cogAccount.signUp(email, password, attributeList, null, async (err, data) => 
    {
        if(err != null)
        {
            const result = await db.collection('User').deleteOne({_id: new mongoDB.ObjectId(idStr)}); /////////////////CHECK
            ret = {error:err};
        }
        else
        {
            if(exists == 0)
            {
                try
                {
                    //const newUser = {User:email,FirstName:first,LastName:last};
                    const db = client.db();
                    const result = await db.collection('User').updateOne({"_id": new mongoDB.ObjectId(idStr)},{$set: {User:email,FirstName:first,LastName:last}});
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
