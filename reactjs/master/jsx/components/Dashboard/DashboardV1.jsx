import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Dropdown, MenuItem } from 'react-bootstrap';
import DashboardRun from './DashboardV1.run';

class DashboardV1 extends React.Component {

    componentDidMount() {
        DashboardRun(
            ReactDom.findDOMNode(this.refs.chartSpline)
        );
    }
    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    { /* START Language list */ }
                    <div className="pull-right">
                        <Dropdown id="dropdown-tr" pullRight>
                            <Dropdown.Toggle>
                                English
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="animated fadeInUpShort">
                                <MenuItem eventKey="1" data-set-lang="en">English</MenuItem>
                                <MenuItem eventKey="2" data-set-lang="es">Spanish</MenuItem>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    { /* END Language list */ } Dashboard
                    <small data-localize="dashboard.WELCOME">Welcome to Angle!</small>
                </div>
                { /* START widgets box */ }
                <Row>
                    <Col lg={ 3 } sm={ 6 }>
                        { /* START widget */ }
                        <div className="panel widget bg-primary">
                            <Row className="row-table">
                                <Col xs={ 4 } className="text-center bg-primary-dark pv-lg">
                                    <em className="icon-cloud-upload fa-3x"></em>
                                </Col>
                                <Col xs={ 8 } className="pv-lg">
                                    <div className="h2 mt0">1700</div>
                                    <div className="text-uppercase">Uploads</div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={ 3 } sm={ 6 }>
                        { /* START widget */ }
                        <div className="panel widget bg-purple">
                            <Row className="row-table">
                                <Col xs={ 4 } className="text-center bg-purple-dark pv-lg">
                                    <em className="icon-globe fa-3x"></em>
                                </Col>
                                <Col xs={ 8 } className="pv-lg">
                                    <div className="h2 mt0">700
                                        <small>GB</small>
                                    </div>
                                    <div className="text-uppercase">Quota</div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={ 3 } md={ 6 } sm={ 12 }>
                        { /* START widget */ }
                        <div className="panel widget bg-green">
                            <Row className="row-table">
                                <Col xs={ 4 } className="text-center bg-green-dark pv-lg">
                                    <em className="icon-bubbles fa-3x"></em>
                                </Col>
                                <Col xs={ 8 } className="pv-lg">
                                    <div className="h2 mt0">500</div>
                                    <div className="text-uppercase">Reviews</div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={ 3 } md={ 6 } sm={ 12 }>
                        { /* START date widget */ }
                        <div className="panel widget">
                            <Row className="row-table">
                                <Col xs={ 4 } className="text-center bg-green pv-lg">
                                    { /* See formats: https://docs.angularjs.org/api/ng/filter/date */ }
                                    <div data-now="" data-format="MMMM" className="text-sm"></div>
                                    <br />
                                    <div data-now="" data-format="D" className="h2 mt0"></div>
                                </Col>
                                <Col xs={ 8 } className="pv-lg">
                                    <div data-now="" data-format="dddd" className="text-uppercase"></div>
                                    <br />
                                    <div data-now="" data-format="h:mm" className="h2 mt0"></div>
                                    <div data-now="" data-format="a" className="text-muted text-sm"></div>
                                </Col>
                            </Row>
                        </div>
                        { /* END date widget */ }
                    </Col>
                </Row>
                { /* END widgets box */ }
                <Row>
                    { /* START dashboard main content */ }
                    <Col lg={ 9 }>
                        { /* START chart */ }
                        <Row>
                            <Col lg={ 12 }>
                                { /* START widget */ }
                                <div id="panelChart9" className="panel panel-default">
                                    <div className="panel-heading">
                                        <a href="#" data-tool="panel-refresh" data-toggle="tooltip" title="Refresh Panel" className="pull-right">
                                            <em className="fa fa-refresh"></em>
                                        </a>
                                        <div className="panel-title">Inbound visitor statistics</div>
                                    </div>
                                    <div className="panel-body">
                                        <div ref="chartSpline" className="chart-spline flot-chart"></div>
                                    </div>
                                </div>
                                { /* END widget */ }
                            </Col>
                        </Row>
                        { /* END chart */ }
                        <Row>
                            <Col lg={ 12 }>
                                <div className="panel widget">
                                    <Row className="row-table">
                                        <Col md={ 2 } sm={ 3 } xs={ 6 } className="text-center bg-info pv-xl">
                                            <em className="wi wi-day-sunny fa-4x"></em>
                                        </Col>
                                        <Col md={ 2 } sm={ 3 } xs={ 6 } className="pv br">
                                            <div className="h1 m0 text-bold">32&deg;</div>
                                            <div className="text-uppercase">Clear</div>
                                        </Col>
                                        <Col md={ 2 } sm={ 3 } className="hidden-xs pv text-center br">
                                            <div className="text-info text-sm">10 AM</div>
                                            <div className="text-muted text-md">
                                                <em className="wi wi-day-cloudy"></em>
                                            </div>
                                            <div className="text-info">
                                                <em className="wi wi-sprinkles"></em>
                                                <span className="text-muted">20%</span>
                                            </div>
                                            <div className="text-muted">27&deg;</div>
                                        </Col>
                                        <Col md={ 2 } sm={ 3 } className="hidden-xs pv text-center br">
                                            <div className="text-info text-sm">11 AM</div>
                                            <div className="text-muted text-md">
                                                <em className="wi wi-day-cloudy"></em>
                                            </div>
                                            <div className="text-info">
                                                <em className="wi wi-sprinkles"></em>
                                                <span className="text-muted">30%</span>
                                            </div>
                                            <div className="text-muted">28&deg;</div>
                                        </Col>
                                        <Col md={ 2 } className="hidden-sm hidden-xs pv text-center br">
                                            <div className="text-info text-sm">12 PM</div>
                                            <div className="text-muted text-md">
                                                <em className="wi wi-day-cloudy"></em>
                                            </div>
                                            <div className="text-info">
                                                <em className="wi wi-sprinkles"></em>
                                                <span className="text-muted">20%</span>
                                            </div>
                                            <div className="text-muted">30&deg;</div>
                                        </Col>
                                        <Col md={ 2 } className="hidden-sm hidden-xs pv text-center">
                                            <div className="text-info text-sm">1 PM</div>
                                            <div className="text-muted text-md">
                                                <em className="wi wi-day-sunny-overcast"></em>
                                            </div>
                                            <div className="text-info">
                                                <em className="wi wi-sprinkles"></em>
                                                <span className="text-muted">0%</span>
                                            </div>
                                            <div className="text-muted">30&deg;</div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={ 4 }>
                                { /* START widget */ }
                                <div className="panel widget">
                                    <div className="panel-body">
                                        <div className="clearfix">
                                            <h3 className="pull-left text-muted mt0">300</h3>
                                            <em className="pull-right text-muted fa fa-coffee fa-2x"></em>
                                        </div>
                                        <div data-sparkline="" data-type="line" data-height="80" data-width="100%" data-line-width="2" data-line-color="#7266ba" data-spot-color="#888" data-min-spot-color="#7266ba"
                                        data-max-spot-color="#7266ba" data-fill-color="" data-highlight-line-color="#fff" data-spot-radius="3" data-values="1,3,4,7,5,9,4,4,7,5,9,6,4"
                                        data-resize="true" className="pv-lg"></div>
                                        <p>
                                            <small className="text-muted">Actual progress</small>
                                        </p>
                                        <div className="progress progress-xs">
                                            <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={ {    width: "80%"} } className="progress-bar progress-bar-info progress-bar-striped">
                                                <span className="sr-only">80% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                { /* END widget */ }
                            </Col>
                            <Col lg={ 8 }>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <div className="pull-right label label-danger">5</div>
                                        <div className="pull-right label label-success">12</div>
                                        <div className="panel-title">Team messages</div>
                                    </div>
                                    { /* START list group */ }
                                    <div data-height="180" data-scrollable="" className="list-group">
                                        { /* START list group item */ }
                                        <a href="#" className="list-group-item">
                                            <div className="media-box">
                                                <div className="pull-left">
                                                    <img src="img/user/02.jpg" alt="Image" className="media-box-object img-circle thumb32" />
                                                </div>
                                                <div className="media-box-body clearfix">
                                                    <small className="pull-right">2h</small>
                                                    <strong className="media-box-heading text-primary">
                                                                      <span className="circle circle-success circle-lg text-left"></span>Catherine Ellis</strong>
                                                    <p className="mb-sm">
                                                        <small>Cras sit amet nibh libero, in gravida nulla. Nulla...</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        { /* END list group item */ }
                                        { /* START list group item */ }
                                        <a href="#" className="list-group-item">
                                            <div className="media-box">
                                                <div className="pull-left">
                                                    <img src="img/user/03.jpg" alt="Image" className="media-box-object img-circle thumb32" />
                                                </div>
                                                <div className="media-box-body clearfix">
                                                    <small className="pull-right">3h</small>
                                                    <strong className="media-box-heading text-primary">
                                                                      <span className="circle circle-success circle-lg text-left"></span>Jessica Silva</strong>
                                                    <p className="mb-sm">
                                                        <small>Cras sit amet nibh libero, in gravida nulla. Nulla facilisi.</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        { /* END list group item */ }
                                        { /* START list group item */ }
                                        <a href="#" className="list-group-item">
                                            <div className="media-box">
                                                <div className="pull-left">
                                                    <img src="img/user/09.jpg" alt="Image" className="media-box-object img-circle thumb32" />
                                                </div>
                                                <div className="media-box-body clearfix">
                                                    <small className="pull-right">4h</small>
                                                    <strong className="media-box-heading text-primary">
                                                                      <span className="circle circle-danger circle-lg text-left"></span>Jessie Wells</strong>
                                                    <p className="mb-sm">
                                                        <small>Cras sit amet nibh libero, in gravida nulla. Nulla...</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        { /* END list group item */ }
                                        { /* START list group item */ }
                                        <a href="#" className="list-group-item">
                                            <div className="media-box">
                                                <div className="pull-left">
                                                    <img src="img/user/12.jpg" alt="Image" className="media-box-object img-circle thumb32" />
                                                </div>
                                                <div className="media-box-body clearfix">
                                                    <small className="pull-right">1d</small>
                                                    <strong className="media-box-heading text-primary">
                                                                      <span className="circle circle-danger circle-lg text-left"></span>Rosa Burke</strong>
                                                    <p className="mb-sm">
                                                        <small>Cras sit amet nibh libero, in gravida nulla. Nulla...</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        { /* END list group item */ }
                                        { /* START list group item */ }
                                        <a href="#" className="list-group-item">
                                            <div className="media-box">
                                                <div className="pull-left">
                                                    <img src="img/user/10.jpg" alt="Image" className="media-box-object img-circle thumb32" />
                                                </div>
                                                <div className="media-box-body clearfix">
                                                    <small className="pull-right">2d</small>
                                                    <strong className="media-box-heading text-primary">
                                                                      <span className="circle circle-danger circle-lg text-left"></span>Michelle Lane</strong>
                                                    <p className="mb-sm">
                                                        <small>Mauris eleifend, libero nec cursus lacinia...</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        { /* END list group item */ }
                                    </div>
                                    { /* END list group */ }
                                    { /* START panel footer */ }
                                    <div className="panel-footer clearfix">
                                        <div className="input-group">
                                            <input type="text" placeholder="Search message .." className="form-control input-sm" />
                                            <span className="input-group-btn">
                                                                <button type="submit" className="btn btn-default btn-sm"><i className="fa fa-search"></i>
                                                                </button>
                                                             </span>
                                        </div>
                                    </div>
                                    { /* END panel-footer */ }
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    { /* END dashboard main content */ }
                    { /* START dashboard sidebar */ }
                    <Col lg={ 3 }>
                        { /* START loader widget */ }
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <a href="#" className="text-muted pull-right">
                                    <em className="fa fa-arrow-right"></em>
                                </a>
                                <div className="text-info">Average Monthly Uploads</div>
                                <canvas data-classyloader="" data-percentage="70" data-speed="20" data-font-size="40px" data-diameter="70" data-line-color="#23b7e5" data-remaining-line-color="rgba(200,200,200,0.4)"
                                data-line-width="10" data-rounded-line="true" className="center-block"></canvas>
                                <div data-sparkline="" data-bar-color="#23b7e5" data-height="30" data-bar-width="5" data-bar-spacing="2" data-values="5,4,8,7,8,5,4,6,5,5,9,4,6,3,4,7,5,4,7" className="text-center"></div>
                            </div>
                            <div className="panel-footer">
                                <p className="text-muted">
                                    <em className="fa fa-upload fa-fw"></em>
                                    <span>This Month</span>
                                    <span className="text-dark">1000 Gb</span>
                                </p>
                            </div>
                        </div>
                        { /* END loader widget */ }
                        { /* START messages and activity */ }
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="panel-title">Latest activities</div>
                            </div>
                            { /* START list group */ }
                            <div className="list-group">
                                { /* START list group item */ }
                                <div className="list-group-item">
                                    <div className="media-box">
                                        <div className="pull-left">
                                            <span className="fa-stack">
                                                                <em className="fa fa-circle fa-stack-2x text-purple"></em>
                                                                <em className="fa fa-cloud-upload fa-stack-1x fa-inverse text-white"></em>
                                                             </span>
                                        </div>
                                        <div className="media-box-body clearfix">
                                            <small className="text-muted pull-right ml">15m</small>
                                            <div className="media-box-heading"><a href="#" className="text-purple m0">NEW FILE</a>
                                            </div>
                                            <p className="m0">
                                                <small><a href="#">Bootstrap.xls</a>
                                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                { /* END list group item */ }
                                { /* START list group item */ }
                                <div className="list-group-item">
                                    <div className="media-box">
                                        <div className="pull-left">
                                            <span className="fa-stack">
                                                                <em className="fa fa-circle fa-stack-2x text-info"></em>
                                                                <em className="fa fa-file-text-o fa-stack-1x fa-inverse text-white"></em>
                                                             </span>
                                        </div>
                                        <div className="media-box-body clearfix">
                                            <small className="text-muted pull-right ml">2h</small>
                                            <div className="media-box-heading"><a href="#" className="text-info m0">NEW DOCUMENT</a>
                                            </div>
                                            <p className="m0">
                                                <small><a href="#">Bootstrap.doc</a>
                                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                { /* END list group item */ }
                                { /* START list group item */ }
                                <div className="list-group-item">
                                    <div className="media-box">
                                        <div className="pull-left">
                                            <span className="fa-stack">
                                                                <em className="fa fa-circle fa-stack-2x text-danger"></em>
                                                                <em className="fa fa-exclamation fa-stack-1x fa-inverse text-white"></em>
                                                             </span>
                                        </div>
                                        <div className="media-box-body clearfix">
                                            <small className="text-muted pull-right ml">5h</small>
                                            <div className="media-box-heading"><a href="#" className="text-danger m0">BROADCAST</a>
                                            </div>
                                            <p className="m0"><a href="#">Read</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                { /* END list group item */ }
                                { /* START list group item */ }
                                <div className="list-group-item">
                                    <div className="media-box">
                                        <div className="pull-left">
                                            <span className="fa-stack">
                                                                <em className="fa fa-circle fa-stack-2x text-success"></em>
                                                                <em className="fa fa-clock-o fa-stack-1x fa-inverse text-white"></em>
                                                             </span>
                                        </div>
                                        <div className="media-box-body clearfix">
                                            <small className="text-muted pull-right ml">15h</small>
                                            <div className="media-box-heading"><a href="#" className="text-success m0">NEW MEETING</a>
                                            </div>
                                            <p className="m0">
                                                <small>On
                                                                   <em>10/12/2015 09:00 am</em>
                                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                { /* END list group item */ }
                                { /* START list group item */ }
                                <div className="list-group-item">
                                    <div className="media-box">
                                        <div className="pull-left">
                                            <span className="fa-stack">
                                                                <em className="fa fa-circle fa-stack-2x text-warning"></em>
                                                                <em className="fa fa-tasks fa-stack-1x fa-inverse text-white"></em>
                                                             </span>
                                        </div>
                                        <div className="media-box-body clearfix">
                                            <small className="text-muted pull-right ml">1w</small>
                                            <div className="media-box-heading"><a href="#" className="text-warning m0">TASKS COMPLETION</a>
                                            </div>
                                            <div className="progress progress-xs m0">
                                                <div role="progressbar" aria-valuenow="22" aria-valuemin="0" aria-valuemax="100" style={ {    width: "22%"} } className="progress-bar progress-bar-warning progress-bar-striped">
                                                    <span className="sr-only">22% Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                { /* END list group item */ }
                            </div>
                            { /* END list group */ }
                            { /* START panel footer */ }
                            <div className="panel-footer clearfix">
                                <a href="#" className="pull-left">
                                    <small>Load more</small>
                                </a>
                            </div>
                            { /* END panel-footer */ }
                        </div>
                        { /* END messages and activity */ }
                    </Col>
                    { /* END dashboard sidebar */ }
                </Row>
            </ContentWrapper>
            );

    }

}

export default DashboardV1;
