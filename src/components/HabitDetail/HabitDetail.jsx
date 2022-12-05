export default function HabitDetail({ habit, user, habits, setHabits, newHabit, setNewHabit }) {

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
        user: user._
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
    )
}