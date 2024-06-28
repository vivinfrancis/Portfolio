import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import myImg2 from "../../Assets/p2.png";
import myImg3 from "../../Assets/p1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
    Highly skilled and experienced <i><b className="purple">Full Stack Developer with 1.5 years</b></i> of hands-on expertise in designing, developing, and implementing complex web applications. Proficient in both front-end and back-end technologies, adept at translating client requirements into scalable, reliable software solutions. Innovative IT professional with expertise in JavaScript, ReactJS, React Native, HTML, CSS, MySQL, and Redux. Passionate about problem-solving and tech advancements, I excel in developing loan management applications and eCommerce websites. Known for translating complex technical concepts into strategic actions, I enhance operational efficiency and user satisfaction. Proven track record in delivering scalable, efficient solutions. Skilled in project management and team collaboration, I drive business success through cutting-edge technology.
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
              {/* <div style={{ maxWidth: '230px', height: '230px', borderRadius: '50%', backgroundColor: '#cd5ff8' }}>
                <img src={myImg3} className="img-fluid" alt="avatar" />
              </div> */}
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vivinfrancis/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alankara-vivin-francis-software-engineer"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
