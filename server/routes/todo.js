const express = require("express");
const router = express.Router();

const {
    getAllTodo,
    postCreateTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todo');

router.get("/", getAllTodo);


router.post("/", postCreateTodo);


router.put("/:id", updateTodo);


router.delete("/:id", deleteTodo);

module.exports = router;