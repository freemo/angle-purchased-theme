import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Dropdown, MenuItem, Tooltip, OverlayTrigger } from 'react-bootstrap';
import DashboardRun from './DashboardV2.run';

class DashboardV2 extends React.Component {

    componentDidMount() {
        DashboardRun(
            ReactDom.findDOMNode(this.refs.chartBar),
            ReactDom.findDOMNode(this.refs.chartSpline)
            );
    }

    render() {

        const tooltip = function(text) {
            return (
                <Tooltip id="tooltip">{text}</Tooltip>
            );
        };

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
                <Row>
                    <Col lg={ 4 }>
                        { /* START List group */ }
                        <ul className="list-group">
                            <li className="list-group-item">
                                <Row className="row-table pv-lg">
                                    <Col xs={ 6 }>
                                        <p className="m0 lead">1204</p>
                                        <p className="m0">
                                            <small>Commits this month</small>
                                        </p>
                                    </Col>
                                    <Col xs={ 6 } className="text-center">
                                        <div data-sparkline="" data-bar-color="#23b7e5" data-height="60" data-bar-width="10" data-bar-spacing="6" data-chart-range-min="0" data-values="3,6,7,8,4,5"></div>
                                    </Col>
                                </Row>
                            </li>
                            <li className="list-group-item">
                                <Row className="row-table pv-lg">
                                    <Col xs={ 6 }>
                                        <p className="m0 lead">$ 3,200.00</p>
                                        <p className="m0">
                                            <small>Available budget</small>
                                        </p>
                                    </Col>
                                    <Col xs={ 6 } className="text-center">
                                        <div data-sparkline="" data-type="line" data-height="60" data-width="80%" data-line-width="2" data-line-color="#7266ba" data-chart-range-min="0" data-spot-color="#888"
                                        data-min-spot-color="#7266ba" data-max-spot-color="#7266ba" data-fill-color="" data-highlight-line-color="#fff" data-spot-radius="3"
                                        data-values="7,3,4,7,5,9,4,4,7,5,9,6,4" data-resize="true"></div>
                                    </Col>
                                </Row>
                            </li>
                            <li className="list-group-item">
                                <Row className="row-table pv-lg">
                                    <Col xs={ 6 }>
                                        <p className="m0 lead">67</p>
                                        <p className="m0">
                                            <small>New followers</small>
                                        </p>
                                    </Col>
                                    <Col xs={ 6 }>
                                        <ul className="list-inline text-center">
                                            <li>
                                                <OverlayTrigger placement="top" overlay={tooltip('Katie')}>
                                                    <img src="img/user/02.jpg" alt="Follower" className="img-responsive img-circle thumb24" />
                                                </OverlayTrigger>
                                            </li>
                                            <li>
                                                <OverlayTrigger placement="top" overlay={tooltip("Cody")}>
                                                    <img src="img/user/01.jpg" alt="Follower" className="img-responsive img-circle thumb24" />
                                                </OverlayTrigger>
                                            </li>
                                            <li>
                                                <OverlayTrigger placement="top" overlay={tooltip("Tamara")}>
                                                    <img src="img/user/03.jpg" alt="Follower" className="img-responsive img-circle thumb24" />
                                                </OverlayTrigger>
                                            </li>
                                            <li>
                                                <OverlayTrigger placement="top" overlay={tooltip("Gene")}>
                                                    <img src="img/user/04.jpg" alt="Follower" className="img-responsive img-circle thumb24" />
                                                </OverlayTrigger>
                                            </li>
                                            <li>
                                                <OverlayTrigger placement="top" overlay={tooltip("Marsha")}>
                                                    <img src="img/user/04.jpg" alt="Follower" className="img-responsive img-circle thumb24" />
                                                </OverlayTrigger>
                                            </li>
                                            <li>
                                                <OverlayTrigger placement="top" overlay={tooltip("Robin")}>
                                                    <img src="img/user/09.jpg" alt="Follower" className="img-responsive img-circle thumb24" />
                                                </OverlayTrigger>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </li>
                        </ul>
                        { /* END List group */ }
                    </Col>
                    <Col lg={ 8 }>
                        { /* START bar chart */ }
                        <div id="panelChart3" className="panel">
                            <div className="panel-heading">
                                { /* START button group */ }
                                <div className="pull-right btn-group">
                                    <button type="button" data-toggle="dropdown" className="dropdown-toggle btn btn-default btn-sm">Monthly</button>
                                    <ul role="menu" className="dropdown-menu fadeInLeft animated">
                                        <li><a href="#">Daily</a>
                                        </li>
                                        <li><a href="#">Monthly</a>
                                        </li>
                                        <li><a href="#">Yearly</a>
                                        </li>
                                    </ul>
                                </div>
                                { /* END button group */ }
                                <div className="panel-title">Projects Hours</div>
                            </div>
                            <div className="panel-wrapper">
                                <div className="panel-body">
                                    <div className="indicator show">
                                        <span className="spinner"></span>
                                    </div>
                                    <div ref="chartBar" className="chart-bar-stackedv2 flot-chart"></div>
                                </div>
                            </div>
                        </div>
                        { /* END bar chart */ }
                    </Col>
                </Row>
                <div className="unwrap mv-lg">
                    { /* START chart */ }
                    <div id="panelChart9" className="panel">
                        <div className="panel-heading">
                            { /* START button group */ }
                            <div className="pull-right btn-group">
                                <button type="button" data-toggle="dropdown" className="dropdown-toggle btn btn-default btn-sm">All time</button>
                                <ul role="menu" className="dropdown-menu fadeInLeft animated">
                                    <li><a href="#">Daily</a>
                                    </li>
                                    <li><a href="#">Monthly</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li><a href="#">All time</a>
                                    </li>
                                </ul>
                            </div>
                            { /* END button group */ }
                            <div className="panel-title">Overall progress</div>
                        </div>
                        <div className="panel-wrapper">
                            <div className="panel-body">
                                <div ref="chartSpline" className="chart-splinev2 flot-chart"></div>
                            </div>
                            <div className="panel-body">
                                <Row>
                                    <Col sm={ 3 } xs={ 6 } className="text-center">
                                        <p>Projects</p>
                                        <div className="h1">25</div>
                                    </Col>
                                    <Col sm={ 3 } xs={ 6 } className="text-center">
                                        <p>Teammates</p>
                                        <div className="h1">85</div>
                                    </Col>
                                    <Col sm={ 3 } xs={ 6 } className="text-center">
                                        <p>Hours</p>
                                        <div className="h1">380</div>
                                    </Col>
                                    <Col sm={ 3 } xs={ 6 } className="text-center">
                                        <p>Budget</p>
                                        <div className="h1">$ 10,000.00</div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                    { /* END chart */ }
                </div>
                { /* START radial charts */ }
                <Row className="mb-lg">
                    <Col sm={ 3 } xs={ 6 } className="text-center">
                        <p>Current Project</p>
                        <canvas data-classyloader="" data-height="150px" data-diameter="60" data-font-size="25px" data-percentage="60" data-speed="30" data-line-color="#23b7e5" data-remaining-line-color="#edf2f6"
                        data-line-width="2"></canvas>
                    </Col>
                    <Col sm={ 3 } xs={ 6 } className="text-center">
                        <p>Current Progress</p>
                        <canvas data-classyloader="" data-height="150px" data-diameter="60" data-font-size="25px" data-percentage="30" data-speed="30" data-line-color="#f532e5" data-remaining-line-color="#edf2f6"
                        data-line-width="2"></canvas>
                    </Col>
                    <Col sm={ 3 } xs={ 6 } className="text-center">
                        <p>Space Usage</p>
                        <canvas data-classyloader="" data-height="150px" data-diameter="60" data-font-size="25px" data-percentage="50" data-speed="30" data-line-color="#7266ba" data-remaining-line-color="#edf2f6"
                        data-line-width="2"></canvas>
                    </Col>
                    <Col sm={ 3 } xs={ 6 } className="text-center">
                        <p>Interactions</p>
                        <canvas data-classyloader="" data-height="150px" data-diameter="60" data-font-size="25px" data-percentage="75" data-speed="30" data-line-color="#ff902b" data-remaining-line-color="#edf2f6"
                        data-line-width="2"></canvas>
                    </Col>
                </Row>
                { /* START radial charts */ }
                { /* START Multiple List group */ }
                <div className="list-group">
                    <a href="#" className="list-group-item">
                        <table className="wd-wide">
                            <tbody>
                                <tr>
                                    <td className="wd-xs">
                                        <div className="ph">
                                            <img src="img/dummy.png" alt="" className="media-box-object img-responsive img-rounded thumb64" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="ph">
                                            <h4 className="media-box-heading">Project A</h4>
                                            <small className="text-muted">Vestibulum ante ipsum primis in faucibus orci</small>
                                        </div>
                                    </td>
                                    <td className="wd-sm hidden-xs hidden-sm">
                                        <div className="ph">
                                            <p className="m0">Last change</p>
                                            <small className="text-muted">4 weeks ago</small>
                                        </div>
                                    </td>
                                    <td className="wd-xs hidden-xs hidden-sm">
                                        <div className="ph">
                                            <p className="m0 text-muted">
                                                <em className="icon-users mr fa-lg"></em>26</p>
                                        </div>
                                    </td>
                                    <td className="wd-xs hidden-xs hidden-sm">
                                        <div className="ph">
                                            <p className="m0 text-muted">
                                                <em className="icon-doc mr fa-lg"></em>3500</p>
                                        </div>
                                    </td>
                                    <td className="wd-sm">
                                        <div className="ph">
                                            <progressbar value="80" type="success" className="m0 progress-xs">80%</progressbar>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </a>
                </div>
                <div className="list-group">
                    <a href="#" className="list-group-item">
                        <table className="wd-wide">
                            <tbody>
                                <tr>
                                    <td className="wd-xs">
                                        <div className="ph">
                                            <img src="img/dummy.png" alt="" className="media-box-object img-responsive img-rounded thumb64" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="ph">
                                            <h4 className="media-box-heading">Project X</h4>
                                            <small className="text-muted">Vestibulum ante ipsum primis in faucibus orci</small>
                                        </div>
                                    </td>
                                    <td className="wd-sm hidden-xs hidden-sm">
                                        <div className="ph">
                                            <p className="m0">Last change</p>
                                            <small className="text-muted">Today at 06:23 am</small>
                                        </div>
                                    </td>
                                    <td className="wd-xs hidden-xs hidden-sm">
                                        <div className="ph">
                                            <p className="m0 text-muted">
                                                <em className="icon-users mr fa-lg"></em>3</p>
                                        </div>
                                    </td>
                                    <td className="wd-xs hidden-xs hidden-sm">
                                        <div className="ph">
                                            <p className="m0 text-muted">
                                                <em className="icon-doc mr fa-lg"></em>150</p>
                                        </div>
                                    </td>
                                    <td className="wd-sm">
                                        <div className="ph">
                                            <progressbar value="50" type="purple" className="m0 progress-xs">50%</progressbar>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </a>
                </div>
                <div className="list-group">
                    <a href="#" className="list-group-item">
                        <table className="wd-wide">
                            <tbody>
                                <tr>
                                    <td className="wd-xs">
                                        <div className="ph">
                                            <img src="img/dummy.png" alt="" className="media-box-object img-responsive img-rounded thumb64" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="ph">
                                            <h4 className="media-box-heading">Project Z</h4>
                                            <small className="text-muted">Vestibulum ante ipsum primis in faucibus orci</small>
                                        </div>
                                    </td>
                                    <td className="wd-sm hidden-xs hidden-sm">
                                        <div className="ph">
                                            <p className="m0">Last change</p>
                                            <small className="text-muted">Yesterday at 10:20 pm</small>
                                        </div>
                                    </td>
                                    <td className="wd-xs hidden-xs hidden-sm">
                                        <div className="ph">
                                            <p className="m0 text-muted">
                                                <em className="icon-users mr fa-lg"></em>15</p>
                                        </div>
                                    </td>
                                    <td className="wd-xs hidden-xs hidden-sm">
                                        <div className="ph">
                                            <p className="m0 text-muted">
                                                <em className="icon-doc mr fa-lg"></em>480</p>
                                        </div>
                                    </td>
                                    <td className="wd-sm">
                                        <div className="ph">
                                            <progressbar value="20" type="green" className="m0 progress-xs">20%</progressbar>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </a>
                    { /* END dashboard main content */ }
                </div>
                { /* END Multiple List group */ }
            </ContentWrapper>
            );
    }

}

export default DashboardV2;
