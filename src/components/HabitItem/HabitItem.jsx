import * as habitAPI from '../../utilities/habits-api';
import { useState, useEffect } from 'react';

export default function HabbitItem({ habit, habits, setHabits, user, newHabit, setNewHabit }) {
    const handleDeleteHabit = async(evt) => {
        console.log(habit.id);
        await habitAPI.deleteOne(habit.id);
        const newHabits = habits.filter((h) => h.id !== habit.id);
        setHabits(newHabits);
    }

    const [updatedHabit, setUpdatedHabit] = useState({
        description: habit.description,
        frequency: habit.frequency,
        completed: habit.completed,
        user: habit.user,
    });

    // not quite right
    function handleChange(evt) {
        setUpdatedHabit({
            ...updatedHabit,
            [evt.target.name]: evt.target.value,
            user: user._id
        });
    }

    function handleUpdateHabit(evt) {
        evt.preventDefault();
        habitAPI.update(habit.id, newHabit);
        const newHabits = [...habits];
        setHabits(newHabits);
    }

    return (
        // return a form that lets the user edit the habit
        <li>
            <form onSubmit={handleUpdateHabit}>
                <input
                    type="text"
                    name="description"
                    value={habit.description}
                    onChange={handleChange}
                />
                <input

                    type="number"
                    name="frequency"
                    value={habit.frequency}
                    onChange={handleChange}
                />
                <input
                    type="checkbox"
                    name="completed"
                    value={habit.completed}
                    onChange={handleChange}
                />
                <button type="submit">Save</button>
            </form>
            <button onClick={handleDeleteHabit}>Delete</button>
        </li>
    );
}