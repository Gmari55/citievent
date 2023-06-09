import './App.css';
import { Citieseventslist } from './components/citieseventslist';
import { CITIESEVENTS } from './components/citiesevents';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './components/menu';
import { Addcitiesevents } from './components/addcitiesevents';
import { useContext } from "react";
import { FavoriteseventsContext } from './contexts/favoritesevents.context';

function App() {
  
  const { favoriteseventscount } = useContext(FavoriteseventsContext);

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <h1>Favorite events count: {favoriteseventscount}</h1>
          <Menu/>
        </header>

        <Routes>
          <Route path="cities" element={<Citieseventslist cities={CITIESEVENTS} />} />
          <Route path="add-citi" element={<Addcitiesevents />} />
          <Route path="*" element={<h1>Page Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
