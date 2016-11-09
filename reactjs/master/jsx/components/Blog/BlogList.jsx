import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table } from 'react-bootstrap';
import BlogListRun from './BlogList.run';

class BlogList extends React.Component {
    componentDidMount() {
        BlogListRun();
    }
    render() {
        return (
            <ContentWrapper>
                <Row>
                    { /* Blog Content */ }
                    <Col lg={ 9 }>
                        <Row>
                            { /* Posts column 1 */ }
                            <Col lg={ 4 }>
                                <Panel>
                                    <a href="">
                                        <img src="img/bg1.jpg" className="img-responsive" />
                                    </a>
                                    <div className="panel-body">
                                        <p className="clearfix">
                                            <span className="pull-left">
                                        <small className="mr-sm">By <a href="">Erica Castro</a>
                                        </small>
                                        <small className="mr-sm">May 03, 2015</small>
                                     </span>
                                            <span className="pull-right">
                                        <small>
                                           <strong>56</strong>
                                           <span>Comments</span>
                                            </small>
                                            </span>
                                        </p>
                                        <h4> <a href="">Trip down the river</a>
                                  </h4>
                                        <p>Aenean in sollicitudin velit. Nam sem magna, tristique non facilisis a, porta ut elit. Aliquam luctus nulla in justo euismod blandit.
                                            Aliquam condimentum enim a risus cursus blandit.</p>
                                    </div>
                                </Panel>
                                <Panel>
                                    <div className="panel-body bg-primary">
                                        <h3 className="mv-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                                    </div>
                                    <div className="panel-body">
                                        <p className="clearfix">
                                            <span className="pull-left">
                                                <small className="mr-sm">By <a href="">Erica Castro</a></small>
                                                <small className="mr-sm">May 03, 2015</small>
                                             </span>
                                            <span className="pull-right">
                                                <small>
                                                    <strong>56</strong>
                                                    <span>Comments</span>
                                                </small>
                                            </span>
                                        </p>
                                    </div>
                                </Panel>
                                <Panel>
                                    <a href="">
                                        <img src="img/bg10.jpg" className="img-responsive" />
                                    </a>
                                    <div className="panel-body">
                                        <p className="clearfix">
                                            <span className="pull-left">
                                        <small className="mr-sm">By <a href="">Erin Clark</a>
                                        </small>
                                        <small className="mr-sm">Apr 13, 2015</small>
                                     </span>
                                            <span className="pull-right">
                                        <small>
                                           <strong>1000</strong>
                                           <span>Comments</span>
                                            </small>
                                            </span>
                                        </p>
                                        <h4> <a href="">New camera</a>
                                  </h4>
                                        <p>Nullam posuere euismod volutpat. Quisque in ligula eget libero tristique varius sed euismod dolor. Sed ultrices, diam varius pellentesque
                                            porta, nulla neque auctor elit, quis tempus orci massa eget odio. Duis eleifend elementum commodo. Donec volutpat tristique laoreet.
                                            Cras vitae turpis enim, eget malesuada erat. Suspendisse quam leo, gravida a ullamcorper a, interdum id odio. Nullam eu lacus in
                                            nibh rutrum ornare at eget tellus.</p>
                                    </div>
                                </Panel>
                            </Col>
                            { /* Posts column 2 */ }
                            <Col lg={ 4 }>
                                <Panel>
                                    <a href="">
                                        <img src="img/bg2.jpg" className="img-responsive" />
                                    </a>
                                    <div className="panel-body">
                                        <p className="clearfix">
                                            <span className="pull-left">
                                        <small className="mr-sm">By <a href="">Erica Castro</a>
                                        </small>
                                        <small className="mr-sm">May 03, 2015</small>
                                     </span>
                                            <span className="pull-right">
                                        <small>
                                           <strong>56</strong>
                                           <span>Comments</span>
                                            </small>
                                            </span>
                                        </p>
                                        <h4> <a href="">Reviewing latests phones</a>
                                  </h4>
                                        <p>Aenean in sollicitudin velit. Nam sem magna, tristique non facilisis a, porta ut elit. Aliquam luctus nulla in justo euismod blandit.
                                            Aliquam condimentum enim a risus cursus blandit.</p>
                                    </div>
                                </Panel>
                                <Panel>
                                    <a href="">
                                        <img src="img/bg8.jpg" className="img-responsive" />
                                    </a>
                                    <div className="panel-body">
                                        <p className="clearfix">
                                            <span className="pull-left">
                                        <small className="mr-sm">By <a href="">Allen Stephens</a>
                                        </small>
                                        <small className="mr-sm">May 03, 2015</small>
                                     </span>
                                            <span className="pull-right">
                                        <small>
                                           <strong>5600</strong>
                                           <span>Comments</span>
                                            </small>
                                            </span>
                                        </p>
                                        <h4> <a href="">Workspace showcase</a>
                                  </h4>
                                        <p>Aenean iaculis diam lectus. Morbi quis purus velit. Maecenas tincidunt tempus sapien id ultrices. Vivamus fermentum libero vel felis
                                            aliquet interdum.</p>
                                    </div>
                                </Panel>
                            </Col>
                            { /* Posts column 3 */ }
                            <Col lg={ 4 }>
                                <Panel>
                                    <a href="">
                                        <img src="img/bg3.jpg" className="img-responsive" />
                                    </a>
                                    <div className="panel-body">
                                        <p className="clearfix">
                                            <span className="pull-left">
                                        <small className="mr-sm">By <a href="">Erica Castro</a>
                                        </small>
                                        <small className="mr-sm">May 03, 2015</small>
                                     </span>
                                            <span className="pull-right">
                                        <small>
                                           <strong>56</strong>
                                           <span>Comments</span>
                                            </small>
                                            </span>
                                        </p>
                                        <h4> <a href="">Incredible panoramic</a>
                                  </h4>
                                        <p>Aenean in sollicitudin velit. Nam sem magna, tristique non facilisis a, porta ut elit. Aliquam luctus nulla in justo euismod blandit.
                                            Aliquam condimentum enim a risus cursus blandit.</p>
                                    </div>
                                </Panel>
                                <Panel>
                                    <div className="panel-body bg-purple">
                                        <h3 className="mv-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                                    </div>
                                    <div className="panel-body">
                                        <p className="clearfix">
                                            <span className="pull-left">
                                        <small className="mr-sm">By <a href="">Ava Chavez</a>
                                        </small>
                                        <small className="mr-sm">May 03, 2015</small>
                                     </span>
                                            <span className="pull-right">
                                        <small>
                                           <strong>999</strong>
                                           <span>Comments</span>
                                            </small>
                                            </span>
                                        </p>
                                    </div>
                                </Panel>
                                <Panel>
                                    <a href="">
                                        <img src="img/bg4.jpg" className="img-responsive" />
                                    </a>
                                    <div className="panel-body">
                                        <p className="clearfix">
                                            <span className="pull-left">
                                        <small className="mr-sm">By <a href="">Danny Ford</a>
                                        </small>
                                        <small className="mr-sm">May 03, 2015</small>
                                     </span>
                                            <span className="pull-right">
                                        <small>
                                           <strong>1000</strong>
                                           <span>Comments</span>
                                            </small>
                                            </span>
                                        </p>
                                        <h4> <a href="">Sunset in the forest</a>
                                  </h4>
                                    </div>
                                </Panel>
                                <Panel>
                                    <a href="">
                                        <img src="img/bg5.jpg" className="img-responsive" />
                                    </a>
                                    <div className="panel-body">
                                        <p className="clearfix">
                                            <span className="pull-left">
                                        <small className="mr-sm">By <a href="">Danny Ford</a>
                                        </small>
                                        <small className="mr-sm">May 03, 2015</small>
                                     </span>
                                            <span className="pull-right">
                                        <small>
                                           <strong>1000</strong>
                                           <span>Comments</span>
                                            </small>
                                            </span>
                                        </p>
                                        <h4> <a href="">Tech review</a>
                                  </h4>
                                    </div>
                                </Panel>
                            </Col>
                        </Row>
                    </Col>
                    { /* Blog Sidebar */ }
                    <div className="col-lg-3">
                        { /* Search */ }
                        <Panel header="Search">
                            <form className="form-horizontal">
                                <div className="input-group">
                                    <input type="text" placeholder="Search for..." className="form-control" />
                                    <span className="input-group-btn">
                                     <button type="button" className="btn btn-default">
                                        <em className="fa fa-search"></em>
                                     </button>
                                  </span>
                                </div>
                            </form>
                        </Panel>
                        { /* Categories */ }
                        <Panel header="Categories">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="">
                                        <em className="fa fa-angle-right fa-fw"></em>Smartphones</a>
                                </li>
                                <li>
                                    <a href="">
                                        <em className="fa fa-angle-right fa-fw"></em>Mobiles</a>
                                </li>
                                <li>
                                    <a href="">
                                        <em className="fa fa-angle-right fa-fw"></em>Tech</a>
                                </li>
                                <li>
                                    <a href="">
                                        <em className="fa fa-angle-right fa-fw"></em>Inpiration</a>
                                </li>
                                <li>
                                    <a href="">
                                        <em className="fa fa-angle-right fa-fw"></em>Workspace</a>
                                </li>
                            </ul>
                        </Panel>
                        { /* Tag Cloud */ }
                        <Panel header="Tag Cloud">
                            <div id="jqcloud" className="center-block"></div>
                        </Panel>
                        { /* Ads */ }
                        <Panel header="Ads">
                            <a href="">
                                <img src="img/mockup.png" className="img-responsive img-thumbnail" />
                            </a>
                        </Panel>
                    </div>
                </Row>
            </ContentWrapper>
            );
    }

}

export default BlogList;

