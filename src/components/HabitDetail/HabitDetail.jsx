import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as habitAPI from '../../utilities/habits-api';
import { Link } from 'react-router-dom';

export default function HabitDetail({ user }) {
    // get habit by id
    // display habit details
    // display habit edit form
    // handle edit form submission
    // handle delete button click

    const [habit, setHabit] = useState(null);
    const [completed, setCompleted] = useState(false);
    const { id } = useParams();
    
    async function getHabit() {
        const habits = await habitAPI.getAll();
        const habit = habits.find((habit) => habit._id === id);
        setHabit(habit);
        setCompleted(habit.completed);
    }
    
    useEffect (function () {
        getHabit();
    }, [id]);
    
    

    async function handleUpdateHabit(evt) {
        evt.preventDefault();
        const updatedHabit = await habitAPI.update(habit);
        setHabit(updatedHabit);
    }

    function handleDeleteHabit() {
        habitAPI.deleteOne(habit._id);
    }

    function handleChange(evt) {
        setHabit({
            ...habit,
            [evt.target.name]: evt.target.value,
            user: user._id
        });
        console.log(evt.target.name, evt.target.value)
    }

    function handleCheckboxChange(evt) {
        // setCompleted(evt.target.checked);
        setHabit({
            ...habit,
            [evt.target.name]: evt.target.checked,
            user: user._id
        });
        console.log(evt.target.name, evt.target.checked)
    }

    return (
        <>
            <div>
                <h1>Habit Detail</h1>
                <hr />
                {habit ? (
                    <>
                        <form>
                            <label>Description</label>
                            <input
                                autoComplete='off'
                                type="text"
                                name="description"
                                value={habit.description}
                                onChange={handleChange}
                            />

                            <label>Frequency (Days)</label>
                            <input
                                autoComplete='off'
                                type="number"
                                name="frequency"
                                value={habit.frequency}
                                onChange={handleChange}
                            />

                            <label>Start Date</label>
                            <input
                                autoComplete='off'
                                type="date"
                                name="startDate"
                                value={habit.startDate}
                                onChange={handleChange}
                            />

                            <label>Completed</label>
                            <input
                                autoComplete='off'
                                type="checkbox"
                                name="completed"
                                value={habit.completed}
                                onChange={handleCheckboxChange}
                            />
                            <Link to='..'><button onClick={handleUpdateHabit}>[Update symbol]</button></Link>
                            <Link to='..'><button onClick={handleDeleteHabit}>[Trash Can]</button></Link>
                        </form>
                    </>
                ) : (
                    <h3>Loading...</h3>
                )}
            </div>
            <Link to='..'><button>Return</button></Link>
        </>
    )
}