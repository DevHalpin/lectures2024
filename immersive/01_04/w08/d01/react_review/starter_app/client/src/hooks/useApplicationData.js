import { useState, useEffect } from 'react';

const useApplicationData = () => {
    const [state, setState] = useState({
        parks: [],
        isModalOpen: false,
        selectedParkId: null
    });
    
    useEffect(() => {
        fetch('/api/parks')
        .then((res) => res.json())
        .then((data) => {
            setState((prev) => ({
                ...prev,
                parks: data
            }));
        });
    }, []);

    // const openModal = () => {
    //     setState((prev) => ({
    //         ...prev,
    //         isModalOpen: true
    //     }));
    // }

    const closeModal = () => {
        setState((prev) => ({
            ...prev,
            isModalOpen: false
        }));
    }

    const setSelectedPark = (id) => {
        setState((prev) => ({
            ...prev,
            selectedParkId: id,
            isModalOpen: true
        }));
    }
    
    return {state, 
        // openModal, 
        closeModal, 
        setSelectedPark};
};

export default useApplicationData;

