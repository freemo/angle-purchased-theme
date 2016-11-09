import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import SweetAlertRun from './SweetAlert.run';
import { Grid, Row, Col } from 'react-bootstrap';

class SweetAlert extends React.Component {
    componentDidMount() {
        SweetAlertRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>SweetAlert
                    <small>A Beautiful Replacement For Javascript's "alert"</small>
                </h3>
                <Grid fluid>
                    <h4 className="page-header mt0">Usage examples</h4>
                    <Row>
                        <Col sm={9} lg={6}>
                            <p>A basic message</p>
                        </Col>
                        <Col sm={3} lg={6}>
                            <p><a id="swal-demo1" href="" className="btn btn-primary">Try me!</a>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={9} lg={6}>
                            <p>A title with a text under</p>
                        </Col>
                        <Col sm={3} lg={6}>
                            <p><a id="swal-demo2" href="" className="btn btn-primary">Try me!</a>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={9} lg={6}>
                            <p>A success message!</p>
                        </Col>
                        <Col sm={3} lg={6}>
                            <p><a id="swal-demo3" href="" className="btn btn-primary">Try me!</a>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={9} lg={6}>
                            <p>A warning message, with a function attached to the &quot;Confirm&quot;-button</p>
                        </Col>
                        <Col sm={3} lg={6}>
                            <p><a id="swal-demo4" href="" className="btn btn-primary">Try me!</a>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={9} lg={6}>
                            <p>... and by passing a parameter, you can execute something else for &quot;Cancel&quot;.</p>
                        </Col>
                        <Col sm={3} lg={6}>
                            <p><a id="swal-demo5" href="" className="btn btn-primary">Try me!</a>
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </ContentWrapper>
            );
    }

}

export default SweetAlert;