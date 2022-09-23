import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from "../components/Header/Header";
import RestaurantProfile from '../components/RestaurantProfile/RestaurantProfile';
import ReviewList from '../components/ReviewList/ReviewList'

const RestaurantPage = ( {restaurants, setRestaurants} ) => {

  const location = useLocation()
  const restaurant = location.state.restaurant
  console.log(restaurant)

  const reviews = [
    {
      date: 'March 3, 2022',
      username: 'bobby',
      rating: 4,
      text: 'pretty good food',
      photos: ['https://thumbs.dreamstime.com/b/healthy-food-selection-healthy-food-selection-fruits-vegetables-seeds-superfood-cereals-gray-background-121936825.jpg']
    },
    {
    date: 'September 12, 2022',
    username: 'robby',
    rating: 1,
    text: 'pretty horrible food',
    photos: ['https://isitbadforyou.s3.amazonaws.com/uploads/article/pictures/949/big_is_burnt_food_bad_for_you.jpg']
  }
  ]

  return (
    <>
      <Header />
      <RestaurantProfile restaurant={restaurant} />
      <ReviewList reviews={reviews}/>
    </>
  )
}

export default RestaurantPage