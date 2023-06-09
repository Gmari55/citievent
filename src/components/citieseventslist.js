import { useContext } from "react";
import { Citieseventscard } from "./citieseventscard";
import { CitieseventsContext } from "../contexts/citiesevents.context";

export function Citieseventslist(props) {


    const { citiesevents, clear } = useContext(CitieseventsContext);

    return (
        <>
            <h2>User List</h2>
            <div>
                {citiesevents.map(u => <Citieseventscard key={u.id} {...u} />)}
            </div>
            <button onClick={clear}>Clear All</button>
        </>
    );
}