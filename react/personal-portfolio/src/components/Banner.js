import { Col, Row, Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImage from '../assets/img/header-img.svg';
import { useEffect, useState } from "react";
import 'animate.css';
import TrackVisibility from "react-on-screen";

const Banner = () => {

    // Array to rotate over
    const toRotate = ['Full Stack developer', 'System Design expert', 'Blogger'];

    const [loopNumber, setLoopNumber] = useState(0);
    // To check if the current word is deleted
    const [isDeleting, setIsDeleting] = useState(false);
    // To display over every character of the word one by one
    const [text, setText] = useState('');
    // Time of transition of each letter
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    // Time of transition between each word
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text]);

    const tick = () => {
        let i = loopNumber % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(previousDelta => previousDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNumber(loopNumber + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my portfolio</span>
                                    <h1>{`Hi, I am Anirudh `}<span className="wrap">{text}</span></h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /> </button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImage} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;