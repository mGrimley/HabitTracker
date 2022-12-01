const mongoose = require('mongoose');

const habitSchema = require('./HabitSchema');

module.exports = mongoose.model('Habit', habitSchema);