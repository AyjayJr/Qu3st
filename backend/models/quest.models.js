const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const QuestSchema  = new Schema({
    name: {
        type: String,
    },
    
    type: {
        type: String,
    },

    urgency: {
        type: String,
    },
    
    due: {
        type: String,
        
    },

    tasks: [taskSchema] ,

    xpTotal: {
        type: String,
    },

    user_id: {
        type: String,
    },

    isFinished: {
        type: Boolean,
    },

});

const taskSchema = new Schema({
    name: {
      type: String,
    },
    frequency: {
      type: String,
    },
    xpgained: {
      type: String,
    },

    notification: {
      type: Number,
    },

  });


// Model
const Quest = mongoose.model('Quest', QuestSchema);

module.exports =  Quest;
