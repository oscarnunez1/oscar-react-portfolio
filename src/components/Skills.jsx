import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import javascript from "../assets/icons/javascript.svg"
import css from "../assets/icons/css.svg"
import html from "../assets/icons/html.svg"
import express from "../assets/icons/express.svg"
import nodejs from "../assets/icons/nodejs.svg"
import background from "../assets/images/subtle-prism.svg"
import postgresql from "../assets/icons/postgresql.svg"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
                Skills
              </h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <a href="https://www.postgresql.org/" className="skill-link">
                    <img src={postgresql} alt="postgresql-icon" />
                    <h5>PostgreSQL</h5>
                  </a>
                </div>
                <div className="item">
                  <img src={javascript} alt="javascript-icon" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={css} alt="css-icon" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={html} alt="html-icon" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={express} alt="express-icon" />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt="nodejs-icon" />
                  <h5>Node JS</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left"  src={"background"} alt="color-sharp" />
    </section>
  )
}