import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Tab, Nav, NavItem, ListGroup, ListGroupItem } from 'react-bootstrap';
import SettingsRun from './Settings.run';

class Settings extends React.Component {
    componentDidMount() {
        SettingsRun();
    }
    render() {
        return (
            <ContentWrapper>
                <Tab.Container className="container-md" id="settings-tab" defaultActiveKey="tabpanel1">
                   <Row>
                      <Col md={3}>
                         <div className="panel b">
                            <div className="panel-heading bg-gray-lighter text-bold">Personal Settings</div>
                            <Nav>
                                <NavItem eventKey="tabpanel1">Profile</NavItem>
                                <NavItem eventKey="tabpanel2">Account</NavItem>
                                <NavItem eventKey="tabpanel3">Emails</NavItem>
                                <NavItem eventKey="tabpanel4">Notifications</NavItem>
                                <NavItem eventKey="tabpanel5">Applications</NavItem>
                            </Nav>
                         </div>
                      </Col>
                      <Col md={9}>
                         <Tab.Content animation className="p0 b0">
                            <Tab.Pane eventKey="tabpanel1">
                               <div className="panel b">
                                  <div className="panel-heading bg-gray-lighter text-bold">Profile</div>
                                  <div className="panel-body">
                                     <form action="">
                                        <div className="form-group">
                                           <label>Picture</label>
                                           <input type="file" data-input="false" data-class-button="btn btn-default" data-class-input="form-control inline" data-button-text="Upload new picture" data-icon-name="fa fa-upload mr" className="form-control filestyle"
                                           />
                                        </div>
                                        <div className="form-group">
                                           <label>Name</label>
                                           <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                           <label>Bio</label>
                                           <textarea rows="3" className="form-control"></textarea>
                                        </div>
                                        <div className="form-group">
                                           <label>URL</label>
                                           <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                           <label>Company</label>
                                           <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                           <label>Location</label>
                                           <input type="text" className="form-control" />
                                        </div>
                                        <button type="button" className="btn btn-info">Update settings</button>
                                        <p>
                                           <small className="text-muted">* Integer fermentum accumsan metus, id sagittis ipsum molestie vitae</small>
                                        </p>
                                     </form>
                                  </div>
                               </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabpanel2">
                                <div>
                                   <div className="panel b">
                                      <div className="panel-heading bg-gray-lighter text-bold">Account</div>
                                      <div className="panel-body">
                                         <form action="">
                                            <div className="form-group">
                                               <label>Current password</label>
                                               <input type="password" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                               <label>New password</label>
                                               <input type="password" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                               <label>Confirm new password</label>
                                               <input type="password" className="form-control" />
                                            </div>
                                            <button type="button" className="btn btn-info">Update password</button>
                                            <p>
                                               <small className="text-muted">* Integer fermentum accumsan metus, id sagittis ipsum molestie vitae</small>
                                            </p>
                                         </form>
                                      </div>
                                   </div>
                                   <div className="panel b">
                                      <div className="panel-heading bg-danger text-bold">Delete account</div>
                                      <div className="panel-body bt">
                                         <p>You will be asked for confirmation before delete account.</p>
                                         <button type="button" className="btn btn-default">
                                            <span className="text-danger">Delete account</span>
                                         </button>
                                      </div>
                                   </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabpanel3">
                               <div className="panel b">
                                  <div className="panel-heading bg-gray-lighter text-bold">Emails</div>
                                  <div className="panel-body">
                                     <p>Etiam eros nibh, condimentum in auctor et, aliquam quis elit. Donec id libero eros. Ut fringilla, justo id fringilla pretium, nibh nunc suscipit mauris, et suscipit nulla nisl ac dolor. Nam egestas, leo eu gravida tincidunt, sem ipsum
                                        pellentesque quam, vel iaculis est quam et eros.</p>
                                     <p>
                                        <strong>Your email addresses</strong>
                                     </p>
                                     <p>
                                        <span className="mr">email@someaddress.com</span>
                                        <span className="label label-success">primary</span>
                                     </p>
                                     <p>
                                        <span className="mr">another.email@someaddress.com</span>
                                        <span className="label bg-gray">private</span>
                                     </p>
                                  </div>
                                  <div className="panel-body bt">
                                     <p>
                                        <strong>Add email address</strong>
                                     </p>
                                     <form action="">
                                        <Row>
                                           <Col lg={6}>
                                              <div className="form-group">
                                                 <div className="input-group">
                                                    <input type="email" placeholder="email@server.com" className="form-control" />
                                                    <span className="input-group-btn">
                                                       <button type="button" className="btn btn-default">Add</button>
                                                    </span>
                                                 </div>
                                              </div>
                                              <div className="form-group">
                                                 <div className="checkbox">
                                                    <label>
                                                       <input type="checkbox" defaultValue="" />Keep my email address private</label>
                                                 </div>
                                              </div>
                                           </Col>
                                        </Row>
                                        <button type="button" className="btn btn-info">Update email</button>
                                        <p>
                                           <small className="text-muted">* Integer fermentum accumsan metus, id sagittis ipsum molestie vitae</small>
                                        </p>
                                     </form>
                                  </div>
                               </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabpanel4">
                               <form action="">
                                  <div className="panel b">
                                     <div className="panel-heading bg-gray-lighter text-bold">Notifications</div>
                                     <div className="panel-body bb">
                                        <div className="form-group">
                                           <div className="checkbox">
                                              <label>
                                                 <input type="checkbox" defaultValue="" />
                                                 <strong>Disable email notifications</strong>
                                              </label>
                                           </div>
                                        </div>
                                     </div>
                                     <div className="panel-body">
                                        <p>
                                           <strong>Interaction</strong>
                                        </p>
                                        <div className="form-group">
                                           <div className="checkbox">
                                              <label>
                                                 <input type="checkbox" defaultValue="" />Alert me when someone start to follow me</label>
                                           </div>
                                        </div>
                                        <div className="form-group">
                                           <div className="checkbox">
                                              <label>
                                                 <input type="checkbox" defaultValue="" />Alert me when someone star my work</label>
                                           </div>
                                        </div>
                                        <div className="form-group">
                                           <div className="checkbox">
                                              <label>
                                                 <input type="checkbox" defaultValue="" />Alert me when post a new comment</label>
                                           </div>
                                        </div>
                                        <p>
                                           <strong>Marketing</strong>
                                        </p>
                                        <div className="form-group">
                                           <div className="checkbox">
                                              <label>
                                                 <input type="checkbox" defaultValue="" />Send me news and interesting updates</label>
                                           </div>
                                        </div>
                                        <button type="button" className="btn btn-info">Update notifications</button>
                                        <p>
                                           <small className="text-muted">Mauris sodales accumsan erat, ut dapibus erat faucibus vitae.</small>
                                        </p>
                                     </div>
                                  </div>
                               </form>
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabpanel5">
                               <div className="panel b">
                                  <div className="panel-heading bg-gray-lighter text-bold">Applications</div>
                                  <div className="panel-body">
                                     <p>
                                        <span>You have granted access for</span>
                                        <strong>3 applications</strong>
                                        <span>to your account.</span>
                                     </p>
                                     <ul className="list-group">
                                        <li className="list-group-item clearfix">
                                           <div className="pull-left mr">
                                              <img src="img/dummy.png" alt="App" className="img-responsive thumb48" />
                                           </div>
                                           <div className="pull-right">
                                              <button type="button" className="btn btn-default">
                                                 <strong>Revoke</strong>
                                              </button>
                                           </div>
                                           <p className="text-bold mb0">Application #1</p>
                                           <small>Ut turpis urna, tristique sed adipiscing nec, luctus quis leo.</small>
                                        </li>
                                        <li className="list-group-item clearfix">
                                           <div className="pull-left mr">
                                              <img src="img/dummy.png" alt="App" className="img-responsive thumb48" />
                                           </div>
                                           <div className="pull-right">
                                              <button type="button" className="btn btn-default">
                                                 <strong>Revoke</strong>
                                              </button>
                                           </div>
                                           <p className="text-bold mb0">Application #2</p>
                                           <small>Ut turpis urna, tristique sed adipiscing nec, luctus quis leo.</small>
                                        </li>
                                        <li className="list-group-item clearfix">
                                           <div className="pull-left mr">
                                              <img src="img/dummy.png" alt="App" className="img-responsive thumb48" />
                                           </div>
                                           <div className="pull-right">
                                              <button type="button" className="btn btn-default">
                                                 <strong>Revoke</strong>
                                              </button>
                                           </div>
                                           <p className="text-bold mb0">Application #3</p>
                                           <small>Ut turpis urna, tristique sed adipiscing nec, luctus quis leo.</small>
                                        </li>
                                     </ul>
                                  </div>
                               </div>
                            </Tab.Pane>
                         </Tab.Content>
                      </Col>
                   </Row>
                </Tab.Container>
            </ContentWrapper>
            );
    }

}

export default Settings;


