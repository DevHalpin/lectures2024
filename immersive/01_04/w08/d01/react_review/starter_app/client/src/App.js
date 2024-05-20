import './App.css';
import Modal from './components/Modal';

// fake data
// import parks  from './data/parks';

// components
import ParkList from './components/ParkList';

// custom hooks
import useApplicationData from './hooks/useApplicationData';


const App = () => {
  const {state, closeModal, setSelectedPark} = useApplicationData();


  return (
    <div className="App">
      <h2>React Review</h2>
      <ParkList parks={state.parks} setSelectedPark={setSelectedPark}/>

    { state.isModalOpen && (<Modal
      selectedParkId={state.selectedParkId}
      closeModal={closeModal}
      />)
    }
    </div>
  );
};

export default App;