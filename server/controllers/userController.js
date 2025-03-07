import { User } from "../models/user.js";
import { Thought } from "../models/thought.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find().populate("thoughts").populate("friends");
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
            .populate("thoughts")
            .populate("friends");
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};

export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
            new: true,
            runValidators: true,
        });
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        await Thought.deleteMany({ username: user.username });
        res.json({ message: "User and thoughts deleted" });
    } catch (err) {
        res.status(500).json(err);
    }
};

export const addFriend = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            { $push: { friends: req.params.friendId } },
            { new: true }
        );
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const removeFriend = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            { $pull: { friends: req.params.friendId } },
            { new: true }
        );
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};
