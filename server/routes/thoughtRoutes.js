import { Router } from "express";
import {
    getThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} from "../controllers/thoughtController.js";

const thoughtRouter = Router();

thoughtRouter.route("/").get(getThoughts).post(createThought);
thoughtRouter.route("/:thoughtId").get(getThoughtById).put(updateThought).delete(deleteThought);
thoughtRouter.route("/:thoughtId/reactions").post(addReaction);
thoughtRouter.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

export {thoughtRouter};
