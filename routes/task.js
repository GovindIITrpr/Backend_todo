import express from "express";
import {
  getMyTasks,
  newTask,
  updateTask,
  deleteTask,
} from "../controllers/task.js";
import { isAuth } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuth, newTask);

router.get("/mytasks", isAuth, getMyTasks);

router.route("/:id").put(isAuth, updateTask).delete(isAuth, deleteTask);

export default router;
