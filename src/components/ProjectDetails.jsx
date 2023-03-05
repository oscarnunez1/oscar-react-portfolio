import { Col } from "react-bootstrap"

export const ProjectDetails = ({ title, description, imgUrl, technologies, githubLink, demoLink }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="img-url" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>Technologies: {technologies.join(", ")}</p>
          <div className="proj-links">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">Github</a>
            <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </div>
      </div>
    </Col>
  )
}
