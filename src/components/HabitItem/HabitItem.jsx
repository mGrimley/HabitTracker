import * as habitAPI from '../../utilities/habits-api';
import { Link } from 'react-router-dom';
import Icon from '@mui/material/Icon';

export default function HabbitItem({ habit, habits, setHabits, setCategories }) {
    const handleDeleteHabit = async(evt) => {
        await habitAPI.deleteOne(habit.id);
        const newHabits = habits.filter((h) => h.id !== habit.id);
        setHabits(newHabits);
        setCategories([...new Set(newHabits.map((habit) => habit.category))]);
    }

    return (
        <li>
            <span>{habit.completed ? <Icon>check</Icon> : <Icon>close</Icon>} </span>
            <span>[{habit.nextDueDateFormatted}] </span>
            <span>{habit.description} </span>
            <Link to={`/habits/${habit._id}`}><button><Icon>edit</Icon></button></Link>
            <button onClick={() =>  handleDeleteHabit(habit._id)}><Icon>delete</Icon></button>
        </li>
    );
}
