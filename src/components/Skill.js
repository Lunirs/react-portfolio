import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Skill() {
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
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="technologies">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tech-container">
              <h2>Technologies</h2>
              <br />
              <br />
              <br />
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                className="owl-carousel owl-theme tech-slider"
              >
                <div className="tech">
                  <h3>Node.js</h3>
                  <p>9/10</p>
                </div>
                <div className="tech">
                  <h3>React.js</h3>
                  <p>8/10</p>
                </div>
                <div className="tech">
                  <h3>Javascript</h3>
                  <p>9/10</p>
                </div>
                <div className="tech">
                  <h3>MongoDB</h3>
                  <p>9/10</p>
                </div>
                <div className="tech">
                  <h3>GraphQL</h3>
                  <p>8/10</p>
                </div>
                <div className="tech">
                  <h3>HTML</h3>
                  <p>8/10</p>
                </div>
                <div className="tech">
                  <h3>CSS</h3>
                  <p>7/10</p>
                </div>

                <div className="tech">
                  <h3>Python</h3>
                  <p>5/10</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skill;
