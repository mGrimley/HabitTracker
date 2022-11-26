import HabbitItem from "../../components/HabbitItem/HabbitItem";

export default function HabitListPage({ habbits }) {
  return (
    <main>
      <h1>HabitListPage</h1>
      {/* If there are no habbits, show a message, otherwise show all habbits */}
      {habbits ? (
        <ul>
          {habbits.map((habbit) => (
            <HabbitItem habbit={habbit} key={habbit._id} />
          ))}
        </ul>
      ) : (
        <h3>No Habits Yet</h3>
      )}
    </main>
  );
}