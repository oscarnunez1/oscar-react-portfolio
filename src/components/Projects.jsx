import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import imageOne from '../assets/images/connectfour.png'
import imageTwo from '../assets/images/cityscape.png'
import imageThree from '../assets/images/pix.png'
import imageFour from '../assets/images/flavorite.png'
import imageFive from '../assets/images/tictactoe.png'
import imageSix from '../assets/images/job-play-logo.png'



export const Projects = () => {

  const projects = [
    {
      title: "Connect Four",
      description: "Product Description",
      imgUrl: imageOne,
      githubLink: "https://github.com/oscarnunez1/bitconnect-4",
      demoLink: "https://oscarnunez1-bitconnect-4.netlify.app/"
    },
    {
      title: "Cityscape Social",
      description: "Product Description",
      imgUrl: imageTwo,
      githubLink: "https://github.com/oscarnunez1/cityscape-social-app",
      demoLink: "https://cityscape-social.fly.dev/"
    },
    {
      title: "Pix",
      description: "Product Description",
      imgUrl: imageThree,
      githubLink: "https://github.com/CaptMerica/pix-front-end",
      demoLink: "https://pix-tritonic.netlify.app/"
    },
    {
      title: "Flavorite",
      description: "Product Description",
      imgUrl: imageFour,
      githubLink: "https://github.com/oscarnunez1/flavorite-front",
      demoLink: "https://flavorite.netlify.app"
    },
    {
      title: "Tic-Tac-Typsecript",
      description: "Product Description",
      imgUrl: imageFive,
      githubLink: "https://github.com/oscarnunez1/tic-tac-ts-lab",
      demoLink: "https://tic-tac-toe-types.netlify.app"
    },
    {
      title: "JobPlay",
      description: "Product Description",
      imgUrl: imageSix,
      githubLink: "https://github.com/luisdaniel0/Jobplay-FE",
      demoLink: "https://jobplay.netlify.app/"
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Explore my portfolio of recent web development projects, which demonstrate my proficiency in a variety of modern front-end and back-end technologies. Gain access to the full details of each project by clicking on the associated GitHub and demo buttons, where you can explore the technologies used, view live demos, and access the Github repository.
            </p>
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
          </Col>
        </Row>
      </Container>
    </section>
  );

}

/************* Add Tabs when list surpasses 6 projects *************/

// return (
//   <section className="project" id="projects">
//     <Container>
//       <Row>
//         <Col>
//           <h2>Projects</h2>
//           <p>Explore my portfolio of recent web development projects, which demonstrate my proficiency in a variety of modern front-end and back-end technologies. Gain access to the full details of each project by clicking on the associated GitHub and demo buttons, where you can explore the technologies used, view live demos, and access the Github repository.
//           </p>
//           <Tab.Container id="projects-tabs" defaultActiveKey="first">               
//             <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//               <Nav.Item>
//                 <Nav.Link eventKey="first">Tab 1</Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link eventKey="second">Tab 2</Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link eventKey="third">Tab 3</Nav.Link>
//               </Nav.Item>
//             </Nav>
//             <Tab.Content>
//               <Tab.Pane eventKey="first">
//                 <Row>
//                   {
//                     projects.map((project, index) => {
//                       return (
//                         <ProjectCard
//                           key={index}
//                           {...project}
//                         />
//                       )
//                     })
//                   }
//                 </Row>
//               </Tab.Pane>
//               <Tab.Pane eventKey="second"></Tab.Pane>
//               <Tab.Pane eventKey="third"></Tab.Pane>
//             </Tab.Content>
//           </Tab.Container>
//         </Col>
//       </Row>
//     </Container>
//   </section>
// )