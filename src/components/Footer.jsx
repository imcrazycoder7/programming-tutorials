import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Footer.css'
const Footer = () => {
    return (
        <footer className='footer-container pb-3 pt-3 mt-5 '>
            <Container>
                <hr />
                <Row>
                    <Col md={4} className='pl-0 footer-languages'>
                        <h5 className='text-center'>Technologies for you</h5>

                        <div className="laguages">
                            <ul className='footer-list'>
                                <p className='m-0 mb-1 border-bottom'>Frontend</p>
                                <li><a href="">JavaScript</a></li>
                                <li><a href="">ReactJs</a></li>
                                <li><a href="">Angular</a></li>

                            </ul>

                            <ul className='footer-list'>
                                <p className='m-0 mb-1 border-bottom'>Backend</p>
                                <li><a href="">JavaScript</a></li>
                                <li><a href="">ReactJs</a></li>
                                <li><a href="">Angular</a></li>
                                <li><a href="">NodeJs</a></li>
                            </ul>
                            <ul className='footer-list'>
                                <p className='m-0 mb-1 border-bottom'>Mobile Apps</p>
                                <li><a href="">Ionic</a></li>
                                <li><a href="">React Native</a></li>

                            </ul>
                        </div>

                    </Col>
                    <Col md={2}>
                        <h6>Tools</h6>
                        <ul className='footer-list'>
                            <li><a href="">Automation with Kofka</a></li>
                            <li><a href="">Automation with Toaska</a></li>
                            <li><a href="">Automation using Selenium</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h6>Services</h6>
                        <ul className='footer-list'>
                            <li><a href="">Website Development</a></li>
                            <li><a href="">Mobile Application Development</a></li>
                            <li><a href="">Training & Teachining</a></li>
                            <li><a href="">Desktop Software Development</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className='footer-contact'>
                        <h6 className='mb-2'>Contact Us</h6>
                        <p className='m-0'>Contact No: 8411969476</p>
                        <p className='m-0'>Email: imcrazy7@gmail.com</p>
                    </Col>
                </Row>
                <hr />
                <p className='text-center'>© Copyright 2022-2023 www.fresherkatta.com All rights reserved. Developed by Fresherkatta.</p>
            </Container>
        </footer>
    );
}

export default Footer;