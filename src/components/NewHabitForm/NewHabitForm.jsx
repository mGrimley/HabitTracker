import { useState } from 'react';
import * as habitsAPI from '../../utilities/habits-api';

export default function NewHabitForm({ user }) {
    const [newHabit, setNewHabit] = useState({
        description: '',
        frequency: 1,
        completed: false,
        user: null,
    });

    async function handleNewHabit(evt) {
        // evt.preventDefault();
        // // add the habit to the database
        // // clear the form
        // console.log('new habit:', newHabit);
        // // const newHabitData = await habitsAPI.create(newHabit);

        // setNewHabit({
        //     description: '',
        //     frequency: 1,
        //     completed: false,
        //     user: null,
        // });
        evt.preventDefault()
        try {
            const newHabitData = await habitsAPI.create(newHabit)
            setNewHabit({
                description: '',
                frequency: 1,
                completed: false,
                user: null,
            })
        } catch {
            console.log('error')
        }
    }

    function handleChange(evt) {
        setNewHabit({
            ...newHabit,
            [evt.target.name]: evt.target.value,
            user: user._id
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