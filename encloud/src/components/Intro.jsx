import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Mobile from './Mobile'
import Cloud from './Cloud'
import Web from './Web'
import Contact from './Contact'
// import {SparkScroll, SparkProxy, sparkScrollFactory} from 'react-spark-scroll-gsap'



class Intro extends Component {
    render() {
        return (
            <div>
                <div id="intro">
                    <Grid >
                        <div id="intro-container">
                            <Row id="intro-title">
                            <h2>Encloud</h2>
                                <p>Mobile, Cloud & Web Application Development</p>
                            </Row>
                            <Row id="intro-links">
                                <Col md={4}>
                                    <Link id="intro-link" to="/mobile">
                                        <i className="fa fa-mobile fa-5x" id="color-white"/>
                                        <h3 id="color-white">Mobile App Design</h3>
                                    </Link>
                                </Col>
                                <Col md={4}>
                                    <Link id="intro-link" to="/cloud">
                                        <i className="fa fa-cloud fa-5x" id="color-white"/>
                                        <h3 id="color-white">Cloud App Design</h3>
                                    </Link>
                                </Col>
                                <Col md={4}>
                                    <Link id="intro-link" to="/web">
                                        <i className="fa fa-window-restore fa-5x" id="color-white"/>
                                        <h3 id="color-white">Web App Design</h3>
                                    </Link>
                                </Col>
                            </Row>
                            <Row id="intro-message">
                                <p>The Encloud team has end to end stack capability and experience that can take your idea from inception to deployment</p>
                            </Row>
                        </div>
                    </Grid>
                </div>
                <Mobile/>
                <Cloud/>
                <Web/>
                <Contact />
            </div>
        )
    };
}

export default Intro;