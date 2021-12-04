import jwt from "jsonwebtoken";
import quest from "../models/quest";

export default async function (req, res) {

    const search = req.query?.search || req.body?.search || "";

    jwt.verify(req.body.token, process.env.LOGIN_KEY, (err, decoded) => {
        if (err)
            return res.status(400).json({ error: "unauthorized access" });
        quest.find({ Title: { $regex: `(?i)${search}` }, UserId: decoded.id })
        .then(quest => {

            let myQuests = [];

            for (const ofQuests of quest) {
                let myTasks = [];

                for (const ofTasks of ofQuests.myTasks) {
                    myTasks.push({
                        name: ofTasks.name,
                        frequency: ofTasks.frequency,
                        xpGained: ofTasks.xpGained,
                        notification: ofTasks.notification,
                    });
                }

                myQuests.push({
                    id: ofQuests._id,
                    name: ofQuests.name,
                    type: ofQuests.type,
                    urgency: ofQuests.urgency,
                    due: ofQuests.due,
                    tasks: myTasks,
                    created: ofQuests.createdAt,
                    updated: ofQuests.updatedAt
                });
            }

            res.send(myQuests);
        })
            .catch(err => {
                res.status(500).send({ message: err.message });
            });
    });
}