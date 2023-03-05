import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import imageOne from '../assets/images/connectfour.png'
import imageTwo from '../assets/images/cityscape.png'
import imageThree from '../assets/images/pix.png'
import imageFour from '../assets/images/flavorite.png'
import imageFive from '../assets/images/tictactoe.png'

export const Projects = () => {

  const projects = [
    {
      title: "Connect Four",
      description: "Product Description",
      imgUrl: imageOne,
      githubLink: "https://github.com/oscarnunez1/bitconnect-4"
    },
    {
      title: "Cityscape Social",
      description: "Product Description",
      imgUrl: imageTwo,
      githubLink: "https://github.com/oscarnunez1/cityscape-social-app"
    },
    {
      title: "Pix",
      description: "Product Description",
      imgUrl: imageThree,
      githubLink: "https://github.com/CaptMerica/pix-front-end"
    },
    {
      title: "Flavorite",
      description: "Product Description",
      imgUrl: imageFour,
      githubLink: "https://github.com/oscarnunez1/flavorite-front"
    },
    {
      title: "Tic-Tac-Typsecript",
      description: "Product Description",
      imgUrl: imageFive,
      githubLink: "https://github.com/oscarnunez1/tic-tac-ts-lab"
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Browse through my portfolio of recent web development projects, each showcasing my skills in a range of modern front-end and back-end technologies. Click on each project to learn more about the technologies used, see live demos, and view the Github repository.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">               
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second"></Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right"  src={"background"} alt="color-sharp" /> */}
    </section>
  )

}