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

const initialState = {
  rating: 0,
  reviewBody: "",
  photos: [],
};

const ReviewForm = ({ user }) => {
  const starsArray = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [file, setFile] = useState();
  const [show, setShow] = useState(false);
  const [data, setData] = useState();

  console.log(user);

  const handleChange = (event) => {
    setFile(event.target.files);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);

    axios
      .post("http://localhost:3001/api/newReview", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        // setFile((response.data = [...file]));
        console.log(response.data);
        console.log(file);
        console.log("Uploaded Successfully");
      })
      .catch((error) => {
        console.log(error);
        console.log("Something went wrong...");
      });

    handleClose();

    // const getPhotos = async () => {
    //   try {
    //     const userUpload = await axios.get("http://localhost:3001/api/photos");
    //     setData(...file, userUpload.data);
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getPhotos();
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setData({
  //     ...data,
  //     rating: data.rating,
  //     reviewBody: data.reviewBody,
  //     photos: data.photos,
  //   });

  //   axios
  //     .put("/restaurant/reviews", {
  //       text: data.reviewBody,
  //     })
  //     .then(
  //       ({ data }) => {
  //         setData(initialState);
  //         console.log(data);
  //       },
  //       (error) => {
  //         console.log("axios error", error);
  //       }
  //     );
  //   console.log(data);
  //   console.log(user);
  // };

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
          {file > 0 ? (
            <div>
              <img src="istockphoto-184276818-612x612.jpeg" />
            </div>
          ) : null}
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
              <Form.Group controlId="image-url" onSubmit={handleUpload}>
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
                type="submit"
                style={{
                  display: "flex",
                  height: "30px",
                  width: "100px",
                  alignItems: "center",
                }}
                onClick={handleUpload}
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
