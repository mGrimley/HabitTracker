export default function HabbitItem({ habbit }) {
    
    return (
        <li>
            <h3>HabbitItem</h3>
            <ul>
                <li><input type="checkbox" checked={habbit.completed}/></li>
                <li>{habbit.description}</li>
            </ul>
        </li>
    );
}