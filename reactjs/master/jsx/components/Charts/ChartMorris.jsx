import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import ChartMorrisRun from './ChartMorris.run';

class ChartMorris extends React.Component {
    componentDidMount() {
        ChartMorrisRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Morris JS</h3>
                <Grid fluid>
                    <Row>
                        <Col md={ 6 }>
                            <Panel header="Line">
                                <div id="morris-line"></div>
                            </Panel>
                        </Col>
                        <Col md={ 6 }>
                            <Panel header="Area">
                                <div id="morris-area"></div>
                            </Panel>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 6 }>
                            <Panel header="Bar">
                                <div id="morris-bar"></div>
                            </Panel>
                        </Col>
                        <Col md={ 6 }>
                            <Panel header="Donut">
                                <div id="morris-donut"></div>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </ContentWrapper>
            );
    }

}

export default ChartMorris;

