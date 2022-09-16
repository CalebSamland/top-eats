import React, { useState, useEffect } from 'react'
import axios from 'axios'

const RestaurantProfile = ( {restaurant} ) => {

  // I still need to call the business details api. So I need to get the restaurant id and call that in the backend 
  const id = restaurant.id
  const [details, setDetails] = useState()
  console.log(details)

  useEffect(() => {
    const getDetails = async () => {
      try {
        const restaurantDetails = await axios.get(`http://localhost:3001/api/restaurant/${id}`)
        setDetails(restaurantDetails.data)
        // console.log(restaurantListAPI.data)
        // setPostLoading(false)
      } catch (err) {
        // console.error(err.message
        // setPostLoading(false)
        // setPostError(true)
      }
    }
    getDetails()
    // console.log(restaurants)
  }, []) // add correct dependency array []

  return (
    <div>
      {details? (details.name) : ''}
    
    </div>

  )
}

export default RestaurantProfile