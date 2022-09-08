import React from "react";
import { useState } from "react";

const initialState = {
    searchTerm: '',
    location: '',
}

const SearchBar = () => {
    const [searchInput, setSearchIput] = useState(initialState);

    const handleChange = (e) => {
        setSearchIput({
            ...searchInput,
            [e.target.name]: e.target.value,
        })
    }

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchInput);
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