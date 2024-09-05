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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
