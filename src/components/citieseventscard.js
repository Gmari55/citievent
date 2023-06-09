import { FavoriteseventsContext } from '../contexts/favoritesevents.context';
import './citieseventscard.css'
import { useContext } from "react";

export function Citieseventscard(props) {
    const { add } = useContext(FavoriteseventsContext);
  
    const handleClick = () => {
      add(props);
    };
  
    return (
      <div onClick={handleClick} className="CitiesCard">
        <p>Title: {props.title}</p>
        <p>Description: {props.description}</p>
      </div>
    );
  }
  
