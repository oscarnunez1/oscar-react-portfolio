import { Row, Col, Container } from "react-bootstrap"
import { ArrowR}


export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hello! This is webdecoded`}<span className="wrap">Web Developer</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, inventore vitae eligendi accusantium, numquam nam voluptas qui blanditiis id odit laudantium ad libero ipsam. Repudiandae dignissimos exercitationem minima expedita labore?</p>
            <button onClick={() => console.log('connect')}>Let's Connect</button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}