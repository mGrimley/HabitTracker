const Habit = require('../../models/Habit');

module.exports = {
    index,
    create,
    delete: deleteOne,
    update,
}

async function index(req, res) {
    try {
        const habits = await Habit.find({user: req.user._id}).sort({frequency: 1});
        // console.log(habits);
        res.status(200).json(habits);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function create(req, res) {
    try {
        console.log('req.body:', req.body);
        const habit = await Habit.create({...req.body, user: req.user});
        // console.log('habit:', habit);
        res.status(201).json(habit);
    } catch (err) {
        console.log(err)
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