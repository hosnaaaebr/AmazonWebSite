import { useState, useEffect } from "react";
import AmazonContext from "./AmazonContext";
import datas from "./datas";

const AmazonProvider = (props) => {
    // Responsible for opening and closing the sub container
    const [subContainer, setSubContainer] = useState(false);
    // Responsible for storing the subContainers entries
    const [subContainerEntries, setSubContainerEntries] = useState([]);
    // Responsible for holding all of the data that goes into the navbar
    const [entryStore, setEntryStore] = useState(null);
   
    useEffect(() => {
        const getData = async () => {
            try {
                // For local data:
                setEntryStore(datas);
            } catch (error) {
                console.error("Error getting data:", error);
            }
        };

        getData();
    }, []);

    const value = {
        subContainer,
        setSubContainer,
        subContainerEntries,
        setSubContainerEntries,
        entryStore,
        setEntryStore
    };

    return (
        <AmazonContext.Provider value={value}>
            {props.children}
        </AmazonContext.Provider>
    );
};

export default AmazonProvider;
