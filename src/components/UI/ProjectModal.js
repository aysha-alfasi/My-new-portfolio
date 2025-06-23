import React from "react";
import "./ProjectModal.css";
import definity from "../../imgs/icons/definity.png";
import gitHub from "../../imgs/icons/gitHub.png";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>{project.title}</h2>
        <p>{project.longDescription}</p>

        {
          <div className="tech-icons">
            {project.techIcons.map((icon, i) => (
              <img
                key={i}
                src={icon}
                alt="tech icon"
                className={`tech-icon ${
                  icon === definity ? "definity-icon" : "tech-icon"
                }`}
              />
            ))}
          </div>
        }

        <div className="modal-buttons">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ height: 30 }}
          >
            View Project
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            View Code{" "}
            <img
              src={gitHub}
              alt="gitHub-icon"
              style={{ width: 32, height: 32, borderRadius: 50 }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
