import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import ProjectsRun from './Projects.run';

class Projects extends React.Component {
    componentDidMount() {
        ProjectsRun();
    }
    render() {
        return (
            <ContentWrapper>
                <div className="pull-right">
                   <button type="button" className="btn btn-default btn-sm">Create project</button>
                </div>
                <h3>Projects</h3>
                <Row>
                   <Col lg={4} md={6}>
                      <div className="panel b">
                         <div className="panel-heading">
                            <div className="pull-right">
                               <div className="label label-info">started</div>
                            </div>
                            <h4 className="m0">Project #1</h4>
                            <small className="text-muted">Sed amet lectus id.</small>
                         </div>
                         <div className="panel-body">
                            <div className="table-grid table-grid-align-middle">
                               <div className="col">
                                  <div className="visible-xs visible-sm text-bold text-muted text-right">22%</div>
                                  <div data-toggle="tooltip" data-title="Health">
                                     <div className="progress progress-xs m0">
                                        <div style={{width:"22%"}} className="progress-bar progress-bar-warning">22%</div>
                                     </div>
                                  </div>
                               </div>
                               <div className="col wd-xxs text-right hidden-xs hidden-sm">
                                  <div className="text-bold text-muted">22%</div>
                               </div>
                            </div>
                         </div>
                         <table className="table">
                            <tbody>
                               <tr>
                                  <td>
                                     <strong>Start date</strong>
                                  </td>
                                  <td>01/01/2016</td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Members</strong>
                                  </td>
                                  <td>
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
                                        <strong>+5</strong>
                                     </a>
                                  </td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Leader</strong>
                                  </td>
                                  <td>
                                     <a href="" data-toggle="tooltip" data-title="Team leader">
                                        <img src="img/user/03.jpg" alt="project member" className="img-circle thumb24" />
                                     </a>
                                  </td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Metrics</strong>
                                  </td>
                                  <td>
                                     <div data-sparkline="" data-values="20,80" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#23b7e5"]' className="sparkline inline mr"></div>
                                     <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#27c24c"]' className="sparkline inline mr"></div>
                                     <div data-sparkline="" data-values="90,10" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline"></div>
                                  </td>
                               </tr>
                            </tbody>
                         </table>
                         <div className="panel-footer text-center">
                            <button type="button" className="btn btn-default">Manage project</button>
                         </div>
                      </div>
                   </Col>
                   <Col lg={4} md={6}>
                      <div className="panel b">
                         <div className="panel-heading">
                            <div className="pull-right">
                               <div className="label label-info">started</div>
                            </div>
                            <h4 className="m0">Project #2</h4>
                            <small className="text-muted">Sed amet lectus id.</small>
                         </div>
                         <div className="panel-body">
                            <div className="table-grid table-grid-align-middle">
                               <div className="col">
                                  <div className="visible-xs visible-sm text-bold text-muted text-right">80%</div>
                                  <div data-toggle="tooltip" data-title="Health">
                                     <div className="progress progress-xs m0">
                                        <div style={{width:"80%"}} className="progress-bar progress-bar-success">80%</div>
                                     </div>
                                  </div>
                               </div>
                               <div className="col wd-xxs text-right hidden-xs hidden-sm">
                                  <div className="text-bold text-muted">80%</div>
                               </div>
                            </div>
                         </div>
                         <table className="table">
                            <tbody>
                               <tr>
                                  <td>
                                     <strong>Start date</strong>
                                  </td>
                                  <td>02/01/2016</td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Members</strong>
                                  </td>
                                  <td>
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
                                        <strong>+6</strong>
                                     </a>
                                  </td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Leader</strong>
                                  </td>
                                  <td>
                                     <a href="" data-toggle="tooltip" data-title="Team leader">
                                        <img src="img/user/03.jpg" alt="project member" className="img-circle thumb24" />
                                     </a>
                                  </td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Metrics</strong>
                                  </td>
                                  <td>
                                     <div data-sparkline="" data-values="20,80" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#23b7e5"]' className="sparkline inline mr"></div>
                                     <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#27c24c"]' className="sparkline inline mr"></div>
                                     <div data-sparkline="" data-values="90,10" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline"></div>
                                  </td>
                               </tr>
                            </tbody>
                         </table>
                         <div className="panel-footer text-center">
                            <button type="button" className="btn btn-default">Manage project</button>
                         </div>
                      </div>
                   </Col>
                   <Col lg={4} md={6}>
                      <div className="panel b">
                         <div className="panel-heading">
                            <div className="pull-right">
                               <div className="label label-info">started</div>
                            </div>
                            <h4 className="m0">Project #3</h4>
                            <small className="text-muted">Sed amet lectus id.</small>
                         </div>
                         <div className="panel-body">
                            <div className="table-grid table-grid-align-middle">
                               <div className="col">
                                  <div className="visible-xs visible-sm text-bold text-muted text-right">50%</div>
                                  <div data-toggle="tooltip" data-title="Health">
                                     <div className="progress progress-xs m0">
                                        <div style={{width:"50%"}} className="progress-bar progress-bar-info">50%</div>
                                     </div>
                                  </div>
                               </div>
                               <div className="col wd-xxs text-right hidden-xs hidden-sm">
                                  <div className="text-bold text-muted">50%</div>
                               </div>
                            </div>
                         </div>
                         <table className="table">
                            <tbody>
                               <tr>
                                  <td>
                                     <strong>Start date</strong>
                                  </td>
                                  <td>03/01/2016</td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Members</strong>
                                  </td>
                                  <td>
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
                                        <strong>+7</strong>
                                     </a>
                                  </td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Leader</strong>
                                  </td>
                                  <td>
                                     <a href="" data-toggle="tooltip" data-title="Team leader">
                                        <img src="img/user/03.jpg" alt="project member" className="img-circle thumb24" />
                                     </a>
                                  </td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Metrics</strong>
                                  </td>
                                  <td>
                                     <div data-sparkline="" data-values="20,80" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#23b7e5"]' className="sparkline inline mr"></div>
                                     <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#27c24c"]' className="sparkline inline mr"></div>
                                     <div data-sparkline="" data-values="90,10" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline"></div>
                                  </td>
                               </tr>
                            </tbody>
                         </table>
                         <div className="panel-footer text-center">
                            <button type="button" className="btn btn-default">Manage project</button>
                         </div>
                      </div>
                   </Col>
                   <Col lg={4} md={6}>
                      <div className="panel b">
                         <div className="panel-heading">
                            <div className="pull-right">
                               <div className="label label-warning">paused</div>
                            </div>
                            <h4 className="m0">Project #4</h4>
                            <small className="text-muted">Sed amet lectus id.</small>
                         </div>
                         <div className="panel-body">
                            <div className="table-grid table-grid-align-middle">
                               <div className="col">
                                  <div className="visible-xs visible-sm text-bold text-muted text-right">22%</div>
                                  <div data-toggle="tooltip" data-title="Health">
                                     <div className="progress progress-xs m0">
                                        <div style={{width:"22%"}} className="progress-bar progress-bar-warning">22%</div>
                                     </div>
                                  </div>
                               </div>
                               <div className="col wd-xxs text-right hidden-xs hidden-sm">
                                  <div className="text-bold text-muted">22%</div>
                               </div>
                            </div>
                         </div>
                         <table className="table">
                            <tbody>
                               <tr>
                                  <td>
                                     <strong>Start date</strong>
                                  </td>
                                  <td>04/01/2016</td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Members</strong>
                                  </td>
                                  <td>
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
                                        <strong>+8</strong>
                                     </a>
                                  </td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Leader</strong>
                                  </td>
                                  <td>
                                     <a href="" data-toggle="tooltip" data-title="Team leader">
                                        <img src="img/user/03.jpg" alt="project member" className="img-circle thumb24" />
                                     </a>
                                  </td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Metrics</strong>
                                  </td>
                                  <td>
                                     <div data-sparkline="" data-values="20,80" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#23b7e5"]' className="sparkline inline mr"></div>
                                     <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#27c24c"]' className="sparkline inline mr"></div>
                                     <div data-sparkline="" data-values="90,10" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline"></div>
                                  </td>
                               </tr>
                            </tbody>
                         </table>
                         <div className="panel-footer text-center">
                            <button type="button" className="btn btn-default">Manage project</button>
                         </div>
                      </div>
                   </Col>
                   <Col lg={4} md={6}>
                      <div className="panel b">
                         <div className="panel-heading">
                            <div className="pull-right">
                               <div className="label bg-gray">pending</div>
                            </div>
                            <h4 className="m0">Project #5</h4>
                            <small className="text-muted">Sed amet lectus id.</small>
                         </div>
                         <div className="panel-body">
                            <p className="m0 text-center">This project does not register progress.</p>
                         </div>
                         <table className="table">
                            <tbody>
                               <tr>
                                  <td>
                                     <strong>Start date</strong>
                                  </td>
                                  <td>05/01/2016</td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Members</strong>
                                  </td>
                                  <td>
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
                                        <strong>+9</strong>
                                     </a>
                                  </td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Leader</strong>
                                  </td>
                                  <td>
                                     <a href="" data-toggle="tooltip" data-title="Team leader">
                                        <img src="img/user/03.jpg" alt="project member" className="img-circle thumb24" />
                                     </a>
                                  </td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Metrics</strong>
                                  </td>
                                  <td>
                                     <div data-sparkline="" data-values="20,80" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#23b7e5"]' className="sparkline inline mr"></div>
                                     <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#27c24c"]' className="sparkline inline mr"></div>
                                     <div data-sparkline="" data-values="90,10" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline"></div>
                                  </td>
                               </tr>
                            </tbody>
                         </table>
                         <div className="panel-footer text-center">
                            <button type="button" className="btn btn-default">Manage project</button>
                         </div>
                      </div>
                   </Col>
                   <Col lg={4} md={6}>
                      <div className="panel b">
                         <div className="panel-heading">
                            <div className="pull-right">
                               <div className="label label-success">completed</div>
                            </div>
                            <h4 className="m0">Project #6</h4>
                            <small className="text-muted">Sed amet lectus id.</small>
                         </div>
                         <div className="panel-body">
                            <div className="table-grid table-grid-align-middle">
                               <div className="col">
                                  <div className="visible-xs visible-sm text-bold text-muted text-right">100%</div>
                                  <div data-toggle="tooltip" data-title="Health">
                                     <div className="progress progress-xs m0">
                                        <div style={{width:"100%"}} className="progress-bar progress-bar-success">100%</div>
                                     </div>
                                  </div>
                               </div>
                               <div className="col wd-xxs text-right hidden-xs hidden-sm">
                                  <div className="text-bold text-muted">100%</div>
                               </div>
                            </div>
                         </div>
                         <table className="table">
                            <tbody>
                               <tr>
                                  <td>
                                     <strong>Start date</strong>
                                  </td>
                                  <td>06/01/2016</td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Members</strong>
                                  </td>
                                  <td>
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
                                        <strong>+10</strong>
                                     </a>
                                  </td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Leader</strong>
                                  </td>
                                  <td>
                                     <a href="" data-toggle="tooltip" data-title="Team leader">
                                        <img src="img/user/03.jpg" alt="project member" className="img-circle thumb24" />
                                     </a>
                                  </td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Metrics</strong>
                                  </td>
                                  <td>
                                     <div data-sparkline="" data-values="20,80" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#23b7e5"]' className="sparkline inline mr"></div>
                                     <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#27c24c"]' className="sparkline inline mr"></div>
                                     <div data-sparkline="" data-values="90,10" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline"></div>
                                  </td>
                               </tr>
                            </tbody>
                         </table>
                         <div className="panel-footer text-center">
                            <button type="button" className="btn btn-default">Manage project</button>
                         </div>
                      </div>
                   </Col>
                   <Col lg={4} md={6}>
                      <div className="panel b">
                         <div className="panel-heading">
                            <div className="pull-right">
                               <div className="label bg-gray-dark">canceled</div>
                            </div>
                            <h4 className="m0">Project #7</h4>
                            <small className="text-muted">Sed amet lectus id.</small>
                         </div>
                         <div className="panel-body">
                            <div className="table-grid table-grid-align-middle">
                               <div className="col">
                                  <div className="visible-xs visible-sm text-bold text-muted text-right">30%</div>
                                  <div data-toggle="tooltip" data-title="Health">
                                     <div className="progress progress-xs m0">
                                        <div style={{width:"30%"}} className="progress-bar progress-bar-warning">30%</div>
                                     </div>
                                  </div>
                               </div>
                               <div className="col wd-xxs text-right hidden-xs hidden-sm">
                                  <div className="text-bold text-muted">30%</div>
                               </div>
                            </div>
                         </div>
                         <table className="table">
                            <tbody>
                               <tr>
                                  <td>
                                     <strong>Start date</strong>
                                  </td>
                                  <td>04/01/2016</td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Members</strong>
                                  </td>
                                  <td>
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
                                        <strong>+8</strong>
                                     </a>
                                  </td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Leader</strong>
                                  </td>
                                  <td>
                                     <a href="" data-toggle="tooltip" data-title="Team leader">
                                        <img src="img/user/03.jpg" alt="project member" className="img-circle thumb24" />
                                     </a>
                                  </td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Metrics</strong>
                                  </td>
                                  <td>
                                     <div data-sparkline="" data-values="20,80" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#23b7e5"]' className="sparkline inline mr"></div>
                                     <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#27c24c"]' className="sparkline inline mr"></div>
                                     <div data-sparkline="" data-values="90,10" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline"></div>
                                  </td>
                               </tr>
                            </tbody>
                         </table>
                         <div className="panel-footer text-center">
                            <button type="button" className="btn btn-default">Manage project</button>
                         </div>
                      </div>
                   </Col>
                   <Col lg={4} md={6}>
                      <div className="panel b">
                         <div className="panel-heading">
                            <div className="pull-right">
                               <div className="label label-info">started</div>
                            </div>
                            <h4 className="m0">Project #8</h4>
                            <small className="text-muted">Sed amet lectus id.</small>
                         </div>
                         <div className="panel-body">
                            <div className="table-grid table-grid-align-middle">
                               <div className="col">
                                  <div className="visible-xs visible-sm text-bold text-muted text-right">10%</div>
                                  <div data-toggle="tooltip" data-title="Health">
                                     <div className="progress progress-xs m0">
                                        <div style={{width:"10%"}} className="progress-bar progress-bar-danger">10%</div>
                                     </div>
                                  </div>
                               </div>
                               <div className="col wd-xxs text-right hidden-xs hidden-sm">
                                  <div className="text-bold text-muted">10%</div>
                               </div>
                            </div>
                         </div>
                         <table className="table">
                            <tbody>
                               <tr>
                                  <td>
                                     <strong>Start date</strong>
                                  </td>
                                  <td>05/01/2016</td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Members</strong>
                                  </td>
                                  <td>
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
                                        <strong>+9</strong>
                                     </a>
                                  </td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Leader</strong>
                                  </td>
                                  <td>
                                     <a href="" data-toggle="tooltip" data-title="Team leader">
                                        <img src="img/user/03.jpg" alt="project member" className="img-circle thumb24" />
                                     </a>
                                  </td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Metrics</strong>
                                  </td>
                                  <td>
                                     <div data-sparkline="" data-values="20,80" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#23b7e5"]' className="sparkline inline mr"></div>
                                     <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#27c24c"]' className="sparkline inline mr"></div>
                                     <div data-sparkline="" data-values="90,10" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline"></div>
                                  </td>
                               </tr>
                            </tbody>
                         </table>
                         <div className="panel-footer text-center">
                            <button type="button" className="btn btn-default">Manage project</button>
                         </div>
                      </div>
                   </Col>
                   <Col lg={4} md={6}>
                      <div className="panel b">
                         <div className="panel-heading">
                            <div className="pull-right">
                               <div className="label label-success">completed</div>
                            </div>
                            <h4 className="m0">Project #9</h4>
                            <small className="text-muted">Sed amet lectus id.</small>
                         </div>
                         <div className="panel-body">
                            <div className="table-grid table-grid-align-middle">
                               <div className="col">
                                  <div className="visible-xs visible-sm text-bold text-muted text-right">100%</div>
                                  <div data-toggle="tooltip" data-title="Health">
                                     <div className="progress progress-xs m0">
                                        <div style={{width:"100%"}} className="progress-bar progress-bar-success">100%</div>
                                     </div>
                                  </div>
                               </div>
                               <div className="col wd-xxs text-right hidden-xs hidden-sm">
                                  <div className="text-bold text-muted">100%</div>
                               </div>
                            </div>
                         </div>
                         <table className="table">
                            <tbody>
                               <tr>
                                  <td>
                                     <strong>Start date</strong>
                                  </td>
                                  <td>06/01/2016</td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Members</strong>
                                  </td>
                                  <td>
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
                                        <strong>+10</strong>
                                     </a>
                                  </td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Leader</strong>
                                  </td>
                                  <td>
                                     <a href="" data-toggle="tooltip" data-title="Team leader">
                                        <img src="img/user/03.jpg" alt="project member" className="img-circle thumb24" />
                                     </a>
                                  </td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Metrics</strong>
                                  </td>
                                  <td>
                                     <div data-sparkline="" data-values="20,80" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#23b7e5"]' className="sparkline inline mr"></div>
                                     <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#27c24c"]' className="sparkline inline mr"></div>
                                     <div data-sparkline="" data-values="90,10" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline"></div>
                                  </td>
                               </tr>
                            </tbody>
                         </table>
                         <div className="panel-footer text-center">
                            <button type="button" className="btn btn-default">Manage project</button>
                         </div>
                      </div>
                   </Col>
                </Row>
            </ContentWrapper>
            );
    }
}

export default Projects;


