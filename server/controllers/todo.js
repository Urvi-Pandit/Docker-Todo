const Todo = require('../models/todo');

exports.getAllTodo = (req, res) => {
    Todo.find()
    .then((todo) => res.json(todo))
    .catch((err) => res.status(404).json({message: "Todo not found", error: err.message}));
};

exports.postCreateTodo = (req, res) => {
    Todo.create(req.body)
    .then((data) => res.json({message: "Todo added successfully", data}))
    .catch((err) => res.status(400).json({ message: "Failed to add todo", error: err.message }));
};

exports.updateTodo = (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.json({message: "Todo updated successfully", data}))
    .catch((err) => res.status(400).json({message: "Failed to update todo", err}));
};

exports.deleteTodo = (req, res) => {
    Todo.findByIdAndRemove(req.params.id, req.body)
    .then((data) => res.json({message: "Todo deleted successfully", data}))
    .catch((err) => res.status(404).json({ message: "Todo not found", error: err.message }));
};