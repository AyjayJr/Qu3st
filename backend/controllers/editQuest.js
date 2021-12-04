import jwt from "jsonwebtoken";
import quest from "../models/quest";

export default async function(req, res) {

    // Check if JSON payload request has content.
    if (!req.body)
        return req.status(400).json({error: "No such quest found"});

    const id = req.body.id;
    const name = req.body.name;
    const type = req.body.type;
    const urgency = req.body.urgency;
    const xpTotal = req.body.xpTotal;
    const due = req.body.due;
    const tasks = req.body.tasks;
    const user_id = req.body.user_id;
    const isFinished = req.body.isFinished;

    

    const necessaryInputs = ["id", "name", "type", "urgency", 
                            "xpTotal", "due", "tasks", "user_id", "type"];

    for (const input of necessaryInputs) {
        if (!(input in req.body))
            return res.status(400).send({error: `${input} is needed`});
    }

    if (id === "")
        return res.status(400).send({error: "Need an id"});

    if (name === "")
    return res.status(400).send({error: "Need an quest name"});

    jwt.verify(token, process.env.LOGIN_KEY, (err, decoded) => {
        if (err)
            return res.status(400).json({ error: "Access not granted." });

        quest.findOneAndUpdate({_id: id, user_id: decoded.id}, {name: name, type: type, urgency: urgency,
                                xpTotal: xpTotal, due: due, tasks: tasks, user_id: user_id, isFinished: isFinished})
            .then(data => {
                if (!data) {
                    res.status(404).send({ error: `There are issues with updating your quest.`});
                    return;
                }

                res.send({message: "Quest updated"});
            }).catch(err => {
                res.status(500).send({ error: err.message });
            });
    });
}