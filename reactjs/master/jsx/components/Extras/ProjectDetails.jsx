import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import ProjectDetailsRun from './ProjectDetails.run';

class ProjectDetails extends React.Component {
    componentDidMount() {
        ProjectDetailsRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Project #1 Management
                   <small>In lacinia tellus vitae nisl consectetur pellentesque.</small>
                </h3>
                <Row>
                   <Col lg={8}>
                      { /* Main panel */ }
                      <div className="panel b">
                         <div className="panel-heading">
                            <div className="pull-right mt">
                               <div className="label label-info">started</div>
                            </div>
                            <h4 className="mv">
                               <span>Project #1</span>
                            </h4>
                         </div>
                         <div className="panel-body bb bt">
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
                            <div className="pull-right mt">
                               <button type="button" className="btn btn-default">Add Member</button>
                            </div>
                         </div>
                         <div className="panel-body">
                            <h4>Description</h4>
                            <p>Nam eget risus tellus. Vestibulum pretium mollis ligula, at ultrices quam egestas et. Sed mattis tincidunt ligula, ac porttitor lectus porttitor condimentum. Ut et ligula ante, nec mollis lacus. Aliquam erat volutpat. Aliquam auctor diam ut
                               urna lacinia faucibus. Proin est sapien, convallis non hendrerit nec, laoreet ut ipsum. Aenean vehicula, nulla vel pharetra accumsan, elit risus pretium arcu, nec ultrices urna ligula vel nunc. Cras porttitor orci eget nibh pharetra mollis.</p>
                            <p>Maecenas at porta purus. Ut eu aliquam orci. Praesent in libero at neque gravida venenatis auctor nec arcu.</p>
                            <p className="text-right">
                               <button type="button" className="btn btn-default">View all documents</button>
                            </p>
                         </div>
                         <div className="panel-body">
                            <p>
                               <small className="pull-left">Activity over time</small>
                               <span data-sparkline="" data-type="line" data-height="100" data-width="100%" data-line-width="3" data-line-color="#23b7e5" data-chart-range-min="0" data-spot-color="#888" data-min-spot-color="#23b7e5" data-max-spot-color="#23b7e5"
                               data-fill-color="#e5f2fa" data-highlight-line-color="#fff" data-spot-radius="5" data-values="2,4,5,6,10,7,8,5,7,7,11,8,6,9,11,9,13,14,12,16" data-resize="true" className="sparkline text-center"></span>
                            </p>
                         </div>
                         <div className="panel-body">
                            <div className="row text-center">
                               <div className="col-xs-4">
                                  <div className="inline">
                                     <div data-sparkline="" data-values="20,80" data-type="pie" data-height="60" data-slice-colors="[&quot;#edf1f2&quot;, &quot;#23b7e5&quot;]" className="sparkline"></div>
                                  </div>
                                  <p className="mt-lg">Issues</p>
                               </div>
                               <div className="col-xs-4">
                                  <div className="inline">
                                     <div data-sparkline="" data-values="60,40" data-type="pie" data-height="60" data-slice-colors="[&quot;#edf1f2&quot;, &quot;#27c24c&quot;]" className="sparkline"></div>
                                  </div>
                                  <p className="mt-lg">Commits</p>
                               </div>
                               <div className="col-xs-4">
                                  <div className="inline">
                                     <div data-sparkline="" data-values="90,10" data-type="pie" data-height="60" data-slice-colors="[&quot;#edf1f2&quot;, &quot;#ff902b&quot;]" className="sparkline"></div>
                                  </div>
                                  <p className="mt-lg">Files</p>
                               </div>
                            </div>
                         </div>
                      </div>
                      { /* End Main panel */ }
                      { /* Team messages */ }
                      <div className="panel b">
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
                               <input type="text" placeholder="Type message .." className="form-control input-sm" />
                               <span className="input-group-btn">
                                  <button type="button" className="btn btn-default btn-sm"><i className="fa fa-paperclip"></i>
                                  </button>
                               </span>
                            </div>
                         </div>
                         { /* END panel-footer */ }
                      </div>
                      { /* End Team messages */ }
                   </Col>
                   <Col lg={4}>
                      { /* Aside panel */ }
                      <div className="panel b">
                         <div className="panel-body bb">
                            <div className="clearfix">
                               <div className="pull-left">
                                  <button type="button" className="btn btn-default btn-oval">
                                     <em className="fa fa-play fa-fw text-muted"></em>
                                     <span>Start</span>
                                  </button>
                                  <button type="button" className="btn btn-default btn-oval">
                                     <em className="fa fa-pause fa-fw text-muted"></em>
                                     <span>Pause</span>
                                  </button>
                               </div>
                               <div className="pull-right">
                                  <button type="button" className="btn btn-danger btn-oval">Cancel</button>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body bb">
                            <div className="table-grid table-grid-align-middle mv">
                               <div className="col">
                                    <div className="progress progress-xs m0">
                                        <div className="progress-bar progress-bar-info" style={{width:"48%"}}></div>
                                    </div>
                               </div>
                               <div className="col wd-xxs text-right">
                                  <div className="text-bold text-muted">48%</div>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body">
                            <ul className="list-inline mv">
                               <li>
                                  <div className="badge p-sm bg-warning">priority</div>
                               </li>
                               <li>
                                  <div className="badge p-sm bg-gray">angularjs</div>
                               </li>
                               <li>
                                  <div className="badge p-sm bg-gray">jquery</div>
                               </li>
                               <li>
                                  <div className="badge p-sm bg-gray">gulp</div>
                               </li>
                               <li>
                                  <div className="badge p-sm bg-gray">git</div>
                               </li>
                               <li>
                                  <div className="badge p-sm bg-gray">ios</div>
                               </li>
                            </ul>
                         </div>
                         <table className="table bb">
                            <tbody>
                               <tr>
                                  <td>
                                     <strong>Start date</strong>
                                  </td>
                                  <td>02/01/2016</td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Estimated Hours</strong>
                                  </td>
                                  <td>122hs</td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Time Consumed</strong>
                                  </td>
                                  <td>62hs</td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Commits</strong>
                                  </td>
                                  <td>140</td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Issues</strong>
                                  </td>
                                  <td>39</td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Files</strong>
                                  </td>
                                  <td>87</td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Members</strong>
                                  </td>
                                  <td>
                                     <p>Tara Sanders</p>
                                     <p>Alan Smith</p>
                                     <p>Priscilla Peters</p>
                                     <p>Madison Willis</p>
                                     <p>Lesa Marshall</p>
                                     <p>Kylie Freeman</p>
                                  </td>
                               </tr>
                               <tr>
                                  <td>
                                     <strong>Recent files</strong>
                                  </td>
                                  <td>
                                     <div data-height="120" data-scrollable="" className="list-group">
                                        <table className="table table-bordered bg-transparent">
                                           <tbody>
                                              <tr>
                                                 <td>
                                                    <em className="fa fa-lg fa-file-code-o"></em>
                                                 </td>
                                                 <td><a href="#" className="text-muted">database.controller.js</a>
                                                 </td>
                                              </tr>
                                              <tr>
                                                 <td>
                                                    <em className="fa fa-lg fa-file-image-o"></em>
                                                 </td>
                                                 <td><a href="#" className="text-muted">baground-lg.png</a>
                                                 </td>
                                              </tr>
                                              <tr>
                                                 <td>
                                                    <em className="fa fa-lg fa-file-code-o"></em>
                                                 </td>
                                                 <td><a href="#" className="text-muted">picture.controller.js</a>
                                                 </td>
                                              </tr>
                                              <tr>
                                                 <td>
                                                    <em className="fa fa-lg fa-file-word-o"></em>
                                                 </td>
                                                 <td><a href="#" className="text-muted">applicat-diagrams.docx</a>
                                                 </td>
                                              </tr>
                                              <tr>
                                                 <td>
                                                    <em className="fa fa-lg fa-file-code-o"></em>
                                                 </td>
                                                 <td><a href="#" className="text-muted">database.controller.js</a>
                                                 </td>
                                              </tr>
                                              <tr>
                                                 <td>
                                                    <em className="fa fa-lg fa-file-code-o"></em>
                                                 </td>
                                                 <td><a href="#" className="text-muted">database.controller.js</a>
                                                 </td>
                                              </tr>
                                           </tbody>
                                        </table>
                                     </div>
                                  </td>
                               </tr>
                            </tbody>
                         </table>
                         <p className="text-right"><a href="#" className="btn btn-link">Open repository</a>
                         </p>
                      </div>
                      { /* end Aside panel */ }
                   </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default ProjectDetails;
