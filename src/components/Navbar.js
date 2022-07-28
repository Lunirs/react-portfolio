import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import resume from "../assets/resume/Daniel_Hong_Resume.pdf";

function NavigationBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 30) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const updateLink = (val) => {
    setActiveLink(val);
  };

  const style = {
    navbarStyle: {
      color: "white",
    },
    navbarButton: {
      background: "#C9C9C9",
    },

    navContainerStyle: {
      zIndex: 1,
      backgroundColor: "black",
      position: "sticky",
      top: 0,
    },
  };

  return (
    <Navbar
      expand="lg"
      className={scroll ? "scrolled" : ""}
      style={style.navContainerStyle}
    >
      <Container>
        <Navbar.Brand href="#home" style={style.navbarStyle}>
          Lunirs | Daniel Hong
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={style.navbarButton}
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              style={style.navbarStyle}
              onClick={() => updateLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#aboutMe"
              className={
                activeLink === "aboutMe" ? "active navbar-link" : "navbar-link"
              }
              style={style.navbarStyle}
              onClick={() => updateLink("aboutMe")}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              style={style.navbarStyle}
              onClick={() => updateLink("projects")}
            >
              Project
            </Nav.Link>
            <Nav.Link
              href="#contactMe"
              className={
                activeLink === "contactMe"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              style={style.navbarStyle}
              onClick={() => updateLink("contactMe")}
            >
              Contact Me
            </Nav.Link>
            <Nav.Link href={resume} style={style.navbarStyle} download>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
