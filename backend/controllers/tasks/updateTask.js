import quest from "../../models/quest.models";
import jwt from "jsonwebtoken";


export default async function(req, res) {

    if (!req.body || !req.params || (req.body.isFinished === undefined && !req.body.text)) {

        return res.status(400).json({ error: "empty task" });
    }

    const quest_Id = req.params._id;
    const task_id = req.params.task_id;

    jwt.verify(req.body.token, process.env.LOGIN_KEY, async (err, decoded) => {

        if (err)
            return res.status(400).json({ error: "Access not granted." });

            quest.findOne({ _id: quest_Id,  UserId: decoded.id  })
            .then(data => {
                if (!data) { res.status(404).send({ error: `Need data to input.` });
                    return;
                }

                quest.findOneAndUpdate({ _id: quest_Id, UserId: decoded.id }, 
                    { tasks: data.tasks },
                    (err, updatedData) => {
                        if (!updatedData) {
                            res.status(404).send({ error: `Unable to add a task.` });
                            return;
                        }
                        res.send({ message: "Success" });
                    });
            })
            .catch(err => {
                if (err.path === "_id")
                    return res.status(500).send({ error: `ID: ${id} not found` });
                res.status(500).send({ error: err.message });
            });
    });
}