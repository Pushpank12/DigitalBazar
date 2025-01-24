import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import dbLogo from "./icons/dbLogo.svg";
function NavbarRB() {
  return (
    <React.Fragment>
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        className="bg-body-dark sticky-top"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={dbLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            DigitalBazar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/men">Men's Wear</Nav.Link>
              <Nav.Link href="/kids">Kids Wear</Nav.Link>
              <Nav.Link href="/women">Women's Wear</Nav.Link>

              <NavDropdown title="Cart" id="basic-nav-dropdown">
                <NavDropdown.Item href="/cart">View</NavDropdown.Item>
                <NavDropdown.Item href="/wishlist">Wishlist</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/checkout">Checkout</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/registration">Registration</Nav.Link>
              <Nav.Link eventKey={2} href="/profile">
                Account
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarRB;
