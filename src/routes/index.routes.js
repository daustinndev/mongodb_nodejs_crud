import { Router } from "express";
import {
  addTask,
  deleteTask,
  getTasks,
  getTaskUpdate,
  searsh,
  setTaskEdit,
  toggleDone,
} from "../controllers/tasks.controller";
const router = Router();

router.get("/", getTasks);
router.post("/task/add", addTask);
router.get("/task/:uid/edit", getTaskUpdate);
router.post("/task/:uid/edit", setTaskEdit);
router.get("/task/:uid/delete", deleteTask);
router.post("/task/:uid/toggleDone", toggleDone);
router.post("/task/searsh/", searsh);

export default router;
