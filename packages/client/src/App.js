import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';



function App() {

  const [restaurants, setRestaurants] = useState(null)


  return (
      <Routes>
        <Route exact path='/' element={ <HomePage restaurants={restaurants} setRestaurants={setRestaurants} /> } />
        <Route exact path='/restaurant/:id' element={ <RestaurantPage restaurants={restaurants} setRestaurants={setRestaurants} /> } />
      </Routes>

  );
}

export default App;
