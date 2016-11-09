import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, ButtonGroup, ButtonToolbar, SplitButton, DropdownButton, MenuItem, Pagination, Pager, PageItem, Alert, ProgressBar, OverlayTrigger, Tooltip, Popover, Modal } from 'react-bootstrap';

class Spinner extends React.Component {

    render() {
        return (
            <ContentWrapper>
                <h3>Loading Spinners</h3>
                <h4 className="page-header">Loaders.css
                   <small className="text-muted">Delightful and performance-focused pure css loading animations.</small>
                </h4>
                <Row>
                    <Col md={3}>
                        <Panel header="Ball Pulse" className="loader-demo">
                            <div className="ball-pulse">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Ball Grid Pulse" className="loader-demo">
                            <div className="ball-grid-pulse">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Ball Clip Rotate" className="loader-demo">
                            <div className="ball-clip-rotate">
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Ball Clip Rotate Pul" className="loader-demo">
                            <div className="ball-clip-rotate-pulse">
                                <div></div>
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Square Spin" className="loader-demo">
                            <div className="square-spin">
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Ball Clip Rotate Mul" className="loader-demo">
                            <div className="ball-clip-rotate-multiple">
                                <div></div>
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Ball Pulse Rise" className="loader-demo">
                            <div className="ball-pulse-rise">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Ball Rotate" className="loader-demo">
                            <div className="ball-rotate">
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Cube Transition" className="loader-demo">
                            <div className="cube-transition">
                                <div></div>
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Ball Zig Zag" className="loader-demo">
                            <div className="ball-zig-zag">
                                <div></div>
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Ball Zig Zag Deflect" className="loader-demo">
                            <div className="ball-zig-zag-deflect">
                                <div></div>
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Ball Triangle Path" className="loader-demo">
                            <div className="ball-triangle-path">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Ball Scale" className="loader-demo">
                            <div className="ball-scale">
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Line Scale" className="loader-demo">
                            <div className="line-scale">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Line Scale Party" className="loader-demo">
                            <div className="line-scale-party">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Ball Scale Multiple" className="loader-demo">
                            <div className="ball-scale-multiple">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Ball Pulse Sync" className="loader-demo">
                            <div className="ball-pulse-sync">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Ball Beat" className="loader-demo">
                            <div className="ball-beat">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Line Scale Pulse Out" className="loader-demo">
                            <div className="line-scale-pulse-out">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Line Scale Pulse Out" className="loader-demo">
                            <div className="line-scale-pulse-out-rapid">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Ball Scale Ripple" className="loader-demo">
                            <div className="ball-scale-ripple">
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Ball Scale Ripple Mu" className="loader-demo">
                            <div className="ball-scale-ripple-multiple">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Ball Spin Fade Loade" className="loader-demo">
                            <div className="ball-spin-fade-loader">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Line Spin Fade Loade" className="loader-demo">
                            <div className="line-spin-fade-loader">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Triangle Skew Spin" className="loader-demo">
                            <div className="triangle-skew-spin">
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Pacman" className="loader-demo">
                            <div className="pacman">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Ball Grid Beat" className="loader-demo">
                            <div className="ball-grid-beat">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Semi Circle Spin" className="loader-demo">
                            <div className="semi-circle-spin">
                                <div></div>
                            </div>
                        </Panel>
                    </Col>
                </Row>
                <h4 className="page-header">Spin Kit</h4>
                <Row>
                    <Col md={3}>
                        <Panel header="Rotating plane" className="loader-demo loader-demo-sk">
                            <div className="sk-spinner sk-rotating-plane"></div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Double bounce" className="loader-demo loader-demo-sk">
                            <div className="sk-spinner sk-double-bounce">
                                <div className="sk-child sk-double-bounce1"></div>
                                <div className="sk-child sk-double-bounce2"></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Wave" className="loader-demo loader-demo-sk">
                            <div className="sk-spinner sk-wave">
                                <div className="sk-rect sk-rect1"></div>
                                <div className="sk-rect sk-rect2"></div>
                                <div className="sk-rect sk-rect3"></div>
                                <div className="sk-rect sk-rect4"></div>
                                <div className="sk-rect sk-rect5"></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={3}>
                        <Panel header="Wandering cubes" className="loader-demo loader-demo-sk">
                            <div className="sk-spinner sk-wandering-cubes">
                                <div className="sk-cube sk-cube1"></div>
                                <div className="sk-cube sk-cube2"></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={4}>
                        <Panel header="Pulse" className="loader-demo loader-demo-sk">
                            <div className="sk-spinner sk-spinner-pulse"></div>
                        </Panel>
                    </Col>
                    <Col md={4}>
                        <Panel header="Chasing dots" className="loader-demo loader-demo-sk">
                            <div className="sk-chasing-dots">
                                <div className="sk-child sk-dot1"></div>
                                <div className="sk-child sk-dot2"></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={4}>
                        <Panel header="Three bounce" className="loader-demo loader-demo-sk">
                            <div className="sk-three-bounce">
                                <div className="sk-child sk-bounce1"></div>
                                <div className="sk-child sk-bounce2"></div>
                                <div className="sk-child sk-bounce3"></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={4}>
                        <Panel header="Circle" className="loader-demo loader-demo-sk">
                            <div className="sk-circle">
                                <div className="sk-child sk-circle1"></div>
                                <div className="sk-child sk-circle2"></div>
                                <div className="sk-child sk-circle3"></div>
                                <div className="sk-child sk-circle4"></div>
                                <div className="sk-child sk-circle5"></div>
                                <div className="sk-child sk-circle6"></div>
                                <div className="sk-child sk-circle7"></div>
                                <div className="sk-child sk-circle8"></div>
                                <div className="sk-child sk-circle9"></div>
                                <div className="sk-child sk-circle10"></div>
                                <div className="sk-child sk-circle11"></div>
                                <div className="sk-child sk-circle12"></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={4}>
                        <Panel header="Cube grid" className="loader-demo loader-demo-sk">
                            <div className="sk-cube-grid">
                                <div className="sk-cube sk-cube1"></div>
                                <div className="sk-cube sk-cube2"></div>
                                <div className="sk-cube sk-cube3"></div>
                                <div className="sk-cube sk-cube4"></div>
                                <div className="sk-cube sk-cube5"></div>
                                <div className="sk-cube sk-cube6"></div>
                                <div className="sk-cube sk-cube7"></div>
                                <div className="sk-cube sk-cube8"></div>
                                <div className="sk-cube sk-cube9"></div>
                            </div>
                        </Panel>
                    </Col>
                    <Col md={4}>
                        <Panel header="Fading circle" className="loader-demo loader-demo-sk">
                            <div className="sk-fading-circle">
                                <div className="sk-circle1 sk-circle"></div>
                                <div className="sk-circle2 sk-circle"></div>
                                <div className="sk-circle3 sk-circle"></div>
                                <div className="sk-circle4 sk-circle"></div>
                                <div className="sk-circle5 sk-circle"></div>
                                <div className="sk-circle6 sk-circle"></div>
                                <div className="sk-circle7 sk-circle"></div>
                                <div className="sk-circle8 sk-circle"></div>
                                <div className="sk-circle9 sk-circle"></div>
                                <div className="sk-circle10 sk-circle"></div>
                                <div className="sk-circle11 sk-circle"></div>
                                <div className="sk-circle12 sk-circle"></div>
                            </div>
                        </Panel>
                    </Col>
                </Row>
                <h4 className="page-header">Whirl Loaders
                   <small className="text-muted">Based on modern CSS3 animations and ready to be used in Panels</small>
                </h4>
                { /* START row */ }
                <Row>
                    <Col md={3}>
                        { /* START panel */ }
                        <div className="panel panel-default">
                            <div className="panel-heading">standard</div>
                            <div className="panel-body whirl standard">
                                <p>Suspendisse cursus, nisi eu aliquam ultricies, orci augue auctor mi, quis egestas nibh erat vitae justo.</p>
                            </div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col md={3}>
                        { /* START panel */ }
                        <div className="panel panel-default">
                            <div className="panel-heading">traditional</div>
                            <div className="panel-body whirl traditional">
                                <p>Suspendisse cursus, nisi eu aliquam ultricies, orci augue auctor mi, quis egestas nibh erat vitae justo.</p>
                            </div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col md={3}>
                        { /* START panel */ }
                        <div className="panel panel-default">
                            <div className="panel-heading">double-up</div>
                            <div className="panel-body whirl double-up">
                                <p>Suspendisse cursus, nisi eu aliquam ultricies, orci augue auctor mi, quis egestas nibh erat vitae justo.</p>
                            </div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col md={3}>
                        { /* START panel */ }
                        <div className="panel panel-default">
                            <div className="panel-heading">duo</div>
                            <div className="panel-body whirl duo">
                                <p>Suspendisse cursus, nisi eu aliquam ultricies, orci augue auctor mi, quis egestas nibh erat vitae justo.</p>
                            </div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col md={3}>
                        { /* START panel */ }
                        <div className="panel panel-default">
                            <div className="panel-heading">blade</div>
                            <div className="panel-body whirl blade">
                                <p>Suspendisse cursus, nisi eu aliquam ultricies, orci augue auctor mi, quis egestas nibh erat vitae justo.</p>
                            </div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col md={3}>
                        { /* START panel */ }
                        <div className="panel panel-default">
                            <div className="panel-heading">ringed</div>
                            <div className="panel-body whirl ringed">
                                <p>Suspendisse cursus, nisi eu aliquam ultricies, orci augue auctor mi, quis egestas nibh erat vitae justo.</p>
                            </div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col md={3}>
                        { /* START panel */ }
                        <div className="panel panel-default">
                            <div className="panel-heading">helicopter</div>
                            <div className="panel-body whirl helicopter">
                                <p>Suspendisse cursus, nisi eu aliquam ultricies, orci augue auctor mi, quis egestas nibh erat vitae justo.</p>
                            </div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col md={3}>
                        { /* START panel */ }
                        <div className="panel panel-default">
                            <div className="panel-heading">line</div>
                            <div className="panel-body whirl line">
                                <p>Suspendisse cursus, nisi eu aliquam ultricies, orci augue auctor mi, quis egestas nibh erat vitae justo.</p>
                            </div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col md={3}>
                        { /* START panel */ }
                        <div className="panel panel-default">
                            <div className="panel-heading">line grow</div>
                            <div className="panel-body whirl line grow">
                                <p>Suspendisse cursus, nisi eu aliquam ultricies, orci augue auctor mi, quis egestas nibh erat vitae justo.</p>
                            </div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col md={3}>
                        { /* START panel */ }
                        <div className="panel panel-default">
                            <div className="panel-heading">line back-and-forth</div>
                            <div className="panel-body whirl line back-and-forth">
                                <p>Suspendisse cursus, nisi eu aliquam ultricies, orci augue auctor mi, quis egestas nibh erat vitae justo.</p>
                            </div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col md={3}>
                        { /* START panel */ }
                        <div className="panel panel-default">
                            <div className="panel-heading">line back-and-forth grow</div>
                            <div className="panel-body whirl line back-and-forth grow">
                                <p>Suspendisse cursus, nisi eu aliquam ultricies, orci augue auctor mi, quis egestas nibh erat vitae justo.</p>
                            </div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col md={3}>
                        { /* START panel */ }
                        <div className="panel panel-default">
                            <div className="panel-heading">sphere</div>
                            <div className="panel-body whirl sphere">
                                <p>Suspendisse cursus, nisi eu aliquam ultricies, orci augue auctor mi, quis egestas nibh erat vitae justo.</p>
                            </div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col md={3}>
                        { /* START panel */ }
                        <div className="panel panel-default">
                            <div className="panel-heading">sphere vertical</div>
                            <div className="panel-body whirl sphere vertical">
                                <p>Suspendisse cursus, nisi eu aliquam ultricies, orci augue auctor mi, quis egestas nibh erat vitae justo.</p>
                            </div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col md={3}>
                        { /* START panel */ }
                        <div className="panel panel-default">
                            <div className="panel-heading">bar</div>
                            <div className="panel-body whirl bar">
                                <p>Suspendisse cursus, nisi eu aliquam ultricies, orci augue auctor mi, quis egestas nibh erat vitae justo.</p>
                            </div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col md={3}>
                        { /* START panel */ }
                        <div className="panel panel-default">
                            <div className="panel-heading">bar follow</div>
                            <div className="panel-body whirl bar follow">
                                <p>Suspendisse cursus, nisi eu aliquam ultricies, orci augue auctor mi, quis egestas nibh erat vitae justo.</p>
                            </div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col md={3}>
                        { /* START panel */ }
                        <div className="panel panel-default">
                            <div className="panel-heading">shadow</div>
                            <div className="panel-body whirl shadow">
                                <p>Suspendisse cursus, nisi eu aliquam ultricies, orci augue auctor mi, quis egestas nibh erat vitae justo.</p>
                            </div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col md={3}>
                        { /* START panel */ }
                        <div className="panel panel-default">
                            <div className="panel-heading">shadow oval</div>
                            <div className="panel-body whirl shadow oval">
                                <p>Suspendisse cursus, nisi eu aliquam ultricies, orci augue auctor mi, quis egestas nibh erat vitae justo.</p>
                            </div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col md={3}>
                        { /* START panel */ }
                        <div className="panel panel-default">
                            <div className="panel-heading">shadow oval right</div>
                            <div className="panel-body whirl shadow oval right">
                                <p>Suspendisse cursus, nisi eu aliquam ultricies, orci augue auctor mi, quis egestas nibh erat vitae justo.</p>
                            </div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col md={3}>
                        { /* START panel */ }
                        <div className="panel panel-default">
                            <div className="panel-heading">no-overlay</div>
                            <div className="panel-body whirl no-overlay">
                                <p>Suspendisse cursus, nisi eu aliquam ultricies, orci augue auctor mi, quis egestas nibh erat vitae justo.</p>
                            </div>
                        </div>
                        { /* END panel */ }
                    </Col>
                </Row>
                { /* END row */ }
            </ContentWrapper>
            );
    }

}

export default Spinner;