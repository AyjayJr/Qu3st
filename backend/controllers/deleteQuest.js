import jwt from "jsonwebtoken";
import quest from "../models/quest";

// Delete API receives the ID, body, title, and respective UID of the list.
// Deletes list from the specific user from the database.
export default async function(req, res) {

    const id = req.body?.id;
    const token = req.body?.token;

    if (!id || !token)
        return res.status(400).send({ error: err.message });

    jwt.verify(token, process.env.LOGIN_KEY, (err, decoded) => {
        if (err)
            return res.status(400).json({ error: "Access not granted." });

        quest.findOneAndDelete({_id: id, UserId: decoded.id })
            .then(data => {
                if (!data) {
                    res.status(404).send({ error: `No such quest found` })
                    return;
                }

                res.send({ message: "Quest deleted." });
            })
            .catch(err => { 
                res.status(500).send({ error: `Error in deleting quest.  Try again.` })
            });
    });
}