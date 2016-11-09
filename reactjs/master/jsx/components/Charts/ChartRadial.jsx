import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import ChartRadialRun from './ChartRadial.run';

class ChartRadial extends React.Component {
    componentDidMount() {
        ChartRadialRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Radial charts
                   <small>Canvas based &amp; No canvas Pure CSS radial progress bars solutions</small>
                </h3>
                <h4 className="page-header">Knob</h4>
                <Row>
                    <Col md={ 3 } sm={ 6 }>
                        <Panel header="Default" className="text-center">
                            <input id="knob-chart1" type="text" defaultValue="80" />
                        </Panel>
                    </Col>
                    <Col md={ 3 } sm={ 6 }>
                        <Panel header="Ready only" className="text-center">
                            <input id="knob-chart2" type="text" defaultValue="45" />
                        </Panel>
                    </Col>
                    <Col md={ 3 } sm={ 6 }>
                        <Panel header="Offset and arc" className="text-center">
                            <input id="knob-chart3" type="text" defaultValue="30" />
                        </Panel>
                    </Col>
                    <Col md={ 3 } sm={ 6 }>
                        <Panel header="Display previous" className="text-center">
                            <input id="knob-chart4" type="text" defaultValue="20" />
                        </Panel>
                    </Col>
                </Row>
                <h4 className="page-header">Easypie Charts</h4>
                <Row>
                    <Col md={ 3 } sm={ 6 }>
                        <Panel header="Default" className="text-center">
                            <div id="easypie1" data-percent="85" className="easypie-chart">
                                <span>85</span>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={ 3 } sm={ 6 }>
                        <Panel header="Slim" className="text-center">
                            <div id="easypie2" data-percent="45" className="easypie-chart">
                                <span>45</span>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={ 3 } sm={ 6 }>
                        <Panel header="Track color" className="text-center">
                            <div id="easypie3" data-percent="25" className="easypie-chart">
                                <span>25</span>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={ 3 } sm={ 6 }>
                        <Panel header="Scale color" className="text-center">
                            <div id="easypie4" data-percent="60" className="easypie-chart">
                                <span>60</span>
                            </div>
                        </Panel>
                    </Col>
                </Row>
                <h4 className="page-header">Pure CSS
                   <small>radial progress bars solutions</small>
                </h4>
                { /* START row */ }
                <Row>
                    <div className="col-lg-6">
                        { /* START panel */ }
                        <Panel header="Radial Size" className="text-center">
                            <Row>
                                <Col md={ 3 }>
                                    <div data-label="85%" className="radial-bar radial-bar-85 radial-bar-lg"></div>
                                    <p><code>.radial-bar.radial-bar-85.radial-bar-lg</code>
                                    </p>
                                </Col>
                                <Col md={ 3 }>
                                    <div data-label="45%" className="radial-bar radial-bar-45"></div>
                                </Col>
                                <Col md={ 3 }>
                                    <div data-label="60%" className="radial-bar radial-bar-60 radial-bar-sm"></div>
                                </Col>
                                <Col md={ 3 }>
                                    <div data-label="20%" className="radial-bar radial-bar-20 radial-bar-xs"></div>
                                </Col>
                            </Row>
                        </Panel>
                        { /* END panel */ }
                        { /* START panel */ }
                        <Panel header="Radial with Images" className="text-center">
                            <Row>
                                <Col md={ 3 }>
                                    <div className="radial-bar radial-bar-20 radial-bar radial-bar-danger">
                                        <img src="img/user/03.jpg" alt="Image" />
                                    </div>
                                </Col>
                                <Col md={ 3 }>
                                    <div data-label="35%" className="radial-bar radial-bar-35 radial-bar-warning">
                                        <img src="img/user/01.jpg" alt="Image" />
                                    </div>
                                </Col>
                                <Col md={ 3 }>
                                    <div data-label="50%" className="radial-bar radial-bar-50 radial-bar-info">
                                        <img src="img/user/04.jpg" alt="Image" />
                                    </div>
                                </Col>
                                <Col md={ 3 }>
                                    <div data-label="100%" className="radial-bar radial-bar-100 radial-bar-success">
                                        <img src="img/user/05.jpg" alt="Image" />
                                    </div>
                                </Col>
                            </Row>
                        </Panel>
                        { /* END panel */ }
                        { /* START panel */ }
                        <Panel header="Radial with Tooltips" className="text-center">
                            <Row>
                                <Col md={ 3 }>
                                    <br/>
                                    <div data-label="85%" data-toggle="tooltip" data-title="85%" className="radial-bar radial-bar-85"></div>
                                </Col>
                                <Col md={ 3 }>
                                    <br/>
                                    <div data-label="45%" data-toggle="tooltip" data-title="45%" className="radial-bar radial-bar-45"></div>
                                </Col>
                                <Col md={ 3 }>
                                    <br/>
                                    <div data-label="60%" data-toggle="tooltip" data-title="60%" className="radial-bar radial-bar-60"></div>
                                </Col>
                                <Col md={ 3 }>
                                    <br/>
                                    <div data-label="20%" data-toggle="tooltip" data-title="20%" className="radial-bar radial-bar-20"></div>
                                </Col>
                            </Row>
                        </Panel>
                        { /* END panel */ }
                    </div>
                    <div className="col-lg-6">
                        { /* START panel */ }
                        <Panel header="Radial Variants" className="text-center">
                            <Row>
                                <Col md={ 3 }>
                                    <div data-label="20%" className="radial-bar radial-bar-20 radial-bar-lg radial-bar-danger"></div>
                                    <p><code>.radial-bar.radial-bar-20.radial-bar-lg.radial-bar-danger</code>
                                    </p>
                                </Col>
                                <Col md={ 3 }>
                                    <div data-label="35%" className="radial-bar radial-bar-35 radial-bar-lg radial-bar-warning"></div>
                                </Col>
                                <Col md={ 3 }>
                                    <div data-label="50%" className="radial-bar radial-bar-50 radial-bar-lg radial-bar-info"></div>
                                </Col>
                                <Col md={ 3 }>
                                    <div data-label="100%" className="radial-bar radial-bar-100 radial-bar-lg radial-bar-success"></div>
                                </Col>
                            </Row>
                        </Panel>
                        { /* END panel */ }
                        { /* START panel */ }
                        <div className="panel panel-default">
                            <div className="panel-heading">Radial applications</div>
                            <div className="panel-body text-center">
                                <div data-label="85%" className="radial-bar radial-bar-85 radial-bar-lg"></div>
                                <p>Visitors</p>
                            </div>
                            <div className="panel-footer text-center">
                                <Row>
                                    <Col md={ 4 }>
                                        <div data-label="35%" className="radial-bar radial-bar-warning radial-bar-35 radial-bar-sm"></div>
                                        <p>
                                            <small>Conversions</small>
                                        </p>
                                    </Col>
                                    <Col md={ 4 }>
                                        <div data-label="45%" className="radial-bar radial-bar-info radial-bar-45 radial-bar-sm"></div>
                                        <p>
                                            <small>Recurrent</small>
                                        </p>
                                    </Col>
                                    <Col md={ 4 }>
                                        <div data-label="20%" className="radial-bar radial-bar-success radial-bar-20 radial-bar-sm"></div>
                                        <p>
                                            <small>Uniques</small>
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        { /* END panel */ }
                    </div>
                </Row>
                { /* END row */ }
                <h4 className="page-header">ClassyLoader
                   <small>canvas based jQuery loader plugin</small>
                </h4>
                { /* START panel */ }
                <Panel header="" className="text-center">
                    <Row>
                        <Col md={ 3 }>
                            <canvas data-classyloader="" data-trigger-in-view="true" data-percentage="100" data-speed="20" data-font-size="50px" data-diameter="80" data-line-color="#0094cb"
                            data-remaining-line-color="rgba(200,200,200,0.4)" data-line-width="10"></canvas>
                        </Col>
                        <Col md={ 3 }>
                            <canvas data-classyloader="" data-percentage="60" data-speed="8" data-font-size="20px" data-diameter="70" data-line-color="#7bbf62" data-remaining-line-color="#edf2f6"
                            data-line-width="40" data-rounded-line="true" data-show-text="false"></canvas>
                        </Col>
                        <Col md={ 3 }>
                            <canvas data-classyloader="" data-percentage="60" data-speed="40" data-line-color="#ff3366" data-remaining-line-color="#edf2f6" data-line-width="2"></canvas>
                        </Col>
                        <Col md={ 3 }>
                            <canvas data-classyloader="" data-percentage="34" data-speed="20" data-font-size="20px" data-diameter="30" data-line-color="#f35839" data-remaining-line-color="#edf2f6"
                            data-line-width="40"></canvas>
                        </Col>
                    </Row>
                </Panel>
            </ContentWrapper>
            );
    }

}

export default ChartRadial;
