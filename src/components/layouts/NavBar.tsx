import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Fav icon_260px.png";

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="logo" style={{ height: "30px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link className="text-light" as={Link} to="/about-us">
              About Us
            </Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/terms-of-services">
              Terms of Services
            </Nav.Link>
            <Nav.Link
              className="text-light"
              as={Link}
              to="/comunity-guidelines"
            >
              Comunity Guidelines
            </Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/privacy-policy">
              Privacy Policy
            </Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/copyright-policy">
              Copyright Policy
            </Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/faq">
              FAQ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
