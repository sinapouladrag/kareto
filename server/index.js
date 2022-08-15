const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
const http = require("http");
var cors = require("cors");
const { text } = require("express");

app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/karetomongodb")
  .then(() => console.log("connected DB"))
  .catch((err) => console.log("not connected DB"));

app.listen(9000, () => console.log("port9000"));

// todo
const todoSchema = new mongoose.Schema({
  id: Number,
  textTop: String,
  textBottom: String,
  checked: Boolean,
  date: String,
  alarm: Boolean,
  star: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

// project
const projectSchema = new mongoose.Schema({
  id: Number,
  projectTitle: String,
  data: [todoSchema],
});

const Project = mongoose.model("Project", projectSchema);

// note
const noteSchema = new mongoose.Schema({
  id: Number,
  taskText: String,
  date: String,
});

const Note = mongoose.model("Note", noteSchema);

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    id: Number,
    email: String,
    password: String,
    todo: [todoSchema],
    project: [projectSchema],
    note: [noteSchema],
  })
);

// Register

async function createUser(email, password, todos, projects, notes) {
  const user = new User({
    email,
    password,
    todo: todos,
    project: projects,
    note: notes,
  });
  const result = await user.save();
}

app.post("/api/register", async (req, res) => {
  const user = req.body;
  if (user) {
    const users = await User.findOne({ email: req.body.email });
    if (users == null) {
      createUser(req.body.email, req.body.password);
      return res.json({
        data: user,
        message: "Ok",
      });
    } else {
      return res.json({
        data: user,
        message: "email is available",
      });
    }
  }
});

// Login
app.post("/api/login", async (req, res) => {
  const user = req.body;
  if (user) {
    const users = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (users == null) {
      return res.json({
        data: user,
        message: "Not Availible",
      });
    } else {
      return res.json({
        data: user,
        message: "Availible",
      });
    }
  }
});

// add todo
app.post("/api/todo/add", async (req, res) => {
  addTodo(
    req.body.email,
    new Todo({
      id: req.body.id,
      textTop: req.body.textTop,
      textBottom: req.body.textBottom,
      alarm: req.body.alarm,
      star: req.body.star,
      date: req.body.date,
      checked: false,
    })
  );
});

async function addTodo(
  email,
  id,
  textTop,
  textBottom,
  date,
  alarm,
  checked,
  star
) {
  const user = await User.findOne({ email: email });
  user.todo.push(id);
  await user.save();
}

//get todo
app.post("/api/todo/get", async (req, res) => {
  if (req.body.email) {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.json({
        data: user.todo,
        message: "Ok",
      });
    }
  }
});

// deleted todo
app.post("/api/todo/deleted", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const item = user.todo.find((t) => t.id == req.body.id);
  item.remove();
  await user.save();
});

// tick todo
app.post("/api/todo/tick", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const item = user.todo.find((t) => t.id == req.body.id);
  item.checked = !item.checked;
  await user.save();
});

// add note
app.post("/api/note/add", async (req, res) => {
  const note = addNote(
    req.body.email,
    new Note({
      id: req.body.id,
      taskText: req.body.taskText,
      date: req.body.date,
    })
  );
});

async function addNote(email, id, taskText, date) {
  const user = await User.findOne({ email: email });
  user.note.push(id);
  await user.save();
}

//get note
app.post("/api/note/get", async (req, res) => {
  if (req.body.email) {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.json({
        data: user.note,
        message: "Ok",
      });
    }
  }
});

// deleted note
app.post("/api/note/deleted", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const item = user.note.find((t) => t.id == req.body.id);
  item.remove();
  await user.save();
});

// create project
app.post("/api/project/add", async (req, res) => {
  addProject(
    req.body.email,
    new Project({
      id: req.body.id,
      projectTitle: req.body.projectTitle,
      data: req.body.data,
    })
  );
});

async function addProject(email, id, projectTitle, data) {
  const user = await User.findOne({ email: email });
  user.project.push(id);
  await user.save();
}

// get project
app.post("/api/project/get", async (req, res) => {
  if (req.body.email) {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.json({
        data: user.project,
        message: "Ok",
      });
    }
  }
});
// deleted project
app.post("/api/project/deleted", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const item = user.project.find((p) => p.id == req.body.id);
  item.remove();
  await user.save();
});

// add to do project
async function addTaskProject(
  email,
  projectid,
  id,
  textTop,
  textBottom,
  checked,
  star,
  date,
  alarm
) {
  const user = await User.findOne({ email: email });
  if (user) {
    const project = user.project.find((p) => p.id == projectid);
    if (project) {
      project.data.push(id);
      await user.save();
    }
  }
}
app.post("/api/project/task/add", async (req, res) => {
  addTaskProject(
    req.body.email,
    req.body.projectid,
    new Todo({
      id: req.body.id,
      textTop: req.body.textTop,
      textBottom: req.body.textBottom,
      checked: req.body.checked,
      star: req.body.star,
      date: req.body.date,
      alarm: req.body.alarm,
    })
  );
});
// deleted to do project
app.post("/api/project/task/deleted", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const item = user.project.find((p) => p.id == req.body.projectId);
  item.data.find((t) => t.id == req.body.id).remove();
  await user.save();
});
// cheched to do project
app.post("/api/project/task/checked", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const item = user.project.find((p) => p.id == req.body.projectId);
  const change = item.data.find((t) => t.id == req.body.id);
  change.checked = !change.checked;
  await user.save();
});

// const userRouter = require("./routes/users");
// const noteRouter = require("./routes/notes");
// const todoRouter = require("./routes/todo");

// app.use("/api/users", userRouter);
// app.use("/api/note", noteRouter);
// app.use("/api/todo", todoRouter);
