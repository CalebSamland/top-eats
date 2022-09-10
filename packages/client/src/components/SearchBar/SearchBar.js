import React from "react";
import { useState } from "react";
import axios from "axios";

const initialState = {
    searchTerm: '',
    location: '',
}

const SearchBar = ({setRestaurants}) => {
    const [searchInput, setSearchIput] = useState(initialState);

    const handleChange = (e) => {
        setSearchIput({
            ...searchInput,
            [e.target.name]: e.target.value,
        })
    }

    const handleSearch = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/restaurants', searchInput)
            .then(response => setRestaurants(response.data))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <form>
                <input type="text" name="searchTerm" value={searchInput.searchTerm} placeholder="Search for restaurants" onChange={handleChange}/>
                <input type="text" name="location" value={searchInput.location} placeholder="City/State/Zip Code" onChange={handleChange} />
                <button onClick={handleSearch}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;