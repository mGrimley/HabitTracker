import { useState } from 'react';

export default function NewHabitForm({ addHabit }) {
    const [newHabit, setNewHabit] = useState({
        description: '',
        frequency: 0,
        completed: false,
        user: null,
    });

    function handleNewHabit(evt) {
        evt.preventDefault();
        addHabit(newHabit);
        setNewHabit({
            description: '',
            frequency: 0,
            completed: false,
            user: null,
        });
    }

    function handleChange(evt) {
        setNewHabit({
            ...newHabit,
            [evt.target.name]: evt.target.value,
        });
    }

    return (
        <form onSubmit={handleNewHabit}>
            <label>New Habbit</label>
            <input
                type="text"
                name="description"
                value={newHabit.description}
                onChange={handleChange}
            />

            <label>Frequency</label>
            <input
                type="number"
                name="frequency"
                value={newHabit.frequency}
                onChange={handleChange}
            />

            <button type="submit">Add Habbit</button>
        </form>
    );
}