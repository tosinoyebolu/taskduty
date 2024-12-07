import express from "express"
import { createTask, getAllTasks,getUserTasks, deleteTasks, updateTask } from "../controllers/task"

const router = "express.Router()"

router.post("/create-task", verifyToken, createToken);
router.get("/get, verifyToken, getAllTasks");
router.get("/get-user", verifyToken, getUserTasks );

router.delete("/:id", verifyToken, deleteTask);

router.patch("/:id", verifyToken, updateTask);

