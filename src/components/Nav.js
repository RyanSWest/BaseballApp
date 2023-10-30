import "../styles/App.scss";
import React, { useState, useEffect } from "react";
 
import StickyNav from "react-sticky-nav";
import { Navbar, Badge, Nav, Container } from "react-bootstrap";

const Navi = () => {
  const [stickyClass, setStickyClass] = useState("");

  return (
    <StickyNav className="sticky">
      <Navbar className="scrolled" bg="primary" collapseOnSelect expand="sm">
      
        <Container>
          <Navbar.Brand href="/">Home </Navbar.Brand>
          <Navbar.Brand href="/news">News </Navbar.Brand>
          <Navbar.Brand href="/leaders">Leader Board </Navbar.Brand>
          <Navbar.Brand href="/standings">Standings </Navbar.Brand>
          <Navbar.Brand href="/schedules">Schedules </Navbar.Brand>

          <Navbar.Brand href="/teams">Teams </Navbar.Brand>

          <Navbar.Brand href="/all-time">All Time Greats </Navbar.Brand>
        </Container>
      </Navbar>
    </StickyNav>
  );
};
export default Navi;
