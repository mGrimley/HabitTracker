import * as habitsAPI from '../../utilities/habits-api';

export default function NewHabitForm({ user, habits, setHabits, newHabit, setNewHabit, setCategories }) {
    async function handleNewHabit(evt) {
        evt.preventDefault()
        try {
            const newHabitData = await habitsAPI.create(newHabit)
            // Add the new habit to it's position according to its frequency
            const newHabits = [...habits]
            for(let i = 0; i < newHabits.length; i++) {
                if(newHabits[i].frequency > newHabitData.frequency) {
                    newHabits.splice(i, 0, newHabitData)
                    break
                }
            }
            setHabits(newHabits)
            setCategories([...new Set(newHabits.map((habit) => habit.category))])
            setNewHabit({
                description: '',
                frequency: 1,
                completed: false,
                startDate: '',
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
                autoComplete='off'
                type="text"
                name="description"
                value={newHabit.description}
                onChange={handleChange}
            />

            <label>Frequency</label>
            <input
                autoComplete='off'
                type="number"
                name="frequency"
                value={newHabit.frequency}
                onChange={handleChange}
            />

            <label>Start Date</label>
            <input
                autoComplete='off'
                type="date"
                name="startDate"
                value={newHabit.startDate}
                onChange={handleChange}
            />

            <button type="submit">Add Habbit</button>
        </form>
    );
}