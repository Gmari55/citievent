import { createContext, useState } from "react";
import { CITIESEVENTS } from "../components/citiesevents";


export const CitieseventsContext = createContext({
    // properties
    citiesevents: [],
    // methods
    add: () => null,
    clear: () => null
});

export const CitiesEventsProvider = ({ children }) => {

    const [citiesevents, setcities] = useState(CITIESEVENTS);

    const add = (item) => 
    {
        
        item.id=citiesevents.length+1;
        setcities([...citiesevents, item]);
        
    }
   
    const clear = () => setcities([]);
  

    const value = { citiesevents, add, clear};

    return <CitieseventsContext.Provider value={value}>{children}</CitieseventsContext.Provider>
}