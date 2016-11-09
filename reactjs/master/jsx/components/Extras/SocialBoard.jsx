import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, DropdownButton, MenuItem } from 'react-bootstrap';

class SocialBoard extends React.Component {
    componentDidMount() {
    }
    render() {
        var ddTitle = (<em className="fa fa-ellipsis-v fa-lg text-muted"></em>);
        return (
            <ContentWrapper>
                <div className="panel b text-white">
                   <div style={{backgroundImage: "url('img/profile-bg.jpg')"}} className="panel-body bg-cover clearfix">
                      <div className="media mt0">
                         <div className="media-left">
                            <a href="#">
                               <img src="img/user/06.jpg" alt="Image" className="media-object img-thumbnail img-circle thumb96" />
                            </a>
                         </div>
                         <div className="media-body media-middle">
                            <div className="clearfix">
                               <div className="pull-left">
                                  <h4 className="media-heading m0">Claire Beck</h4>
                                  <p>Team lead</p>
                                  <button type="button" className="btn btn-info btn-xs">"Following"</button>
                               </div>
                               <div className="pull-right">
                                  <div className="inline text-center mr">
                                     <div className="h3 m0">
                                        <strong>1.4k</strong>
                                     </div>
                                     <small>followers</small>
                                  </div>
                                  <div className="inline text-center mr">
                                     <div className="h3 m0">
                                        <strong>350</strong>
                                     </div>
                                     <small>pictures</small>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="row-masonry row-masonry-lg-2">
                   <div className="col-masonry">
                      <div className="panel b m0">
                         <div className="panel-heading">
                            <div className="pull-right">
                                <DropdownButton bsStyle="link" noCaret pullRight title={ddTitle} id="dropdown-basic">
                                  <MenuItem eventKey="1">
                                       <em className="fa fa-fw fa-plus mr"></em>
                                       <span>Hide this</span>
                                  </MenuItem>
                                  <MenuItem eventKey="2">
                                       <em className="fa fa-fw fa-mail-forward mr"></em>
                                       <span>Share</span>
                                  </MenuItem>
                                  <MenuItem eventKey="3">
                                       <em className="fa fa-fw fa-mail-reply mr"></em>
                                       <span>Block user</span>
                                  </MenuItem>
                                </DropdownButton>
                            </div>
                            <div className="media mt0">
                               <div className="media-left">
                                  <a href="#">
                                     <img src="img/user/03.jpg" alt="Image" className="media-object img-thumbnail img-circle thumb32" />
                                  </a>
                               </div>
                               <div className="media-body media-middle">
                                  <h5 className="media-heading m0 text-bold">Raymond Clark</h5>
                                  <small className="text-muted">yesterday</small>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body">
                            <div className="row">
                               <div className="col-lg-4 text-center mb-lg">
                                  <a href="#">
                                     <img src="img/bg8.jpg" alt="Image" className="img-responsive img-thumbnail" />
                                  </a>
                               </div>
                               <div className="col-lg-8">
                                  <h4 className="media-heading">Lorem Ipsum</h4>
                                  <p>Fusce at enim eget nibh convallis elementum. Duis a neque odio, at varius elit. Suspendisse ullamcorper eros eget augue ultrices feugiat. Phasellus dictum nisi eu ipsum fermentum rhoncus. Mauris eu lacus massa, vel condimentum lectus..</p>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body">
                            <form method="post" action="" className="mt">
                               <textarea placeholder="Comment..." rows="1" className="form-control no-resize"></textarea>
                            </form>
                         </div>
                      </div>
                   </div>
                   <div className="col-masonry">
                      <div className="panel b m0">
                         <div className="panel-heading">
                            <div className="pull-right">
                               <a href="#" className="text-muted">
                                  <em className="fa fa-thumbs-o-up fa-fw"></em>
                                  <span>(32)</span>
                               </a>
                            </div>
                            <div className="media mt0">
                               <div className="media-left">
                                  <a href="#">
                                     <img src="img/user/08.jpg" alt="Image" className="media-object img-thumbnail img-circle thumb32" />
                                  </a>
                               </div>
                               <div className="media-body media-middle">
                                  <h5 className="media-heading m0 text-bold">Kelly Vargas</h5>
                                  <small className="text-muted">3 days</small>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body">
                            <p>Curabitur dignissim dapibus nisl sed iaculis.</p>
                            <p>
                               <a href="#">
                                  <img src="img/bg10.jpg" alt="Image" className="img-responsive img-thumbnail" />
                               </a>
                            </p>
                            <p>
                               <em className="fa fa-comment-o fa-fw"></em>
                               <span>(9)</span>
                            </p>
                            <div className="media">
                               <small className="pull-right text-muted">12m ago</small>
                               <div className="media-left">
                                  <img src="img/user/05.jpg" alt="Image" className="media-object img-circle thumb32" />
                               </div>
                               <div className="media-body">
                                  <span className="media-heading">
                                     <p className="m0">
                                        <a href="#">
                                           <strong>Aiden Curtis</strong>
                                        </a>
                                     </p>
                                     <p className="m0 text-muted">Hey looks great!</p>
                                  </span>
                               </div>
                            </div>
                            <div className="media">
                               <small className="pull-right text-muted">30m ago</small>
                               <div className="media-left">
                                  <img src="img/user/08.jpg" alt="Image" className="media-object img-circle thumb32" />
                               </div>
                               <div className="media-body">
                                  <span className="media-heading">
                                     <p className="m0">
                                        <a href="#">
                                           <strong>William Stevens</strong>
                                        </a>
                                     </p>
                                     <p className="m0 text-muted">Excellento shot!</p>
                                  </span>
                               </div>
                            </div>
                            <div className="media">
                               <small className="pull-right text-muted">30m ago</small>
                               <div className="media-left">
                                  <img src="img/user/04.jpg" alt="Image" className="media-object img-circle thumb32" />
                               </div>
                               <div className="media-body">
                                  <span className="media-heading">
                                     <p className="m0">
                                        <a href="#">
                                           <strong>James Payne</strong>
                                        </a>
                                     </p>
                                     <p className="m0 text-muted">Nice shot!</p>
                                  </span>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body bg-gray-lighter"><a href="#" className="link-unstyled">Load (6) more comments</a>
                         </div>
                         <div className="panel-body">
                            <form method="post" action="" className="mt">
                               <textarea placeholder="Comment..." rows="1" className="form-control no-resize"></textarea>
                            </form>
                         </div>
                      </div>
                   </div>
                   <div className="col-masonry">
                      <div className="panel b m0">
                         <div className="panel-body">
                            <form method="post" action="" className="mb mt">
                               <textarea rows="4" placeholder="Post a new comment.." className="form-control"></textarea>
                            </form>
                            <div className="clearfix">
                               <div className="pull-left">
                                  <ul className="nav nav-pills">
                                     <li>
                                        <a href="#">
                                           <em className="fa fa-location-arrow"></em>
                                        </a>
                                     </li>
                                     <li>
                                        <a href="#">
                                           <em className="fa fa-photo"></em>
                                        </a>
                                     </li>
                                     <li>
                                        <a href="#">
                                           <em className="fa fa-video-camera"></em>
                                        </a>
                                     </li>
                                  </ul>
                               </div>
                               <div className="pull-right">
                                  <button type="button" className="btn btn-success">Post</button>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div className="col-masonry">
                      <div className="panel b m0">
                         <div className="panel-heading">
                            <div className="pull-right">
                               <a href="#" className="inline">
                                  <img src="img/user/05.jpg" alt="member" className="img-circle thumb24" />
                               </a>
                               <a href="#" className="inline">
                                  <img src="img/user/06.jpg" alt="member" className="img-circle thumb24" />
                               </a>
                               <a href="#" className="inline">
                                  <img src="img/user/07.jpg" alt="member" className="img-circle thumb24" />
                               </a>
                            </div>
                            <div className="media mt0">
                               <div className="media-left">
                                  <a href="#">
                                     <img src="img/user/04.jpg" alt="Image" className="media-object img-thumbnail img-circle thumb32" />
                                  </a>
                               </div>
                               <div className="media-body media-middle">
                                  <h5 className="media-heading m0 text-bold">Travis Horton</h5>
                                  <small className="text-muted">3 minutes</small>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body">
                            <blockquote>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu odio vitae augue elementum molestie sed quis turpis.</p>
                               <footer>Someone famous in
                                  <cite title="Source Title">Source Title</cite>
                               </footer>
                            </blockquote>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                         </div>
                      </div>
                   </div>
                   <div className="col-masonry">
                      <div className="panel b m0">
                         <div className="panel-heading">
                            <div className="media">
                               <div className="media-left">
                                  <a href="#">
                                     <img src="img/user/08.jpg" alt="Image" className="media-object img-thumbnail img-circle thumb32" />
                                  </a>
                               </div>
                               <div className="media-body media-middle">
                                  <h5 className="media-heading m0 text-bold">Kelly Vargas</h5>
                                  <small className="text-muted">3 days</small>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body">
                            <p>
                               <a href="#">
                                  <img src="img/bg3.jpg" alt="Image" className="img-responsive img-thumbnail" />
                               </a>
                            </p>
                            <p>Curabitur dignissim dapibus nisl sed iaculis.</p>
                         </div>
                      </div>
                   </div>
                   <div className="col-masonry">
                      <div className="panel b m0">
                         <div className="panel-heading">
                            <div className="pull-right">
                                <DropdownButton bsStyle="link" noCaret pullRight title={ddTitle} id="dropdown-basic">
                                  <MenuItem eventKey="1">
                                       <em className="fa fa-fw fa-plus mr"></em>
                                       <span>Hide this</span>
                                  </MenuItem>
                                  <MenuItem eventKey="2">
                                       <em className="fa fa-fw fa-mail-forward mr"></em>
                                       <span>Share</span>
                                  </MenuItem>
                                  <MenuItem eventKey="3">
                                       <em className="fa fa-fw fa-mail-reply mr"></em>
                                       <span>Block user</span>
                                  </MenuItem>
                                </DropdownButton>
                            </div>
                            <div className="media mt0">
                               <div className="media-left">
                                  <a href="#">
                                     <img src="img/user/03.jpg" alt="Image" className="media-object img-thumbnail img-circle thumb32" />
                                  </a>
                               </div>
                               <div className="media-body media-middle">
                                  <h5 className="media-heading m0 text-bold">Elmer Thomas</h5>
                                  <small className="text-muted">3 minutes</small>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body">
                            <p>I'm the big picture guy! xD</p>
                         </div>
                         <div className="panel-body">
                            <a href="#" className="inline">
                               <img src="img/user/03.jpg" alt="member" className="img-circle thumb48" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/02.jpg" alt="member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/06.jpg" alt="member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/07.jpg" alt="member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/08.jpg" alt="member" className="img-circle thumb24" />
                            </a>
                            <a href="#" className="inline">
                               <img src="img/user/09.jpg" alt="member" className="img-circle thumb24" />
                            </a>
                         </div>
                         <div className="panel-body">
                            <form method="post" action="" className="mb mt">
                               <textarea placeholder="Comment..." rows="1" className="form-control no-resize"></textarea>
                            </form>
                            <div className="clearfix">
                               <div className="pull-left">
                                  <ul className="nav nav-pills">
                                     <li>
                                        <a href="#">
                                           <em className="fa fa-location-arrow"></em>
                                        </a>
                                     </li>
                                     <li>
                                        <a href="#">
                                           <em className="fa fa-photo"></em>
                                        </a>
                                     </li>
                                     <li>
                                        <a href="#">
                                           <em className="fa fa-video-camera"></em>
                                        </a>
                                     </li>
                                  </ul>
                               </div>
                               <div className="pull-right">
                                  <button type="button" className="btn btn-success btn-sm">Post</button>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="text-center mv-lg">
                   <button type="button" className="btn btn-default btn-oval btn-lg">Load more..</button>
                </div>
            </ContentWrapper>
            );
    }

}

export default SocialBoard;
