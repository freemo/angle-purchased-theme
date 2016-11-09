import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

class Followers extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Followers</h3>
                    <Row>
                       { /* Aside panel */ }
                       <Col lg={3} md={4}>
                          <div className="panel b text-center">
                             <div className="panel-body">
                                <p className="h4 text-bold mb0">This is you</p>
                             </div>
                             <div className="panel-body">
                                <img src="img/user/02.jpg" className="img-circle thumb64" />
                                <p className="h4 text-bold mb0">Todd Evans</p>
                                <p>Rome, Italy</p>
                                <p>Joined on Feb, 2015</p>
                             </div>
                             <div className="panel-body bt">
                                <Row>
                                   <Col xs={4} className="br">
                                      <em className="fa fa-facebook fa-fw text-primary"></em>
                                      <strong>+700</strong>
                                   </Col>
                                   <Col xs={4} className="br">
                                      <em className="fa fa-twitter fa-fw text-info"></em>
                                      <strong>+300</strong>
                                   </Col>
                                   <Col xs={4}>
                                      <em className="fa fa-heart fa-fw text-danger"></em>
                                      <strong>+150</strong>
                                   </Col>
                                </Row>
                             </div>
                          </div>
                          <div className="panel b">
                             <div className="panel-heading">
                                <h5>Who may interest you</h5>
                             </div>
                             <div className="panel-body">
                                <div className="media">
                                   <div className="media-left media-middle">
                                      <a href="#">
                                         <img src="img/user/04.jpg" alt="Contact" className="media-object img-circle img-thumbnail thumb48" />
                                      </a>
                                   </div>
                                   <div className="media-body pt-sm">
                                      <div className="pull-right">
                                         <button type="button" className="btn btn-info btn-sm">Follow</button>
                                      </div>
                                      <div className="text-bold">Floyd Ortiz
                                         <div className="text-sm text-muted">125k followers</div>
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
                                      <div className="pull-right">
                                         <button type="button" className="btn btn-info btn-sm">Follow</button>
                                      </div>
                                      <div className="text-bold">Luis Vasquez
                                         <div className="text-sm text-muted">+30k followers</div>
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
                                      <div className="pull-right">
                                         <button type="button" className="btn btn-info btn-sm">Follow</button>
                                      </div>
                                      <div className="text-bold">Duane Mckinney
                                         <div className="text-sm text-muted">+100k followers</div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                             <div className="panel-body"><a href="" className="link-unstyled text-muted">Find more friends</a>
                             </div>
                          </div>
                          <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                       </Col>
                       { /* end Aside panel */ }
                       { /* Main panels */ }
                       <Col lg={9} md={8}>
                          <Row>
                             <Col lg={4} md={6}>
                                <div className="panel b text-center">
                                   <div className="panel-body">
                                      <img src="img/user/01.jpg" className="img-circle thumb64" />
                                      <p className="h4 text-bold mb0">Savannah Ramirez</p>
                                      <p>Rome, Italy</p>
                                      <button type="button" className="btn btn-success btn-oval">Follow</button>
                                   </div>
                                   <div className="panel-body bt">
                                      <Row>
                                         <Col xs={4} className="br">
                                            <em className="fa fa-facebook fa-fw text-primary"></em>
                                            <strong>+700</strong>
                                         </Col>
                                         <Col xs={4} className="br">
                                            <em className="fa fa-twitter fa-fw text-info"></em>
                                            <strong>+300</strong>
                                         </Col>
                                         <Col xs={4}>
                                            <em className="fa fa-heart fa-fw text-danger"></em>
                                            <strong>+150</strong>
                                         </Col>
                                      </Row>
                                   </div>
                                </div>
                             </Col>
                             <Col lg={4} md={6}>
                                <div className="panel b text-center">
                                   <div className="panel-body">
                                      <img src="img/user/03.jpg" className="img-circle thumb64" />
                                      <p className="h4 text-bold mb0">Warren Watts</p>
                                      <p>Rome, Italy</p>
                                      <button type="button" className="btn btn-success btn-oval">Follow</button>
                                   </div>
                                   <div className="panel-body bt">
                                      <Row>
                                         <Col xs={4} className="br">
                                            <em className="fa fa-facebook fa-fw text-primary"></em>
                                            <strong>+700</strong>
                                         </Col>
                                         <Col xs={4} className="br">
                                            <em className="fa fa-twitter fa-fw text-info"></em>
                                            <strong>+300</strong>
                                         </Col>
                                         <Col xs={4}>
                                            <em className="fa fa-heart fa-fw text-danger"></em>
                                            <strong>+150</strong>
                                         </Col>
                                      </Row>
                                   </div>
                                </div>
                             </Col>
                             <Col lg={4} md={6}>
                                <div className="panel b text-center">
                                   <div className="panel-body">
                                      <img src="img/user/04.jpg" className="img-circle thumb64" />
                                      <p className="h4 text-bold mb0">Charlie Price</p>
                                      <p>Rome, Italy</p>
                                      <button type="button" className="btn btn-success btn-oval">Follow</button>
                                   </div>
                                   <div className="panel-body bt">
                                      <Row>
                                         <Col xs={4} className="br">
                                            <em className="fa fa-facebook fa-fw text-primary"></em>
                                            <strong>+700</strong>
                                         </Col>
                                         <Col xs={4} className="br">
                                            <em className="fa fa-twitter fa-fw text-info"></em>
                                            <strong>+300</strong>
                                         </Col>
                                         <Col xs={4}>
                                            <em className="fa fa-heart fa-fw text-danger"></em>
                                            <strong>+150</strong>
                                         </Col>
                                      </Row>
                                   </div>
                                </div>
                             </Col>
                             <Col lg={4} md={6}>
                                <div className="panel b text-center">
                                   <div className="panel-body">
                                      <img src="img/user/05.jpg" className="img-circle thumb64" />
                                      <p className="h4 text-bold mb0">Vickie Alvarez</p>
                                      <p>Rome, Italy</p>
                                      <button type="button" className="btn btn-success btn-oval">Follow</button>
                                   </div>
                                   <div className="panel-body bt">
                                      <Row>
                                         <Col xs={4} className="br">
                                            <em className="fa fa-facebook fa-fw text-primary"></em>
                                            <strong>+700</strong>
                                         </Col>
                                         <Col xs={4} className="br">
                                            <em className="fa fa-twitter fa-fw text-info"></em>
                                            <strong>+300</strong>
                                         </Col>
                                         <Col xs={4}>
                                            <em className="fa fa-heart fa-fw text-danger"></em>
                                            <strong>+150</strong>
                                         </Col>
                                      </Row>
                                   </div>
                                </div>
                             </Col>
                             <Col lg={4} md={6}>
                                <div className="panel b text-center">
                                   <div className="panel-body">
                                      <img src="img/user/06.jpg" className="img-circle thumb64" />
                                      <p className="h4 text-bold mb0">Marjorie Miller</p>
                                      <p>Rome, Italy</p>
                                      <button type="button" className="btn btn-success btn-oval">Follow</button>
                                   </div>
                                   <div className="panel-body bt">
                                      <Row>
                                         <Col xs={4} className="br">
                                            <em className="fa fa-facebook fa-fw text-primary"></em>
                                            <strong>+700</strong>
                                         </Col>
                                         <Col xs={4} className="br">
                                            <em className="fa fa-twitter fa-fw text-info"></em>
                                            <strong>+300</strong>
                                         </Col>
                                         <Col xs={4}>
                                            <em className="fa fa-heart fa-fw text-danger"></em>
                                            <strong>+150</strong>
                                         </Col>
                                      </Row>
                                   </div>
                                </div>
                             </Col>
                             <Col lg={4} md={6}>
                                <div className="panel b text-center">
                                   <div className="panel-body">
                                      <img src="img/user/07.jpg" className="img-circle thumb64" />
                                      <p className="h4 text-bold mb0">Tracy Reynolds</p>
                                      <p>Rome, Italy</p>
                                      <button type="button" className="btn btn-success btn-oval">Follow</button>
                                   </div>
                                   <div className="panel-body bt">
                                      <Row>
                                         <Col xs={4} className="br">
                                            <em className="fa fa-facebook fa-fw text-primary"></em>
                                            <strong>+700</strong>
                                         </Col>
                                         <Col xs={4} className="br">
                                            <em className="fa fa-twitter fa-fw text-info"></em>
                                            <strong>+300</strong>
                                         </Col>
                                         <Col xs={4}>
                                            <em className="fa fa-heart fa-fw text-danger"></em>
                                            <strong>+150</strong>
                                         </Col>
                                      </Row>
                                   </div>
                                </div>
                             </Col>
                             <Col lg={4} md={6}>
                                <div className="panel b text-center">
                                   <div className="panel-body">
                                      <img src="img/user/08.jpg" className="img-circle thumb64" />
                                      <p className="h4 text-bold mb0">Lori Lewis</p>
                                      <p>Rome, Italy</p>
                                      <button type="button" className="btn btn-success btn-oval">Follow</button>
                                   </div>
                                   <div className="panel-body bt">
                                      <Row>
                                         <Col xs={4} className="br">
                                            <em className="fa fa-facebook fa-fw text-primary"></em>
                                            <strong>+700</strong>
                                         </Col>
                                         <Col xs={4} className="br">
                                            <em className="fa fa-twitter fa-fw text-info"></em>
                                            <strong>+300</strong>
                                         </Col>
                                         <Col xs={4}>
                                            <em className="fa fa-heart fa-fw text-danger"></em>
                                            <strong>+150</strong>
                                         </Col>
                                      </Row>
                                   </div>
                                </div>
                             </Col>
                             <Col lg={4} md={6}>
                                <div className="panel b text-center">
                                   <div className="panel-body">
                                      <img src="img/user/09.jpg" className="img-circle thumb64" />
                                      <p className="h4 text-bold mb0">Judy Shelton</p>
                                      <p>Rome, Italy</p>
                                      <button type="button" className="btn btn-success btn-oval">Follow</button>
                                   </div>
                                   <div className="panel-body bt">
                                      <Row>
                                         <Col xs={4} className="br">
                                            <em className="fa fa-facebook fa-fw text-primary"></em>
                                            <strong>+700</strong>
                                         </Col>
                                         <Col xs={4} className="br">
                                            <em className="fa fa-twitter fa-fw text-info"></em>
                                            <strong>+300</strong>
                                         </Col>
                                         <Col xs={4}>
                                            <em className="fa fa-heart fa-fw text-danger"></em>
                                            <strong>+150</strong>
                                         </Col>
                                      </Row>
                                   </div>
                                </div>
                             </Col>
                          </Row>
                       </Col>
                       { /* end Main panels */ }
                    </Row>
            </ContentWrapper>
            );
    }

}

export default Followers;
