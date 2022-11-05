import { Router } from "express";
import {
  addTask,
  deleteTask,
  getTasks,
  getTaskUpdate,
  setTaskEdit,
  toggleDone,
} from "../controllers/tasks.controller";
const router = Router();

router.get("/", getTasks);
router.post("/task/add", addTask);
router.get("/task/:uid/edit", getTaskUpdate);
router.post("/task/:uid/edit", setTaskEdit);
router.get("/task/:uid/delete", deleteTask);
router.get("/task/:uid/toggleDone", toggleDone);

export default router;
