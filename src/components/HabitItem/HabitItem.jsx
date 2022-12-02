import * as habitAPI from '../../utilities/habits-api';


export default function HabbitItem({ habit, habits, setHabits }) {
    const handleDeleteHabit = async(evt) => {
        console.log(habit.id);
        await habitAPI.deleteOne(habit.id);
        const newHabits = habits.filter((h) => h.id !== habit.id);
        setHabits(newHabits);
    }

    return (
        <li>
                {/* <span><input type="checkbox" checked={habit.completed}/></span> */}
                <span>{habit.description}</span>
                <span> ({habit.category}) </span>
                <button onClick={() =>  handleDeleteHabit(habit._id)}>X</button>
        </li>
    );
}