import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Form, Button, Col, Row, Container } from 'react-bootstrap'
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

    // useEffect(() => {
    //   const getRestaurantList = async () => {
    //     try {
    //       console.log(searchInput)
    //       const restaurantListAPI = await axios.post(`http://localhost:3001/api/restaurants`, searchInput)
    //       setRestaurants(restaurantListAPI.data)
    //       console.log(restaurantListAPI.data)
    //       // setPostLoading(false)
    //     } catch (err) {
    //       // console.error(err.message)
    //       // setPostLoading(false)
    //       // setPostError(true)
    //     }
    //   }
    //   getRestaurantList()
    //   // console.log(restaurants)
    // }, [query]) // add correct dependency array []
    

  return (
    <Form style={{margin: '20px'}}>
      <Row>
        <Col xs={5}> 
          <Form.Control type='text' name='term' placeholder="Food" value={searchInput.term} onChange={handleChange} />
        </Col>
        <Col xs={5}>
          <Form.Control type="text" name="location" value={searchInput.location} placeholder="Location" onChange={handleChange} />
        </Col>
        <Col xs={2} className='justify-content-center'>
          <Button style={{minWidth: '100%'}} variant='warning' onClick={handleSearch}>Search</Button>
        </Col> 
      </Row>
    </Form>
  )
}

export default SearchBar;