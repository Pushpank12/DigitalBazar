import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import dbLogo from "./icons/dbLogo.svg";
import {Link} from "react-router-dom"
import "./NavbarRB.css";
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
          <Navbar.Brand className="Link d-flex align-items-center" as={Link} to='/'>
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
            <Nav className="me-auto d-flex align-items-center">
              <Link className="Link" to="/men">Men's Wear</Link>
              <Link className="Link" to="/kids">Kids Wear</Link>
              <Link className="Link" to="/women">Women's Wear</Link>

             <NavDropdown className="Link d-flex align-items-center" title="Cart" id="basic-nav-dropdown">
                <NavDropdown.Item  as={Link} to={'/cart'}>View</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to={'/wishlist'}>Wishlist</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item  as={Link} to={'/checkout'}>Checkout</NavDropdown.Item>
              </NavDropdown>
              
            </Nav>

            <Nav>
              <Link className="Link" to="/login">Login</Link>
              <Link className="Link" eventKey={2} to="/profile">
                Account
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarRB;
