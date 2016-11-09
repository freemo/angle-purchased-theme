import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, ButtonGroup, ButtonToolbar, SplitButton, DropdownButton, MenuItem, Pagination, Pager } from 'react-bootstrap';

class Buttons extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            activePage: 1
        };
    }

    handleSelect(event, selectedEvent) {
        this.setState({
            activePage: selectedEvent.eventKey
        });
    }

    renderDropdownButton(title, i) {
        return (
            <DropdownButton bsStyle={ title.toLowerCase() } title={ title } key={ i } id={ `dropdown-basic-${i}` }>
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">
                    Another action
                </MenuItem>
                <MenuItem eventKey="3" active>
                    Active Item
                </MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">
                    Separated link
                </MenuItem>
            </DropdownButton>
            );
    }

    renderDropdownSplitButton(title, i) {
        return (
            <SplitButton bsStyle={ title.toLowerCase() } title={ title } key={ i } id={ `split-button-basic-${i}` }>
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">
                    Another action
                </MenuItem>
                <MenuItem eventKey="3">
                    Something else here
                </MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">
                    Separated link
                </MenuItem>
            </SplitButton>
            );
    }

    render() {
        // Used to render DropdownButton examples
        const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger']
        return (
            <ContentWrapper>
                <h3>Buttons</h3>
                { /* START row */ }
                <Row>
                    <Col md={ 12 }>
                        { /* START panel */ }
                        <Panel header="Buttons">
                            <ButtonToolbar>
                                { /* Standard button */ }
                                <Button>Default</Button>
                                { /* Provides extra visual weight and identifies the primary action in a set of buttons */ }
                                <Button bsStyle="primary">Primary</Button>
                                { /* Indicates a successful or positive action */ }
                                <Button bsStyle="success">Success</Button>
                                { /* Contextual button for informational alert messages */ }
                                <Button bsStyle="info">Info</Button>
                                { /* Indicates caution should be taken with this action */ }
                                <Button bsStyle="warning">Warning</Button>
                                { /* Indicates a dangerous or potentially negative action */ }
                                <Button bsStyle="danger">Danger</Button>
                                <Button bsClass="btn btn-inverse" className="mb-sm">Inverse</Button>
                                <Button bsClass="btn btn-green" className="mb-sm">Green</Button>
                                <Button bsClass="btn btn-purple" className="mb-sm">Purple</Button>
                                <Button bsClass="btn btn-pink" className="mb-sm">Pink</Button>
                                { /* Deemphasize a button by making it look like a link while maintaining button behavior */ }
                                <Button bsStyle="link">Link</Button>
                            </ButtonToolbar>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                </Row>
                { /* END row */ }
                { /* START panel */ }
                <Panel header="Button Labeled">
                    { /* Success button with label  */ }
                    <Button bsClass="btn btn-labeled btn-success mr">
                        <span className="btn-label"><i className="fa fa-check"></i></span> Success
                    </Button>
                    { /* Danger button with label  */ }
                    <Button bsClass="btn btn-labeled btn-danger mr">
                        <span className="btn-label"><i className="fa fa-times"></i></span> Danger
                    </Button>
                    { /* Info button with label  */ }
                    <Button bsClass="btn btn-labeled btn-info mr">
                        <span className="btn-label"><i className="fa fa-exclamation"></i></span> Info
                    </Button>
                    { /* Warning button with label  */ }
                    <Button bsClass="btn btn-labeled btn-warning mr">
                        <span className="btn-label"><i className="fa fa-warning"></i></span> Warning
                    </Button>
                    { /* Standard button with label  */ }
                    <Button bsClass="btn btn-labeled btn-default mr">
                        <span className="btn-label"><i className="fa fa-arrow-left"></i></span> Left
                    </Button>
                    { /* Standard button with label on the right side  */ }
                    <Button bsClass="btn btn-labeled btn-default">
                        Right
                        <span className="btn-label btn-label-right"><i className="fa fa-arrow-right"></i></span>
                    </Button>
                </Panel>
                { /* END panel */ }
                { /* START row */ }
                <Row>
                    <Col md={ 6 }>
                        { /* START panel */ }
                        <Panel header="Button sizing">
                            <Row>
                                <Col lg={ 6 }>
                                    <p>
                                        <Button bsStyle="primary" bsSize="large">
                                            Large button
                                        </Button>
                                        <Button bsStyle="default" bsSize="large">
                                            Large button
                                        </Button>
                                    </p>
                                    <p>
                                        <Button bsStyle="primary">
                                            Default button
                                        </Button>
                                        <Button bsStyle="default">
                                            Default button
                                        </Button>
                                    </p>
                                </Col>
                                <Col lg={ 6 }>
                                    <p>
                                        <Button bsStyle="primary" bsSize="small">
                                            Small button
                                        </Button>
                                        <Button bsStyle="default" bsSize="small">
                                            Small button
                                        </Button>
                                    </p>
                                    <p>
                                        <Button bsStyle="primary" bsSize="xsmall">
                                            Extra small button
                                        </Button>
                                        <Button bsStyle="default" bsSize="xsmall">
                                            Extra small button
                                        </Button>
                                    </p>
                                </Col>
                            </Row>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 6 }>
                        { /* START panel */ }
                        <Panel header="Button group">
                            <p>
                            </p>
                            <ButtonGroup>
                                <Button>Left</Button>
                                <Button>Middle</Button>
                                <Button>Right</Button>
                            </ButtonGroup>
                            <p>
                            </p>
                            <p>
                            </p>
                            <ButtonGroup>
                                <Button>1</Button>
                                <Button>2</Button>
                                <Button>3</Button>
                                <Button>4</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button>5</Button>
                                <Button>6</Button>
                                <Button>7</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button>8</Button>
                            </ButtonGroup>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                </Row>
                { /* END row */ }
                {/* START panel */}
                <Panel header="Outline Buttons">
                    <button type="button" className="mb-sm mr-sm btn btn-default btn-outline">Default</button>
                    <button type="button" className="mb-sm mr-sm btn btn-primary btn-outline">Primary</button>
                    <button type="button" className="mb-sm mr-sm btn btn-success btn-outline">Success</button>
                    <button type="button" className="mb-sm mr-sm btn btn-info btn-outline">Info</button>
                    <button type="button" className="mb-sm mr-sm btn btn-warning btn-outline">Warning</button>
                    <button type="button" className="mb-sm mr-sm btn btn-danger btn-outline">Danger</button>
                    <button type="button" className="mb-sm mr-sm btn btn-inverse btn-outline">Inverse</button>
                    <button type="button" className="mb-sm mr-sm btn btn-green btn-outline">Green</button>
                    <button type="button" className="mb-sm mr-sm btn btn-purple btn-outline">Purple</button>
                    <button type="button" className="mb-sm mr-sm btn btn-pink btn-outline">Pink</button>
                    <br />
                    <br />
                    <button type="button" className="mb-sm mr-sm btn-lg btn btn-primary btn-outline">Outline Large</button>
                    <button type="button" className="mb-sm mr-sm btn-sm btn btn-primary btn-outline">Outline Small</button>
                    <button type="button" className="mb-sm mr-sm btn-xs btn btn-primary btn-outline">Outline xSmall</button>
                </Panel>
                {/* END panel */}
                { /* START row */ }
                <Row>
                    <Col md={ 6 }>
                        { /* START panel */ }
                        <Panel header="Button Pills">
                            <p>
                                Pill left
                            </p>
                            <p>
                                <Button bsClass="btn btn-pill-left btn-default">Default</Button>
                                <Button bsClass="btn btn-pill-left btn-primary">Primary</Button>
                                <Button bsClass="btn btn-pill-left btn-success">Success</Button>
                                <Button bsClass="btn btn-pill-left btn-info">Info</Button>
                                <Button bsClass="btn btn-pill-left btn-warning">Warning</Button>
                                <Button bsClass="btn btn-pill-left btn-danger">Danger</Button>
                                <Button bsClass="btn btn-pill-left btn-inverse">Inverse</Button>
                            </p>
                            <p>
                                Pill right
                            </p>
                            <p>
                                <Button bsClass="btn btn-pill-right btn-default">Default</Button>
                                <Button bsClass="btn btn-pill-right btn-primary">Primary</Button>
                                <Button bsClass="btn btn-pill-right btn-success">Success</Button>
                                <Button bsClass="btn btn-pill-right btn-info">Info</Button>
                                <Button bsClass="btn btn-pill-right btn-warning">Warning</Button>
                                <Button bsClass="btn btn-pill-right btn-danger">Danger</Button>
                                <Button bsClass="btn btn-pill-right btn-inverse">Inverse</Button>
                            </p>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 6 }>
                        { /* START panel */ }
                        <Panel header="Button Oval">
                            <Button bsClass="btn btn-oval btn-default">Default</Button>
                            <Button bsClass="btn btn-oval btn-primary">Primary</Button>
                            <Button bsClass="btn btn-oval btn-success">Success</Button>
                            <Button bsClass="btn btn-oval btn-info">Info</Button>
                            <Button bsClass="btn btn-oval btn-warning">Warning</Button>
                            <Button bsClass="btn btn-oval btn-danger">Danger</Button>
                            <Button bsClass="btn btn-oval btn-inverse">Inverse</Button>
                        </Panel>
                        { /* END panel */ }
                        { /* START panel */ }
                        <Panel header="Button Square">
                            <Button bsClass="btn btn-square btn-default">Default</Button>
                            <Button bsClass="btn btn-square btn-primary">Primary</Button>
                            <Button bsClass="btn btn-square btn-success">Success</Button>
                            <Button bsClass="btn btn-square btn-info">Info</Button>
                            <Button bsClass="btn btn-square btn-warning">Warning</Button>
                            <Button bsClass="btn btn-square btn-danger">Danger</Button>
                            <Button bsClass="btn btn-square btn-inverse">Inverse</Button>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                </Row>
                { /* END row */ }
                { /* START row */ }
                <Row>
                    <Col md={ 6 }>
                        { /* START panel */ }
                        <Panel header="Button dropdown">
                            <ButtonToolbar>
                                { BUTTONS.map(this.renderDropdownButton) }
                            </ButtonToolbar>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 6 }>
                        { /* START panel */ }
                        <Panel header="Split button dropdown">
                            <ButtonToolbar>
                                { BUTTONS.map(this.renderDropdownSplitButton) }
                            </ButtonToolbar>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                </Row>
                { /* END row */ }
                { /* START panel */ }
                <Panel header="Pagination">
                    { /* START row */ }
                    <Row>
                        <Col lg={ 6 }>
                            <div>
                                <h4>Sizes</h4>
                                <Pagination bsSize="large" items={ 10 } activePage={ this.state.activePage } onSelect={ this.handleSelect.bind(this) } />
                                <br />
                                <Pagination bsSize="medium" items={ 10 } activePage={ this.state.activePage } onSelect={ this.handleSelect.bind(this) } />
                                <br />
                                <Pagination bsSize="small" items={ 10 } activePage={ this.state.activePage } onSelect={ this.handleSelect.bind(this) } />
                            </div>
                        </Col>
                        <Col lg={ 6 }>
                            <h4>Pager</h4>
                            <Pager>
                                <Pager.Item href="#">Previous</Pager.Item>
                                { ' ' }
                                <Pager.Item href="#">Next</Pager.Item>
                            </Pager>
                            <Pager>
                                <Pager.Item previous href="#">
                                    &larr; Previous Page
                                </Pager.Item>
                                <Pager.Item next href="#">
                                    Next Page &rarr;
                                </Pager.Item>
                            </Pager>
                        </Col>
                    </Row>
                    { /* END row */ }
                </Panel>
                { /* END panel */ }
            </ContentWrapper>
            );
    }
}

export default Buttons;
