import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table } from 'react-bootstrap';
import BlogPostRun from './BlogPost.run';

class BlogPost extends React.Component {
    componentDidMount() {
        BlogPostRun();
    }
    render() {
        return (
            <ContentWrapper>
                <Row>
                    { /* Blog Content */ }
                    <Col lg={ 9 }>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="bb">
                                    <h2 className="text-lg">Maecenas rutrum fringilla vehicula.</h2>
                                    <p className="clearfix">
                                        <span className="pull-left">
                                     <small className="mr-sm">By <a href="">Erica Castro</a>
                                     </small>
                                     <small className="mr-sm">May 03, 2015</small>
                                     <small>
                                        <strong>56</strong>
                                        <span>Comments</span>
                                        </small>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="panel-body text-md">
                                <p>Praesent bibendum eros urna, in mattis est. Curabitur a purus urna, sit amet auctor erat. Praesent pellentesque augue eu tellus facilisis pretium.
                                    Aenean sollicitudin facilisis tortor eu mollis. Vivamus feugiat faucibus enim. Sed ut semper leo. Etiam feugiat risus massa. Nunc et magna
                                    in metus pharetra ultricies ac sit amet justo. Donec eu dolor sem, non auctor sapien. Suspendisse nisl nulla, interdum at fermentum eget,
                                    adipiscing in elit.</p>
                                <p>Proin est sapien, convallis non hendrerit nec, laoreet ut ipsum. Praesent blandit venenatis mauris ac cursus. Nulla commodo interdum magna consectetur
                                    lacinia. Maecenas vitae adipiscing mauris. Nam sodales sollicitudin adipiscing.</p>
                                <br />
                                <Row>
                                    <Col xs={ 3 }>
                                        <a href="">
                                            <img src="img/bg4.jpg" className="img-responsive" />
                                        </a>
                                    </Col>
                                    <Col xs={ 3 }>
                                        <a href="">
                                            <img src="img/bg5.jpg" className="img-responsive" />
                                        </a>
                                    </Col>
                                    <Col xs={ 3 }>
                                        <a href="">
                                            <img src="img/bg7.jpg" className="img-responsive" />
                                        </a>
                                    </Col>
                                    <Col xs={ 3 }>
                                        <a href="">
                                            <img src="img/bg8.jpg" className="img-responsive" />
                                        </a>
                                    </Col>
                                </Row>
                                <br />
                                <p>Praesent tristique dui eu nunc fringilla et iaculis magna ornare. Proin sed erat sit amet metus rhoncus tincidunt. Vivamus commodo, tortor ut
                                    interdum posuere, urna risus aliquet purus, eu fringilla dui neque quis nisi. Proin posuere gravida ipsum, a pretium augue commodo eget.
                                    In id elit nulla. Donec nec magna a diam eleifend facilisis non in urna. Nam enim libero, lacinia a tristique a, accumsan sed purus. Phasellus
                                    ullamcorper rhoncus sagittis.</p>
                                <p>Sed eu rhoncus magna. Morbi non dui elementum nisl ultrices tincidunt. Nullam sagittis hendrerit erat, sit amet gravida ante tristique non. Nam
                                    arcu quam, aliquet eget varius sed, placerat et elit. Morbi nec luctus eros. Cras rutrum scelerisque auctor. Praesent malesuada erat ut tellus
                                    egestas sagittis. Etiam feugiat risus massa. Aliquam eget turpis eget dui eleifend suscipit ac sed dolor. Sed accumsan adipiscing enim. Sed
                                    auctor dignissim fringilla. Sed id turpis tellus. Nam vel tristique dolor. Ut scelerisque ligula tellus. Duis accumsan, est vel convallis
                                    dignissim, est massa pharetra ipsum, eu auctor nunc mi ac libero. Integer fermentum molestie massa at congue. Vestibulum congue tempus odio
                                    ac posuere. Integer lorem metus, rutrum non rhoncus sed, fringilla interdum urna.</p>
                                <hr />
                                <div role="group" aria-label="..." className="btn-group">
                                    <button type="button" className="btn btn-default">
                                        <em className="fa fa-facebook text-muted"></em>
                                    </button>
                                    <button type="button" className="btn btn-default">
                                        <em className="fa fa-twitter text-muted"></em>
                                    </button>
                                    <button type="button" className="btn btn-default">
                                        <em className="fa fa-google-plus text-muted"></em>
                                    </button>
                                    <button type="button" className="btn btn-default">
                                        <em className="fa fa-tumblr text-muted"></em>
                                    </button>
                                    <button type="button" className="btn btn-default">
                                        <em className="fa fa-pinterest text-muted"></em>
                                    </button>
                                    <button type="button" className="btn btn-default">
                                        <em className="fa fa-share-alt text-muted"></em>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="panel-heading">3 Comments</div>
                            <div className="panel-body">
                                <div className="media">
                                    <div className="media-left">
                                        <a href="#">
                                            <img src="img/user/01.jpg" className="media-object img-circle thumb64" />
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <h4 id="media-heading" className="media-heading"><a href="">Susan Grant</a>
                                     <small>10 min</small>
                                     <a href="#media-heading" className="anchorjs-link">
                                        <span className="anchorjs-icon"></span>
                                     </a>
                                  </h4>
                                        <p>Donec ac massa tortor. In hac habitasse platea dictumst. Nam blandit fringilla faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Sed vitae nisi eget metus semper congue.</p>
                                        <p>Fusce ullamcorper placerat tortor, placerat consequat diam cursus posuere.</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="media">
                                    <div className="media-left">
                                        <a href="#">
                                            <img src="img/user/03.jpg" className="media-object img-circle thumb64" />
                                        </a>
                                    </div>
                                    <div className="media-body mb-lg">
                                        <h4 id="media-heading" className="media-heading"><a href="">Dustin Dunn</a>
                                     <small>20 min</small>
                                     <a href="#media-heading" className="anchorjs-link">
                                        <span className="anchorjs-icon"></span>
                                     </a>
                                  </h4>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate
                                        at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        <hr />
                                        <div className="media">
                                            <div className="media-left">
                                                <a href="#">
                                                    <img src="img/user/06.jpg" className="media-object img-circle thumb64" />
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 id="nested-media-heading" className="media-heading"><a href="">Marcus Gomez</a>
                                           <small>1 hour</small>
                                           <a href="#nested-media-heading" className="anchorjs-link">
                                              <span className="anchorjs-icon"></span>
                                           </a>
                                        </h4>Integer ac nisl et urna gravida malesuada. Vivamus fermentum libero vel felis aliquet interdum.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="panel-heading">
                                <em className="fa fa-pencil mr"></em>Add your Comment</div>
                            <div className="panel-body">
                                <form action="/" className="form-horizontal">
                                    <div className="form-group">
                                        <Col xs={ 6 }>
                                            <input id="post-firstname" type="text" name="post-firstname" placeholder="Your firstname" className="form-control" />
                                        </Col>
                                        <Col xs={ 6 }>
                                            <input id="post-lastname" type="text" name="post-lastname" placeholder="Your lastname" className="form-control" />
                                        </Col>
                                    </div>
                                    <div className="form-group">
                                        <Col xs={ 12 }>
                                            <textarea id="post-comment" name="post-comment" rows="4" placeholder="Comment here.." className="form-control"></textarea>
                                        </Col>
                                    </div>
                                    <div className="form-group">
                                        <Col xs={ 12 }>
                                            <button type="submit" className="btn btn-effect-ripple btn-primary">Send Comment</button>
                                        </Col>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Col>
                    { /* Blog Sidebar */ }
                    <Col lg={ 3 }>
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
                    </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default BlogPost;
