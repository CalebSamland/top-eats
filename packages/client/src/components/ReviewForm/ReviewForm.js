import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Container,
  FloatingLabel,
  FormControl,
  Card,
  Modal,
  Form,
  InputGroup,
} from "react-bootstrap";
import "../ReviewForm/ReviewForm.css";

const ReviewForm = ({user}) => {
  const starsArray = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [file, setFile] = useState(null);
  const [show, setShow] = useState(false);

  console.log(user)

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);

    const options = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post("/user/fileUpload", formData, options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    handleClose();
  };

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);
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
            onClick={() => handleOpen()}
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
          <Modal show={show} onHide={handleClose}>
            <Modal.Header className="text-black">
              <Modal.Title>Upload photos</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-black">
              <Form.Group controlId="image-url">
                <Form.Label>Image URL</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="file"
                    name="image-URL"
                    placeholder="Image URL"
                    onChange={handleChange}
                  />
                </InputGroup>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="success"
                onClick={handleUpload}
                style={{
                  display: "flex",
                  height: "30px",
                  width: "100px",
                  alignItems: "center",
                }}
              >
                Upload
              </Button>
              <Button
                variant="danger"
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
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ReviewForm;
