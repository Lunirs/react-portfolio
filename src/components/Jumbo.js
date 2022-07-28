import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profIcon from "../assets/img/Vector-Among-Us-Game-Free-PNG-Image.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export default function Banner() {
  const [text, setText] = useState("");

  const toRotate = `My Name Is Daniel. 
  A Software Engineer`;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, 100);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let fullText = toRotate;
    let updatedText = fullText.substring(0, text.length + 1);

    setText(updatedText);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    <span className="wrap">{text}</span>
                  </h1>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    src={profIcon}
                    className="prof-icon"
                    alt="Profile Icon"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
