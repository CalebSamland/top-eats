import React, { useState } from "react";
import {
  Button,
  Container,
  Image,
  Navbar,
  Nav,
  Row,
  Col,
  Figure,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import UserProfile from "../../pages/UserProfile";
import defaultAvatar from "../../Images/defaultavatar.jpeg";

const Header = () => {
  const defaultImage = defaultAvatar;

  const [user, setUser] = useState({
    firstName: "Bob",
    lastName: "Smith",
    userName: "bobster",
  });

  const logout = () => {
    setUser(null);
  };

  return (
    <Navbar bg="secondary" variant="dark">
      <Container fluid="lg" style={{ maxWidth: "1024px" }}>
        <Navbar.Brand as={Link} to="/">
          Top Eats
        </Navbar.Brand>
        {user ? (
          <Nav className="justify-content-end">
            <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
            <Nav.Link
              className="d-flex align-items-end"
              as={Link}
              to={`/user/${user.firstName}`}
            >
              <Figure
                className="bg-border-color rounded-circle overflow-hidden"
                style={{
                  height: "25px",
                  width: "25px",
                  margin: "auto",
                }}
              >
                <Figure.Image src={defaultImage} className="w-100 h-100" />
              </Figure>
            </Nav.Link>
            <Image />
          </Nav>
        ) : (
          <Nav>
            <Nav.Link>Login</Nav.Link>
            <Nav.Link>Sign Up</Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
