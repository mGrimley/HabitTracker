import * as habitAPI from '../../utilities/habits-api';
import { Link } from 'react-router-dom';

export default function HabbitItem({ habit, habits, setHabits, setCategories }) {
    const handleDeleteHabit = async(evt) => {
        console.log(habit.id);
        await habitAPI.deleteOne(habit.id);
        const newHabits = habits.filter((h) => h.id !== habit.id);
        setHabits(newHabits);
        setCategories([...new Set(newHabits.map((habit) => habit.category))]);
    }

    return (
        <li>
            <span>{habit.description}</span>
            <Link to={`/habits/${habit._id}`}><button>[Edit Symbol]</button></Link>
            <button onClick={() =>  handleDeleteHabit(habit._id)}>[Trash Can]</button>
        </li>
    );
}