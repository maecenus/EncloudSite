import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';

class Mobile extends Component {
    render() {
        return (
        <div>
            <div id="mobile">
                <Grid>
                    <div id="mobile-container">
                        <Row>
                            <Col md={8} >
                                <h1 id="mobile-head">Mobile App Design</h1>
                            </Col>
                            <Col md={4}>
                                <i className="fa fa-mobile fa-5x" />
                            </Col>
                        </Row>
                        <br/>
                        <hr/>
                        <Row id="mobile-message">
                            <Col md={9} mdOffset={2}>
                                <p>Encloud can help your mobile strategy with our custom moble app design and development process.
                                    Let our experienced team assist you with your project's scope, work with you to deliver your project on
                                    time and keep you updated at each step along the way. </p>
                            </Col>
                        </Row>
                    </div>
                </Grid>
            </div>
            <Jumbotron id="mobile-jumbotron">
            </Jumbotron>
            </div>
        )
    }
}

export default Mobile;

