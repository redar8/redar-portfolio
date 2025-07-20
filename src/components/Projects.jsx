import React from "react";
import { Row, Col, Button, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { projects } from "../assets/data";

const ProjectCard = ({ title, description, image, tags, links }) => (
  <Col xl={4} lg={6} className="mb-4">
    <div className="project-card">
      <div className="card-image">
        <img src={image} alt={title} />
        <div className="card-links">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-icon"
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title mb-4">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-tags">
          {tags.map((tag, index) => (
            <Badge key={index} className="tag">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  </Col>
);

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-header text-center mb-5">
        <h2 className="display-5 fw-bold">Featured Work</h2>
        <div className="divider mx-auto my-3 mb-5"></div>
        <Row className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Row>

        <div className="cta-container">
          <Button href="/portfolio" className="cta-button">
            Browse Sample Projects
            <FontAwesomeIcon icon={faArrowRight} className="cta-icon" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
