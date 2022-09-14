import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import './SearchBar.css'
// import { useSearchParams } from "react-router-dom";

const initialState = {
    term: '',
    location: '',
    categories: 'food',
    limit: 10
}

const SearchBar = ({restaurants, setRestaurants}) => {
    const [searchInput, setSearchInput] = useState(initialState);
    const [query, setQuery] = useState()


    const handleChange = (e) => {
        setSearchInput({
            ...searchInput,
            [e.target.name]: e.target.value,
        })
    }

    const handleSearch = (e) => {
        e.preventDefault();
        // console.log(restaurants)
        // axios.post('http://localhost:3001/api/restaurants', searchInput)
        //     .then(response => {
        //       setRestaurants(response.data)
        //       // setRestaurantList(response.data)              
        //     })
        //     .catch(error => console.log(error))

        setQuery({...searchInput})
    }

    useEffect(() => {
      const getRestaurantList = async () => {
        try {
          console.log(searchInput)
          const restaurantListAPI = await axios.post(`http://localhost:3001/api/restaurants`, searchInput)
          setRestaurants(restaurantListAPI.data)
          console.log(restaurantListAPI.data)
          // setPostLoading(false)
        } catch (err) {
          // console.error(err.message)
          // setPostLoading(false)
          // setPostError(true)
        }
      }
      getRestaurantList()
      // console.log(restaurants)
    }, [query]) // add correct dependency array []
    

    return (
        <div id="searchBar">
            <form>
                <input type="text" name="term" value={searchInput.term} placeholder="Search for restaurants" onChange={handleChange}/>
                <input type="text" name="location" value={searchInput.location} placeholder="City/State/Zip Code" onChange={handleChange} />
                <button onClick={handleSearch}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;