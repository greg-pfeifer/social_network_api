

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/social_mongoose2');

module.exports = mongoose.connection;