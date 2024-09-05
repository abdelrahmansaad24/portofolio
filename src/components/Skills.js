import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>With a solid foundation in software development and a diverse skill set acquired over the past five years, I bring a wealth of knowledge and experience to any project. My journey began in Alexandria, Egypt, where I honed my abilities in various programming languages, developer tools, and technologies.

                            Languages: Proficient in Python, Java, C/C++, HTML/CSS, JavaScript, SQL, and Dart, I am equipped to tackle a wide range of programming challenges.

                            Developer Tools: I am adept at using industry-standard tools such as VS Code, IntelliJ, Android Studio, and CLion, ensuring efficient and effective development workflows.

                            Technologies/Frameworks: My expertise extends to working with Linux, Node.js, Spring Boot, React, Angular, Flutter, GitHub, and JUnit, enabling me to build robust and scalable applications.

                            Coursework: My academic background includes comprehensive coursework in Object-Oriented Programming (OOP), Data Structures, Software Methodology, Algorithms Analysis, Database Management, Artificial Intelligence, and Computer Architecture, providing a strong theoretical foundation to complement my practical skills.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>flutter</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Spring boot</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>OOP</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
