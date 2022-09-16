import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import Header from "../components/Header/Header";
import RestaurantResults from "../components/RestaurantResults/RestaurantResults";
import { Container } from 'react-bootstrap'

const HomePage = ({restaurants, setRestaurants}) => {

  return (
    <>
      <Header />
      <Container style={{maxWidth: '1024px'}}>
        <SearchBar restaurants={restaurants} setRestaurants={setRestaurants}/>
        <RestaurantResults  restaurants={restaurants}/>
      </Container>
    </>
  );
};

export default HomePage;