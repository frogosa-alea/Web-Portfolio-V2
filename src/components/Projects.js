import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import skillsBg from "../assets/img/skills-img.jpg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Prelumens",
      description: "Learning Management System - MERN Stack",
      imgUrl: projImg1,
      link: 'https://prelumens.xyz'
    },
    {
      title: "BikeTech PH",
      description: "Static Website - PHP",
      imgUrl: projImg2,
      link: 'https://github.com/frogosa-alea/BikeTech-PH'
    },
    {
      title: "AMSAI SIS",
      description: "Student Information System - PHP Laravel",
      imgUrl: projImg3,
      link: 'https://github.com/Ms-Yosa/ESS-Project'
    },
    {
      title: "enCrypt",
      description: "Crytocurrency Application - ReactJS",
      imgUrl: projImg4,
      link: 'https://encrypt2-app.netlify.app/'
    },
    {
      title: "Hustle Gym",
      description: "Gym Application - React Redux Toolkit",
      imgUrl: projImg5,
      link: 'https://hustle-gym.netlify.app/'
    },
    {
      title: "UnWinged",
      description: "Game Development - C# Unity",
      imgUrl: projImg6,
      link: 'https://www.youtube.com/watch?v=rfBbecQg-wo'
    },
    {
      title: "Ecommerce Application",
      description: "Ecommerce Application - Django, React Redux",
      imgUrl: projImg7,
      link: 'https://github.com/SinangAugust/E-Commerce-Web-Application'
    },
    {
      title: "My Portfolio",
      description: "Online Portfolio - ReactJS",
      imgUrl: projImg8,
      link: 'https://frogosaalea.codes/'
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of the projects that I have designed and developed</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
