import Task from "../models/Task";


export const getTasks = async (req, res) => {
  const tasks = await await Task.find().lean();
  res.render("index", { tasks: tasks });
};
export const addTask = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
}
export const getTaskUpdate = async (req, res) => {
  try {
    const task = await Task.findById(req.params.uid).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log(error.message);
  }
}
export const setTaskEdit = async (req, res) => {
  const { uid } = req.params;
  await Task.findByIdAndUpdate(uid, req.body);
  res.redirect("/");
}
export const deleteTask = async (req, res) => {
  const { uid } = req.params;
  await Task.findByIdAndDelete(uid);
  res.redirect("/");
}

export const toggleDone = async (req, res) => {
  const { uid } = req.params;
  const task = await Task.findById(uid);

  task.done = !task.done;

  await task.save();

  res.redirect("/");
}