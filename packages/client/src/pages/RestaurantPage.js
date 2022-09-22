import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from "../components/Header/Header";
import RestaurantProfile from '../components/RestaurantProfile/RestaurantProfile';

const RestaurantPage = ( {restaurants, setRestaurants} ) => {

  const location = useLocation()
  const restaurant = location.state.restaurant
  console.log(restaurant)

  return (
    <>
      <Header />
      <RestaurantProfile restaurant={restaurant} />
      {/* Add reviews here */}
    </>
  )
}

export default RestaurantPage