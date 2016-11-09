import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import TeamViewerRun from './TeamViewer.run';

class TeamViewer extends React.Component {
    componentDidMount() {
        TeamViewerRun();
    }
    render() {
        return (
            <ContentWrapper>
                <div className="pull-right">
                   <em className="fa fa-warning fa-lg text-warning"></em>
                </div>
                <h3>Team viewer</h3>
                <Row>
                   <Col lg={4} md={6}>
                      { /*  Team Panel */ }
                      <div className="panel panel-default">
                         <div className="panel-heading">
                            <div className="pull-right">
                               <div className="label label-success">free</div>
                            </div>
                            <div className="panel-title">Team #1</div>
                         </div>
                         <div className="panel-body bt">
                            <a href="#" data-toggle="tooltip" data-title="Team leader" className="inline">
                               <img src="img/user/03.jpg" alt="project member" className="img-circle thumb48" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/02.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/04.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/05.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/06.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/07.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                         </div>
                         <div className="panel-body bb text-center">
                            <div data-toggle="tooltip" data-title="Progress of asigned tasks">
                               <div className="progress progress-xs m0">
                                  <div style={{width:"50%"}} className="progress-bar progress-bar-info">50%</div>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body bb">
                            <Row className="text-center">
                               <Col xs={4}>
                                  <p className="text-bold">BUDGET</p>
                                  <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">TASKS</p>
                                  <div className="h3 m0">26</div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">AVAILABITY</p>
                                  <div data-sparkline="" data-values="70,30" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                            </Row>
                         </div>
                         <div className="panel-body">
                            <ul className="list-inline m0">
                               <li>
                                  <div className="badge bg-gray">angularjs</div>
                               </li>
                               <li>
                                  <div className="badge bg-gray">jquery</div>
                               </li>
                               <li>
                                  <div className="badge bg-gray">gulp</div>
                               </li>
                               <li>
                                  <div className="badge bg-gray">git</div>
                               </li>
                               <li>
                                  <div className="badge p-sm bg-gray">ios</div>
                               </li>
                            </ul>
                         </div>
                         <div className="panel-footer text-center"><a href="#" className="btn btn-default btn-oval">Manage Team</a>
                         </div>
                      </div>
                      { /*  end Team Panel */ }
                   </Col>
                   <Col lg={4} md={6}>
                      { /*  Team Panel */ }
                      <div className="panel panel-default">
                         <div className="panel-heading">
                            <div className="pull-right">
                               <div className="label bg-gray">asigned</div>
                            </div>
                            <div className="panel-title">Team #2</div>
                         </div>
                         <div className="panel-body bt">
                            <a href="#" data-toggle="tooltip" data-title="Team leader" className="inline">
                               <img src="img/user/03.jpg" alt="project member" className="img-circle thumb48" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/02.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/04.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/05.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/09.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                         </div>
                         <div className="panel-body bb text-center">
                            <div data-toggle="tooltip" data-title="Progress of asigned tasks">
                               <div className="progress progress-xs m0">
                                  <div style={{width:"90%"}} className="progress-bar progress-bar-info">90%</div>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body bb">
                            <Row className="text-center">
                               <Col xs={4}>
                                  <p className="text-bold">BUDGET</p>
                                  <div data-sparkline="" data-values="10,90" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#f05050"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">TASKS</p>
                                  <div className="h3 m0">145</div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">AVAILABITY</p>
                                  <div data-sparkline="" data-values="40,60" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#27c24c"]' className="sparkline inline mr"></div>
                               </Col>
                            </Row>
                         </div>
                         <div className="panel-body">
                            <ul className="list-inline m0">
                               <li>
                                  <div className="badge bg-gray">angularjs</div>
                               </li>
                               <li>
                                  <div className="badge bg-gray">jquery</div>
                               </li>
                               <li>
                                  <div className="badge bg-gray">gulp</div>
                               </li>
                               <li>
                                  <div className="badge bg-gray">git</div>
                               </li>
                               <li>
                                  <div className="badge p-sm bg-gray">ios</div>
                               </li>
                            </ul>
                         </div>
                         <div className="panel-footer text-center"><a href="#" className="btn btn-default btn-oval">Manage Team</a>
                         </div>
                      </div>
                      { /*  end Team Panel */ }
                   </Col>
                   <Col lg={4} md={6}>
                      { /*  Team Panel */ }
                      <div className="panel panel-default">
                         <div className="panel-heading">
                            <div className="pull-right">
                               <div className="label label-success">free</div>
                            </div>
                            <div className="panel-title">Team #3</div>
                         </div>
                         <div className="panel-body bt">
                            <a href="#" data-toggle="tooltip" data-title="Team leader" className="inline">
                               <img src="img/user/03.jpg" alt="project member" className="img-circle thumb48" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/02.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/04.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/05.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/06.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/07.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                         </div>
                         <div className="panel-body bb text-center">
                            <div data-toggle="tooltip" data-title="Progress of asigned tasks">
                               <div className="progress progress-xs m0">
                                  <div style={{width:"50%"}} className="progress-bar progress-bar-info">50%</div>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body bb">
                            <Row className="text-center">
                               <Col xs={4}>
                                  <p className="text-bold">BUDGET</p>
                                  <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">TASKS</p>
                                  <div className="h3 m0">98</div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">AVAILABITY</p>
                                  <div data-sparkline="" data-values="40,60" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#27c24c"]' className="sparkline inline mr"></div>
                               </Col>
                            </Row>
                         </div>
                         <div className="panel-body">
                            <ul className="list-inline m0">
                               <li>
                                  <div className="badge bg-gray">angularjs</div>
                               </li>
                               <li>
                                  <div className="badge bg-gray">jquery</div>
                               </li>
                               <li>
                                  <div className="badge bg-gray">gulp</div>
                               </li>
                               <li>
                                  <div className="badge bg-gray">git</div>
                               </li>
                               <li>
                                  <div className="badge p-sm bg-gray">ios</div>
                               </li>
                            </ul>
                         </div>
                         <div className="panel-footer text-center"><a href="#" className="btn btn-default btn-oval">Manage Team</a>
                         </div>
                      </div>
                      { /*  end Team Panel */ }
                   </Col>
                   <Col lg={4} md={6}>
                      { /*  Team Panel */ }
                      <div className="panel panel-default">
                         <div className="panel-heading">
                            <div className="pull-right">
                               <div className="label bg-gray">asigned</div>
                            </div>
                            <div className="panel-title">Team #4</div>
                         </div>
                         <div className="panel-body bt">
                            <a href="#" data-toggle="tooltip" data-title="Team leader" className="inline">
                               <img src="img/user/03.jpg" alt="project member" className="img-circle thumb48" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/02.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/04.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/05.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/06.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/07.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/08.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/09.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                         </div>
                         <div className="panel-body bb text-center">
                            <div data-toggle="tooltip" data-title="Progress of asigned tasks">
                               <div className="progress progress-xs m0">
                                  <div style={{width:"25%"}} className="progress-bar progress-bar-info">25%</div>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body bb">
                            <Row className="text-center">
                               <Col xs={4}>
                                  <p className="text-bold">BUDGET</p>
                                  <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">TASKS</p>
                                  <div className="h3 m0">145</div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">AVAILABITY</p>
                                  <div data-sparkline="" data-values="40,60" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#27c24c"]' className="sparkline inline mr"></div>
                               </Col>
                            </Row>
                         </div>
                         <div className="panel-body">
                            <ul className="list-inline m0">
                               <li>
                                  <div className="badge bg-gray">angularjs</div>
                               </li>
                               <li>
                                  <div className="badge bg-gray">jquery</div>
                               </li>
                               <li>
                                  <div className="badge bg-gray">gulp</div>
                               </li>
                               <li>
                                  <div className="badge bg-gray">git</div>
                               </li>
                               <li>
                                  <div className="badge p-sm bg-gray">ios</div>
                               </li>
                            </ul>
                         </div>
                         <div className="panel-footer text-center"><a href="#" className="btn btn-default btn-oval">Manage Team</a>
                         </div>
                      </div>
                      { /*  end Team Panel */ }
                   </Col>
                   <Col lg={4} md={6}>
                      { /*  Team Panel */ }
                      <div className="panel panel-default">
                         <div className="panel-heading">
                            <div className="pull-right">
                               <div className="label bg-gray">asigned</div>
                            </div>
                            <div className="panel-title">Team #5</div>
                         </div>
                         <div className="panel-body bt">
                            <a href="#" data-toggle="tooltip" data-title="Team leader" className="inline">
                               <img src="img/user/03.jpg" alt="project member" className="img-circle thumb48" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/02.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/04.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/05.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/06.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/07.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/08.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/09.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                         </div>
                         <div className="panel-body bb text-center">
                            <div data-toggle="tooltip" data-title="Progress of asigned tasks">
                               <div className="progress progress-xs m0">
                                  <div style={{width:"50%"}} className="progress-bar progress-bar-info">50%</div>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body bb">
                            <Row className="text-center">
                               <Col xs={4}>
                                  <p className="text-bold">BUDGET</p>
                                  <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">TASKS</p>
                                  <div className="h3 m0">500</div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">AVAILABITY</p>
                                  <div data-sparkline="" data-values="40,60" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#27c24c"]' className="sparkline inline mr"></div>
                               </Col>
                            </Row>
                         </div>
                         <div className="panel-body">
                            <ul className="list-inline m0">
                               <li>
                                  <div className="badge bg-gray">angularjs</div>
                               </li>
                               <li>
                                  <div className="badge bg-gray">jquery</div>
                               </li>
                               <li>
                                  <div className="badge bg-gray">gulp</div>
                               </li>
                               <li>
                                  <div className="badge bg-gray">git</div>
                               </li>
                               <li>
                                  <div className="badge p-sm bg-gray">ios</div>
                               </li>
                            </ul>
                         </div>
                         <div className="panel-footer text-center"><a href="#" className="btn btn-default btn-oval">Manage Team</a>
                         </div>
                      </div>
                      { /*  end Team Panel */ }
                   </Col>
                   <Col lg={4} md={6}>
                      { /*  Team Panel */ }
                      <div className="panel panel-default">
                         <div className="panel-heading">
                            <div className="pull-right">
                               <div className="label label-success">free</div>
                            </div>
                            <div className="panel-title">Team #6</div>
                         </div>
                         <div className="panel-body bt">
                            <a href="#" data-toggle="tooltip" data-title="Team leader" className="inline">
                               <img src="img/user/03.jpg" alt="project member" className="img-circle thumb48" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/02.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/04.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/05.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/06.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/07.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/08.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/09.jpg" alt="project member" className="img-circle thumb24" />
                            </a>
                         </div>
                         <div className="panel-body bb text-center">
                            <div data-toggle="tooltip" data-title="Progress of asigned tasks">
                               <div className="progress progress-xs m0">
                                  <div style={{width:"50%"}} className="progress-bar progress-bar-info">50%</div>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body bb">
                            <Row className="text-center">
                               <Col xs={4}>
                                  <p className="text-bold">BUDGET</p>
                                  <div data-sparkline="" data-values="5,95" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#f05050"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">TASKS</p>
                                  <div className="h3 m0">145</div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">AVAILABITY</p>
                                  <div data-sparkline="" data-values="70,30" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                            </Row>
                         </div>
                         <div className="panel-body">
                            <ul className="list-inline m0">
                               <li>
                                  <div className="badge bg-gray">angularjs</div>
                               </li>
                               <li>
                                  <div className="badge bg-gray">jquery</div>
                               </li>
                               <li>
                                  <div className="badge bg-gray">gulp</div>
                               </li>
                               <li>
                                  <div className="badge bg-gray">git</div>
                               </li>
                               <li>
                                  <div className="badge p-sm bg-gray">ios</div>
                               </li>
                            </ul>
                         </div>
                         <div className="panel-footer text-center"><a href="#" className="btn btn-default btn-oval">Manage Team</a>
                         </div>
                      </div>
                      { /*  end Team Panel */ }
                   </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default TeamViewer;
