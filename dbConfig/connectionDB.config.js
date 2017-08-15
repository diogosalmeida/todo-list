module.exports = () => {
    const mongoose = require('mongoose');
          mongoose.connect('mongodb://diogo:123456@ds153637.mlab.com:53637/todo-list');
}