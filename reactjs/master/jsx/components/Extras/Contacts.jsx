import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, DropdownButton, MenuItem } from 'react-bootstrap';

class Contacts extends React.Component {
    componentDidMount() {
    }
    render() {
        var ddTitle = (<em className="fa fa-ellipsis-v fa-lg"></em>);
        return (
            <ContentWrapper>
                <div className="pull-right">
                    <DropdownButton bsStyle="link" noCaret pullRight title={ddTitle} id="dropdown-basic">
                      <MenuItem eventKey="1">
                           <em className="fa fa-fw fa-plus mr"></em>
                           <span>New contact</span>
                      </MenuItem>
                      <MenuItem eventKey="2">
                           <em className="fa fa-fw fa-mail-forward mr"></em>
                           <span>Import contact</span>
                      </MenuItem>
                      <MenuItem eventKey="3">
                           <em className="fa fa-fw fa-mail-reply mr"></em>
                           <span>Export contacts</span>
                      </MenuItem>
                    </DropdownButton>
                </div>
                <h3>Contacts</h3>
                <Row>
                   <Col md={4}>
                      <div className="panel panel-default">
                         <div className="panel-heading">
                            <a href="#" className="pull-right text-muted">
                               <em className="fa"></em>
                            </a>
                         </div>
                         <div className="panel-body text-center">
                            <img src="img/user/02.jpg" alt="Contact" className="center-block img-responsive img-circle thumb64" />
                            <h4>Audrey Hunt</h4>
                            <p>Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!</p>
                         </div>
                         <div className="panel-footer clearfix">
                            <div className="pull-left"><a href="#" className="btn btn-xs btn-primary">Send message</a>
                            </div>
                            <div className="pull-right"><a href="#" className="btn btn-xs btn-default">View</a>
                            </div>
                         </div>
                      </div>
                   </Col>
                   <Col md={4}>
                      <div className="panel panel-default">
                         <div className="panel-heading">
                            <a href="#" className="pull-right text-muted">
                               <em className="fa"></em>
                            </a>
                         </div>
                         <div className="panel-body text-center">
                            <img src="img/user/03.jpg" alt="Contact" className="center-block img-responsive img-circle thumb64" />
                            <h4>Leonard Price</h4>
                            <p>Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!</p>
                         </div>
                         <div className="panel-footer clearfix">
                            <div className="pull-left"><a href="#" className="btn btn-xs btn-primary">Send message</a>
                            </div>
                            <div className="pull-right"><a href="#" className="btn btn-xs btn-default">View</a>
                            </div>
                         </div>
                      </div>
                   </Col>
                   <Col md={4}>
                      <div className="panel panel-default">
                         <div className="panel-heading">
                            <a href="#" className="pull-right text-muted">
                               <em className="fa"></em>
                            </a>
                         </div>
                         <div className="panel-body text-center">
                            <img src="img/user/04.jpg" alt="Contact" className="center-block img-responsive img-circle thumb64" />
                            <h4>Jamie Stephens</h4>
                            <p>Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!</p>
                         </div>
                         <div className="panel-footer clearfix">
                            <div className="pull-left"><a href="#" className="btn btn-xs btn-primary">Send message</a>
                            </div>
                            <div className="pull-right"><a href="#" className="btn btn-xs btn-default">View</a>
                            </div>
                         </div>
                      </div>
                   </Col>
                </Row>
                <Row>
                   <Col md={4}>
                      <div className="panel panel-default">
                         <div className="panel-heading">
                            <a href="#" className="pull-right text-muted">
                               <em className="fa"></em>
                            </a>
                         </div>
                         <div className="panel-body text-center">
                            <img src="img/user/05.jpg" alt="Contact" className="center-block img-responsive img-circle thumb64" />
                            <h4>Tara Nelson</h4>
                            <p>Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!</p>
                         </div>
                         <div className="panel-footer clearfix">
                            <div className="pull-left"><a href="#" className="btn btn-xs btn-primary">Send message</a>
                            </div>
                            <div className="pull-right"><a href="#" className="btn btn-xs btn-default">View</a>
                            </div>
                         </div>
                      </div>
                   </Col>
                   <Col md={4}>
                      <div className="panel panel-default">
                         <div className="panel-heading">
                            <a href="#" className="pull-right text-muted">
                               <em className="fa"></em>
                            </a>
                         </div>
                         <div className="panel-body text-center">
                            <img src="img/user/06.jpg" alt="Contact" className="center-block img-responsive img-circle thumb64" />
                            <h4>Constance Cook</h4>
                            <p>Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!</p>
                         </div>
                         <div className="panel-footer clearfix">
                            <div className="pull-left"><a href="#" className="btn btn-xs btn-primary mr-sm">Send message</a><a href="#" className="btn btn-xs btn-primary">Call</a>
                            </div>
                            <div className="pull-right"><a href="#" className="btn btn-xs btn-default">View</a>
                            </div>
                         </div>
                      </div>
                   </Col>
                   <Col md={4}>
                      <div className="panel panel-default">
                         <div className="panel-heading">
                            <a href="#" className="pull-right text-muted">
                               <em className="fa"></em>
                            </a>
                         </div>
                         <div className="panel-body text-center">
                            <img src="img/user/07.jpg" alt="Contact" className="center-block img-responsive img-circle thumb64" />
                            <h4>Laura Palmr</h4>
                            <p>Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!</p>
                         </div>
                         <div className="panel-footer clearfix">
                            <div className="pull-left"><a href="#" className="btn btn-xs btn-primary">Send message</a>
                            </div>
                            <div className="pull-right"><a href="#" className="btn btn-xs btn-default">View</a>
                            </div>
                         </div>
                      </div>
                   </Col>
                </Row>
                <Row>
                   <Col md={4}>
                      <div className="panel panel-default">
                         <div className="panel-heading">
                            <a href="#" className="pull-right text-muted">
                               <em className="fa"></em>
                            </a>
                         </div>
                         <div className="panel-body text-center">
                            <img src="img/user/08.jpg" alt="Contact" className="center-block img-responsive img-circle thumb64" />
                            <h4>Audrey Hunt</h4>
                            <p>Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!</p>
                         </div>
                         <div className="panel-footer clearfix">
                            <div className="pull-left"><a href="#" className="btn btn-xs btn-primary">Call</a>
                            </div>
                            <div className="pull-right"><a href="#" className="btn btn-xs btn-default">View</a>
                            </div>
                         </div>
                      </div>
                   </Col>
                   <Col md={4}>
                      <div className="panel panel-default">
                         <div className="panel-heading">
                            <a href="#" className="pull-right text-muted">
                               <em className="fa"></em>
                            </a>
                         </div>
                         <div className="panel-body text-center">
                            <img src="img/user/09.jpg" alt="Contact" className="center-block img-responsive img-circle thumb64" />
                            <h4>Leslie Mckinney</h4>
                            <p>Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!</p>
                         </div>
                         <div className="panel-footer clearfix">
                            <div className="pull-left"><a href="#" className="btn btn-xs btn-primary">Send message</a>
                            </div>
                            <div className="pull-right"><a href="#" className="btn btn-xs btn-default">View</a>
                            </div>
                         </div>
                      </div>
                   </Col>
                   <Col md={4}>
                      <div className="panel panel-default">
                         <div className="panel-heading">
                            <a href="#" className="pull-right text-muted">
                               <em className="fa"></em>
                            </a>
                         </div>
                         <div className="panel-body text-center">
                            <img src="img/user/04.jpg" alt="Contact" className="center-block img-responsive img-circle thumb64" />
                            <h4>Brian Mills</h4>
                            <p>Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!</p>
                         </div>
                         <div className="panel-footer clearfix">
                            <div className="pull-left"><a href="#" className="btn btn-xs btn-primary">Send message</a>
                            </div>
                            <div className="pull-right"><a href="#" className="btn btn-xs btn-default">View</a>
                            </div>
                         </div>
                      </div>
                   </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default Contacts;
