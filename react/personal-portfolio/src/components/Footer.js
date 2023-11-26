import { Col, Container, Row } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";
import Logo from "../assets/img/logo.svg";
import NavIcon1 from '../assets/img/nav-icon1.svg'
import NavIcon2 from '../assets/img/nav-icon2.svg';
import NavIcon3 from '../assets/img/nav-icon3.svg';

const Footer = () => {
    return(
        <footer className="footer">
            <Container className="align-items-center">
                <Row>
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={Logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://linkedin.com/in/anirshar" target='_blank' rel="noreferrer">
                                <img src={NavIcon1} alt=""></img>
                            </a>
                            <a href="https://facebook.com/anir35" target='_blank' rel="noreferrer">
                                <img src={NavIcon2} alt=""></img>
                            </a>
                            <a href="https://instagram.com/ani03sha" target='_blank' rel="noreferrer">
                                <img src={NavIcon3} alt=""></img>
                            </a>
                        </div>
                        <p>Copyright 2023. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;