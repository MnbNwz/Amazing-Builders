const ProjectImage = ({ src, alt, overlayText }) => (
  <div className="project-image">
    <img src={src} alt={alt} />
    <div className="project-overlay">
      <span className="overlay-text">{overlayText}</span>
    </div>
  </div>
);
export default ProjectImage;
