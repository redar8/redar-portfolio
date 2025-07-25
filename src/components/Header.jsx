import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import profileImage from "../images/REDAR ABDULKAREEM.png";

const Header = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "UX/UI Designer",
    "Graphic Designer",
    "Flutter Developer",
    "Frontend Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <header className="hero-section d-flex align-items-center">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8} md={10}>
            <div className="mb-4">
              <img
                src={profileImage}
                alt="Profile"
                className="img-fluid rounded-circle animate__animated animate__zoomIn"
                style={{ width: "180px", height: "180px", objectFit: "cover" }}
              />
            </div>
            <div className="hero-content">
              <h1 className="animate__animated animate__fadeInDown mb-3">
                Redar Abdulkareem
              </h1>
              <h2 className="animate__animated animate__fadeInDown animate__delay-1s mb-3">
                {texts[textIndex]}
              </h2>
              <p className="lead animate__animated animate__fadeIn animate__delay-2s mb-4">
                One Brain. Many Skills. Limitless Possibilities.
              </p>
              <div className="hero-cta animate__animated animate__fadeInUp animate__delay-3s">
                <Button
                  href="#contact"
                  variant="primary"
                  size="lg"
                  className="mx-2 mb-2"
                >
                  <FontAwesomeIcon icon={faBriefcase} className="me-2" />
                  Let’s Work Together
                </Button>
                <Button
                  href="#projects"
                  variant="outline-light"
                  size="lg"
                  className="mx-2 mb-2"
                >
                  <FontAwesomeIcon icon={faFolderOpen} className="me-2" />{" "}
                  Explore My Work
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
