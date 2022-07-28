import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import images here
import cub2Bear from "../assets/img/cub2bear.png";
import kindler from "../assets/img/carousel.png";
import carbon from "../assets/img/carbon-tracker-about-page.png";
import employee from "../assets/img/Demo-initial.png";
import jate from "../assets/img/jate-application.png";
import readme from "../assets/img/Animation.gif";
function Project() {
  const responsive = {
    xl: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },

    large: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },

    medium: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },

    small: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };
  const projects = [
    {
      title: "Kindler",
      description: "Developer/Engineer database for recruiters to see and use!",
      projectImg: kindler,
      link: "https://guarded-castle-49878.herokuapp.com/",
    },
    {
      title: "Cub2Bear",
      description:
        "Ecommerce website for users to sell/purchase used baby clothing.",
      projectImg: cub2Bear,
      link: "https://cub2bear.herokuapp.com",
    },
    {
      title: "Just Another Text Editor",
      description: "Text-Editor PWA",
      projectImg: jate,
      link: "https://lunirs-text-editor.herokuapp.com/",
    },
    {
      title: "Impact Studios",
      description: "Track your carbon footprint based on your flight travels.",
      projectImg: carbon,
      link: "https://lunirs.github.io/impact-studios-carbon-tracker/",
    },
    {
      title: "Employee Tracker",
      description: "Command Line Interface to update your employee database.",
      projectImg: employee,
      link: "https://github.com/Lunirs/employee-tracker",
    },
    {
      title: "Readme Generator",
      description: "Generate a professional readme in your CLI",
      projectImg: readme,
      link: "https://github.com/Lunirs/readme-generator",
    },
  ];

  return (
    <section className="projects" id="project">
      <Container>
        <Row id="proj-col">
          <Col size={12}>
            <h2>Projects</h2>
            <p className="text-white"> Click on the image to try them out!</p>
            <p className="text-white">
              Some projects are deployed on heroku. Please give it some time to
              load.
            </p>
            <div className="proj-container col-12">
              <Carousel
                responsive={responsive}
                className="owl-carousel owl-theme tech-slider"
              >
                {projects.map((project, idx) => {
                  return <ProjectCards key={idx} {...project} />;
                })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Project;
