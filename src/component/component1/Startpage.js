import React from "react";
import {  Navbar } from "react-bootstrap";
import classes from "./Startpage.module.css";
import mainlogo from "./images/mainlogo.png";
import navlogo from "./images/Navbarlogo-01.png";
import { Icon } from '@iconify/react';

const Startpage = () => {
  return (
    <div className={classes.container}>
      <Navbar>
        <div>
          <Navbar.Brand href="#home">
            <img
              src={navlogo}
              width="20"
              height="20"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </div>
      </Navbar>

     <div className={classes.main}>
      <img className={classes.title} src={mainlogo} alt="mainlogo"/>
      <h2 className={classes.subheading}>The Eatery Platform</h2>
     </div>

    <div className={classes.search}>
      <a href="#1"><Icon className={classes.icon1} icon="ic:sharp-my-location" width="50" height="50" /></a>
      
      <input 
        className={classes.search_txt}
            type="text"
            name="search"
            placeholder="Locate Me"
      />
      <a href="#12"><Icon className={classes.icon2} icon="ci:search" width="50" height="50" /></a>
      
    </div>

    </div>

  );
};

export default Startpage;
