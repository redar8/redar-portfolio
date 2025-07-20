import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const currentRef = sectionRef.current;
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`section-about py-5 ${isVisible ? "visible" : ""}`}
    >
      <div className="container-lg">
        <Row className="g-5 align-items-center">
          <Col lg={6} className="pe-lg-5">
            <div
              className={`about-content ${isVisible ? "animate-content" : ""}`}
            >
              <h3 className="display-5 fw-bold mb-4 text-gradient">
                Who am I?
              </h3>
              <p className="lead mb-4">Designer. Coder. Visual Storyteller.</p>
              <p className="mb-0 animate-text">
                I craft with intention — blending pixels with purpose and motion
                with meaning. Whether it’s a landing page that drives action, a
                brand that tells a story, or a mobile app that just feels right
                — I bring ideas to life with clarity and emotion. I thrive at
                the intersection of creativity and code, where visual design
                meets seamless interactivity. To me, every click, scroll, and
                swipe is an opportunity to create connection. Your idea deserves
                more than design — It deserves an experience.
              </p>
            </div>
          </Col>

          <Col lg={6} className="personal-info ps-lg-5">
            <div className={`info-card ${isVisible ? "animate-card" : ""}`}>
              <h3 className="mb-4 section-title">Personal Information</h3>
              <ul className="info-list">
                <li
                  className={`d-flex align-items-center ${
                    isVisible ? "animate-item" : ""
                  }`}
                >
                  <strong className="me-2">Location:</strong>
                  <span>Ankara, Türkiye</span>
                </li>
                <li
                  className={`d-flex align-items-center ${
                    isVisible ? "animate-item" : ""
                  }`}
                >
                  <strong className="me-2">Email:</strong>
                  <a href="mailto:redarreda8@gmail.com">redarreda8@gmail.com</a>
                </li>
                <li
                  className={`d-flex align-items-center ${
                    isVisible ? "animate-item" : ""
                  }`}
                >
                  <strong className="me-2">Phone:</strong>
                  <a href="tel:+905330790788">+90 533 079 0788</a>
                </li>
                <li
                  className={`d-flex align-items-center ${
                    isVisible ? "animate-item" : ""
                  }`}
                >
                  <strong className="me-2">Nationality:</strong>
                  <span>Iraqi</span>
                </li>
                <li
                  className={`d-flex align-items-center ${
                    isVisible ? "animate-item" : ""
                  }`}
                >
                  <strong className="me-2">Languages:</strong>
                  <span>
                    Kurdish (Native), Turkish (Advanced), English (Advanced)
                  </span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
