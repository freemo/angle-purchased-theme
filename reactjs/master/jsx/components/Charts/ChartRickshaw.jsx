import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import ChartRickshawRun from './ChartRickshaw.run';

class ChartRickshaw extends React.Component {
    componentDidMount() {
        ChartRickshawRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Rickshaw</h3>
                <Grid fluid>
                    <Panel header="Rickshaw graph">
                        <div id="rickshaw1"></div>
                    </Panel>
                    <Row>
                        <Col md={ 4 }>
                            <Panel header="Stacked Area">
                                <div id="rickshaw2"></div>
                            </Panel>
                        </Col>
                        <Col md={ 4 }>
                            <Panel header="Line">
                                <div id="rickshaw3"></div>
                            </Panel>
                        </Col>
                        <Col md={ 4 }>
                            <Panel header="Stacked Bars">
                                <div id="rickshaw4"></div>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </ContentWrapper>
            );
    }

}

export default ChartRickshaw;

