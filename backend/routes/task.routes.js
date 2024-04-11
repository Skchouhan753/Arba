const express = require('express');
const { TaskModel } = require('../model/task.model');
const TaskRouter = express.Router();


// Create a new task
TaskRouter.post('/create', async (req, res) => {
  try {
    const task = new TaskModel(req.body);
    await task.save();
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all tasks
TaskRouter.get('/', async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a task by ID
TaskRouter.get('/:id', async (req, res) => {
  try {
    const task = await TaskModel.findById(req.params.id);
    if (!task) {
      return res.status(200).json({ error: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a task
TaskRouter.patch('/:id', async (req, res) => {
  try {
    const task = await TaskModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(200).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a task
TaskRouter.delete('/:id', async (req, res) => {
  try {
    const task = await TaskModel.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(200).json({ error: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = {
  TaskRouter
};
