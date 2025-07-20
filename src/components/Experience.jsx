import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../assets/data";

const Experience = () => {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className=" section-header text-center mb-5">
            <h2 className="display-5 fw-bold">Professional Journey</h2>
            <div className="divider mx-auto my-3"></div>
          </div>
        </motion.div>

        <div className="timeline">
          {experiences?.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="timeline-item"
            >
              <div className="timeline-content p-4 rounded-4 shadow">
                <div className="timeline-header mb-3">
                  <h2 className="h2 mb-1 text-primary">{experience.title}</h2>
                  <h3 className="h3 mb-1">{experience.position}</h3>
                  <h4 className="text-secondary mb-2">{experience.company}</h4>
                  <p className="text-muted small mb-0">{experience.duration}</p>
                </div>
                <ul className="list-unstyled">
                  {experience.points.map((point, i) => (
                    <li key={i} className="d-flex mb-2">
                      <span className="bullet me-3">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
