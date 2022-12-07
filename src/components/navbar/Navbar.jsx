import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./navbar.css"

const NavbarComponent = () => {

  const { cartTotalQuantity } = useSelector(state => state.cart);
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="company_logo">Tamu <span>Foods</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toogle-btn"/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mx-auto">
            <Nav.Link href="/" className="navigation__item">Home</Nav.Link>
            <Nav.Link href="/menu" className="navigation__item">Menu</Nav.Link>
            <Nav.Link href="/coming-soon" className="navigation__item">Restaurants</Nav.Link>
            <Nav.Link href="/coming-soon" className="navigation__item">Contact Us</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="/cart" className="navigation__item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <sup className="cart-quantity">{cartTotalQuantity}</sup>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
