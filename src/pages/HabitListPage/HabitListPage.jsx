import HabbitCategory from "../../components/HabbitCategory/HabbitCategory";

export default function HabitListPage({ user, setUser, habbits }) {
  return (
    <main>
      <h1>HabitListPage</h1>
      <HabbitCategory habbits={habbits} />
    </main>
  );
}