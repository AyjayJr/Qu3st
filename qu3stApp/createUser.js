const { MongoClient } = require('mongodb');


async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/drivers/node/ for more details
     */
    const uri = "mongodb+srv://Ron:ronronjesusron@taskapp.zgb31.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    /**
     * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
     * pass option { useUnifiedTopology: true } to the MongoClient constructor.
     * const client =  new MongoClient(uri, {useUnifiedTopology: true})
     */
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Create user
        await createUser(client,
            {
                name: "Tester",
                username: "tester",
                password: "tester22@",
                avatar: "",
                email: "tester@gmail.com",
                quests: ""
            }
        );

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

/**
 * Create multiple users
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
 * @param {Object[]} newUser The new users to be added
 */
async function createUser(client, newUser) {
    const result = await client.db("Quest").collection("User").insertOne(newUser);

    console.log(`${result.insertedCount} new user created with the following id:`);
    console.log(result.insertedIds);
}
