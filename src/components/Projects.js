import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {useEffect, useState} from "react";
import {VideosCard} from "./Videos";

export const Projects = () => {
  const [react, setReact] = useState([]);
  const [android, setAndroid] = useState([]);
  const [angular, setAngular] = useState([]);

  useEffect(() => {
    // Fetch the content of the Google Docs file
    const fetchProjectsData = async () => {
      try {
        const response = await fetch(
            "https://docs.google.com/document/d/1LoMeG8jWIoc0hIMiGtI2xyJPqYQdnS6_uMY0nsd5HCE/export?format=txt"
        );
        const text = await response.text();

        // Parse the fetched content (assuming it's JSON formatted in your document)
        const parsedData = JSON.parse(text);

        // Set the projects state with the fetched data
        setReact(parsedData.data);
      } catch (error) {
        console.error('Error fetching the projects data:', error);
      }
    };

    fetchProjectsData();
  }, []);

  useEffect(() => {
    // Fetch the content of the Google Docs file
    const fetchProjectsData = async () => {
      try {
        const response = await fetch(
            'https://docs.google.com/document/d/1bei-hrabZZD_HdLcz8RodyBdJP_245zMYtbGQn5CC0M/export?format=txt'
        );
        const text = await response.text();

        // Parse the fetched content (assuming it's JSON formatted in your document)
        const parsedData = JSON.parse(text);

        // Set the projects state with the fetched data
        setAndroid(parsedData.data);
      } catch (error) {
        console.error('Error fetching the projects data:', error);
      }
    };

    fetchProjectsData();
  }, []);

  useEffect(() => {
    // Fetch the content of the Google Docs file
    const fetchProjectsData = async () => {
      try {
        const response = await fetch(
            'https://docs.google.com/document/d/1lO6Aq_7jnjBF-1WcT0yilTfsMKlHJCsXqyG8HgRW860/edit?usp=sharing'
        );
        const text = await response.text();

        // Parse the fetched content (assuming it's JSON formatted in your document)
        const parsedData = JSON.parse(text);

        // Set the projects state with the fetched data
        setAngular(parsedData.data);
      } catch (error) {
        console.error('Error fetching the projects data:', error);
      }
    };

    fetchProjectsData();
  }, []);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>As a passionate software engineer with a strong background in Computer and Systems Engineering, I thrive on building innovative and practical solutions through software development. My diverse skill set spans across web, mobile, and backend technologies, including React, Node.js, Flutter, Angular, Spring Boot, and Java. Over the years, I’ve worked on a variety of projects ranging from hotel reservation systems and car booking apps to Gmail clones and dynamic web-based applications. Each project is a reflection of my dedication to crafting efficient, scalable, and user-friendly applications. I invite you to explore my work, where creativity meets technology!As a passionate software engineer with a strong background in Computer and Systems Engineering, I thrive on building innovative and practical solutions through software development. My diverse skill set spans across web, mobile, and backend technologies, including React, Node.js, Flutter, Angular, Spring Boot, and Java. Over the years, I’ve worked on a variety of projects ranging from hotel reservation systems and car booking apps to Gmail clones and dynamic web-based applications. Each project is a reflection of my dedication to crafting efficient, scalable, and user-friendly applications. I invite you to explore my work, where creativity meets technology!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">React</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Android</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Angular</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          react.map((project, index) => {
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
                    <Tab.Pane eventKey="second">
                      <Row>
                      {
                        android.map((project, index) => {
                          return (
                              <ProjectCard
                                  key={index}
                                  {...project}
                              />
                          )
                        })
                      }</Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          angular.map((project, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                />
                            )
                          })
                        }</Row>
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
