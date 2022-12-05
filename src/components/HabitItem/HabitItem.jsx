import * as habitAPI from '../../utilities/habits-api';
import { useState, useEffect } from 'react';
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
            <button onClick={() =>  handleDeleteHabit(habit._id)}>X</button>
        </li> 
    );
}