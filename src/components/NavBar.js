import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/Screenshot 2024-09-04 192530.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/Github (2).png';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router,Routes, Route , useNavigate
} from "react-router-dom";

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const handleL = (event) => {
        event.preventDefault();
        window.open("https://www.linkedin.com/in/abdelrhman-saad-93b6451bb/","_blank")
        //window.location.href = 'https://reactjs.org';
    };
    const handleW = (event) => {
        event.preventDefault();
        window.open("https://wa.me/+201154154046","_blank")
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




    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <h5 className="name">Abdelrahman Saad</h5>
                        {/*<img src={logo} alt="Logo" />*/}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
              <div className="social-icon">
                <a onClick={handleL}><img src={navIcon1} alt="" /></a>
                <a onClick={handleF}><img src={navIcon2} alt="" /></a>
                <a onClick={handleG}><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#connect' onClick={handleW}>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}