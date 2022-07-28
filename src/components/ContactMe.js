import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import mailImg from "../assets/img/envelope-icon.png";

function ContactMe() {
  const formInput = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
    message: "",
  };

  const [userFormInput, setUserFormInput] = useState(formInput);

  const formUpdateHandler = (property, value) => {
    setUserFormInput({
      ...userFormInput,
      [property]: value,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setUserFormInput(formInput);
  };

  return (
    <section className="contactMe" id="contactMe">
      <Container>
        <Row className="align-items-center">
          <Col>
            <img src={mailImg} alt="picture of envelope" id="contactme-img" />
          </Col>
          <Col>
            <h5>Contact Me!</h5>
            <form onSubmit={submitHandler}>
              <Row>
                <Col size={12} sm={6}>
                  <input
                    type="text"
                    value={userFormInput.firstName}
                    placeholder="First Name"
                    onChange={(event) =>
                      formUpdateHandler("firstName", event.target.value)
                    }
                  />
                </Col>
                <Col size={12} sm={6}>
                  <input
                    type="text"
                    value={userFormInput.lastName}
                    placeholder="Last Name"
                    onChange={(event) =>
                      formUpdateHandler("lastName", event.target.value)
                    }
                  />
                </Col>
                <Col size={12} sm={6}>
                  <input
                    type="email"
                    value={userFormInput.email}
                    placeholder="Email Address"
                    onChange={(event) =>
                      formUpdateHandler("email", event.target.value)
                    }
                  />
                </Col>
                <Col size={12} sm={6}>
                  <input
                    type="tel"
                    value={userFormInput.phoneNum}
                    placeholder="Phone Number"
                    onChange={(event) =>
                      formUpdateHandler("phoneNum", event.target.value)
                    }
                  />
                </Col>
                <Col size={12}>
                  <textarea
                    value={userFormInput.message}
                    rows="6"
                    placeholder="Message"
                    onChange={(event) =>
                      formUpdateHandler("message", event.target.value)
                    }
                  />
                  <button type="submit">Send</button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactMe;
