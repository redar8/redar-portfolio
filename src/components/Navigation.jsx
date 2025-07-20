import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className="custom-navbar"
    >
      <Container>
        <Navbar.Brand href="#home" className="brand-logo">
          <img src="/images/mylogo.png" alt="Logo" width="60" height="60" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              About
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              Skills
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              Experience
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
