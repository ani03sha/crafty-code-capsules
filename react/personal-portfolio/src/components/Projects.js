import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import ProjectImage1 from "../assets/img/project-img1.png";
import ProjectImage2 from "../assets/img/project-img2.png";
import ProjectImage3 from "../assets/img/project-img3.png";
import ProjectCard from "./ProjectCard";
import ColorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";

const Projects = () => {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: ProjectImage1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: ProjectImage2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: ProjectImage3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: ProjectImage1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: ProjectImage2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: ProjectImage3,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <h2>Projects</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
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
                                <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={ColorSharp2} alt="Projects backgound img" />
        </section>
    );
}

export default Projects;