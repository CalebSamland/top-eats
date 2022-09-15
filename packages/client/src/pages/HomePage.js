import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import Header from "../components/Header/Header";
import RestaurantResults from "../components/RestaurantResults/RestaurantResults";
import { Container } from 'react-bootstrap'

const HomePage = () => {
  const [restaurants, setRestaurants] = useState([]);


  return (
    <Container fluid>
      <Header />
      <Container breakpoint='xl'>
        <SearchBar restaurants={restaurants} setRestaurants={setRestaurants}/>
        <RestaurantResults  restaurants={restaurants}/>
      </Container>
    </Container>
  );
};

export default HomePage;
