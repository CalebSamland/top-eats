import { Router } from "express";
import axios from "axios";
import User from "../models/users.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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

router.post("/signup", async (req, res) => {
    const {firstName, lastName, birthday, zip, email, password, confirmPassword} = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        if (password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match" });

        const passwordHash = await bcrypt.hash(password, 12);

        const result = await User.create({ firstName, lastName, birthday, zip, email, passwordHash });

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', {  expiresIn: "1h"});

        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: `${error}` });
    }
});

router.post("/signin", async (req, res) => {
    const {email, password} = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: "User doesn't exist" });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.passwordHash);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" });
        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: `${error}` });
    }
});

router.get("/getUsers", async (req, res) => {
    const result = await User.find({});
    res.status(200).json({ result });
})

export default router;
