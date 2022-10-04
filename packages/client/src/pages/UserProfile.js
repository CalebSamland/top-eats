import React, { useEffect, useState } from "react";
import { Container, Figure } from "react-bootstrap";
import Header from "../components/Header/Header";
import defaultAvatar from "../Images/defaultavatar.jpeg";
import Review from "../components/Review/Review";
import ReviewList from "../components/ReviewList/ReviewList";
import axios from "axios";

//Photo and review divs would be a map of the stored photos and reviews in user state. If user has no photos or reviews,
//either display 'No Photos' or 'No Reviews' OR we can create a link of some sort to add a photo or review.

//Need to still pull user data from state to add correct information to this page. For now, it is using simple mock data.

const UserProfile = ({ user, setUser }) => {
  const defaultImage = defaultAvatar;
  const userID = user.result._id;
  const {
    firstName,
    lastName,
    email,
    birthday,
    reviews,
    zip,
    profile_image,
  } = user.result;

  const [userData, setUserData] = useState({
    firstName,
    lastName,
    email,
    birthday,
    reviews,
    zip,
    profile_image,
  });

  return (
    <>
      <Header user={user} setUser={setUser} />
      <Container>
        <Figure
          className="bg-border-color rounded-circle overflow-hidden"
          style={{
            display: "flex",
            margin: "auto",
            height: "175px",
            width: "175px",
            marginTop: "20px",
          }}
        >
          <Figure.Image src={defaultImage} className="w-100 h-100" />
        </Figure>
        <div
          className="info"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>
            {userData.firstName} {userData.lastName}
          </h2>
          <h6>Email: {email}</h6>
          <h6>Reviews: {userReviews.length}</h6>
        </div>
        {/*<div
          className="photos"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h5 style={{ marginBottom: "20px" }}>
            <strong>Photos</strong>
          </h5>
          <Container
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "auto",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                height: "175px",
                width: "175px",
                border: "1px solid black",
                borderRadius: "10px",
              }}
            ></div>
            <div
              style={{
                height: "175px",
                width: "175px",
                border: "1px solid black",
                borderRadius: "10px",
              }}
            ></div>
            <div
              style={{
                height: "175px",
                width: "175px",
                border: "1px solid black",
                borderRadius: "10px",
              }}
            ></div>
            <div
              style={{
                height: "175px",
                width: "175px",
                border: "1px solid black",
                borderRadius: "10px",
              }}
            ></div>
            <div
              style={{
                height: "175px",
                width: "175px",
                border: "1px solid black",
                borderRadius: "10px",
              }}
            ></div>
            <div
              style={{
                height: "175px",
                width: "175px",
                border: "1px solid black",
                borderRadius: "10px",
              }}
            ></div>
            <div
              style={{
                height: "175px",
                width: "175px",
                border: "1px solid black",
                borderRadius: "10px",
              }}
            ></div>
            <div
              style={{
                height: "175px",
                width: "175px",
                border: "1px solid black",
                borderRadius: "10px",
              }}
            ></div>
          </Container>
        </div> */}
        <div
          className="reviews"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h5 style={{ marginBottom: "20px" }}>
            <strong>My Reviews</strong>
          </h5>
          <Container
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "auto",
              justifyContent: "center",
              gap: "20px",
              marginBottom: "100px",
            }}
          >
            {userData.reviews.length > 0 ? (
              userData.reviews.map((review) => <Review />)
            ) : (
              <h6>No Reviews</h6>
            )}
          </Container>
        </div>
      </Container>
    </>
  );
};

export default UserProfile;
