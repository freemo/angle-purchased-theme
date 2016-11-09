import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import ProfileRun from './Profile.run';

class Profile extends React.Component {
    componentDidMount() {
        ProfileRun();
    }
    render() {
        return (
            <ContentWrapper unwrap>
                <div style={{backgroundImage: "url('img/profile-bg.jpg')"}} className="bg-cover">
                    <div className="p-xl text-center text-white">
                        <img src="img/user/09.jpg" alt="Image" className="img-thumbnail img-circle thumb128" />
                        <h3 className="m0">Ted Berry</h3>
                        <p>Lead director</p>
                        <p>Proin metus justo, commodo in ultrices at, lobortis sit amet dui. Fusce dolor purus, adipiscing a tempus at, gravida vel purus.</p>
                    </div>
                </div>
                <div className="text-center bg-gray-dark p-lg mb-xl">
                    <div className="row row-table">
                        <div className="col-xs-4 br">
                            <h3 className="m0">400</h3>
                            <p className="m0">
                                <span className="hidden-xs">Profile</span>
                                <span>Views</span>
                            </p>
                        </div>
                        <div className="col-xs-4 br">
                            <h3 className="m0">2000</h3>
                            <p className="m0">Likes</p>
                        </div>
                        <div className="col-xs-4">
                            <h3 className="m0">100</h3>
                            <p className="m0">Following</p>
                        </div>
                    </div>
                </div>
                <div className="p-lg">
                    <Row>
                        <Col lg={ 9 }>
                            { /* START timeline */ }
                            <ul className="timeline">
                                <li data-datetime="Today" className="timeline-separator"></li>
                                { /* START timeline item */ }
                                <li>
                                    <div className="timeline-badge primary">
                                        <em className="fa fa-comment"></em>
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="popover left">
                                            <div className="arrow"></div>
                                            <div className="popover-content">
                                                <div className="table-grid table-grid-align-middle mb">
                                                    <div className="col col-xs">
                                                        <img src="img/user/05.jpg" alt="Image" className="media-object img-circle thumb48" />
                                                    </div>
                                                    <div className="col">
                                                        <p className="m0">
                                                            <a href="#" className="text-muted">
                                                                <strong>Aiden Curtis</strong>
                                                            </a>posted a comment</p>
                                                    </div>
                                                </div>
                                                <p>
                                                    <em>"Fusce pellentesque congue justo in rutrum. Praesent non nulla et ligula luctus mattis eget at lacus."</em>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                { /* END timeline item */ }
                                { /* START timeline item */ }
                                <li className="timeline-inverted">
                                    <div className="timeline-badge green">
                                        <em className="fa fa-picture-o"></em>
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="popover right">
                                            <div className="arrow"></div>
                                            <div className="popover-content">
                                                <div className="table-grid table-grid-align-middle mb">
                                                    <div className="col col-xs">
                                                        <img src="img/user/04.jpg" alt="Image" className="media-object img-circle thumb48" />
                                                    </div>
                                                    <div className="col">
                                                        <p className="m0">
                                                            <a href="#" className="text-muted">
                                                                <strong>James Payne</strong>
                                                            </a>shared a new idea</p>
                                                    </div>
                                                </div>
                                                <a href="#">
                                                    <img src="img/mockup.png" alt="Img" className="img-responsive" />
                                                </a>
                                                <p className="text-muted mv">3 Comments</p>
                                                <div className="media bb p">
                                                    <small className="pull-right text-muted">12m ago</small>
                                                    <div className="pull-left">
                                                        <img src="img/user/05.jpg" alt="Image" className="media-object img-circle thumb32" />
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="media-heading">
                                                            <p className="m0">
                                                                <a href="#">
                                                                    <strong>Aiden Curtis</strong>
                                                                </a>
                                                            </p>
                                                            <p className="m0 text-muted">Hey looks great!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media bb p">
                                                    <small className="pull-right text-muted">30m ago</small>
                                                    <div className="pull-left">
                                                        <img src="img/user/08.jpg" alt="Image" className="media-object img-circle thumb32" />
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="media-heading">
                                                            <p className="m0">
                                                                <a href="#">
                                                                    <strong>Samantha Murphy</strong>
                                                                </a>
                                                            </p>
                                                            <p className="m0 text-muted">Excellento job!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media bb p">
                                                    <small className="pull-right text-muted">30m ago</small>
                                                    <div className="pull-left">
                                                        <img src="img/user/04.jpg" alt="Image" className="media-object img-circle thumb32" />
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="media-heading">
                                                            <p className="m0">
                                                                <a href="#">
                                                                    <strong>James Payne</strong>
                                                                </a>
                                                            </p>
                                                            <p className="m0 text-muted">WIP guys :)</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <form method="post" action="#" className="mt">
                                                    <textarea placeholder="Comment..." rows="1" className="form-control no-resize"></textarea>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                { /* START timeline item */ }
                                <li>
                                    <div className="timeline-badge info">
                                        <em className="fa fa-file-o"></em>
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="popover left">
                                            <div className="arrow"></div>
                                            <div className="popover-content">
                                                <div className="table-grid table-grid-align-middle mb">
                                                    <div className="col col-xs">
                                                        <img src="img/user/08.jpg" alt="Image" className="media-object img-circle thumb48" />
                                                    </div>
                                                    <div className="col">
                                                        <p className="m0">
                                                            <a href="#" className="text-muted">
                                                                <strong>Samantha Murphy</strong>
                                                            </a>shared new files</p>
                                                    </div>
                                                </div>
                                                <ul className="list-unstyled">
                                                    <li className="pb">
                                                        <em className="fa fa-file-o fa-fw mr"></em><a href="#" className="text-info">framework-docs-part1.pdf<em className="pull-right fa fa-download fa-fw"></em></a>
                                                    </li>
                                                    <li className="pb">
                                                        <em className="fa fa-file-o fa-fw mr"></em><a href="#" className="text-info">framework-docs-part2.pdf<em className="pull-right fa fa-download fa-fw"></em></a>
                                                    </li>
                                                    <li className="pb">
                                                        <em className="fa fa-file-o fa-fw mr"></em><a href="#" className="text-info">framework-docs-part3.pdf<em className="pull-right fa fa-download fa-fw"></em></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                { /* END timeline item */ }
                                { /* START timeline item */ }
                                <li>
                                    <div className="timeline-badge purple">
                                        <em className="fa fa-map-marker"></em>
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="popover left">
                                            <div className="arrow"></div>
                                            <div className="popover-content">
                                                <div className="table-grid table-grid-align-middle mb">
                                                    <div className="col col-xs">
                                                        <img src="img/user/08.jpg" alt="Image" className="media-object img-circle thumb48" />
                                                    </div>
                                                    <div className="col">
                                                        <p className="m0">
                                                            <a href="#" className="text-muted">
                                                                <strong>Samantha Murphy</strong>
                                                            </a>shared new location</p>
                                                    </div>
                                                </div>
                                                <p>
                                                    <em>"Hey guys! Please check the new location for tomorrows's meeting."</em>
                                                </p>
                                                <div data-gmap="" data-address="276 N TUSTIN ST, ORANGE, CA 92867" data-styled="data-styled" className="gmap"></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                { /* END timeline item */ }
                                { /* START timeline separator */ }
                                <li data-datetime="Yesterday" className="timeline-separator"></li>
                                { /* END timeline separator */ }
                                { /* START timeline item */ }
                                <li>
                                    <div className="timeline-badge success">
                                        <em className="fa fa-ticket"></em>
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="popover left">
                                            <div className="arrow"></div>
                                            <div className="popover-content">
                                                <div className="table-grid table-grid-align-middle mb">
                                                    <div className="col col-xs">
                                                        <img src="img/user/12.jpg" alt="Image" className="media-object img-circle thumb48" />
                                                    </div>
                                                    <div className="col">
                                                        <p className="m0">
                                                            <a href="#" className="text-muted">
                                                                <strong>Dennis Green</strong>
                                                            </a>closed issue <a href="#">#548795</a>
                                                        </p>
                                                        <p className="m0">
                                                            <em>&mdash; bootstrap.js needs update</em>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                { /* END timeline item */ }
                                <li className="timeline-inverted">
                                    <div className="timeline-badge warning">
                                        <em className="fa fa-ticket"></em>
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="popover right">
                                            <div className="arrow"></div>
                                            <div className="popover-content">
                                                <div className="table-grid table-grid-align-middle mb">
                                                    <div className="col col-xs">
                                                        <img src="img/user/09.jpg" alt="Image" className="media-object img-circle thumb48" />
                                                    </div>
                                                    <div className="col">
                                                        <p className="m0">
                                                            <a href="#" className="text-muted">
                                                                <strong>Ted Berry</strong>
                                                            </a>assigned
                                                            <a href="#" className="text-muted">
                                                                <strong>Dennis Green</strong>
                                                            </a>to issue <a href="#">#548795</a>
                                                        </p>
                                                        <p className="m0">
                                                            <em>&mdash; bootstrap.js needs update</em>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                { /* END timeline item */ }
                                { /* START timeline item */ }
                                <li>
                                    <div className="timeline-badge danger">
                                        <em className="fa fa-ticket"></em>
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="popover left">
                                            <div className="arrow"></div>
                                            <div className="popover-content">
                                                <div className="table-grid table-grid-align-middle mb">
                                                    <div className="col col-xs">
                                                        <img src="img/user/10.jpg" alt="Image" className="media-object img-circle thumb48" />
                                                    </div>
                                                    <div className="col">
                                                        <p className="m0">
                                                            <a href="#" className="text-muted">
                                                                <strong>Jon Perry</strong>
                                                            </a>opened issue <a href="#">#548795</a>
                                                        </p>
                                                        <p className="m0">
                                                            <em>&mdash; bootstrap.js needs update</em>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                { /* END timeline item */ }
                                { /* START timeline item */ }
                                <li className="timeline-end">
                                    <a href="#" className="timeline-badge">
                                        <em className="fa fa-plus"></em>
                                    </a>
                                </li>
                                { /* END timeline item */ }
                            </ul>
                            { /* END timeline */ }
                        </Col>
                        <Col lg={ 3 }>
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="text-center">
                                        <h3 className="mt0">Ted Berry</h3>
                                        <p>Lead director</p>
                                    </div>
                                    <hr/>
                                    <ul className="list-unstyled ph-xl">
                                        <li>
                                            <em className="fa fa-home fa-fw mr-lg"></em>Somewhere, Neverland</li>
                                        <li>
                                            <em className="fa fa-briefcase fa-fw mr-lg"></em><a href="#">Themicon.co</a>
                                        </li>
                                        <li>
                                            <em className="fa fa-graduation-cap fa-fw mr-lg"></em>Master Designer</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <a href="#" className="pull-right">
                                        <em className="icon-plus text-muted"></em>
                                    </a>Contacts</div>
                                <div className="list-group">
                                    { /* START User status */ }
                                    <a href="#" className="media p mt0 list-group-item">
                                        <span className="pull-right">
                                                    <span className="circle circle-success circle-lg"></span>
                                        </span>
                                        <span className="pull-left">
                                                    { /* Contact avatar */ }
                                                    <img src="img/user/05.jpg" alt="Image" className="media-object img-circle thumb32" />
                                                 </span>
                                        { /* Contact info */ }
                                        <span className="media-body">
                                                    <span className="media-heading">
                                                       <strong>Juan Sims</strong>
                                                       <br/>
                                                       <small className="text-muted">Designeer</small>
                                                    </span>
                                        </span>
                                    </a>
                                    { /* END User status */ }
                                    { /* START User status */ }
                                    <a href="#" className="media p mt0 list-group-item">
                                        <span className="pull-right">
                                                    <span className="circle circle-success circle-lg"></span>
                                        </span>
                                        <span className="pull-left">
                                                    { /* Contact avatar */ }
                                                    <img src="img/user/06.jpg" alt="Image" className="media-object img-circle thumb32" />
                                                 </span>
                                        { /* Contact info */ }
                                        <span className="media-body">
                                                    <span className="media-heading">
                                                       <strong>Maureen Jenkins</strong>
                                                       <br/>
                                                       <small className="text-muted">Designeer</small>
                                                    </span>
                                        </span>
                                    </a>
                                    { /* END User status */ }
                                    { /* START User status */ }
                                    <a href="#" className="media p mt0 list-group-item">
                                        <span className="pull-right">
                                                    <span className="circle circle-danger circle-lg"></span>
                                        </span>
                                        <span className="pull-left">
                                                    { /* Contact avatar */ }
                                                    <img src="img/user/07.jpg" alt="Image" className="media-object img-circle thumb32" />
                                                 </span>
                                        { /* Contact info */ }
                                        <span className="media-body">
                                                    <span className="media-heading">
                                                       <strong>Billie Dunn</strong>
                                                       <br/>
                                                       <small className="text-muted">Designeer</small>
                                                    </span>
                                        </span>
                                    </a>
                                    { /* END User status */ }
                                    { /* START User status */ }
                                    <a href="#" className="media p mt0 list-group-item">
                                        <span className="pull-right">
                                                    <span className="circle circle-warning circle-lg"></span>
                                        </span>
                                        <span className="pull-left">
                                                    { /* Contact avatar */ }
                                                    <img src="img/user/08.jpg" alt="Image" className="media-object img-circle thumb32" />
                                                 </span>
                                        { /* Contact info */ }
                                        <span className="media-body">
                                                    <span className="media-heading">
                                                       <strong>Tomothy Roberts</strong>
                                                       <br/>
                                                       <small className="text-muted">Designer</small>
                                                    </span>
                                        </span>
                                    </a>
                                    { /* END User status--><a href="#" className="media p mt0 list-group-item text-center text-muted">View all contacts< */ }
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="list-group">
                                    <a href="#" className="list-group-item">
                                        <em className="pull-right fa fa-users fa-lg fa-fw text-muted mt"></em>
                                        <h4 className="list-group-item-heading">1000</h4>
                                        <p className="list-group-item-text">Friends</p>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <em className="pull-right fa fa-rss fa-lg fa-fw text-muted mt"></em>
                                        <h4 className="list-group-item-heading">3000</h4>
                                        <p className="list-group-item-text">Subscriptions</p>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <em className="pull-right fa fa-map-marker fa-lg fa-fw text-muted mt"></em>
                                        <h4 className="list-group-item-heading">100</h4>
                                        <p className="list-group-item-text">Places</p>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <em className="pull-right fa fa-briefcase fa-lg fa-fw text-muted mt"></em>
                                        <h4 className="list-group-item-heading">400</h4>
                                        <p className="list-group-item-text">Projects</p>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <em className="pull-right fa fa-twitter fa-lg fa-fw text-muted mt"></em>
                                        <h4 className="list-group-item-heading">17300</h4>
                                        <p className="list-group-item-text">Twees</p>
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

export default Profile;

