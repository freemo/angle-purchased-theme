import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Accordion, Tabs, Tab, Well, Jumbotron } from 'react-bootstrap';
import PanelsRun from './Panels.run';

class Panels extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 1
        };
    }

    componentDidMount() {
        PanelsRun();
    }

    handleSelect(key) {
        console.log('Tab selected ' + key);
        this.setState({
            key
        });
    }

    render() {
        return (
            <ContentWrapper>
                <h3>Panels
                   <small>Panels can contain almost any kind of element inside</small>
                </h3>
                <Grid fluid>
                    { /* END row */ }
                    <h4 className="page-header mt0">Panel dismiss &amp; refresh</h4>
                    { /* START row */ }
                    <Row>
                        <Col lg={ 4 }>
                            { /* START panel */ }
                            <div id="panelDemo2" className="panel panel-default panel-demo">
                                <div className="panel-heading">Dismissable Panel
                                    <a href="#" data-tool="panel-dismiss" data-toggle="tooltip" title="Close Panel" className="pull-right">
                                        <em className="fa fa-times"></em>
                                    </a>
                                </div>
                                <div className="panel-body">
                                    <p>Panel can be dismissed by clicking on the cross icon icon on the top right corner</p>
                                </div>
                            </div>
                            { /* END panel */ }
                        </Col>
                        <Col lg={ 4 }>
                            { /* START panel */ }
                            <div id="panelDemoRefresh1" className="panel panel-default panel-demo">
                                <div className="panel-heading">Standard Spinner
                                    <a href="#" data-tool="panel-refresh" data-toggle="tooltip" title="Refresh Panel" data-spinner="standard" className="pull-right">
                                        <em className="fa fa-refresh"></em>
                                    </a>
                                </div>
                                <div className="panel-body">
                                    <p>Click on the refresh icon to see how it triggers a refresh-event while it shows a spinner</p>
                                </div>
                            </div>
                            { /* END panel */ }
                        </Col>
                        <Col lg={ 4 }>
                            { /* START panel */ }
                            <div id="panelDemoRefresh2" className="panel panel-default panel-demo">
                                <div className="panel-heading">Custom Spinner
                                    <a href="#" data-tool="panel-refresh" data-toggle="tooltip" title="Refresh Panel" data-spinner="traditional" className="pull-right">
                                        <em className="fa fa-refresh"></em>
                                    </a>
                                </div>
                                <div className="panel-body">
                                    <p>Click on the refresh icon to see how it triggers a refresh-event while it shows a spinner</p>
                                </div>
                            </div>
                            { /* END panel */ }
                        </Col>
                    </Row>
                    { /* END row */ }
                </Grid>
                <h4 className="page-header">Panel Styles</h4>
                { /* START row */ }
                <Row>
                    <Col lg={ 4 }>
                        { /* START panel */ }
                        <div id="panelDemo7" className="panel panel-default">
                            <div className="panel-heading">Default Panel</div>
                            <div className="panel-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere
                                    lectus et, fringilla augue.</p>
                            </div>
                            <div className="panel-footer">Panel Footer</div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col lg={ 4 }>
                        { /* START panel */ }
                        <div id="panelDemo8" className="panel panel-primary">
                            <div className="panel-heading">Primary Panel</div>
                            <div className="panel-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere
                                    lectus et, fringilla augue.</p>
                            </div>
                            <div className="panel-footer">Panel Footer</div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col lg={ 4 }>
                        { /* START panel */ }
                        <div id="panelDemo9" className="panel panel-success">
                            <div className="panel-heading">Success Panel</div>
                            <div className="panel-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere
                                    lectus et, fringilla augue.</p>
                            </div>
                            <div className="panel-footer">Panel Footer</div>
                        </div>
                        { /* END panel */ }
                    </Col>
                </Row>
                { /* END row */ }
                { /* START row */ }
                <Row>
                    <Col lg={ 4 }>
                        { /* START panel */ }
                        <div id="panelDemo10" className="panel panel-info">
                            <div className="panel-heading">Info Panel</div>
                            <div className="panel-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere
                                    lectus et, fringilla augue.</p>
                            </div>
                            <div className="panel-footer">Panel Footer</div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col lg={ 4 }>
                        { /* START panel */ }
                        <div id="panelDemo11" className="panel panel-warning">
                            <div className="panel-heading">Warning Panel</div>
                            <div className="panel-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere
                                    lectus et, fringilla augue.</p>
                            </div>
                            <div className="panel-footer">Panel Footer</div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col lg={ 4 }>
                        { /* START panel */ }
                        <div id="panelDemo12" className="panel panel-danger">
                            <div className="panel-heading">Danger Panel</div>
                            <div className="panel-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere
                                    lectus et, fringilla augue.</p>
                            </div>
                            <div className="panel-footer">Panel Footer</div>
                        </div>
                        { /* END panel */ }
                    </Col>
                </Row>
                { /* END row */ }
                { /* START row */ }
                <Row>
                    <Col lg={ 12 }>
                        { /* START panel */ }
                        <Accordion>
                            <Panel header="Collapsible Group Item #1" eventKey="1">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                                lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable
                                VHS.
                            </Panel>
                            <Panel header="Collapsible Group Item #2" eventKey="2">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                                lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable
                                VHS.
                            </Panel>
                            <Panel header="Collapsible Group Item #3" eventKey="3">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                                lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable
                                VHS.
                            </Panel>
                        </Accordion>
                        { /* END panel */ }
                    </Col>
                </Row>
                { /* END row */ }
                { /* START row */ }
                <Row>
                    <Col lg={ 12 }>
                        { /* START panel */ }
                        <Panel header="Basic Tabs">
                            <Tabs activeKey={ this.state.key } onSelect={ this.handleSelect.bind(this) } id="tabID">
                                <Tab eventKey={ 1 } title="Tab 1">Praesent diam diam, venenatis et gravida viverra, mollis vel sem. </Tab>
                                <Tab eventKey={ 2 } title="Tab 2">Mauris eros nibh, adipiscing ac commodo vel, molestie mattis magna. </Tab>
                                <Tab eventKey={ 3 } title="Tab 3">Donec tellus lectus, tempor eu vestibulum non, iaculis quis lorem. </Tab>
                            </Tabs>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                </Row>
                { /* END row */ }
                { /* START row */ }
                <Row>
                    <Col lg={ 4 }>
                        <Well>
                            <h4>Normal Well</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere
                                lectus et, fringilla augue.</p>
                        </Well>
                    </Col>
                    <Col lg={ 4 }>
                        <Well bsSize="large">
                            <h4>Large Well</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere
                                lectus et, fringilla augue.</p>
                        </Well>
                    </Col>
                    <Col lg={ 4 }>
                        <Well bsSize="small">
                            <h4>Small Well</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere
                                lectus et, fringilla augue.</p>
                        </Well>
                    </Col>
                </Row>
                { /* END row */ }
                { /* START row */ }
                <Row>
                    <Col lg={ 12 }>
                        <Jumbotron>
                            <h1>Jumbotron</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere
                                lectus et, fringilla augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam
                                ornare lacus adipiscing.</p>
                            <p><a role="button" className="btn btn-primary btn-lg">Learn more</a>
                            </p>
                        </Jumbotron>
                    </Col>
                </Row>
                { /* END row */ }
            </ContentWrapper>
            );
    }

}

export default Panels;