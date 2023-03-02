import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import image for rightside background behind ProjectCard here

export const Projects = () => {

  const projects = [
    {
      title: "Project Title 1",
      description: "Product Description",
      imgUrl: "Product Image",
    },
    {
      title: "Project Title 2",
      description: "Product Description",
      imgUrl: "Product Image",
    },
    {
      title: "Project Title 3",
      description: "Product Description",
      imgUrl: "Product Image",
    },
    {
      title: "Project Title 4",
      description: "Product Description",
      imgUrl: "Product Image",
    },
    {
      title: "Project Title 5",
      description: "Product Description",
      imgUrl: "Product Image",
    },
    {
      title: "Project Title 6",
      description: "Product Description",
      imgUrl: "Product Image",
    },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, inventore vitae eligendi accusantium, numquam nam voluptas qui blanditiis id odit laudantium ad libero ipsam. Repudiandae dignissimos exercitationem minima expedita labore?</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">               
              <Nav variant="pills" defaultActiveKey="/home">
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