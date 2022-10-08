import React from "react";
import { useState } from "react";
import axios from "axios";
import { Form, Button, Col, Row } from 'react-bootstrap'
// import { useSearchParams } from "react-router-dom";

const initialState = {
    term: '',
    location: '',
    categories: 'food',
    limit: 10
}

const SearchBar = ({restaurants, setRestaurants}) => {
    const [searchInput, setSearchInput] = useState(initialState);

    const handleChange = (e) => {
        setSearchInput({
            ...searchInput,
            [e.target.name]: e.target.value,
        })
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const restaurantListAPI = await axios.post('http://localhost:3001/api/restaurants', searchInput);
            console.log(restaurantListAPI.data);
            setRestaurants(restaurantListAPI.data);
        }
        catch (error) {
            console.log(error);
        }

        
    }

  return (
    <Form style={{margin: '40px 0'}}>
      <Row style={{width: '100%'}}>
        <Col xs={5}> 
          <Form.Control size='lg' type='text' name='term' placeholder="Food" value={searchInput.term} onChange={handleChange} />
        </Col>
        <Col xs={5}>
          <Form.Control size='lg' type="text" name="location" value={searchInput.location} placeholder="Location" onChange={handleChange} />
        </Col>
        <Col xs={2} className='justify-content-center'>
          <Button as='div' style={{minWidth: '100%'}} type='submit' size='lg' variant='warning' onClick={handleSearch}>Search</Button>
        </Col> 
      </Row>
    </Form>
  )
}

export default SearchBar;