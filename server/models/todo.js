const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: {
        type: "String",
        required: true
    },
    description: {
        type: "String"
    }
});

module.exports = todo = mongoose.model('todo', TodoSchema);