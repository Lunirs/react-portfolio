import { Container, Row, Col } from "react-bootstrap";
import linkedIn from "../assets/img/linkedin.png";
import github from "../assets/img/github.png";
import twitter from "../assets/img/twitter.png";

function Footer() {
  const date = new Date();

  const yr = date.getFullYear();

  return (
    <footer>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <p>Copyright © {yr} Daniel Hong All Rights Reserved</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="footer-icon">
              <a target="_blank" href="https://linkedin.com/in/lunirs">
                <img src={linkedIn} alt="linkedin icon" />
              </a>
              <a target="_blank" href="https://github.com/lunirs">
                <img src={github} alt="github icon" />
              </a>
              <a target="_blank" href="#">
                <img src={twitter} alt="twitter icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
