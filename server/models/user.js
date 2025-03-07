import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        thoughts: [{ type: Schema.Types.ObjectId, ref: "Thought" }],
        friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

// Virtual to get friend count
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

// Virtual to get friend count
userSchema.virtual("thoughtsCount").get(function () {
    return this.thoughts.length;
});

// 🔐 Hash password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// 🔑 Method to compare entered password with hashed password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
};

const User = model("User", userSchema);

export { User };
