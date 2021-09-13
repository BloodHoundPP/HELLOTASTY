import React from "react";
import { Container, Navbar } from "react-bootstrap";
import classes from "./Startpage.module.css";
import mainlogo from "./images/mainlogo.png";
import navlogo from "./images/Navbarlogo-01.png";
import mainsubtitle from "./images/mainsubtitle.png";

const Startpage = () => {
  return (
    <Container className={classes.container}>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={navlogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div className={classes.main}>
        <img src={mainlogo}></img>
        <img src={mainsubtitle}></img>
      </div>

      <div className={classes.outer}>
        <div className={classes.search_box}>
          <input
            className={classes.search_txt}
            type="text"
            name=""
            placeholder="Type to search"
          />
          <a className={classes.search_btn} href="#">
            <i class="fas fa-search"></i>
          </a>
        </div>
      </div>
    </Container>

  );
};

export default Startpage;
