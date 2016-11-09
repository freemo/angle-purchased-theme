import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Dropdown, MenuItem, Tabs, Tab } from 'react-bootstrap';
import DashboardRun from './DashboardV3.run';

class DashboardV3 extends React.Component {

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
                { /* START widgets box*/ }
                <Row>
                    <Col lg={ 3 } sm={ 6 }>
                        { /* START widget*/ }
                        <div className="panel bg-info-light pt b0 widget">
                            <div className="ph">
                                <em className="icon-cloud-upload fa-lg pull-right"></em>
                                <div className="h2 mt0">1700</div>
                                <div className="text-uppercase">Uploads</div>
                            </div>
                            <div data-sparkline="" data-type="line" data-width="100%" data-height="75px" data-line-color="#23b7e5" data-chart-range-min="0" data-fill-color="#23b7e5" data-spot-color="#23b7e5"
                            data-min-spot-color="#23b7e5" data-max-spot-color="#23b7e5" data-highlight-spot-color="#23b7e5" data-highlight-line-color="#23b7e5" data-values="2,5,3,7,4,5"
                            style={ {    marginBottom: "-2px"} } data-resize="true"></div>
                        </div>
                    </Col>
                    <Col lg={ 3 } sm={ 6 }>
                        { /* START widget*/ }
                        <div className="panel widget bg-purple-light pt b0 widget">
                            <div className="ph">
                                <em className="icon-globe fa-lg pull-right"></em>
                                <div className="h2 mt0">700
                                    <span className="text-sm text-white">GB</span>
                                </div>
                                <div className="text-uppercase">Quota</div>
                            </div>
                            <div data-sparkline="" data-type="line" data-width="100%" data-height="75px" data-line-color="#7266ba" data-chart-range-min="0" data-fill-color="#7266ba" data-spot-color="#7266ba"
                            data-min-spot-color="#7266ba" data-max-spot-color="#7266ba" data-highlight-spot-color="#7266ba" data-highlight-line-color="#7266ba" data-values="1,4,5,4,8,7,10"
                            style={ {    marginBottom: '-2px'} } data-resize="true"></div>
                        </div>
                    </Col>
                    <Col lg={ 3 } md={ 6 } sm={ 12 }>
                        { /* START widget*/ }
                        <div className="panel widget bg-info-light pt b0 widget">
                            <div className="ph">
                                <em className="icon-bubbles fa-lg pull-right"></em>
                                <div className="h2 mt0">500</div>
                                <div className="text-uppercase">Reviews</div>
                            </div>
                            <div data-sparkline="" data-type="line" data-width="100%" data-height="75px" data-line-color="#23b7e5" data-chart-range-min="0" data-fill-color="#23b7e5" data-spot-color="#23b7e5"
                            data-min-spot-color="#23b7e5" data-max-spot-color="#23b7e5" data-highlight-spot-color="#23b7e5" data-highlight-line-color="#23b7e5" data-values="4,5,3,10,7,15"
                            style={ {    marginBottom: '-2px'} } data-resize="true"></div>
                        </div>
                    </Col>
                    <Col lg={ 3 } md={ 6 } sm={ 12 }>
                        { /* START widget*/ }
                        <div className="panel widget bg-purple-light pt b0 widget">
                            <div className="ph">
                                <em className="icon-pencil fa-lg pull-right"></em>
                                <div className="h2 mt0">35</div>
                                <div className="text-uppercase">Annotations</div>
                            </div>
                            <div data-sparkline="" data-type="line" data-width="100%" data-height="75px" data-line-color="#7266ba" data-chart-range-min="0" data-fill-color="#7266ba" data-spot-color="#7266ba"
                            data-min-spot-color="#7266ba" data-max-spot-color="#7266ba" data-highlight-spot-color="#7266ba" data-highlight-line-color="#7266ba" data-values="1,3,4,5,7,8"
                            style={ {    marginBottom: '-2px'} } data-resize="true"></div>
                        </div>
                    </Col>
                </Row>
                { /* END widgets box*/ }
                { /* START chart*/ }
                <Row>
                    <Col lg={ 12 }>
                        { /* START widget*/ }
                        <div id="panelChart9" className="panel panel-default">
                            <div className="panel-heading">
                                <div className="panel-title">Website Performance</div>
                            </div>
                            <div className="panel-wrapper">
                                <div className="panel-body">
                                    <div ref="chartSpline" className="chart-splinev3 flot-chart"></div>
                                </div>
                            </div>
                        </div>
                        { /* END widget*/ }
                    </Col>
                </Row>
                { /* END chart*/ }
                <Row>
                    <Col lg={ 6 }>
                        { /* START panel tab */ }
                        <div role="tabpanel" className="panel">
                            <Tabs defaultActiveKey={ 1 } justified id="tabID">
                                <Tab eventKey={ 1 } title="Tasks Panel">
                                    { /* START list group */ }
                                    <div className="list-group mb0">
                                        <a href="#" className="list-group-item">
                                            <span className="label label-purple pull-right">just now</span>
                                            <em className="fa fa-fw fa-calendar mr"></em>Calendar updated</a>
                                        <a href="#" className="list-group-item">
                                            <span className="label label-purple pull-right">4 minutes ago</span>
                                            <em className="fa fa-fw fa-comment mr"></em>Commented on a post</a>
                                        <a href="#" className="list-group-item">
                                            <span className="label label-purple pull-right">23 minutes ago</span>
                                            <em className="fa fa-fw fa-truck mr"></em>Order 392 shipped</a>
                                        <a href="#" className="list-group-item">
                                            <span className="label label-purple pull-right">46 minutes ago</span>
                                            <em className="fa fa-fw fa-money mr"></em>Invoice 653 has been paid</a>
                                        <a href="#" className="list-group-item">
                                            <span className="label label-purple pull-right">1 hour ago</span>
                                            <em className="fa fa-fw fa-user mr"></em>A new user has been added</a>
                                        <a href="#" className="list-group-item">
                                            <span className="label label-purple pull-right">2 hours ago</span>
                                            <em className="fa fa-fw fa-check mr"></em>Completed task: "pick up dry cleaning"</a>
                                        <a href="#" className="list-group-item">
                                            <span className="label label-purple pull-right">yesterday</span>
                                            <em className="fa fa-fw fa-globe mr"></em>Saved the world</a>
                                        <a href="#" className="list-group-item">
                                            <span className="label label-purple pull-right">two days ago</span>
                                            <em className="fa fa-fw fa-check mr"></em>Completed task: "fix error on sales page"</a>
                                        <a href="#" className="list-group-item">
                                            <span className="label label-purple pull-right">two days ago</span>
                                            <em className="fa fa-fw fa-check mr"></em>Completed task: "fix error on sales page"</a>
                                    </div>
                                    { /* END list group */ }
                                    <div className="panel-footer text-right"><a href="#" className="btn btn-default btn-sm">View All Activity </a>
                                    </div>
                                </Tab>
                                <Tab eventKey={ 2 } title="Transactions Panel">
                                    { /* START table responsive */ }
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-hover table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Order #</th>
                                                    <th>Order Date</th>
                                                    <th>Order Time</th>
                                                    <th>Amount (USD)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>3326</td>
                                                    <td>10/21/2013</td>
                                                    <td>3:29 PM</td>
                                                    <td>$321.33</td>
                                                </tr>
                                                <tr>
                                                    <td>3325</td>
                                                    <td>10/21/2013</td>
                                                    <td>3:20 PM</td>
                                                    <td>$234.34</td>
                                                </tr>
                                                <tr>
                                                    <td>3324</td>
                                                    <td>10/21/2013</td>
                                                    <td>3:03 PM</td>
                                                    <td>$724.17</td>
                                                </tr>
                                                <tr>
                                                    <td>3323</td>
                                                    <td>10/21/2013</td>
                                                    <td>3:00 PM</td>
                                                    <td>$23.71</td>
                                                </tr>
                                                <tr>
                                                    <td>3322</td>
                                                    <td>10/21/2013</td>
                                                    <td>2:49 PM</td>
                                                    <td>$8345.23</td>
                                                </tr>
                                                <tr>
                                                    <td>3321</td>
                                                    <td>10/21/2013</td>
                                                    <td>2:23 PM</td>
                                                    <td>$245.12</td>
                                                </tr>
                                                <tr>
                                                    <td>3320</td>
                                                    <td>10/21/2013</td>
                                                    <td>2:15 PM</td>
                                                    <td>$5663.54</td>
                                                </tr>
                                                <tr>
                                                    <td>3319</td>
                                                    <td>10/21/2013</td>
                                                    <td>2:13 PM</td>
                                                    <td>$943.45</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    { /* END table responsive */ }
                                    <div className="panel-footer text-right"><a href="#" className="btn btn-default btn-sm">View All Transactions</a>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                        { /* END panel tab */ }
                    </Col>
                    <Col lg={ 6 }>
                        <div className="panel panel-transparent">
                            <div data-vector-map="" data-height="450" data-scale='0' data-map-name="world_mill_en"></div>
                        </div>
                    </Col>
                </Row>
                { /* START Widgets*/ }
                <Row>
                    <Col lg={ 3 }>
                        { /* START loader widget*/ }
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
                        { /* END loader widget*/ }
                    </Col>
                    <Col lg={ 3 }>
                        { /* START messages and activity*/ }
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="panel-title">Latest activities</div>
                            </div>
                            { /* START list group*/ }
                            <div className="list-group">
                                { /* START list group item*/ }
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
                                { /* END list group item*/ }
                                { /* START list group item*/ }
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
                                { /* END list group item*/ }
                                { /* START list group item*/ }
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
                                { /* END list group item*/ }
                                { /* START list group item*/ }
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
                                { /* END list group item*/ }
                            </div>
                            { /* END list group*/ }
                            { /* START panel footer*/ }
                            <div className="panel-footer clearfix">
                                <a href="#" className="pull-left">
                                    <small>Load more</small>
                                </a>
                            </div>
                            { /* END panel-footer*/ }
                        </div>
                        { /* END messages and activity*/ }
                    </Col>
                    <Col lg={ 6 }>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="pull-right label label-danger">5</div>
                                <div className="pull-right label label-success">12</div>
                                <div className="panel-title">Team messages</div>
                            </div>
                            { /* START list group*/ }
                            <div data-height="230" data-scrollable="" className="list-group">
                                { /* START list group item*/ }
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
                                { /* END list group item*/ }
                                { /* START list group item*/ }
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
                                { /* END list group item*/ }
                                { /* START list group item*/ }
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
                                { /* END list group item*/ }
                                { /* START list group item*/ }
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
                                { /* END list group item*/ }
                                { /* START list group item*/ }
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
                                { /* END list group item*/ }
                            </div>
                            { /* END list group*/ }
                            { /* START panel footer*/ }
                            <div className="panel-footer clearfix">
                                <div className="input-group">
                                    <input type="text" placeholder="Search message .." className="form-control input-sm" />
                                    <span className="input-group-btn">
                                              <button type="submit" className="btn btn-default btn-sm"><i className="fa fa-search"></i>
                                              </button>
                                           </span>
                                </div>
                            </div>
                            { /* END panel-footer*/ }
                        </div>
                    </Col>
                    { /* END dashboard sidebar*/ }
                </Row>
                { /* END Widgets*/ }
            </ContentWrapper>
            );
    }

}

export default DashboardV3;
