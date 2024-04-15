const express = require('express');
const { CategoryModel } = require('../model/categoryModel');
const categoryRouter = express.Router();

// Create a new task
categoryRouter.post('/create', async (req, res) => {
  try {
    const category = new CategoryModel(req.body);
    await category.save();
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all tasks
categoryRouter.get('/', async (req, res) => {
  try {
    const category = await CategoryModel.find();
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a task by ID
categoryRouter.get('/:id', async (req, res) => {
  try {
    const category = await CategoryModel.findById(req.params.id);
    if (!category) {
      return res.status(200).json({ error: 'Task not found' });
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a task
categoryRouter.patch('/:id', async (req, res) => {
  try {
    const category = await CategoryModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!category) {
      return res.status(200).json({ error: 'Task not found' });
    }
    res.json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a task
categoryRouter.delete('/:id', async (req, res) => {
  try {
    const category= await CategoryModel.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(200).json({ error: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = {
  categoryRouter
};
