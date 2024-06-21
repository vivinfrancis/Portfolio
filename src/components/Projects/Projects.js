import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import snWeb from "../../Assets/Projects/sn.png";
import snApp from "../../Assets/Projects/snDApp.png";
import poo from "../../Assets/Projects/pooDW.png";
import del from "../../Assets/Projects/delDW.png";
import pack from "../../Assets/Projects/packDW.png";
import pur from "../../Assets/Projects/purDW.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snWeb}
              isBlog={false}
              title="Square Now"
              description="SquareNow is our flagship product, designed to provide an all-encompassing solution for financial institutions. From monitoring field officers activities to seamlessly managing financial data and even creating balance sheets and profit and loss statements, SquareNow is the quintessential LMS that transforms the way lending institutions operate."
              languages="Angular Js, Javascript, Php & MySQL"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://kapiital.com/index.php/project/squarenow/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snApp}
              isBlog={false}
              title="Square Now App"
              description="SquareNow is our flagship product, designed to provide an all-encompassing solution for financial institutions. From monitoring field officers activities to seamlessly managing financial data and even creating balance sheets and profit and loss statements, SquareNow is the quintessential LMS that transforms the way lending institutions operate."
              languages="React Native, Php & MySQL"
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://play.google.com/store/search?q=squarenow&c=apps&hl=en_IN&gl=US"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poo}
              isBlog={false}
              title="Pookadai App"
              description="Pookadai is an one stop solution for your daily flower needs. With our solution we make your daily prayers really easy by giving the seemless experience of not just delivering the flower we take care of right flower on the right day. Download the Pookadai app on your phone."
              languages="React Native, Javascript, Php & MySQL"
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://play.google.com/store/apps/details?id=com.Kapiital.Pookadai&hl=en_IN&gl=US"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poo}
              isBlog={false}
              title="Pookadai Web"
              description="Pookadai is an one stop solution for your daily flower needs. With our solution we make your daily prayers really easy by giving the seemless experience of not just delivering the flower we take care of right flower on the right day. Download the Pookadai app on your phone.Pookadai web is purpose of backend process."
              languages="React Js, Javascript, Php & MySQL"
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://pookadai.co.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={del}
              isBlog={false}
              title="Pookadai Delivery App"
              description="A delivery app is a software application designed to facilitate the ordering, tracking, and delivery of flowers or services to customers. These apps have gained significant popularity, especially in recent years, due to the rise of e-commerce and the demand for convenient and efficient delivery services."
              languages="React Native, Javascript, Php & MySQL"
            // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://pookadai.co.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pur}
              isBlog={false}
              title="Pookadai Purchase App"
              description="A flower purchase app is a mobile application designed to facilitate the buying and delivery of flowers to customers."
              languages="React Native, Javascript, Php & MySQL"
            // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://pookadai.co.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pack}
              isBlog={false}
              title="Pookadai Packing App"
              description="A Flower Packing App is a digital tool or software designed to assist florists or flower shop owners in efficiently managing the packing process of flowers."
              languages="React Native, Javascript, Php & MySQL"
            // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://pookadai.co.in/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
