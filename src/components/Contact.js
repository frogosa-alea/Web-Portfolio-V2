import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="contacts">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Let's Connect!</h2>
                <span className="navbar-text">
                  <div className="social-icon">
                      <Row style={{ alignItems: "center" }}>
                        <Col sm={4}>
                          <a><img src="https://img.icons8.com/ios-glyphs/30/000000/gmail.png"/></a>
                        </Col>
                        <Col sm={8}>
                          <h6>benitezalea.f@gmail.com</h6>
                        </Col>
                      </Row>
                      <Row style={{ alignItems: "center" }}>
                        <Col  sm={4}>
                          <a href="https://github.com/frogosa-alea"><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/></a>
                        </Col>
                        <Col  sm={8}>
                          <h6>frogosa-alea</h6>
                        </Col>
                      </Row>
                    <Row style={{ alignItems: "center" }}>
                      <Col sm={4}>
                        <a href="https://www.linkedin.com/in/alea-frogosa/"><img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"/></a>
                      </Col>
                      <Col sm={8}>
                        <h6>in/alea-frogosa</h6>
                      </Col>
                    </Row>
                    <Row style={{ alignItems: "center" }}>
                      <Col sm={4}>
                        <a><img src="https://img.icons8.com/ios-glyphs/30/000000/phone--v1.png"/></a>
                      </Col>
                      <Col sm={8}>
                        <h6>+63 947 848 1554</h6>
                      </Col>
                    </Row>
                  </div>
                </span>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
