import jwt from "jsonwebtoken";
import quest from "../models/quest";

export default async function (req, res, next) {
  if (!req.body) {
    return res.status(400).json({
      error: "empty list",
    });
  }

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
            tasks: req.body.task,
            user_id: decoded.id,
            isFinished: req.body.isFinished,
         });

         await list.save()
         .then(data => {
             res.json({
                 id: data.id
             });
         })
         .catch(err => {
             res.status(500).json({
                 error: err.message
             });
         });

    // var error = "";

    // try {
    //   const db = client.db();
    //   const result = await db.collection("Quest").insertOne(newQuest);
    //   id = result.insertedId;
    // } catch (e) {
    //   error = e.toString();
    // }

    // let idStr = ObjectId(id).toString();
    // idStr = idStr.toString();

    // const db = client.db();
    // const addToUser = await db
    //   .collection("User")
    //   .updateOne({ _id: user_id }, { $addToSet: { quests: idStr } });

    // var ret = { error: error };

    // res.status(200).json(ret);
  });
}
