import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import ChartChartJSRun from './ChartChartJS.run';

class ChartChartJS extends React.Component {
    componentDidMount() {
        ChartChartJSRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Chart JS</h3>
                <Grid fluid>
                    <Row className="mb-lg">
                        <Col lg={ 6 }>
                            <h4>Line Chart</h4>
                            <div>
                                <canvas id="chartjs-linechart"></canvas>
                            </div>
                        </Col>
                        <Col lg={ 6 }>
                            <h4>Bar Chart</h4>
                            <div>
                                <canvas id="chartjs-barchart"></canvas>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-lg">
                        <Col lg={ 6 }>
                            <h4>Polar Area Chart</h4>
                            <div>
                                <canvas id="chartjs-polarchart"></canvas>
                            </div>
                        </Col>
                        <Col lg={ 6 }>
                            <h4>Radar Chart</h4>
                            <div>
                                <canvas id="chartjs-radarchart"></canvas>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-lg">
                        <Col lg={ 6 }>
                            <h4>Pie Chart</h4>
                            <div>
                                <canvas id="chartjs-piechart"></canvas>
                            </div>
                        </Col>
                        <Col lg={ 6 }>
                            <h4>Doughnut Chart</h4>
                            <div>
                                <canvas id="chartjs-doughnutchart"></canvas>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </ContentWrapper>
            );
    }

}

export default ChartChartJS;
