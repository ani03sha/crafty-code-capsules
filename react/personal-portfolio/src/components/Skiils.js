import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Meter1 from '../assets/img/meter1.svg';
import Meter2 from '../assets/img/meter2.svg';
import Meter3 from '../assets/img/meter3.svg';
import ColorSharp from '../assets/img/color-sharp.png';

const Skills = () => {

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
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <Carousel responsive={responsive} infinite={false} className="skill-slider">
                                <div className="item">
                                    <img src={Meter1} alt="Skill img" />
                                    <h5>Full stack development</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter2} alt="Skill img" />
                                    <h5>System design</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter3} alt="Skill img" />
                                    <h5>Blockchain</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter1} alt="Skill img" />
                                    <h5>Machine Learning and Artificial Intelligence</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={ColorSharp} alt="Background" />
        </section>
    );
}

export default Skills;