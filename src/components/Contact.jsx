import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faUpwork,
} from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    emailjs.init("CNphlBnQANLPPZm2b");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowSuccess(false);
    setShowError(false);

    const serviceID = "service_grerp4m";
    const templateID = "template_jrrs1cp";

    emailjs
      .sendForm(serviceID, templateID, formRef.current)
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          setShowSuccess(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Email failed to send:", error);
          setShowError(true);
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="display-5 fw-bold">Get In Touch</h2>
          <div className="divider mx-auto my-3"></div>
          <p className="text-muted">
            Have a project in mind? Let's work together
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          <Col lg={6}>
            <div className="p-4 p-lg-5 rounded-4 shadow-sm bg-white">
              <h3 className="mb-4">Send me a message</h3>

              {showSuccess && (
                <Alert
                  variant="success"
                  onClose={() => setShowSuccess(false)}
                  dismissible
                >
                  Message sent successfully!
                </Alert>
              )}

              {showError && (
                <Alert
                  variant="danger"
                  onClose={() => setShowError(false)}
                  dismissible
                >
                  Failed to send message. Please try again.
                </Alert>
              )}

              <Form ref={formRef} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="p-3"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="p-3"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-100 py-3 fw-bold"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </Form>
            </div>
          </Col>

          <Col lg={6}>
            <div className="p-4 p-lg-5 rounded-4 shadow-sm bg-white h-100">
              <h3 className="mb-4">Contact Information</h3>

              <div className="d-flex align-items-start mb-4">
                <div className="contact-icon bg-primary p-3 rounded-circle me-3">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-white"
                  />
                </div>
                <div>
                  <h5>Location</h5>
                  <p className="mb-0 text-muted">Ankara, Türkiye</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <div className="contact-icon bg-primary p-3 rounded-circle me-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                </div>
                <div>
                  <h5>Email</h5>
                  <p className="mb-0 text-muted">redarreda8@gmail.com</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <div className=" contact-icon bg-primary p-3 rounded-circle me-3">
                  <FontAwesomeIcon icon={faPhoneAlt} className="text-white" />
                </div>
                <div>
                  <h5>Phone</h5>
                  <p className="mb-0 text-muted">+90 533 079 0788</p>
                </div>
              </div>

              <div className="mt-5">
                <h5 className="mb-3">Follow Me</h5>
                <div className="d-flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/redar-abdulkareem-a8a944228/"
                    className="contact-icon text-primary"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                  </a>
                  <a
                    href="https://github.com/redar8"
                    className="contact-icon text-primary"
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>
                  <a
                    href="https://www.upwork.com/freelancers/~01a23456789abcdef0"
                    className="contact-icon text-primary"
                  >
                    <FontAwesomeIcon icon={faUpwork} size="lg" />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
