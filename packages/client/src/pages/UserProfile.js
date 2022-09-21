import React, { useState } from "react";
import { Container, Figure } from "react-bootstrap";
import Header from "../components/Header/Header";
import defaultAvatar from "../Images/defaultavatar.jpeg";

//Photo and review divs would be a map of the stored photos and reviews in user state. If user has no photos or reviews,
//either display 'No Photos' or 'No Reviews' OR we can create a link of some sort to add a photo or review.

//Need to still pull user data from state to add correct information to this page. For now, it is using simple mock data.

const UserProfile = () => {
  const defaultImage = defaultAvatar;

  const [user, setUser] = useState({
    _id: "2399lkmfoq0485us",
    firstName: "Bob",
    lastName: "Smith",
    email: "bob.smith@earthlink.com",
    profile_image: "packages/client/public/defaultavatar.jpeg",
    photos: [],
    reviews: [],
    posts: [],
  });

  return (
    <>
      <Container>
        <Header />
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
          <p>Edit Profile Picture</p>
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <h6>{user.email}</h6>
          <h6>Reviews: {user.reviews.length}</h6>
          <h6>Posts: {user.posts.length}</h6>
        </div>
        <div
          className="photos"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h5>
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
              }}
            ></div>
            <div
              style={{
                height: "175px",
                width: "175px",
                border: "1px solid black",
              }}
            ></div>
            <div
              style={{
                height: "175px",
                width: "175px",
                border: "1px solid black",
              }}
            ></div>
            <div
              style={{
                height: "175px",
                width: "175px",
                border: "1px solid black",
              }}
            ></div>
            <div
              style={{
                height: "175px",
                width: "175px",
                border: "1px solid black",
              }}
            ></div>
            <div
              style={{
                height: "175px",
                width: "175px",
                border: "1px solid black",
              }}
            ></div>
            <div
              style={{
                height: "175px",
                width: "175px",
                border: "1px solid black",
              }}
            ></div>
            <div
              style={{
                height: "175px",
                width: "175px",
                border: "1px solid black",
              }}
            ></div>
            <div
              style={{
                height: "175px",
                width: "175px",
                border: "1px solid black",
              }}
            ></div>
          </Container>
        </div>
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
          <h5>
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
            <div
              style={{
                height: "125px",
                width: "80%",
                border: "1px solid black",
              }}
            ></div>
            <div
              style={{
                height: "125px",
                width: "80%",
                border: "1px solid black",
              }}
            ></div>
            <div
              style={{
                height: "125px",
                width: "80%",
                border: "1px solid black",
              }}
            ></div>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default UserProfile;