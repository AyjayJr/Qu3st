import quest from "../../models/quest.models";
import jwt from "jsonwebtoken";

export default async function(req, res) {

    // Check if JSON request payload exists.
    if (!req.body || !req.params) {
        return res.status(400).json({
            error: "empty task"
        });
    }

    const quest_Id = req.params._id;

    jwt.verify(req.body.token, process.env.LOGIN_KEY, async (err, decoded) => {

        if (err)
            return res.status(400).json({
                error: "unauthorized access"
            });

        quest.findOne({ _id: quest_Id, UserId: decoded.id })
            .then(data => {
                if (!data)
                    return res.status(404).send({ error: `No such quest found` });

                quest.findOneAndUpdate({  _id: quest_Id },
                    { tasks: [...data.tasks,
                        {taskName: req.tasks.taskName }]})
                    .then(data => {
                        if (!data) {
                            res.status(404).send({ error: `Cannot remove task` });
                            return;
                        }

                        res.send({  message: "Success"  });
                    })
                    .catch(err => {
                        res.status(500).send({  error: err.message });
                    });
            })
            .catch(err => {
                if (err.path === "_id")
                    return res.status(500).send({ error: `Quest not found'` });
                res.status(500).send({  error: err.message  });
            });
    });
}