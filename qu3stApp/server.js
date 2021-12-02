const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();
const MongoClient = require('mongodb').MongoClient;


app.set('port', PORT);

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

app.get("/api", (req, res) => {
  res.json({ message: "Database working?" });
});


app.listen(5000); 

// require('dotenv').config();
// async function main(){

// const url = "mongodb+srv://Ron:ronronjesusron@taskapp.zgb31.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(url);

//   try {
//     await client.connect();

    
//     await listDatabases(client);
//     fs.readFile('./frontend/src/App.html', function (err, html) {

//       if (err) throw err;    
  
//       http.createServer(function(request, response) {  
//           response.writeHeader(200, {"Content-Type": "text/html"});  
//           response.write(html);  
//           response.end();  
//       }).listen(PORT);
//   });

//   } catch (e){
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };
