import { createContext, useContext, useEffect, useState } from "react";

export const SystemsContext = createContext();

const useFetchSystemsData = () => {
    const [systems, setSystems] = useState([]);

    useEffect(() => {
        fetch(`/api/products`)
        .then((res) => {
            if (!res.ok) {
                return { success: false, message: "Failed to fetch systems data" };
            }
            return res.json();
        })
        .then((dataObject) => {
            setSystems(dataObject.data);
        });
    }, []);

    return { systems };
}

export const useSystems = () => {
    return useContext(SystemsContext)
}

export const SystemsProvider = (props) => {
    const { systems } = useFetchSystemsData();

    return (
        <SystemsContext.Provider value={systems}>
            {props.children}
        </SystemsContext.Provider>
    )
}