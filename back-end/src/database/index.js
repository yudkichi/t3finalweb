const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/dbteste2', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;