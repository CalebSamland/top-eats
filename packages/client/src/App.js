import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import UserProfile from "./pages/UserProfile";

function App() {
  const [restaurants, setRestaurants] = useState(null);
  const [user, setUser] = useState(false);

  return (
    <>
      {user ? (
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage
                restaurants={restaurants}
                setRestaurants={setRestaurants}
              />
            }
          />
          <Route
            exact
            path="/restaurant/:id"
            element={
              <RestaurantPage
                restaurants={restaurants}
                setRestaurants={setRestaurants}
              />
            }
          />
          <Route
            exact
            path="/user/:id"
            element={<UserProfile setUser={setUser} />}
          ></Route>
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/" element={<SignUpPage setUser={setUser} />} />
          <Route
            exact
            path="/signin"
            element={<SignInPage setUser={setUser} />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
