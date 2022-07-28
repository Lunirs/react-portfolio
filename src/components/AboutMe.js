import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import picOfMe from "../assets/img/picture-of-me.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
function About() {
  return (
    <section id="aboutMe">
      <Container>
        <Row>
          <h2>About Me!</h2>
        </Row>
        <Row>
          <Col size={6} id="abtme-img-container">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  id="aboutme-img"
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    src={picOfMe}
                    alt="picture of me"
                    className="aboutme-picture"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col size={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  id="aboutme-text"
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <p>
                    Biomedical engineer now transitioning into tech! I am a
                    recent bootcamp graduate who is fully equipped with the
                    skill sets needed of a software engineer.
                    <br />
                    <br />
                    I like to read and play games.
                    <br />
                    <br />
                    Currently learning other JavaScript frameworks and other
                    languages to increase my skillset!
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
