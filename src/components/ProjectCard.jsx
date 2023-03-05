import { Col, Button } from "react-bootstrap"

export const ProjectCard = ({ title, imgUrl, githubLink, demoLink }) => {

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="img-url" />
        <div className="proj-txtx">
          <h4 className="big-h4">{title}</h4>
          <Button className="btn" variant="primary" onClick={() => handleClick(githubLink)}>GitHub Repo</Button>
          <Button className="btn" variant="danger" onClick={() => handleClick(demoLink)}>Demo Link</Button>
        </div>
      </div>
    </Col>
  )
}