import React, { createContext, useState } from "react";

export const FavoriteseventsContext = createContext({
  // properties
  favoritesevents: [],
  favoriteseventscount: 0,
  // methods
  add: () => null,
 
});

export const FavoriteseventsProvider = ({ children }) => {
  const [favoritesevents, setFavoritesevents] = useState([]);
  const [favoriteseventscount, setFavoriteseventscount] = useState(0);

  const add = (item) => {
    if (!favoritesevents.some((event) => event.id === item.id)) {
        setFavoritesevents( [...favoritesevents, item]);
        setFavoriteseventscount(prevCount => prevCount + 1);
      }
      
      
    console.log(favoritesevents);
  };

  const value = { favoritesevents, favoriteseventscount, add };

  return (
    <FavoriteseventsContext.Provider value={value}>
      {children}
    </FavoriteseventsContext.Provider>
  );
};
