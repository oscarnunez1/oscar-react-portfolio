import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import javascript from "../assets/icons/javascript.svg"
import react from "../assets/icons/react.svg"
import nodeJs from "../assets/icons/nodejs.svg"
import express from "../assets/icons/express.svg"
import postgresql from "../assets/icons/postgresql.svg"
import typescript from "../assets/icons/typescript.svg"
import vite from "../assets/icons/vite.svg"
import mongoDB from "../assets/icons/mongodb.svg"
import sequelize from "../assets/icons/sequelize.svg"
import bootstrap from "../assets/icons/bootstrap.svg"
import git from "../assets/icons/git.svg"
import redux from "../assets/icons/redux.svg"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills & Technologies
              </h2>
              <p>Explore my diverse range of skills and technologies in modern front-end and back-end development.</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                    <img src={postgresql} alt="postgresql-icon" />
                    <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src={express} alt="express-icon" />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img src={react} alt="react-icon" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={nodeJs} alt="nodejs-icon" />
                  <h5>Node</h5>
                </div>
                <div className="item">
                  <img src={typescript} alt="typescript-icon" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={vite} alt="vite-icon" />
                  <h5>Vite</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="javascript-icon" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={mongoDB} alt="mongodb-icon" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={sequelize} alt="sequelize-icon" />
                  <h5>Sequelize</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="bootstrap-icon" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={git} alt="git-icon" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={redux} alt="redux-icon" />
                  <h5>Redux</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}