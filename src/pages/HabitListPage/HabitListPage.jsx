import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import * as habitAPI from '../../utilities/habits-api';
import HabitItem from "../../components/HabitItem/HabitItem";
import NewHabitForm from "../../components/NewHabitForm/NewHabitForm";

export default function HabitListPage({ user }) {
  const [habits, setHabits] = useState([]);
  // const categoryRef = useRef([]);
  let { id } = useParams();

  useEffect(function () {
    (async function () {
      const habits = await habitAPI.getAll();
      // categoryRef.current = [...new Set(habits.map(habit => habit.category))];
      setHabits(habits);
    })();
  }, []);

  // const handleDeleteHabit = async(evt) => {
  //   console.log(id);
  //   await habitAPI.deleteOne(id);
  //   setHabits(habits.filter(habit => habit._id !== id));
  // }


  return (
    <div>
      <h1>HabitListPage</h1>
      <hr />
      {/* If there are no habits, show a message, otherwise show all habits */}
      {habits.length ? (
        <ul>
          {habits.map((habit) => (
            <HabitItem habit={habit} key={habit._id} habits={habits} setHabits={setHabits} />
          ))}
        </ul>
      ) : (
        <h3>No habits yet, create one below</h3>
      )}
      <hr />
      <NewHabitForm user={user} habits={habits} setHabits={setHabits}/>
    </div>
  );
}
