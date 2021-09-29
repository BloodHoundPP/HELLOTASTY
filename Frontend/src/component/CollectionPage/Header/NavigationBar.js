import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../images/logo.png";
import { Icon } from "@iconify/react";
import "../Collection.css";
function NavigationBar() {
  return (
    <div className="navigation">
      <Navbar expand="lg">
        <LinkContainer to="/collection">
          <Navbar.Brand>
            <img className="logo" src={logo} alt="logo" />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/collection">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/cookbook">
              <Nav.Link>Cook Book</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/signin">
              <Nav.Link>
                <Icon
                  icon="healthicons:ui-user-profile"
                  width="50"
                  height="50"
                />{" "}
                Sign in
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/cart">
              <Nav.Link href="#home">
                <Icon
                  className="cart"
                  icon="clarity:shopping-cart-outline-badged"
                  color="black"
                  width="4"
                  height="4"
                />
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
