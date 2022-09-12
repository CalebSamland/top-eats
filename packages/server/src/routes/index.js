import { Router } from 'express';
import Axios from 'axios';
import axios from 'axios';

const router = Router();

// All routes start with the API_URL (default '/api')

// Return restaurants that meet the search criteria for 'term' and 'location'
// term: user inputted string like 'deli', 'mexican', etc
// location: user inputted location 'buffalo NY', Texas, NYC
// categories: of businesses.  should be 'food'
// limit: should limit the number of returned restaurants. should be 10 for now.
router.post('/restaurants', async (req, res) => {
  
  // adding the bearer token to the request header 
  const config = {
    headers: {
      Authorization: "Bearer s8qRiEmnaVDeNMG73UiLzcMCoWHR3nqYDo5O01L9laLrfFW6_c277fixPBhxEG8NheadeBPgdAPOFoxsPSJSyv8lVyGT7NiGnXZfjxPzpKL5p8HTrIQHh7IGjNEbY3Yx"
    }    
  }

  try {
    const response = await axios.get(`https://api.yelp.com/v3/businesses/search?term=${req.query.term}&location=${req.query.location}&categories=${req.query.categories}&limit=${req.query.limit}`, config)
    let apiRes =  response.data.businesses
    res.send(apiRes)
  } catch (error) {
    console.log(error)
  }
})


export default router;