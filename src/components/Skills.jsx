import React, { useState, useEffect, useRef } from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilRuler, faCode } from "@fortawesome/free-solid-svg-icons";

const SkillItem = ({ name, percentage, isVisible }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const animationTimer = setTimeout(() => {
        setProgress(percentage);
      }, 50);
      return () => clearTimeout(animationTimer);
    }
  }, [percentage, isVisible]);

  return (
    <div className="skill-item mb-4">
      <div className="skill-header d-flex justify-content-between mb-2">
        <span className="skill-name">{name}</span>
      </div>
      <ProgressBar now={progress} className="custom-progress" />
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const designSkills = [
    { name: "Adobe Illustrator", percentage: 85 },
    { name: "Adobe Photoshop", percentage: 75 },
    { name: "Figma", percentage: 80 },
    { name: "Adobe XD", percentage: 85 },
    { name: "Adobe InDesign", percentage: 85 },
    { name: "Adobe After Effects", percentage: 65 },
  ];

  const devSkills = [
    { name: "HTML/CSS", percentage: 90 },
    { name: "JavaScript", percentage: 60 },
    { name: "Flutter/Dart", percentage: 78 },
    { name: "React", percentage: 50 },
    { name: "Bootstrap", percentage: 80 },
    { name: "Node.js", percentage: 80 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className=" py-5">
      <div className="container">
        <div className=" section-header text-center mb-5">
          <h2 className="display-5 fw-bold">My Skills</h2>
          <div className="divider mx-auto my-3"></div>
        </div>
        <Row className="g-5">
          <Col md={6}>
            <div className="skill-category card-hover">
              <h3 className="category-title">
                <FontAwesomeIcon icon={faPencilRuler} className="icon" /> Design
              </h3>
              {designSkills.map((skill, index) => (
                <SkillItem
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </Col>
          <Col md={6}>
            <div className="skill-category card-hover">
              <h3 className="category-title">
                <FontAwesomeIcon icon={faCode} className="icon" /> Development
              </h3>
              {devSkills.map((skill, index) => (
                <SkillItem
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Skills;
