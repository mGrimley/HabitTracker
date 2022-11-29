const Habit = require('../../models/habit');

module.exports = {
    index,
    create,
    delete: deleteOne,
    update,
}

async function index(req, res) {
    const habits = await Habit.find({});
    res.status(200).json(habits);
}

async function create(req, res) {
    const habit = await Habit.create(req.body);
    res.status(201).json(habit);
}

async function deleteOne(req, res) {
    const deletedHabit = await Habit.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedHabit);
}

async function update(req, res) {
    const updatedHabit = await Habit.findByIdAndUpdate
    (req.params.id, req.body , {new: true});
    res.status(200).json(updatedHabit);
}