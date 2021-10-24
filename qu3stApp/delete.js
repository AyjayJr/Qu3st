const { MongoClient } = require('mongodb');

async function main() {

     const uri = "mongodb+srv://Ron:ronronjesusron@taskapp.zgb31.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls

        // DELETE ONE
        // Check if a listing named "Cozy Cottage" exists. Run update.js if you do not have this listing.
        await printIfQuestExists(client, "quest");
        // Delete the "Cozy Cottage" listing
        await deleteQuestByName(client, "quest");
        // Check that the listing named "Cozy Cottage" no longer exists
        await printIfListingExists(client, "quest");

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

async function deleteQuestByName(client, nameOfQuest) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#deleteOne for the deleteOne() docs
    const result = await client.db("Quest").collection("Quest").deleteOne({ name: nameOfQuest });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
}

async function printIfQuestExists(client, nameOfQuest) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    const result = await client.db("Quest").collection("Quest").findOne({ name: nameOfQuest });

    if (result) {
        if (result.last_scraped) {
            console.log(`Found a listing in the collection with the name '${nameOfQuest}'. Listing was last scraped ${result.last_scraped}.`);
        } else {
            console.log(`Found a listing in the collection with the name '${nameOfQuest}'`);
        }
    } else {
        console.log(`No listings found with the name '${nameOfQuest}'`);
    }
}
