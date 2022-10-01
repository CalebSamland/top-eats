import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import UserProfile from "./pages/UserProfile";
import {useLocalStorage} from "./hooks/useLocalStorage";

function App() {
  const [restaurants, setRestaurants] = useState(null);
  const [user, setUser] = useLocalStorage("user", null);

  return (
    <>
      <Routes>
          <Route exact path='/' element={ <HomePage user={user} setUser={setUser} restaurants={restaurants} setRestaurants={setRestaurants} /> } />
          <Route exact path='/restaurant/:id' element={ <RestaurantPage restaurants={restaurants} setRestaurants={setRestaurants} user={user} setUser={setUser}/> } />
          <Route exact path='/signup' element={ <SignUpPage setUser={setUser}/> } />
          <Route exact path='/signin' element={ <SignInPage setUser={setUser}/> } />
          <Route exact path='/userProfile' element={ <UserProfile user={user} setUser={setUser} /> } />
      </Routes>
    </>
  );
}

export default App;
