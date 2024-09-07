import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/Github (2).png";

export const Footer = () => {
  const handleL = (event) => {
    event.preventDefault();
    window.open("https://www.linkedin.com/in/abdelrhman-saad-93b6451bb/","_blank")
    //window.location.href = 'https://reactjs.org';
  };
  const handleF = (event) => {
    event.preventDefault();
    window.open("https://facebook.com/abdosaad24","_blank")
    //window.location.href = 'https://reactjs.org';
  };
  const handleG = (event) => {
    event.preventDefault();
    window.open("https://github.com/abdelrahmansaad24","_blank")
    //window.location.href = 'https://reactjs.org';
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/*<MailchimpForm />*/}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a onClick={handleL}><img src={navIcon1} alt="" /></a>
              <a onClick={handleF}><img src={navIcon2} alt="" /></a>
              <a onClick={handleG}><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2024 . All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
