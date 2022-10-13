import React, { useState, useEffect } from "react";
import { Card, Image, CloseButton, Modal, Button } from "react-bootstrap";
import axios from "axios";
import { getFormattedDate } from "../../utils/formatDate";
import { ToastContainer, toast } from "react-toastify";
const Review = ({ review }) => {
  // data should contain:
  // username, timestamp, textarea, photos, star rating 1-5
  const [username, setUsername] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const userID = review.author;
  const reviewID = review._id;
  const [currentUser, setCurrentUser] = useState("");
  const date = getFormattedDate(review.createdAt);
  const starsArray = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    const getUsername = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/getUser/${userID}`
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
        );
        setRestaurantName(response.data.name);
      } catch (error) {
        console.log(error);
      }
    };
    getUsername();
    getRestaurantName();
    setRating(review.rating);
  }, []);
  // console.log(userID);
  // console.log(reviewID);
  // const handleDelete = async () => {
  //   try {
  //     const response = await axios.delete(
  //       `http://localhost:3001/api/review/${reviewID}`
  //     );

  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <Card style={{ margin: "20px auto" }}>
        <Card.Header>
          {username} | {date}
          {/* {userID ? (
            <CloseButton
              style={{ display: "flex", float: "right" }}
              onClick={handleShow}
            />
          ) : (
            ""
          )}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete this review?
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="warning"
                onClick={handleClose}
                style={{
                  display: "flex",
                  height: "30px",
                  width: "100px",
                  alignItems: "center",
                }}
              >
                Cancel
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  handleDelete();
                  handleClose();
                }}
                style={{
                  display: "flex",
                  height: "30px",
                  width: "100px",
                  alignItems: "center",
                }}
              >
                Delete
              </Button>
            </Modal.Footer>
          </Modal> */}
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
