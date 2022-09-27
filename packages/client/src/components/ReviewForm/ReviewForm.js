import React, { useState } from "react";
import {
  Button,
  Container,
  FloatingLabel,
  FormControl,
  Card,
} from "react-bootstrap";
import "../ReviewForm/ReviewForm.css";

const ReviewForm = () => {
  const starsArray = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <Container>
      <Card style={{ padding: "25px", marginTop: "30px" }}>
        <Card.Title style={{ fontSize: "24px" }}>Write a Review</Card.Title>
        <Card.Body style={{ marginLeft: "-15px" }}>
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
            ></FormControl>
          </FloatingLabel>
          <Button
            variant="info"
            style={{
              width: "125px",
              height: "40px",
              fontSize: "14px",
              marginTop: "10px",
            }}
          >
            Add Photos
          </Button>
          <Button
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
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ReviewForm;
