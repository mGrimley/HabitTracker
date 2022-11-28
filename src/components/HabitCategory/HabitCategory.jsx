import HabbitItem from "../HabitItem/HabitItem";

export default function HabbitCategory({ habbits }) {
    return (
        <div>
            <h3>HabbitCategory</h3>
            {habbits.map((habbit) => (
                <HabbitItem key={habbit._id} habbit={habbit} />
            ))}
        </div>
    );
}