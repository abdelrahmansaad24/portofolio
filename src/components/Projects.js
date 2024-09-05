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
  const [reals, setReals] = useState([]);
  const [logos, setLogos] = useState([]);
  const [projects, setProjects] = useState([]);

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
        setReals(parsedData.data);
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
        setLogos(parsedData.data);
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
                      <Nav.Link eventKey="first">Reals</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Logos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          reals.map((project, index) => {
                            return (
                              <VideosCard
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
                        logos.map((project, index) => {
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
                      <p>Hotel Reservation System
                        Technologies Used: Angular, Spring Boot, SQL
                        Description: Developed a comprehensive hotel reservation system that allows users to book rooms, manage reservations, and process payments. Implemented features such as room availability checks, user authentication, and payment gateway integration.
                        Key Contributions: Designed the front-end using Angular, developed RESTful APIs with Spring Boot, and managed the database with SQL.
                        Car Rental Application
                        Technologies Used: Flutter, Firebase, Node.js
                        Description: Created a cross-platform car rental application that enables users to rent cars, view rental history, and manage their profiles. Integrated Firebase for real-time database management and authentication.
                        Key Contributions: Built the user interface with Flutter, handled backend services with Node.js, and implemented real-time data synchronization with Firebase.
                        Gmail Clone
                        Technologies Used: React, Node.js, MongoDB
                        Description: Developed a Gmail clone that replicates core functionalities such as sending and receiving emails, managing contacts, and organizing emails into folders. Ensured a responsive and user-friendly interface.
                        Key Contributions: Developed the front-end with React, created backend services with Node.js, and used MongoDB for data storage.
                        Dropbox Integration
                        Technologies Used: Java, Spring Boot, Dropbox API
                        Description: Integrated Dropbox functionality into an existing application, allowing users to upload, download, and manage files directly from their Dropbox accounts. Implemented secure authentication and file handling.
                        Key Contributions: Utilized Java and Spring Boot to integrate Dropbox API, ensuring seamless file management and secure data transfer.</p>
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
