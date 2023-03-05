import { useState, useEffect } from "react"
import { Row, Col, Container } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import { Image } from "react-bootstrap"
import profilePhoto from "../assets/images/profile-photo.png"


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ["Oscar Nunez."]
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(50)
  const period = 2000

  const linkedInProfile = "https://www.linkedin.com/in/oscarnunez34/"

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => { clearInterval(ticker)}
  })

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta(50)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  } 

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={12} xl={12}>
            <Image src={profilePhoto} roundedCircle className="profile-photo mb-7"/>
            <h1 className="mb-5">{`Hey There! I'm `}<span className="wrap">{text}</span></h1>
            <span className="tagline">Welcome to my Portfolio</span>
            <p>Full-stack software developer with a diverse background in architectural photography, journalism, and social media marketing. Passionate about applying creativity and technology to create innovative, user-friendly applications that solve real-world problems. Collaborative team player with excellent problem-solving abilities. Committed to staying up-to-date with the latest industry trends and continuously improving skills. Ready to bring unique perspectives and fresh ideas to new projects.</p>
            <a href={linkedInProfile} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none'}}><button className="mx-auto" onClick={() => console.log('connect')}>Let's Connect On LinkedIn<ArrowRightCircle size={30} /></button></a>
          </Col>
        </Row>
      </Container>
    </section>
  )
}