import { Router } from "express";
import axios from "axios";

const router = Router();

// All routes start with the API_URL (default '/api')

// Return restaurants that meet the search criteria for 'term' and 'location'
// term: user inputted string like 'deli', 'mexican', etc
// location: user inputted location 'buffalo NY', Texas, NYC
// categories: of businesses.  should be 'food'
// limit: should limit the number of returned restaurants. should be 10 for now.
router.post("/restaurants", async (req, res) => {
  // adding the bearer token to the request header
  const config = {
    headers: {
      Authorization:
        "Bearer s8qRiEmnaVDeNMG73UiLzcMCoWHR3nqYDo5O01L9laLrfFW6_c277fixPBhxEG8NheadeBPgdAPOFoxsPSJSyv8lVyGT7NiGnXZfjxPzpKL5p8HTrIQHh7IGjNEbY3Yx",
    },
  };

  try {
    const searchInput = req.body;
    // console.log(searchInput)
    const response = await axios.get(
      `https://api.yelp.com/v3/businesses/search?term=${searchInput.term}&location=${searchInput.location}&categories=${searchInput.categories}&limit=${searchInput.limit}`,
      config
    );
    let apiRes = response.data.businesses;
    res.send(apiRes);
  } catch (error) {
    console.log(error);
  }
});

router.get("/restaurant/:id", async (req, res) => {
  const config = {
    headers: {
      Authorization:
        "Bearer s8qRiEmnaVDeNMG73UiLzcMCoWHR3nqYDo5O01L9laLrfFW6_c277fixPBhxEG8NheadeBPgdAPOFoxsPSJSyv8lVyGT7NiGnXZfjxPzpKL5p8HTrIQHh7IGjNEbY3Yx",
    },
  };

  const id = req.params.id;
  console.log("params:", req.params);
  try {
    // console.log(id)
    const response = await axios.get(
      `https://api.yelp.com/v3/businesses/${id}`,
      config
    );
    let apiRes = response.data;
    res.send(apiRes);
  } catch (error) {
    console.log(error);
  }
});

export default router;
