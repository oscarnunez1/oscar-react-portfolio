import { Col, Container, Row } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"
import logo from "../assets/images/code-solid.svg"
import { Github } from "react-bootstrap-icons"
import { Linkedin } from "react-bootstrap-icons"
import { File } from "react-bootstrap-icons"

const linkedInProfile = "https://www.linkedin.com/in/oscarnunez34/"
const gitHubAccount = "https://github.com/oscarnunez1"
const resumeFile = ""

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href={linkedInProfile}><img src={Linkedin} alt="Linkedin" /></a>
              <a href={gitHubAccount}><img src={Github} alt="GitHub" /></a>
              <a href={""}><img src={File} alt="Resume" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}