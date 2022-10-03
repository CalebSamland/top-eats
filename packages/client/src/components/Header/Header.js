import React from "react";
import {
  Container,
  Image,
  Navbar,
  Nav,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import defaultAvatar from "../../Images/defaultavatar.jpeg";

const Header = ({ user, setUser }) => {
  // const [user, setUser] = useState(
  //   {
  //     firstName: 'Bob',
  //     lastName: 'Smith',
  //     userName: 'bobster'
  //   })
  
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    navigate("/");
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
            <Image />
            <Nav.Link as={Link} to="/userProfile">User Profile</Nav.Link>
          </Nav>
        ) : (
          <Nav>
            <Nav.Link as={Link} to={`/signin`}>
              Sign In
            </Nav.Link>
            <Nav.Link as={Link} to={`/signup`}>
              Sign Up
            </Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
