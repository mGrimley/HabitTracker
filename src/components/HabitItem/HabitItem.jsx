import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import * as habitAPI from '../../utilities/habits-api';


export default function HabbitItem({ habit, habits, setHabits }) {
    let { id } = useParams();

    const handleDeleteHabit = async(evt) => {
        console.log(id);
        await habitAPI.deleteOne(id);
        // setHabits(habits.filter(habit => habit._id !== id));
    }

    return (
        <li>
                {/* <span><input type="checkbox" checked={habit.completed}/></span> */}
                <span>{habit.description}</span>
                <span> ({habit.category}) </span>
                <button onClick={() =>  handleDeleteHabit(habit.id)}>X</button>
                {/* <Link to={`/delete/${habit._id}`}>X</Link> */}
        </li>
    );
}