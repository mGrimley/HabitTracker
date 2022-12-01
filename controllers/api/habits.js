const Habit = require('../../models/habit');

module.exports = {
    index,
    create,
    delete: deleteOne,
    update,
}

async function index(req, res) {
    try {
        const habits = await Habit.find({user: req.user._id});
        console.log(habits);
        res.status(200).json(habits);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function create(req, res) {
    try {
        // req.body.user = req.user._id;
        console.log(req.body);
        const habit = await Habit.create(req.body);
        habit.save();
        res.status(201).json(habit);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function deleteOne(req, res) {
    try {
        const habit = await Habit.findByIdAndDelete(req.params.id);
        res.status(200).json(habit);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function update(req, res) {
    try {
        const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, {new: true});
        // await habit.save();
        res.status(200).json(habit);
    } catch (err) {
        res.status(400).json(err);
    }
}