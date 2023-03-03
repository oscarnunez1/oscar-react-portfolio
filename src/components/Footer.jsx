import { Col, Container, Row } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"
import logo from "../assets/images/code-solid.svg"
import linkedinIcon from '../assets/icons/linkedin.svg';
import githubIcon from '../assets/icons/github.svg';
import resumeIcon from '../assets/icons/resume.svg'
import resumeLink from "../assets/docs/oscar-nunez-resume.pdf"

const linkedInProfile = "https://www.linkedin.com/in/oscarnunez34/"
const gitHubAccount = "https://github.com/oscarnunez1"


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col className="text-center">
            <div className="social-icon">
              <a href={linkedInProfile}><img src={linkedinIcon} alt="Linkedin" /></a>
              <a href={gitHubAccount}><img src={githubIcon} alt="GitHub" /></a>
              <a href={resumeLink} download><img src={resumeIcon} alt="Resume" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}