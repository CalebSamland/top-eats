import { useState, useEffect } from "react";
import { Card, Image } from "react-bootstrap";
import axios from "axios";
import { getFormattedDate } from "../../utils/formatDate";
import { ToastContainer } from "react-toastify";
const Review = ({ review }) => {
  // data should contain:
  // username, timestamp, textarea, photos, star rating 1-5
  const [username, setUsername] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const userID = review.author;
  const date = getFormattedDate(review.createdAt);
  const starsArray = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const getUsername = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/getUser/${userID}`
          // "http://18.223.97.130/api/restaurants" for the deployed server
        );
        setUsername(
          `${response.data.result.firstName} ${response.data.result.lastName}`
        );
      } catch (error) {
        console.log(error);
      }
    };
    const getRestaurantName = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/restaurant/${review.restaurantID}`
          // "http://18.223.97.130/api/restaurants" for the deployed server
        );
        setRestaurantName(response.data.name);
      } catch (error) {
        console.log(error);
      }
    };
    getUsername();
    getRestaurantName();
    setRating(review.rating);
  }, [review]);

  return (
    <>
      <Card style={{ margin: "20px auto" }}>
        <Card.Header>
          {username} | {date}
        </Card.Header>
        <Card.Body>
          <Card.Title>{restaurantName}</Card.Title>
          <Card.Text>
            Rating:{" "}
            <div
              className="star-rating"
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100px",
                marginBottom: "20px",
                marginTop: "-32px",
                marginLeft: "55px",
              }}
              required
            >
              {starsArray.map((star, idx) => {
                idx += 1;
                return (
                  <button
                    type="button"
                    key={idx}
                    className={idx <= rating ? "on" : "off"}
                  >
                    <div className="star">&#9733;</div>
                  </button>
                );
              })}
            </div>
          </Card.Text>
          <Card.Text>Review: {review.reviewBody}</Card.Text>
          {review.photos
            ? review.photos.map((photo, i) => {
                return (
                  <Image src={photo} key={i} style={{ height: "100px" }} />
                );
              })
            : ""}
        </Card.Body>
      </Card>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{
          marginRight: "-100px",
          padding: "20px",
          width: "375px",
          overflow: "hidden",
        }}
      />
    </>
  );
};

export default Review;
