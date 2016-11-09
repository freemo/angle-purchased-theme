import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import ChartChartistRun from './ChartChartist.run';

class ChartChartist extends React.Component {
    componentDidMount() {
        ChartChartistRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Chartist</h3>
                <Grid fluid>
                    <Row>
                        <Col md={ 4 }>
                            <Panel header="Bar bipolar">
                                <div id="ct-bar1" className="ct-chart"></div>
                            </Panel>
                        </Col>
                        <Col md={ 4 }>
                            <Panel header="Bar Horizontal">
                                <div id="ct-bar2" className="ct-chart"></div>
                            </Panel>
                        </Col>
                        <Col md={ 4 }>
                            <Panel header="Line">
                                <div id="ct-line1" className="ct-chart"></div>
                            </Panel>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 6 }>
                            <Panel header="Smil Animations">
                                <div id="ct-line2" className="ct-chart"></div>
                            </Panel>
                        </Col>
                        <Col md={ 6 }>
                            <Panel header="SVG Path Animations">
                                <div id="ct-line3" className="ct-chart"></div>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </ContentWrapper>
            );
    }

}

export default ChartChartist;
