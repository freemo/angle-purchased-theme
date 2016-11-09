import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import * as Flot from './ChartFlot.run';

class ChartFlot extends React.Component {

    componentDidMount() {

        Flot.chartArea(
            ReactDom.findDOMNode(this.refs.chartArea)
        );
        Flot.chartSpline(
            ReactDom.findDOMNode(this.refs.chartSpline)
        );
        Flot.chartBar(
            ReactDom.findDOMNode(this.refs.chartBar)
        );
        Flot.chartBarStacked(
            ReactDom.findDOMNode(this.refs.chartBarStacked)
        );
        Flot.chartLine(
            ReactDom.findDOMNode(this.refs.chartLine)
        );
        Flot.chartPie(
            ReactDom.findDOMNode(this.refs.chartPie)
        );
        Flot.chartDonut(
            ReactDom.findDOMNode(this.refs.chartDonut)
        );

    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div className="pull-right text-center">
                        <div data-sparkline="" data-bar-color="#cfdbe2" data-height="20" data-bar-width="3" data-bar-spacing="2" data-values="1,0,4,9,5,7,8,9,5,7,8,4,7"></div>
                    </div>Flot charts</div>
                <Grid fluid>
                    { /* START row */ }
                    <Row>
                        <Col lg={ 6 }>
                            <Panel header="Area">
                                <div ref="chartArea" className="chart-area flot-chart"></div>
                            </Panel>
                        </Col>
                        <Col lg={ 6 }>
                            <Panel header="Area Spline">
                                <div ref="chartSpline" className="chart-spline flot-chart"></div>
                            </Panel>
                        </Col>
                    </Row>
                    { /* END row */ }
                    { /* START row */ }
                    <Row>
                        <Col lg={ 6 }>
                            <Panel header="Bar">
                                <div ref="chartBar" className="chart-bar flot-chart"></div>
                            </Panel>
                        </Col>
                        <Col lg={ 6 }>
                            <Panel header="Bar - Stacked">
                                <div ref="chartBarStacked" className="chart-bar-stacked flot-chart"></div>
                            </Panel>
                        </Col>
                    </Row>
                    { /* END row */ }
                    { /* START row */ }
                    <Row>
                        <Col lg={ 12 }>
                            <Panel header="Line">
                                <div ref="chartLine" className="chart-line flot-chart"></div>
                            </Panel>
                        </Col>
                    </Row>
                    { /* END row */ }
                    { /* START row */ }
                    <Row>
                        <Col md={ 6 }>
                            <Panel header="Pie">
                                <div ref="chartPie" className="chart-pie flot-chart"></div>
                            </Panel>
                        </Col>
                        <Col md={ 6 }>
                            <Panel header="Donut (loaded from json)">
                                <div ref="chartDonut" className="chart-donut flot-chart"></div>
                            </Panel>
                        </Col>
                    </Row>
                    { /* END row */ }
                </Grid>
            </ContentWrapper>
            );
    }

}

export default ChartFlot;
