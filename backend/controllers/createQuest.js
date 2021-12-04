import jwt from "jsonwebtoken";
import quest from "../models/quest";

export default async function (req, res) {
  if (!req.body)
    return res.status(400).json({error: "We need input to create your quest",});
  

  jwt.verify(req.body.token, process.env.LOGIN_KEY, async (err, decoded) => {
    if (err)
    return res.status(400).json({
        error: "unauthorized access"
    });

    const quest = new quest({
            name: req.body.name,
            type: req.body.type,
            urgency: req.body.urgency,
            xpTotal: req.body.xpTotal,
            due: req.body.due,
            tasks: req.body.tasks,
            user_id: decoded.id,
            isFinished: req.body.isFinished,
         });

         await list.save()
         .then(data => {
             res.json({
                 id: data.id
             });
         }).catch(err => {
             res.status(500).json({error: err.message});
         });

  });
}
