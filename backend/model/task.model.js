const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    dueDate: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    status: {
      type: String,
      enum: ["todo", "inprogress", "done"],
      default: "todo",
    },
  },
  {
    versionKey: false,
  }
);

const TaskModel = mongoose.model("Task", taskSchema);

module.exports = {
  TaskModel,
};
