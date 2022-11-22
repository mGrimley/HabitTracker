export default function HabbitItem({ habbit }) {
    
    return (
        <div>
            <h3>HabbitItem</h3>
            <ul>
                {/* <li><input type="checkbox" {habbit.completed ? checked : null }/></li> */}
                <li><input type="checkbox" checked={habbit.completed}/></li>
                <li>{habbit.description}</li>
                <li>{habbit.points}</li>
            </ul>
        </div>
    );
}