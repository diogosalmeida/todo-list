const connection = require('../../dbConfig/connectionDB.config')();

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  likes: Number,
  endDate: Date
});

const TaksModel = mongoose.model('TaskModel',taskSchema);

module.exports = TaksModel;