import { useState, useEffect, useRef } from 'react';
import * as habitAPI from '../../utilities/habits-api';
import HabitItem from "../../components/HabitItem/HabitItem";
import NewHabitForm from "../../components/NewHabitForm/NewHabitForm";

export default function HabitListPage({ user }) {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState({
    description: '',
    frequency: 1,
    completed: false,
    user: null,
  });
  const [categories, setCategories] = useState([]);

  useEffect(function () {
    (async function () {
      const habits = await habitAPI.getAll();
      setHabits(habits);
      setCategories([...new Set(habits.map((habit) => habit.category))]);
    })();
  }, []);

  return (
    <div>
      <h1>HabitListPage</h1>
      <hr />
      {/* If there are no habits, show a message, otherwise show all habits */}
      {habits.length ? (
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <h3>{category}</h3>
              <ul>
                {habits.filter((habit) => habit.category === category).map((habit) => (
                    <HabitItem
                      habit={habit}
                      key={habit._id}
                      habits={habits}
                      setHabits={setHabits}
                      setCategories={setCategories}
                    />
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <h3>No habits yet, create one below</h3>
      )}
      <hr />
      <NewHabitForm
        user={user}
        habits={habits}
        setHabits={setHabits}
        newHabit={newHabit}
        setNewHabit={setNewHabit}
        setCategories={setCategories}
      />
    </div>
  );
}
