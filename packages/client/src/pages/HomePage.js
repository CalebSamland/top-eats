import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import Header from "../components/Header/Header";
import RestaurantResults from "../components/RestaurantResults/RestaurantResults";
import { Container } from 'react-bootstrap'

const HomePage = ({restaurants, setRestaurants, setUser}) => {

  return (
    <>
      <Header setUser={setUser}/>
      <Container style={{maxWidth: '1024px'}}>
        <SearchBar restaurants={restaurants} setRestaurants={setRestaurants}/>
        <RestaurantResults  restaurants={restaurants}/>
      </Container>
    </>
  );
};

export default HomePage;