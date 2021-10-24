const { MongoClient } = require('mongodb');

async function main() {

  const uri = "mongodb+srv://Ron:ronronjesusron@taskapp.zgb31.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls

        // UPDATE
        // Print the Infinite Views listing
        await findQuestByName(client, "Cleaning my car");
        // Update the Infinite Views listing to have 6 bedrooms and 8 beds
        await updateQuestByName(client, "Cleaning my car", { name: "Pimping my ride", urgency: "urgent", due: "11/21/2021" });
        // Print the updated Infinite Views listing
        await findListingByName(client, "Pimping my ride");



    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

async function updateQuestByName(client, nameOfQuest, updatedQuest) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#updateOne for the updateOne() docs
    const result = await client.db("Quest").collection("Quest").updateOne({ name: nameOfQuest }, { $set: updatedQuest });

    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

 async function findQuestByName(client, nameOfQuest) {
     const result = await client.db("Quest").collection("Quest").findOne({ name: nameOfQuest });

     if (result) {
         console.log(`Found a listing in the collection with the name '${nameOfQuest}':`);
         console.log(result);
     } else {
         console.log(`No listings found with the name '${nameOfQuest}'`);
     }
 }
