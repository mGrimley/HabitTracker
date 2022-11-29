import HabitItem from "../../components/HabitItem/HabitItem";
import NewHabitForm from "../../components/NewHabitForm/NewHabitForm";

export default function HabitListPage({ habits }) {

  return (
    <main>
      <h1>HabitListPage</h1>
      {/* If there are no habits, show a message, otherwise show all habits */}
      {habits ? (
        <ul>
          {habits.map((habit) => (
            <HabitItem habit={habit} key={habit._id} />
          ))}
        </ul>
      ) : (
        <h3>No Habits Yet</h3>
      )}
      <NewHabitForm />
    </main>
  );
}