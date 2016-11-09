import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

class Timeline extends React.Component {

    render() {
        return (
            <ContentWrapper>
                <h3>Timeline</h3>
                { /* START timeline */ }
                { /* ul.timeline-alt */ }
                <ul className="timeline">
                    <li data-datetime="Now" className="timeline-separator"></li>
                    { /* START timeline item */ }
                    <li>
                        <div className="timeline-badge primary">
                            <em className="fa fa-users"></em>
                        </div>
                        <div className="timeline-panel">
                            <div className="popover">
                                <h4 className="popover-title">Client Meeting</h4>
                                <div className="arrow"></div>
                                <div className="popover-content">
                                    <p>Av 123 St - Floor 2
                                        <br/>
                                        <small>Pellentesque ut diam velit, eget porttitor risus. Nullam posuere euismod volutpat.</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    { /* END timeline item */ }
                    { /* START timeline item */ }
                    <li className="timeline-inverted">
                        <div className="timeline-badge warning">
                            <em className="fa fa-phone"></em>
                        </div>
                        <div className="timeline-panel">
                            <div className="popover right">
                                <h4 className="popover-title">Call</h4>
                                <div className="arrow"></div>
                                <div className="popover-content">
                                    <p>Michael <a href="tel:+011654524578">(+011) 6545 24578 ext. 132</a>
                                        <br/>
                                        <small>Pellentesque ut diam velit, eget porttitor risus. Nullam posuere euismod volutpat.</small>
                                    </p>
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
                        <div className="timeline-badge danger">
                            <em className="fa fa-video-camera"></em>
                        </div>
                        <div className="timeline-panel">
                            <div className="popover">
                                <h4 className="popover-title">Conference</h4>
                                <div className="arrow"></div>
                                <div className="popover-content">
                                    <p>Join development group</p>
                                    <small>
                                  <a href="skype:echo123?call">
                                     <em className="fa fa-phone"></em>Call the Skype Echo</a>
                               </small>
                                </div>
                            </div>
                        </div>
                    </li>
                    { /* END timeline item */ }
                    { /* START timeline item */ }
                    <li className="timeline-inverted">
                        <div className="timeline-panel">
                            <div className="popover right">
                                <h4 className="popover-title">Appointment</h4>
                                <div className="arrow"></div>
                                <div className="popover-content">
                                    <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam.</p>
                                    <div className="btn-group">
                                        <a href="#" data-toggle="dropdown" data-play="fadeIn" className="dropdown-toggle">
                                            <em className="fa fa-paperclip"></em>
                                        </a>
                                        <ul className="dropdown-menu text-left">
                                            <li>
                                                <a href="#">
                                                    <em className="fa fa-download"></em>Download</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <em className="fa fa-share"></em>Send to</a>
                                            </li>
                                            <li className="divider"></li>
                                            <li>
                                                <a href="#">
                                                    <em className="fa fa-times"></em>Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    { /* END timeline item */ }
                    { /* START timeline item */ }
                    <li>
                        <div className="timeline-badge info">
                            <em className="fa fa-plane"></em>
                        </div>
                        <div className="timeline-panel">
                            <div className="popover">
                                <h4 className="popover-title">Fly</h4>
                                <div className="arrow"></div>
                                <div className="popover-content">
                                    <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    { /* END timeline item */ }
                    { /* START timeline item */ }
                    <li>
                        <div className="timeline-panel">
                            <div className="popover">
                                <h4 className="popover-title">Appointment</h4>
                                <div className="arrow"></div>
                                <div className="popover-content">
                                    <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    { /* END timeline item */ }
                    { /* START timeline separator */ }
                    <li data-datetime="2014-05-21" className="timeline-separator"></li>
                    { /* END timeline separator */ }
                    { /* START timeline item */ }
                    <li className="timeline-inverted">
                        <div className="timeline-badge success">
                            <em className="fa fa-music"></em>
                        </div>
                        <div className="timeline-panel">
                            <div className="popover right">
                                <h4 className="popover-title">Relax</h4>
                                <div className="arrow"></div>
                                <div className="popover-content">
                                    <p>Listen some music</p>
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
            </ContentWrapper>
            );
    }

}

export default Timeline;
