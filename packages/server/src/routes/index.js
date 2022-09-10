import { Router } from 'express';
import Axios from 'axios';
import axios from 'axios';

const router = Router();

// All routes start with the API_URL (default '/api')

// Return restaurants that meet the search criteria for 'term' 'location 'total'
// term: string like 'deli', 'mexican', etc
// location: 'buffalo NY', Texas, NYC
// total: 10, or whatever num of results you want
// limit: should limit the number of returned restaurants. Doesn't seem to be working
router.post('/restaurants', async (req, res) => {

  // There's an issue with the 'limit' params... never seems to work. Might have something to do with int vs string
  // req.query.limit = parseInt(req.query.limit)
  // console.log('query: ',req.query.limit)
  
  // adding the bearer token to the request header 
  const config = {
    headers: {
      Authorization: "Bearer s8qRiEmnaVDeNMG73UiLzcMCoWHR3nqYDo5O01L9laLrfFW6_c277fixPBhxEG8NheadeBPgdAPOFoxsPSJSyv8lVyGT7NiGnXZfjxPzpKL5p8HTrIQHh7IGjNEbY3Yx"
    }    
  }

  try {
    const response = await axios.get(`https://api.yelp.com/v3/businesses/search?term=${req.query.term}&location=${req.query.location}&categories=${req.query.categories}`, config)
    let apiRes =  response.data.businesses
    res.send(apiRes)
  } catch (error) {
    console.log(error)
  }
})


export default router;