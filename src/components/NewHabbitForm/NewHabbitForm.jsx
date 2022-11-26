import useState from 'react';

export default function NewHabbitForm({ addHabbit }) {
    const [newHabbit, setNewHabbit] = useState({
        description: '',
        frequency: 0,
        completed: false,
        points: 0,
        user: null,
    });

    function handleNewHabbit(evt) {
        evt.preventDefault();
        addHabbit(newHabbit);
        setNewHabbit({
            description: '',
            frequency: 0,
            completed: false,
            points: 0,
            user: null,
        });
    }
}