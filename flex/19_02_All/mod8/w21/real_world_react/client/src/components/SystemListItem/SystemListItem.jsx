import "./SystemListItem.css";
import {Link} from 'react-router-dom';

const SystemListItem = (props) => {
    
    return (
        <li className="system-list-item">
            <Link to={`/products/${props.id}`}>
            <div>
                <img src={props.image} alt={props.name} />
            </div>
            <div>
                <p>{props.name}</p>
            </div>
            </Link>
            </li>
    );
};

export default SystemListItem;