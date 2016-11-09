import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table, ProgressBar } from 'react-bootstrap';
import BugTrackerRun from './BugTracker.run';

class BugTracker extends React.Component {
    componentDidMount() {
        BugTrackerRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Bug tracker</h3>
                <Row>
                   <Col md={4}>
                      { /* Aside panel */ }
                      <div className="panel b">
                         <div className="panel-body bb">
                            <p>Overvall progress</p>
                            <div className="table-grid table-grid-align-middle mv">
                               <div className="col">
                                  <ProgressBar className="progress-xs m0" bsStyle="info" now={ 48 } />
                               </div>
                               <div className="hidden-xs col wd-xxs text-right">
                                  <div className="text-bold text-muted">48%</div>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body">
                            <p>Metrics</p>
                            <Row className="text-center">
                               <Col xs={3} md={6} lg={3}>
                                  <div className="inline mv">
                                     <div data-sparkline="" data-values="20,80" data-type="pie" data-height="50" data-slice-colors='["#edf1f2", "#23b7e5"]' className="sparkline"></div>
                                  </div>
                                  <p className="mt-lg">Issues</p>
                               </Col>
                               <Col xs={3} md={6} lg={3}>
                                  <div className="inline mv">
                                     <div data-sparkline="" data-values="60,40" data-type="pie" data-height="50" data-slice-colors='["#edf1f2", "#27c24c"]' className="sparkline"></div>
                                  </div>
                                  <p className="mt-lg">Bugs</p>
                               </Col>
                               <Col xs={3} md={6} lg={3}>
                                  <div className="inline mv">
                                     <div data-sparkline="" data-values="20,80" data-type="pie" data-height="50" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline"></div>
                                  </div>
                                  <p className="mt-lg">Hours</p>
                               </Col>
                               <Col xs={3} md={6} lg={3}>
                                  <div className="inline mv">
                                     <div data-sparkline="" data-values="30,70" data-type="pie" data-height="50" data-slice-colors='["#edf1f2", "#f05050"]' className="sparkline"></div>
                                  </div>
                                  <p className="mt-lg">Assigned</p>
                               </Col>
                            </Row>
                         </div>
                         <Table className="bb">
                            <tbody>
                               <tr>
                                  <td>
                                     <strong>Assigned Hours</strong>
                                  </td>
                                  <td>68 hs</td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Time Consumed</strong>
                                  </td>
                                  <td>32 hs</td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Issues</strong>
                                  </td>
                                  <td>19</td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Bugs</strong>
                                  </td>
                                  <td>16</td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Health</strong>
                                  </td>
                                  <td>
                                     <em className="fa fa-smile-o fa-lg text-warning"></em>
                                  </td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Commits</strong>
                                  </td>
                                  <td>140</td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Recently closed</strong>
                                  </td>
                                  <td>
                                     <div data-height="120" data-scrollable="" className="list-group">
                                        <table className="table table-bordered bg-transparent">
                                           <tbody>
                                              <tr>
                                                 <td><a href="" className="text-muted">BI:54678</a>
                                                 </td>
                                              </tr>
                                              <tr>
                                                 <td><a href="" className="text-muted">BI:55778</a>
                                                 </td>
                                              </tr>
                                              <tr>
                                                 <td><a href="" className="text-muted">BI:56878</a>
                                                 </td>
                                              </tr>
                                              <tr>
                                                 <td><a href="" className="text-muted">BI:57978</a>
                                                 </td>
                                              </tr>
                                              <tr>
                                                 <td><a href="" className="text-muted">BI:1107</a>
                                                 </td>
                                              </tr>
                                           </tbody>
                                        </table>
                                     </div>
                                  </td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Last closed on</strong>
                                  </td>
                                  <td>12/01/2016</td>
                               </tr>
                            </tbody>
                         </Table>
                      </div>
                      { /* end Aside panel */ }
                   </Col>
                   <Col md={8}>
                      <div className="mb-lg clearfix">
                         <div className="pull-left">
                            <button type="button" className="btn btn-sm btn-info">New ticket</button>
                            <button type="button" className="btn btn-sm btn-default">
                               <em className="fa fa-user-plus"></em>
                            </button>
                            <button type="button" className="btn btn-sm btn-default">
                               <em className="fa fa-pencil"></em>
                            </button>
                            <button type="button" className="btn btn-sm btn-default">
                               <em className="fa fa-mail-forward"></em>
                            </button>
                            <button type="button" className="btn btn-sm btn-default">
                               <em className="fa fa-print"></em>
                            </button>
                         </div>
                         <div className="pull-right">
                            <p className="mb0 mt-sm">19 bugs / 16 issues</p>
                         </div>
                      </div>
                      <div className="panel b">
                         <div className="panel-body">
                            <div className="table-responsive">
                               <Table id="datatable1">
                                  <thead>
                                     <tr>
                                        <th>Type</th>
                                        <th>#ID</th>
                                        <th>Description</th>
                                        <th>Created</th>
                                        <th>Priority</th>
                                        <th>Asigned</th>
                                        <th>Status</th>
                                     </tr>
                                  </thead>
                                  <tbody>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">bug</div>
                                        </td>
                                        <td>BI:54678</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>01/01/2016</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Sylvia Daniels</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-success">open</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">bug</div>
                                        </td>
                                        <td>BI:55778</td>
                                        <td className="text-nowrap">
                                           <small>Aliquam felis nibh, ultrices non elementum</small>
                                        </td>
                                        <td>01/05/2016</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="low" className="circle circle-lg circle-gray"></div>
                                        </td>
                                        <td><a href="">Sherry Carroll</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-success">open</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">issue</div>
                                        </td>
                                        <td>BI:56878</td>
                                        <td className="text-nowrap">
                                           <small>Aliquam condimentum enim a risus cursus blandit.</small>
                                        </td>
                                        <td>05/01/2016</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Mitchell Jones</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-warning">pending</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">issue</div>
                                        </td>
                                        <td>BI:57978</td>
                                        <td className="text-nowrap">
                                           <small>Sed at libero augue, in euismod tellus.</small>
                                        </td>
                                        <td>01/11/2016</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Tracey Parker</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-warning">pending</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">bug</div>
                                        </td>
                                        <td>BI:1107</td>
                                        <td className="text-nowrap">
                                           <small>Praesent lacinia ultricies neque.</small>
                                        </td>
                                        <td>01/01/2015</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="high" className="circle circle-lg circle-danger"></div>
                                        </td>
                                        <td><a href="">Warren Gray</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-danger">closed</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">issue</div>
                                        </td>
                                        <td>BI:1117</td>
                                        <td className="text-nowrap">
                                           <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                                        </td>
                                        <td>11/05/2013</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Jackson Ramos</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-success">open</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">bug</div>
                                        </td>
                                        <td>BI:10127</td>
                                        <td className="text-nowrap">
                                           <small>Pellentesque habitant morbi tristique</small>
                                        </td>
                                        <td>05/02/2014</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Ernest Berry</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-danger">closed</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">bug</div>
                                        </td>
                                        <td>BI:54678</td>
                                        <td className="text-nowrap">
                                           <small>Integer venenatis ultrices vulputate.</small>
                                        </td>
                                        <td>01/01/2016</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Sylvia Daniels</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-success">open</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">issue</div>
                                        </td>
                                        <td>BI:55778</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>01/05/2016</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="low" className="circle circle-lg circle-gray"></div>
                                        </td>
                                        <td><a href="">Sherry Carroll</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-success">open</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">bug</div>
                                        </td>
                                        <td>BI:56878</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>05/01/2016</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Mitchell Jones</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-warning">pending</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">issue</div>
                                        </td>
                                        <td>BI:57978</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>01/11/2016</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Tracey Parker</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-warning">pending</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">bug</div>
                                        </td>
                                        <td>BI:1107</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>01/01/2015</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="high" className="circle circle-lg circle-danger"></div>
                                        </td>
                                        <td><a href="">Warren Gray</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-danger">closed</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">issue</div>
                                        </td>
                                        <td>BI:1117</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>11/05/2013</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Jackson Ramos</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-success">open</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">issue</div>
                                        </td>
                                        <td>BI:10127</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>05/02/2014</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Ernest Berry</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-danger">closed</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">bug</div>
                                        </td>
                                        <td>BI:54678</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>01/01/2016</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Sylvia Daniels</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-success">open</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">bug</div>
                                        </td>
                                        <td>BI:55778</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>01/05/2016</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="low" className="circle circle-lg circle-gray"></div>
                                        </td>
                                        <td><a href="">Sherry Carroll</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-success">open</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">bug</div>
                                        </td>
                                        <td>BI:56878</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>05/01/2016</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Mitchell Jones</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-warning">pending</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">bug</div>
                                        </td>
                                        <td>BI:57978</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>01/11/2016</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Tracey Parker</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-warning">pending</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">bug</div>
                                        </td>
                                        <td>BI:1107</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>01/01/2015</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="high" className="circle circle-lg circle-danger"></div>
                                        </td>
                                        <td><a href="">Warren Gray</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-danger">closed</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">bug</div>
                                        </td>
                                        <td>BI:1117</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>11/05/2013</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Jackson Ramos</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-success">open</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">issue</div>
                                        </td>
                                        <td>BI:10127</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>05/02/2014</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Ernest Berry</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-danger">closed</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">issue</div>
                                        </td>
                                        <td>BI:54678</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>01/01/2016</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Sylvia Daniels</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-success">open</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">issue</div>
                                        </td>
                                        <td>BI:55778</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>01/05/2016</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="low" className="circle circle-lg circle-gray"></div>
                                        </td>
                                        <td><a href="">Sherry Carroll</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-success">open</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">bug</div>
                                        </td>
                                        <td>BI:56878</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>05/01/2016</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Mitchell Jones</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-warning">pending</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">bug</div>
                                        </td>
                                        <td>BI:57978</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>01/11/2016</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Tracey Parker</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-warning">pending</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">bug</div>
                                        </td>
                                        <td>BI:1107</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>01/01/2015</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="high" className="circle circle-lg circle-danger"></div>
                                        </td>
                                        <td><a href="">Warren Gray</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-danger">closed</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">issue</div>
                                        </td>
                                        <td>BI:1117</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>11/05/2013</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Jackson Ramos</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-success">open</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">issue</div>
                                        </td>
                                        <td>BI:10127</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>05/02/2014</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Ernest Berry</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-danger">closed</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">bug</div>
                                        </td>
                                        <td>BI:54678</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>01/01/2016</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Sylvia Daniels</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-success">open</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">issue</div>
                                        </td>
                                        <td>BI:55778</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>01/05/2016</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="low" className="circle circle-lg circle-gray"></div>
                                        </td>
                                        <td><a href="">Sherry Carroll</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-success">open</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">issue</div>
                                        </td>
                                        <td>BI:56878</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>05/01/2016</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Mitchell Jones</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-warning">pending</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">issue</div>
                                        </td>
                                        <td>BI:57978</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>01/11/2016</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Tracey Parker</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-warning">pending</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">bug</div>
                                        </td>
                                        <td>BI:1107</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>01/01/2015</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="high" className="circle circle-lg circle-danger"></div>
                                        </td>
                                        <td><a href="">Warren Gray</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-danger">closed</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">bug</div>
                                        </td>
                                        <td>BI:1117</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>11/05/2013</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Jackson Ramos</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-success">open</div>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>
                                           <div className="badge bg-gray-lighter">issue</div>
                                        </td>
                                        <td>BI:10127</td>
                                        <td className="text-nowrap">
                                           <small>Maecenas mollis egestas convallis.</small>
                                        </td>
                                        <td>05/02/2014</td>
                                        <td>
                                           <div data-toggle="tooltip" data-title="normal" className="circle circle-lg circle-warning"></div>
                                        </td>
                                        <td><a href="">Ernest Berry</a>
                                        </td>
                                        <td>
                                           <div className="inline wd-xxs label label-danger">closed</div>
                                        </td>
                                     </tr>
                                  </tbody>
                               </Table>
                            </div>
                         </div>
                      </div>
                   </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default BugTracker;


