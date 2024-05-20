import ParkListItem from "./ParkListItem.jsx";

const ParkList = (props) => {
  console.log(props);

  const mappedParks = props.parks.map((park) => {
    return (
      <ParkListItem
        park={park}
        key={park.id}
        openModal={props.openModal}
        closeModal={props.closeModal}
        setSelectedPark={props.setSelectedPark}
      />
    );
  });

  return <div>{mappedParks}</div>;
};

export default ParkList;
