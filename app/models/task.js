const connection = require('../../dbConfig/connectionDB.config')();

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title:  String,
  author: String,
  bodyTask:   String,
  comments: [{ bodyComment: String, data: Date }],
  likes: Number,
  endDate: Date
});

const TaksModel = mongoose.model('TaskModel',taskSchema);

module.exports = TaksModel;