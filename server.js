const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwkToPem = require('jwk-to-pem');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();
app.set('port', (process.env.PORT || 5000));

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

//May need    \"npm run frontend\"     in package.json 
//modified

const POOL_ID = 'us-east-2_KTrnylnKo'
const CLIENT_ID = '7n9tcm4ftueb79i4emtoef12kj'

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


// Server static assets if in production
if (process.env.NODE_ENV === 'production') 
{
    // Set static folder
    app.use(express.static('frontend/build'));

    app.get('*', (req, res) => 
    {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}

/*
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
*/

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

app.post('/api/createQuest', auth, async (req, res, next) => 
{
    let userId = req.ID;
    let err = ""

    const quest = {
        name: req.body.name,
        due: req.body.due,
        description: req.body.description,
        urgency: req.body.urgency,
        difficulty: req.body.difficulty,
        userId: userId,
        isFinished: false
    };

    try
    {
        const db = client.db();
        const result = await db.collection('Quest').insertOne(quest);
        id = result.insertedId;

        let idStr = ObjectId(id).toString();
        idStr = idStr.toString();

        const resultUser = await db.collection('User').updateOne({"_id": new mongoDB.ObjectId(userId)},{$addToSet: {quests: idStr}});
    }
    catch(e)
    {
        err = e.toString()
    }
    const ret = {error:err};
    res.status(200).json(ret); 
});

app.post('/api/deleteQuest', auth, async (req, res, next) => {
    let userId = req.ID;
    let err = ""

    const questId = req.body.id;

    try
    {
        const db = client.db();
        const lookUp = await db.collection('Quest').findOne({"_id": new mongoDB.ObjectId(questId)})
        if(lookUp.userId == userId.toString())
        {
            const result = await db.collection('Quest').deleteOne({"_id": new mongoDB.ObjectId(questId)});

            const resultUser = await db.collection('User').updateOne({"_id": new mongoDB.ObjectId(userId)},{$pull: {"quests": questId}});
        }
        else
        {
            err = "UserId Does Not Match"
        }
    }
    catch(e)
    {
        err = e.toString()
    }

    const ret = {error:err};
    res.status(200).json(ret);
});

app.post('/api/updateQuest', auth, async (req, res, next) => {
    let userId = req.ID;
    let err = ""

    const questId = req.body.id;
    const name = req.body.name;
    const due = req.body.due;
    const description = req.body.description;
    const urgency = req.body.urgency;
    const difficulty = req.body.difficulty;
    const isFinished = req.body.isFinished;


    try
    {
        const db = client.db();
        const lookUp = await db.collection('Quest').findOne({"_id": new mongoDB.ObjectId(questId)})
        if(lookUp.userId == userId.toString())
        {
            const result = await db.collection('Quest').updateOne({"_id": new mongoDB.ObjectId(questId)},{
                $set: {'name': name, 'due' : due, 'description' : description, 'urgency': urgency, 
                    'difficulty' : difficulty, 'isFinished' : isFinished}
                });
        }
        else
        {
            err = "UserId Does Not Match"
        }
    } catch(e){
        err = e.toString();
    }

    const ret = {error:err};
    res.status(200).json(ret);
});

app.post('/api/searchQuest', auth, async (req, res, next) => {
    let userId = req.ID;
    let ret = "";
    let err = "";
    let i = 0;
    let quests = [];
    let id = "";

    const urgency = req.body.urgency;
    const isFinished = req.body.isFinished;

    let searchTerm = {
        'userId': userId
    }

    if(urgency != "")
    {
        searchTerm = {searchTerm , urgency: urgency};
    }

    if(isFinished != "")
    {
        searchTerm = {searchTerm ,isFinished: isFinished};
    }

    console.log(searchTerm);

    try
    {
        const db = client.db();
        const lookUp = await db.collection('Quest').find(searchTerm).toArray();
        
        for(i = 0; i < lookUp.length; i++)
        {
            id = lookUp[i]._id;
            id = id.toString();   
            quests.push(id);
        }  
        
        ret = {error: "", quests: quests};
    } 
    catch(e){
        err = e.toString();
        ret = {error:err};
    }

    res.status(200).json(ret);
});

app.post('/api/finishQuest', auth, async (req, res, next) => {
    let userId = req.ID;
    let err = ""

    const questId = req.body.id;

    try
    {
        const db = client.db();
        const lookUp = await db.collection('Quest').findOne({"_id": new mongoDB.ObjectId(questId)})
        if(lookUp.userId == userId.toString())
        {
            const result = await db.collection('Quest').updateOne({"_id": new mongoDB.ObjectId(questId)},{$set: {'isFinished' : true}});
        }
        else
        {
            err = "UserId Does Not Match"
        }
    } catch(e){
        err = e.toString();
    }

    const ret = {error:err};
    res.status(200).json(ret);

});

app.post('/api/listQuests', auth, async (req, res, next) => {

    let userId = req.ID;
    let ret = "";

    try
    {
        const db = client.db();
        const result = await db.collection('User').findOne({'_id': new mongoDB.ObjectId(userId)});
        ret = {error: "", quests: result.quests};
    }
    catch(e)
    {
        ret = {error: e};
    }

    res.status(200).json(ret);

});

app.post('/api/viewQuest', auth, async (req, res, next) => {

    let userId = req.ID;
    let ret = "";
    let id = req.body.id;

    try
    {
        const db = client.db();
        const result = await db.collection('Quest').findOne({"_id": new mongoDB.ObjectId(id)});
        if(result.userId == userId.toString())
        {
            ret = {error: "", quest: result};
        }
        else
        {
            ret = {error: "UserId Does Not Match"};
        }
    }
    catch(e)
    {
        ret = {error: e};
    }

    res.status(200).json(ret);

});

app.post('/api/viewUser', auth, async (req, res, next) => {

    let userId = req.ID;
    let ret = "";

    try
    {
        const db = client.db();
        const result = await db.collection('User').findOne({"_id": new mongoDB.ObjectId(userId)});
        
        ret = {error: "", task: result};
    }
    catch(e)
    {
        ret = {error: e};
    }

    res.status(200).json(ret);
});

app.post('/api/updateUser', auth, async (req, res, next) => {
    let userId = req.ID;
    let err = ""

    const first = req.body.first;
    const last = req.body.last;

    try
    {
        const db = client.db();
        const result = await db.collection('User').updateOne({"_id": new mongoDB.ObjectId(userId)},{
                $set: {'FirstName': first, 'LastName': last}
            });
    } catch(e){
        err = e.toString();
    }

    const ret = {error:err};
    res.status(200).json(ret);

});

app.post('/api/resetPassword', async (req, res, next) => 
{
    // incoming: email
    // outgoing: error

    const {email} = req.body;

    const userData = {
        Username: email,
        Pool: cogAccount
    };

    const cogUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cogUser.forgotPassword({
        onFailure: err =>
        {
            const ret = {error:err};

            res.status(200).json(ret);
        },
        onSuccess: data => 
        { 
            const ret = {data:data};

            res.status(200).json(ret);
        }
    });

});

app.post('/api/confirmPassword', async (req, res, next) => 
{
    // incoming: email, newpassword, code
    // outgoing: error

    const {email, newpassword, code} = req.body;

    const userData = {
        Username: email,
        Pool: cogAccount
    };

    const cogUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cogUser.confirmPassword(code, newpassword,{
        onFailure: err =>
        {
            const ret = {error:err};

            res.status(200).json(ret);
        },
        onSuccess: data => 
        { 
            const ret = {data:data};

            res.status(200).json(ret);
        }
    });

});

app.post('/api/changePassword', async (req, res, next) => 
{
    // incoming: email, oldpassword, newpassword
    // outgoing: error

    const {email, oldpassword, newpassword, code} = req.body;

    const loginInfo = {
        Username: email, 
        Password: oldpassword
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
            cogUser.changePassword(oldpassword, newpassword, (errPass) => 
            {
                if(errPass != null)
                {
                    const ret = {error:errPass};

                    res.status(200).json(ret);
                }
                else
                {
                    const ret = {error:errPass};

                    res.status(200).json(ret);
                }
            });
        }
    });


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
    // outgoing: firstName, lastName, token, error

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
            const user = {FirstName:fn, LastName:ln, Token:data.idToken.jwtToken};
            ret = {error:"", user: user}

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
 
    const emailAtt = new AmazonCognitoIdentity.CognitoUserAttribute('email', email);
    const firstAtt = new AmazonCognitoIdentity.CognitoUserAttribute('given_name', first);
    const lastAtt = new AmazonCognitoIdentity.CognitoUserAttribute('family_name', last);
    const idAtt = new AmazonCognitoIdentity.CognitoUserAttribute('custom:ID', idStr);
    const attributeList = [emailAtt, firstAtt, lastAtt, idAtt];    

    cogAccount.signUp(email, password, attributeList, null, async (err, data) => 
    {
        if(err != null)
        {
            if(exists == 0)
            {
                const result = await db.collection('User').deleteOne({_id: new mongoDB.ObjectId(idStr)});
            }
            ret = {error:err};
        }
        else
        {
            if(exists == 0)
            {
                try
                {
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

app.listen(PORT, () => 
{
  console.log('Server listening on port ' + PORT);
});
 // start Node + Express server on port 5000
