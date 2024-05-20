import '../styles/ParkListItem.scss';

const ParkListItem = (props) => {
    const handleClick = () => {
        props.setSelectedPark(props.park.id);
        // props.openModal();
    }
    return (
        <div className="park-list-item" onClick={handleClick}>
            <h2 className="park-list-item--header">Name: {props.park.name} ({props.park.id})</h2>
            <div className="park-list-item--footer">
                <h3>Location: {props.park.location}</h3>
                <h3>Average Review: {props.park.averageReview}</h3>
            </div>
        </div>
    )
}

export default ParkListItem;