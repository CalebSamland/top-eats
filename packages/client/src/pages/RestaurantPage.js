import React, { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Header from "../components/Header/Header";
import RestaurantProfile from '../components/RestaurantProfile/RestaurantProfile';
import ReviewList from '../components/ReviewList/ReviewList'
import axios from 'axios';

const RestaurantPage = ( {restaurants, setRestaurants, user, setUser} ) => {
  const [reviews, setReviews] = useState([]);

  const location = useLocation()
  const restaurant = location.state.restaurant

  useEffect(() => {
    const getReviews = async() => {
        try {
            const response = await axios.get(`http://localhost:3001/api/restaurantReviews/${restaurant.id}`);
            console.log(response)
            setReviews(...reviews, response.data);
        } catch (error) {
            console.log(error);
        }
    }
    getReviews();
  }, [])

  return (
    <>
      <Header user={user} setUser={setUser}/>
      <RestaurantProfile restaurant={restaurant} reviews={reviews}/>
      <ReviewList reviews={reviews}/>
    </>
  )
}

export default RestaurantPage