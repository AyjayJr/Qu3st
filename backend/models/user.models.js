import { Schema as _Schema, model } from 'mongoose';

// Schema
const Schema = _Schema;
const UserSchema  = new Schema({
    name: {
        type: String,
    },
    
    username: {
        type: String,
    },

    password: {
        type: String,
    },
    
    avatar: {
        type: String,
        
    },

    email: {
        type: String,
    },

    quests: [questSchema] ,



});

const questSchema = new Schema({
    questId: {
      type: String,
    },
  });


// Model
const User = model('User', UserSchema);

export default User;