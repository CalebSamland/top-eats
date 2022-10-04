import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  FloatingLabel,
  FormControl,
  Card,
  Form,
} from "react-bootstrap";
import "../ReviewForm/ReviewForm.css";
import axios from "axios";

const ReviewForm = ({ restaurant, user }) => {
  const starsArray = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

// Code copied from snippets

const [reviews, setReviews] = useState(null)

  const initialState = {
    userID: user.result._id,
    text: '',
    rating: null, // needs to be fixed 
    restaurantID: restaurant.id
  }

  const [reviewData, setReviewData] = useState(initialState)

  const handleInputChange = (event) => {
    setReviewData({
      ...reviewData,
      [event.target.name]: event.target.value,
    })
  }

  const handleReviewSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()
    // if (form.checkValidity() === false) {
    //   toast.error('Post text is required');
    //   setValidated(true)
    //   return
    console.log(rating)
    setReviewData({
      ...reviewData,
      [rating]: rating
      // rating: rating
      // isSubmitting: true,
      // errorMessage: null,
    })
    // }
    console.log(reviewData)
    console.log(rating)

    axios
      .post('http://localhost:3001/api/newReview', reviewData)
      // .then(
      //   (res) => {
      //     setReviewData(initialState)
      //     setReviews((reviews) => [
      //       {
      //         ...res.data,
      //         // author: {
      //         //   username: user.username,
      //         //   profile_image: user.profile_image,
      //         // },
      //       },
      //       ...reviews,
      //     ])
      //     // setValidated(false)
      //   },
      //   (error) => {
      //     console.log(error)
      //     setReviewData({
      //       ...reviewData,
      //       // isSubmitting: false,
      //       // errorMessage: error.message,
      //     })
      //   }
      // )
  }

  // useEffect(() => {
  //   const getReviews = async () => {
  //     try {
  //       console.log(reviewData)
  //       const allReviews = await axios.post(`/restaurantReviews/${restaurant.id}`)
  //       // setPosts(allPosts.data)
  //       // setPostLoading(false)
  //     } catch (err) {
  //       console.error(err.message)
  //       // setPostLoading(false)
  //       // setPostError(true)
  //     }
  //   }
  //   getReviews()
  // }, [])
 // end code copied from snippets

 useEffect(() => {
  const getRating = async () => {
    console.log(rating)
    try {
      setReviewData({
        ...reviewData,
        rating: rating
      })
    } catch (err) {
      console.error(err.message)
    }
  }
  getRating()
 }, [rating])

  return (
    <Container>
      <Card style={{ padding: "25px", marginTop: "30px" }}>
        <Card.Title style={{ fontSize: "24px" }}>Write a Review</Card.Title>
        <Card.Body style={{ marginLeft: "-15px" }}>

          <Form
            onSubmit={handleReviewSubmit}
          >
          <div
            className="star-rating"
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100px",
              marginBottom: "20px",
              marginTop: "-30px",
            }}
            >
            {starsArray.map((star, idx) => {
              idx += 1;
              return (
                <button
                type="button"
                key={idx}
                className={idx <= ((rating && hover) || hover) ? "on" : "off"}
                onClick={() => setRating(idx)}
                onMouseEnter={() => setHover(idx)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setRating(0);
                  setHover(0);
                }}
                >
                  <div className="star">&#9733;</div>
                </button>
              );
            })}
          </div>
          <FloatingLabel label="Your Review Here">
            <FormControl
              as="textarea"
              placeholder="Your review here."
              style={{ height: "150px" }}
              name='text'
              value={reviewData.text}
              onChange={handleInputChange}
              ></FormControl>
          </FloatingLabel>
          {/* <Button
            variant="info"
            style={{
              width: "125px",
              height: "40px",
              fontSize: "14px",
              marginTop: "10px",
            }}
            >
            Add Photos
          </Button> */}
          <Button
            type='submit'
            variant="success"
            style={{
              width: "125px",
              height: "40px",
              fontSize: "14px",
              marginTop: "10px",
              float: "right",
            }}
            >
            Submit
          </Button>
            </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ReviewForm;
