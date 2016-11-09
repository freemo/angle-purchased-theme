import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

class HelpCenter extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <ContentWrapper>
                <div className="unwrap">
                   <div className="bg-cover">
                      <div className="container container-md pv-lg">
                         <div className="text-center mb-lg pb-lg">
                            <div className="h1 text-bold">Help Center</div>
                            <p>User our Help Center to quickly find answers</p>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="container container-md">
                   <form action="" className="form">
                      <div className="input-group input-group-lg">
                         <input type="text" name="term" placeholder="Search" style={{width:"70%"}} className="form-control input-lg radius-clear" />
                         <select style={{width:"30%"}} className="form-control input-lg">
                            <option>All Products</option>
                            <option>Templates</option>
                            <option>Servers</option>
                            <option>Billing</option>
                            <option>Buyers</option>
                            <option>Sellers</option>
                            <option>Plans</option>
                            <option>Accounts</option>
                         </select>
                         <span className="input-group-btn">
                            <button type="button" className="btn btn-info btn-lg b0 radius-clear">
                               <strong>Search</strong>
                            </button>
                         </span>
                      </div>
                   </form>
                   <p className="mv-lg pv-lg text-muted text-center">
                      <small>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</small>
                   </p>
                   <Row>
                      <Col md={4}>
                         <div className="panel b">
                            <div className="panel-body text-center">
                               <a href="#" className="link-unstyled text-primary">
                                  <em className="fa fa-5x fa-television mb-lg"></em>
                                  <br/>
                                  <span className="h4">All Products</span>
                                  <br/>
                                  <small className="text-muted">View all &rarr;</small>
                               </a>
                            </div>
                         </div>
                      </Col>
                      <Col md={4}>
                         <div className="panel b">
                            <div className="panel-body text-center">
                               <a href="#" className="link-unstyled text-info">
                                  <em className="fa fa-5x fa-object-group mb-lg"></em>
                                  <br/>
                                  <span className="h4">Templates</span>
                                  <br/>
                                  <small className="text-muted">View all &rarr;</small>
                               </a>
                            </div>
                         </div>
                      </Col>
                      <Col md={4}>
                         <div className="panel b">
                            <div className="panel-body text-center">
                               <a href="#" className="link-unstyled text-purple">
                                  <em className="fa fa-5x fa-cubes mb-lg"></em>
                                  <br/>
                                  <span className="h4">Servers</span>
                                  <br/>
                                  <small className="text-muted">View all &rarr;</small>
                               </a>
                            </div>
                         </div>
                      </Col>
                      <Col md={4}>
                         <div className="panel b">
                            <div className="panel-body text-center">
                               <a href="#" className="link-unstyled text-warning">
                                  <em className="fa fa-5x fa-diamond mb-lg"></em>
                                  <br/>
                                  <span className="h4">Buyers</span>
                                  <br/>
                                  <small className="text-muted">View all &rarr;</small>
                               </a>
                            </div>
                         </div>
                      </Col>
                      <Col md={4}>
                         <div className="panel b">
                            <div className="panel-body text-center">
                               <a href="#" className="link-unstyled text-danger">
                                  <em className="fa fa-5x fa-building-o mb-lg"></em>
                                  <br/>
                                  <span className="h4">Sellers</span>
                                  <br/>
                                  <small className="text-muted">View all &rarr;</small>
                               </a>
                            </div>
                         </div>
                      </Col>
                      <Col md={4}>
                         <div className="panel b">
                            <div className="panel-body text-center">
                               <a href="#" className="link-unstyled text-success">
                                  <em className="fa fa-5x fa-calendar-check-o mb-lg"></em>
                                  <br/>
                                  <span className="h4">Billing</span>
                                  <br/>
                                  <small className="text-muted">View all &rarr;</small>
                               </a>
                            </div>
                         </div>
                      </Col>
                   </Row>
                   <Row>
                      <Col md={2}></Col>
                      <Col md={4}>
                         <div className="panel b">
                            <div className="panel-body text-center">
                               <a href="#" className="link-unstyled text-dark">
                                  <em className="fa fa-5x fa-recycle mb-lg"></em>
                                  <br/>
                                  <span className="h4">Plans</span>
                                  <br/>
                                  <small className="text-muted">View all &rarr;</small>
                               </a>
                            </div>
                         </div>
                      </Col>
                      <Col md={4}>
                         <div className="panel b">
                            <div className="panel-body text-center">
                               <a href="#" className="link-unstyled text-dark">
                                  <em className="fa fa-5x fa-street-view mb-lg"></em>
                                  <br/>
                                  <span className="h4">Accounts</span>
                                  <br/>
                                  <small className="text-muted">View all &rarr;</small>
                               </a>
                            </div>
                         </div>
                      </Col>
                   </Row>
                </div>
            </ContentWrapper>
            );
    }

}

export default HelpCenter;
