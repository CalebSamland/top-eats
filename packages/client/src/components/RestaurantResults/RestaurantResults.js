import React from "react";
import { Container } from "react-bootstrap";
import RestaurantPreview from '../RestaurantPreview/RestaurantPreview'


const RestaurantResults = ({ restaurants }) => {
  return (
    <Container>
      { restaurants ? (
        restaurants.map((restaurant, i) => (
          <RestaurantPreview restaurant={restaurant} key={i} />
        )
      )) : ''
      }
    </Container>
  );
};

export default RestaurantResults;
