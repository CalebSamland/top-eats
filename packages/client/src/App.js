import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import UserProfile from "./pages/UserProfile";
import { useProvideAuth } from "./hooks/useAuth";

function App() {
  const [restaurants, setRestaurants] = useState(null);
  // const [user, setUser] = useState(null);
  console.log(user);


  const {
    state: {user}
  } = useProvideAuth()
  
  return (
    <>
      <Routes>
          <Route eaxct path='/' element={ <HomePage user={user}  restaurants={restaurants} setRestaurants={setRestaurants} /> } />
          <Route exact path='/restaurant/:id' element={ <RestaurantPage restaurants={restaurants} setRestaurants={setRestaurants} /> } />
          <Route exact path='/signup' element={ <SignUpPage /> } />
          <Route exact path='/signin' element={ <SignInPage /> } />
      </Routes>
    </>
  );
}

export default App;
