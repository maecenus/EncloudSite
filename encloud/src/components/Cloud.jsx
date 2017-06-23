import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';

class Cloud extends Component {
    render() {
        return (
        <div>
            <div id="cloud">
                <Grid>
                    <div id="cloud-container">
                        <Row>
                            <Col md={4}>
                                <i className="fa fa-cloud fa-5x" />
                            </Col>
                            <Col md={8}>
                                <h1>Cloud App Design</h1>
                            </Col>
                        </Row>
                        <br/>
                        <hr/>
                        <Row id="cloud-message">
                            <Col md={6} mdOffset={3}>
                                <p>We can help your business leverage the vast resources available in the cloud today and develop applications that quickly scale up.
                                    Contact us to discuss your Cloud Strategy and Integration.</p>
                            </Col>
                        </Row>
                    </div>
                </Grid>
            </div>
            <Jumbotron id="cloud-jumbotron">
            </Jumbotron>
            </div>
        )
    }
}

export default Cloud;