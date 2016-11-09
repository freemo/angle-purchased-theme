import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import NotificationsRun from './Notifications.run';
import { Grid, Row, Col, Panel, Button, ButtonGroup, ButtonToolbar, SplitButton, DropdownButton, MenuItem, Pagination, Pager, PageItem, Alert, ProgressBar, OverlayTrigger, Tooltip, Popover, Modal } from 'react-bootstrap';

class Notifications extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            showModal: false
        };
    }

    componentDidMount() {
        NotificationsRun();
    }

    close() {
        this.setState({
            showModal: false
        });
    }

    open() {
        this.setState({
            showModal: true
        });
    }

    render() {
        const tooltip = (
            <Tooltip id="ttip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
        );
        return (
            <ContentWrapper>
                <h3>
                   { /* Breadcrumb right aligned */ }
                   <ol className="breadcrumb pull-right">
                      <li><a href="#">Home</a>
                      </li>
                      <li><a href="#">Elements</a>
                      </li>
                      <li className="active">Notifications</li>
                   </ol>
                   <span className="mr">Notifications</span>
                   { /* Small text for title */ }
                   <span className="text-sm hidden-xs">A complete set of notification posibilities</span>
                   { /* Breadcrumb below title */ }
                   <ol className="breadcrumb">
                      <li><a href="#">Home</a>
                      </li>
                      <li><a href="#">Elements</a>
                      </li>
                      <li className="active">Notifications</li>
                   </ol>
                </h3>
                { /* Breadcrumb next to view title */ }
                <ol className="breadcrumb">
                    <li><a href="#">Home</a>
                    </li>
                    <li><a href="#">Elements</a>
                    </li>
                    <li className="active">Notifications</li>
                </ol>
                <ol className="breadcrumb">
                    <li><a href="#">Home</a>
                    </li>
                    <li><a href="#">Elements</a>
                    </li>
                    <li className="active">Notifications</li>
                </ol>
                { /* START row */ }
                <Row>
                    <Col lg={ 6 }>
                        { /* START panel */ }
                        <Panel header="Notify Alerts">
                            <p>Create toggleable notifications that fade out automatically.</p>
                            <p>
                                <Button data-notify="" data-message="Message .." bsStyle="default">Message</Button>
                            </p>
                            <p>You can use HTML inside your notification message</p>
                            <p>
                                <Button data-notify="" data-message="&lt;em className='fa fa-check'&gt;&lt;/em&gt; Message with icon.." bsStyle="default">Message with Icon</Button>
                            </p>
                        </Panel>
                        { /* END panel */ }
                        { /* START panel */ }
                        <Panel header="Alert Styles">
                            <Alert bsStyle="success">
                                <strong>Well done!</strong>You successfully read this important alert message.
                            </Alert>
                            <Alert bsStyle="info">
                                <strong>Heads up!</strong>This alert needs your attention, but it&apos;s not super important.
                            </Alert>
                            <Alert bsStyle="warning">
                                <strong>Warning!</strong>Better check yourself, you&apos;re not looking too good.
                            </Alert>
                            <Alert bsStyle="danger">
                                <strong>Oh snap!</strong>Change a few things up and try submitting again.
                            </Alert>
                            <Alert bsStyle="danger" onDismiss={ () => {
                                                                    alert("Dismissed")
                                                                } }>
                                <Button data-dismiss="alert" aria-label="Close" className="close">
                                    <span aria-hidden="true">&times;</span>
                                </Button>
                                <strong>Holy guacamole!</strong>Best check yo self, you&apos;re not looking too good.
                            </Alert>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col lg={ 6 }>
                        { /* START panel */ }
                        <Panel header="Notify with Status">
                            <p>Uses builtin alert status to apply notifications</p>
                            <p>
                                <Button data-notify="" data-message="Message with status.." data-options="{&quot;status&quot;:&quot;danger&quot;}" bsStyle="danger">Danger</Button>
                                <Button data-notify="" data-message="Message with status.." data-options="{&quot;status&quot;:&quot;info&quot;}" bsStyle="info">Info</Button>
                                <Button data-notify="" data-message="Message with status.." data-options="{&quot;status&quot;:&quot;warning&quot;}" bsStyle="warning">Warning</Button>
                                <Button data-notify="" data-message="Message with status.." data-options="{&quot;status&quot;:&quot;success&quot;}" bsStyle="success">Success</Button>
                            </p>
                            <p>Show in different positions</p>
                            <p>
                                <Button data-notify="" data-message="Message in position.." data-options="{&quot;pos&quot;:&quot;bottom-center&quot;}" bsStyle="default">Bottom Cener</Button>
                                <Button data-notify="" data-message="Message in position.." data-options="{&quot;pos&quot;:&quot;top-left&quot;}" bsStyle="default">Top Left</Button>
                                <Button data-notify="" data-message="Message in position.." data-options="{&quot;pos&quot;:&quot;top-right&quot;}" bsStyle="default">Top Right</Button>
                                <Button data-notify="" data-message="Message in position.." data-options="{&quot;status&quot;:&quot;success&quot;, &quot;pos&quot;:&quot;bottom-right&quot;}" bsStyle="default">Succes at Bottom Right</Button>
                            </p>
                        </Panel>
                        { /* END panel */ }
                        { /* START panel */ }
                        <Panel header="Modals">
                            { /* Button trigger modal */ }
                            <p>Click to get the full Modal experience!</p>
                            <Button bsStyle="primary" bsSize="large" onClick={ this.open }>
                                Launch demo modal
                            </Button>
                            <Modal show={ this.state.showModal } onHide={ this.close }>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <h4>Text in a modal</h4>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={ this.close }>Close</Button>
                                </Modal.Footer>
                            </Modal>
                        </Panel>
                        { /* END panel */ }
                        <Panel header="Popovers">
                            <ButtonToolbar>
                                <OverlayTrigger trigger="click" placement="left" overlay={ <Popover id="pp1" title="Popover left"><strong>Holy guacamole!</strong> Check this info.</Popover> }>
                                    <Button bsStyle="default">Holy guacamole!</Button>
                                </OverlayTrigger>
                                <OverlayTrigger trigger="click" placement="top" overlay={ <Popover id="pp2" title="Popover top"><strong>Holy guacamole!</strong> Check this info.</Popover> }>
                                    <Button bsStyle="default">Holy guacamole!</Button>
                                </OverlayTrigger>
                                <OverlayTrigger trigger="click" placement="bottom" overlay={ <Popover id="pp3" title="Popover bottom"><strong>Holy guacamole!</strong> Check this info.</Popover> }>
                                    <Button bsStyle="default">Holy guacamole!</Button>
                                </OverlayTrigger>
                                <OverlayTrigger trigger="click" placement="right" overlay={ <Popover id="pp4" title="Popover right"><strong>Holy guacamole!</strong> Check this info.</Popover> }>
                                    <Button bsStyle="default">Holy guacamole!</Button>
                                </OverlayTrigger>
                            </ButtonToolbar>
                        </Panel>
                        { /* END panel */ }
                        { /* START panel */ }
                        <Panel header="Tooltips">
                            <ButtonToolbar>
                                <OverlayTrigger placement="left" overlay={ tooltip }>
                                    <Button bsStyle="default">Holy guacamole!</Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={ tooltip }>
                                    <Button bsStyle="default">Holy guacamole!</Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement="bottom" overlay={ tooltip }>
                                    <Button bsStyle="default">Holy guacamole!</Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement="right" overlay={ tooltip }>
                                    <Button bsStyle="default">Holy guacamole!</Button>
                                </OverlayTrigger>
                            </ButtonToolbar>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                </Row>
                { /* END row */ }
                { /* START panel */ }
                <Panel header="Progress Bar">
                    <ProgressBar bsStyle="success" now={ 40 } />
                    <ProgressBar bsStyle="info" now={ 20 } />
                    <ProgressBar className="progress-sm" bsStyle="warning" now={ 60 } />
                    <ProgressBar className="progress-xs" bsStyle="danger" now={ 80 } />
                    <ProgressBar bsClass="progress-bar progress-bar-purple progress-bar-striped" now={ 40 } />
                    <ProgressBar>
                        <ProgressBar bsClass="progress-bar progress-bar-yellow progress-bar-striped" now={ 35 } key={ 1 } />
                        <ProgressBar bsStyle="warning" now={ 20 } key={ 2 } />
                        <ProgressBar active bsStyle="danger" now={ 10 } key={ 3 } />
                    </ProgressBar>
                </Panel>
                { /* END panel */ }
            </ContentWrapper>
            );
    }
}

export default Notifications;
