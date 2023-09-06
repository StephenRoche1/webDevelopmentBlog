const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: String,
  date: String,
  category: String,
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
