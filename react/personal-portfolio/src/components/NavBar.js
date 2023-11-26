import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/img/logo.svg'
import NavIcon1 from '../assets/img/nav-icon1.svg'
import NavIcon2 from '../assets/img/nav-icon2.svg';
import NavIcon3 from '../assets/img/nav-icon3.svg';

const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll);

        return window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = linkName => {
        setActiveLink(linkName);
    }

    return (
        <Navbar expand="md" className={hasScrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt='Logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('skills')}>
                            Skills
                        </Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('projects')}>
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
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
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;