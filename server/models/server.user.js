import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    friends: { type: Array },
    friends_count: { type: Number },
    reactions: { type: Array },
    reactions_count: { type: Number },
    thoughts: { type: Array },
    thoughts_count: { type: Number }
});

export default mongoose.model('User', userSchema);