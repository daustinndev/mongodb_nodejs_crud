import Task from "../models/Task";

export const getTasks = async (req, res) => {
  const tasks = await await Task.find().sort({ createdAt: -1 }).lean();
  res.render("index", { tasks: tasks });
};

export const getUserTasks = async (req, res) => {
  if (!req.params.username) {
    res.redirect("/");
  } else {
    try {
      const tasks = await Task.find({
        $or: [
          {
            // description: { $regex: ".*" + req.body.searsh + ".*" },
            username: { $regex: ".*" + req.params.username + ".*" },
          },
        ],
      }).lean();
      res.render("usersTasks", { tasks: tasks });
    } catch (error) {
      console.log(error);
    }
  }
};

export const addTask = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const getTaskUpdate = async (req, res) => {
  try {
    const task = await Task.findById(req.params.uid).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log(error.message);
  }
};

export const setTaskEdit = async (req, res) => {
  const { uid } = req.params;
  await Task.findByIdAndUpdate(uid, req.body);
  res.redirect("/");
};

export const deleteTask = async (req, res) => {
  const { uid } = req.params;
  try {
    await Task.findByIdAndDelete(uid);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const toggleDone = async (req, res) => {
  const { uid } = req.params;
  const task = await Task.findById(uid);

  task.done = !task.done;

  await task.save();
  res.json({ done: task.done });
};

export const searsh = async (req, res) => {
  if (!req.body.searsh) {
    res.redirect("/");
  } else {
    try {
      const tasks = await Task.find({
        $or: [
          {
            // description: { $regex: ".*" + req.body.searsh + ".*" },
            title: { $regex: ".*" + req.body.searsh + ".*" },
          },
        ],
      }).lean();
      res.render("searsh", { tasks: tasks });
    } catch (error) {
      console.log(error);
    }
  }

  // console.log(req.body.searsh)

  // res.send('Searsh')
};
