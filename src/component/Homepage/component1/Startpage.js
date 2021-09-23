import React from "react";
import {  Navbar } from "react-bootstrap";
import classes from "./Startpage.module.css";
import mainlogo from "./images/mainlogo.png";
import navlogo from "./images/Navbarlogo-01.png";
import { Icon } from '@iconify/react';
import Typical from 'react-typical';

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
      <h2 className={classes.subheading}>
        <Typical 
          loop={Infinity}
     
          steps={
            [
              'The Eatery Platform',
              3000,
              "Joey Doesn't Share Food But We Do",
              3000,
              'Food That Awaits You',
              3000,
              'Choose best, Choose Tasty Choose HelloTasty',
              3000
            ]
          }

        />
        </h2>
       
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
