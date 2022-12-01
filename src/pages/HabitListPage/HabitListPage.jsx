import { useState, useEffect, useRef } from 'react';
import HabitItem from "../../components/HabitItem/HabitItem";
import NewHabitForm from "../../components/NewHabitForm/NewHabitForm";

export default function HabitListPage({ user }) {
  const [habits, setHabits] = useState([]);
  const categoriesRef = useRef([]);

  return (
    <div>
      <h1>HabitListPage</h1>
      <hr />
      {/* If there are no habits, show a message, otherwise show all habits */}
      {habits.length ? (
        <ul>
          {habits.map((habit) => (
            <HabitItem habit={habit} key={habit._id} />
          ))}
        </ul>
      ) : (
        <h3>No Habits Yet</h3>
      )}
      <hr />
      <NewHabitForm user={user}/>
    </div>
  );
}
