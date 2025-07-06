const mongoose = require('mongoose');

const url = "mongodb://localhost:27017"


mongoose.connect(url)

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
