import { Col } from "react-bootstrap";

function ProjectCards({ title, description, projectImg, link }) {
  const style = {
    projCard: {
      marginTop: "30px",
      marginBottom: "30px",
      border: "white solid 1px",
      borderRadius: "30px",
      minWidth: "300px",
      maxWidth: "300px",
      maxHeight: "350px",
      minHeight: "350px",
      marginLeft: "auto",
      marginRight: "auto",
    },
  };
  return (
    <Col size={12} sm={6} md={4} style={style.projCard} id="proj-container">
      <div className="project-image">
        <a target="_blank" href={link}>
          <img src={projectImg} />
        </a>
        <div className="project-text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}
export default ProjectCards;
