const mongoose = require('mongoose');

const habbitSchema = require('./HabbitSchema');

module.exports = mongoose.model('Habbit', habbitSchema);