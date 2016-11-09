import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, DropdownButton, MenuItem } from 'react-bootstrap';

class ContactDetails extends React.Component {
    componentDidMount() {
    }
    render() {
        var ddTitle = (<em className="fa fa-ellipsis-v fa-lg text-muted"></em>);
        return (
            <ContentWrapper>
                <Row>
                   <Col md={4}>
                      <div className="panel panel-default">
                         <div className="panel-body text-center">
                            <div className="pv-lg">
                               <img src="img/user/02.jpg" alt="Contact" className="center-block img-responsive img-circle img-thumbnail thumb96" />
                            </div>
                            <h3 className="m0 text-bold">Audrey Hunt</h3>
                            <div className="mv-lg">
                               <p>Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!</p>
                            </div>
                            <div className="text-center"><a href="#" className="btn btn-primary">Send message</a>
                            </div>
                         </div>
                      </div>
                      <div className="panel panel-default hidden-xs hidden-sm">
                         <div className="panel-heading">
                            <div className="panel-title text-center">Recent contacts</div>
                         </div>
                         <div className="panel-body">
                            <div className="media">
                               <div className="media-left media-middle">
                                  <a href="#">
                                     <img src="img/user/04.jpg" alt="Contact" className="media-object img-circle img-thumbnail thumb48" />
                                  </a>
                               </div>
                               <div className="media-body pt-sm">
                                  <div className="text-bold">Floyd Ortiz
                                     <div className="text-sm text-muted">12m ago</div>
                                  </div>
                               </div>
                            </div>
                            <div className="media">
                               <div className="media-left media-middle">
                                  <a href="#">
                                     <img src="img/user/05.jpg" alt="Contact" className="media-object img-circle img-thumbnail thumb48" />
                                  </a>
                               </div>
                               <div className="media-body pt-sm">
                                  <div className="text-bold">Luis Vasquez
                                     <div className="text-sm text-muted">2h ago</div>
                                  </div>
                               </div>
                            </div>
                            <div className="media">
                               <div className="media-left media-middle">
                                  <a href="#">
                                     <img src="img/user/06.jpg" alt="Contact" className="media-object img-circle img-thumbnail thumb48" />
                                  </a>
                               </div>
                               <div className="media-body pt-sm">
                                  <div className="text-bold">Duane Mckinney
                                     <div className="text-sm text-muted">yesterday</div>
                                  </div>
                               </div>
                            </div>
                            <div className="media">
                               <div className="media-left media-middle">
                                  <a href="#">
                                     <img src="img/user/07.jpg" alt="Contact" className="media-object img-circle img-thumbnail thumb48" />
                                  </a>
                               </div>
                               <div className="media-body pt-sm">
                                  <div className="text-bold">Connie Lambert
                                     <div className="text-sm text-muted">2 weeks ago</div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </Col>
                   <Col md={8}>
                      <div className="panel panel-default">
                         <div className="panel-body">
                            <div className="pull-right">
                                <DropdownButton bsStyle="link" noCaret pullRight title={ddTitle} id="dropdown-basic">
                                  <MenuItem eventKey="1">Send by message</MenuItem>
                                  <MenuItem eventKey="2">Share contact</MenuItem>
                                  <MenuItem eventKey="3">Block contact</MenuItem>
                                  <MenuItem eventKey="4"><span className="text-warning">Block contact</span></MenuItem>
                                </DropdownButton>
                            </div>
                            <div className="h4 text-center">Contact Information</div>
                            <Row className="pv-lg">
                               <Col lg={2}></Col>
                               <Col lg={8}>
                                  <form className="form-horizontal">
                                     <div className="form-group">
                                        <label htmlFor="inputContact1" className="col-sm-2 control-label">Name</label>
                                        <div className="col-sm-10">
                                           <input id="inputContact1" type="text" placeholder="" defaultValue="Audrey Hunt" className="form-control" />
                                        </div>
                                     </div>
                                     <div className="form-group">
                                        <label htmlFor="inputContact2" className="col-sm-2 control-label">Email</label>
                                        <div className="col-sm-10">
                                           <input id="inputContact2" type="email" defaultValue="mail@example.com" className="form-control" />
                                        </div>
                                     </div>
                                     <div className="form-group">
                                        <label htmlFor="inputContact3" className="col-sm-2 control-label">Phone</label>
                                        <div className="col-sm-10">
                                           <input id="inputContact3" type="text" defaultValue="(123) 465 789" className="form-control" />
                                        </div>
                                     </div>
                                     <div className="form-group">
                                        <label htmlFor="inputContact4" className="col-sm-2 control-label">Mobile</label>
                                        <div className="col-sm-10">
                                           <input id="inputContact4" type="text" defaultValue="(12) 123 987 465" className="form-control" />
                                        </div>
                                     </div>
                                     <div className="form-group">
                                        <label htmlFor="inputContact5" className="col-sm-2 control-label">Website</label>
                                        <div className="col-sm-10">
                                           <input id="inputContact5" type="text" defaultValue="http://some.wesbite.com" className="form-control" />
                                        </div>
                                     </div>
                                     <div className="form-group">
                                        <label htmlFor="inputContact6" className="col-sm-2 control-label">Address</label>
                                        <div className="col-sm-10">
                                           <textarea id="inputContact6" rows="4" className="form-control" defaultValue="Some nice Street, 1234"></textarea>
                                        </div>
                                     </div>
                                     <div className="form-group">
                                        <label htmlFor="inputContact7" className="col-sm-2 control-label">Social</label>
                                        <div className="col-sm-10">
                                           <input id="inputContact7" type="text" defaultValue="@Social" className="form-control" />
                                        </div>
                                     </div>
                                     <div className="form-group">
                                        <label htmlFor="inputContact8" className="col-sm-2 control-label">Company</label>
                                        <div className="col-sm-10">
                                           <input id="inputContact8" type="text" placeholder="No Company" className="form-control" />
                                        </div>
                                     </div>
                                     <div className="form-group">
                                        <div className="col-sm-offset-2 col-sm-10">
                                           <div className="checkbox">
                                              <label>
                                                 <input type="checkbox" />Favorite contact?</label>
                                           </div>
                                        </div>
                                     </div>
                                     <div className="form-group">
                                        <div className="col-sm-offset-2 col-sm-10">
                                           <button type="submit" className="btn btn-info">Update</button>
                                        </div>
                                     </div>
                                  </form>
                                  <div className="text-right"><a href="#" className="text-muted">Delete this contact?</a>
                                  </div>
                               </Col>
                            </Row>
                         </div>
                      </div>
                   </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default ContactDetails;
