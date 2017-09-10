const connection = require('../../dbConfig/connectionDB.config')();

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String, 
    password: String, 
    admin: Boolean 
});

const UserModel = mongoose.model('userModel',userSchema);

module.exports = UserModel;