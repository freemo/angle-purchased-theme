import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import FileManagerRun from './FileManager.run';

class FileManager extends React.Component {
    componentDidMount() {
        FileManagerRun();
    }
    render() {
        var ddTitle = (<img src="img/user/02.jpg" alt="user" className="thumb32 img-circle" />);
        return (
            <ContentWrapper>
                <div className="pull-right">
                    <DropdownButton bsStyle="link" noCaret pullRight title={ddTitle} id="dropdown-basic">
                      <MenuItem eventKey="1">
                           <span>Settings</span>
                      </MenuItem>
                      <MenuItem eventKey="2">
                           <span>Get more Storage</span>
                      </MenuItem>
                      <MenuItem eventKey="3">
                           <span>Manage permissions</span>
                      </MenuItem>
                    </DropdownButton>
                </div>
                <h3>File manager</h3>
                <Row>
                   <Col md={3}>
                      <div className="mb-lg">
                         <input type="file" data-input="false" data-button-name="btn btn-info" data-button-text="UPLOAD" data-icon-name="fa fa-upload mr" className="form-control filestyle" />
                      </div>
                      <div className="panel b">
                         <div className="panel-body">
                            <strong className="text-muted">FOLDERS</strong>
                         </div>
                         <div className="list-group">
                            <a href="#" className="active list-group-item">
                               <span className="badge">49</span>
                               <span className="circle bg-white mr"></span>
                               <span>All</span>
                            </a>
                            <a href="#" className="list-group-item">
                               <span className="badge">5</span>
                               <span className="circle circle-green mr"></span>
                               <span>Audio</span>
                            </a>
                            <a href="#" className="list-group-item">
                               <span className="badge">12</span>
                               <span className="circle circle-danger mr"></span>
                               <span>Movie</span>
                            </a>
                            <a href="#" className="list-group-item">
                               <span className="badge">22</span>
                               <span className="circle circle-warning mr"></span>
                               <span>Image</span>
                            </a>
                            <a href="#" className="list-group-item">
                               <span className="badge">9</span>
                               <span className="circle circle-purple mr"></span>
                               <span>Code</span>
                            </a>
                         </div>
                         <div className="panel-body">
                            <div className="clearfix text-sm">
                               <p className="pull-left">Storage</p>
                               <p className="pull-right">
                                  <strong>25 GB / 100 GB</strong>
                               </p>
                            </div>
                            <div className="progress progress-xs m0">
                               <div style={{width:"25%"}} className="progress-bar progress-bar-info">25%</div>
                            </div>
                         </div>
                      </div>
                   </Col>
                   <Col md={9}>
                      <Row>
                         <Col md={4} sm={6}>
                            <div data-filter-group="audio" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-audio-o text-primary"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">A good song.ogg</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">6.3MB</small>
                                     <small className="pull-left">10m ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="movie" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-movie-o text-danger"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">Movie.avi</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">6.3GB</small>
                                     <small className="pull-left">50m ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="audio" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-audio-o text-primary"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">Similar - Chosen.mp3</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">12MB</small>
                                     <small className="pull-left">20h ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="image" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-image-o text-success"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">El-Capitan.jpg</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">300KB</small>
                                     <small className="pull-left">1d ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="archive" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-archive-o text-warning"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">report-2016.txt</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">1MB</small>
                                     <small className="pull-left">15h ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="audio" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-audio-o text-primary"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">Song for you.ogg</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">4.5MB</small>
                                     <small className="pull-left">5m ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="code" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-code-o text-purple"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">bypass.c</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">3KB</small>
                                     <small className="pull-left">2h ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="image" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-image-o text-success"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">Sunset_red.png</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">450KB</small>
                                     <small className="pull-left">3d ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="image" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-image-o text-success"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">Sunset_red.png</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">450KB</small>
                                     <small className="pull-left">3d ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="code" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-code-o text-purple"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">angular.controller.js</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">5KB</small>
                                     <small className="pull-left">23h ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="audio" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-audio-o text-primary"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">Song 4 you.ogg</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">4.5MB</small>
                                     <small className="pull-left">5m ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="audio" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-audio-o text-primary"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">Similar - Chosen.mp3</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">12MB</small>
                                     <small className="pull-left">20h ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="audio" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-audio-o text-primary"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">Song 4 you.ogg</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">4.5MB</small>
                                     <small className="pull-left">5m ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="code" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-code-o text-purple"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">ng.components.css</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">78KB</small>
                                     <small className="pull-left">12h ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="image" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-image-o text-success"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">Sunset_red.png</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">450KB</small>
                                     <small className="pull-left">3d ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="archive" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-archive-o text-warning"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">report-2016.txt</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">1MB</small>
                                     <small className="pull-left">15h ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="audio" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-audio-o text-primary"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">A good song.ogg</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">6.3MB</small>
                                     <small className="pull-left">10m ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="movie" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-movie-o text-danger"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">Movie.avi</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">6.3GB</small>
                                     <small className="pull-left">50m ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="audio" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-audio-o text-primary"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">Similar - Chosen.mp3</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">12MB</small>
                                     <small className="pull-left">20h ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="image" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-image-o text-success"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">El-Capitan.jpg</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">300KB</small>
                                     <small className="pull-left">1d ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="audio" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-audio-o text-primary"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">Song 4 you.ogg</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">4.5MB</small>
                                     <small className="pull-left">5m ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="code" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-code-o text-purple"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">ng.components.css</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">78KB</small>
                                     <small className="pull-left">12h ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="image" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-image-o text-success"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">Sunset_red.png</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">450KB</small>
                                     <small className="pull-left">3d ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="archive" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-archive-o text-warning"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">report-2016.txt</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">1MB</small>
                                     <small className="pull-left">15h ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="image" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-image-o text-success"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">Sunset_red.png</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">450KB</small>
                                     <small className="pull-left">3d ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="code" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-code-o text-purple"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">angular.controller.js</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">5KB</small>
                                     <small className="pull-left">23h ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="audio" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-audio-o text-primary"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">Song 4 you.ogg</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">4.5MB</small>
                                     <small className="pull-left">5m ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                         <Col md={4} sm={6}>
                            <div data-filter-group="audio" className="panel discoverer">
                               <div className="panel-body text-center">
                                  <div className="clearfix discover">
                                     <div className="pull-right">
                                        <a href="#" title="Download" className="text-muted mr-sm">
                                           <em className="fa fa-download fa-fw"></em>
                                        </a>
                                     </div>
                                  </div>
                                  <a href="#" className="file-icon ph-lg">
                                     <em className="fa fa-5x fa-file-audio-o text-primary"></em>
                                  </a>
                                  <p>
                                     <small className="text-dark">Similar - Chosen.mp3</small>
                                  </p>
                                  <div className="clearfix m0 text-muted">
                                     <small className="pull-right">12MB</small>
                                     <small className="pull-left">20h ago</small>
                                  </div>
                               </div>
                            </div>
                         </Col>
                      </Row>
                   </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default FileManager;
