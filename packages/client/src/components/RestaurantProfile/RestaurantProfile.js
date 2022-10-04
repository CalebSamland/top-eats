import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card } from "react-bootstrap";
import ReviewForm from "../ReviewForm/ReviewForm";
// import StarRating from "react-bootstrap-star-rating";

const RestaurantProfile = ({ restaurant, reviews, user }) => {
  // I still need to call the business details api. So I need to get the restaurant id and call that in the backend
  const id = restaurant.id;
  const [details, setDetails] = useState();
  const totalRating = reviews.map(review => review.rating).reduce((curr, acc) => curr + acc, 0);
  const averageRating = (totalRating / reviews.length).toFixed(1);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const restaurantDetails = await axios.get(
          `http://localhost:3001/api/restaurant/${id}`
        );
        setDetails(restaurantDetails.data);
        // console.log(restaurantListAPI.data)
        // setPostLoading(false)
      } catch (err) {
        // console.error(err.message
        // setPostLoading(false)
        // setPostError(true)
      }
    };
    getDetails();
    // console.log(restaurants)
  }, []); // add correct dependency array []

  return (
    <Container>
      {details ? (
        <Card>
          <Card.Body>
            <Card.Title>{details.name}</Card.Title>
            <Card.Subtitle>
              {details.location.display_address[0]},{" "}
              {details.location.display_address[1]}
            </Card.Subtitle>
            <Card.Text>Phone: {details.phone}</Card.Text>
            <Card.Text>
              {/* <StarRating
                defaultValue={5}
                min={0}
                max={5}
                step={0.5}
                style={{ height: "50px", width: "50px" }}
              /> */}
              Rating: {averageRating === "NaN" ? "No Rating": averageRating} / {reviews.length} reviews
            </Card.Text>

            {details.hours ? (
              <>
                <h2>Hours:</h2>
                <p>
                  {details.hours[0].open.map((day, i) => {
                    const days = [
                      "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ];
                    return (
                      <div key={i}>
                        {days[day.day]}: {day.start} to {day.end}
                      </div>
                    );
                  })}
                </p>
              </>
            ) : (
              ""
            )}
            <h3>Photos</h3>
            <p>
              {details.photos.map((photo, i) => {
                return (
                  <Card.Img
                    style={{ width: "300px", margin: "20px" }}
                    src={photo}
                    key={i}
                  />
                );
              })}
            </p>
          </Card.Body>
        </Card>
      ) : (
        ""
      )}
      <div>
        {user && <ReviewForm user={user} restaurant={restaurant} />}
      </div>
    </Container>
  );
};

export default RestaurantProfile;
