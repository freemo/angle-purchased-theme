import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';

class FormStandard extends React.Component {

    render() {

        const innerIcon = <em className="fa fa-check"></em>;
        const innerButton = <Button>Before</Button>;
        const innerDropdown = (
        <DropdownButton title="Action" id="input-dropdown-addon">
            <MenuItem key="1">Item</MenuItem>
        </DropdownButton>
        );
        const innerRadio = <input type="radio" aria-label="..." />;
        const innerCheckbox = <input type="checkbox" aria-label="..." />;

        return (
            <ContentWrapper>
                <h3>Form Elements
                               <small>Standard and custom elements for any form</small>
                            </h3>
                { /* START panel */ }
                <Panel header="Inline form">
                    <form role="form" className="form-inline">
                        <FormGroup>
                            <label htmlFor="input-email" className="sr-only">Email address</label>
                            <FormControl id="input-email" type="email" placeholder="Type your email" className="form-control" />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="input-password" className="sr-only">Password</label>
                            <FormControl id="input-password" type="password" placeholder="Type your password" className="form-control" />
                        </FormGroup>
                        <div className="checkbox c-checkbox">
                            <label>
                                <input type="checkbox" />
                                <em className="fa fa-check"></em>Remember</label>
                        </div>
                        <Button type="submit" bsStyle="default">Sign in</Button>
                    </form>
                </Panel>
                { /* END panel */ }
                { /* START row */ }
                <Row>
                    <Col sm={ 6 }>
                        { /* START panel */ }
                        <Panel header="Stacked form">
                            <form role="form">
                                <FormGroup>
                                    <label>Email address</label>
                                    <FormControl type="email" placeholder="Enter email" className="form-control" />
                                </FormGroup>
                                <FormGroup>
                                    <label>Password</label>
                                    <FormControl type="password" placeholder="Password" className="form-control" />
                                </FormGroup>
                                <div className="checkbox c-checkbox">
                                    <label>
                                        <input type="checkbox" defaultChecked />
                                        <em className="fa fa-times"></em>Check me out</label>
                                </div>
                                <Button type="submit" bsStyle="default" bsSize="small">Submit</Button>
                            </form>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col sm={ 6 }>
                        { /* START panel */ }
                        <Panel header="Horizontal form">
                            <form className="form-horizontal">
                                <FormGroup>
                                    <label className="col-lg-2 control-label">Email</label>
                                    <Col lg={ 10 }>
                                        <FormControl type="email" placeholder="Email" className="form-control" />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <label className="col-lg-2 control-label">Password</label>
                                    <Col lg={ 10 }>
                                        <FormControl type="password" placeholder="Password" className="form-control" />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col lgOffset={ 2 } lg={ 10 }>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <input type="checkbox" defaultChecked />
                                                <em className="fa fa-check"></em>Remember me</label>
                                        </div>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col lgOffset={ 2 } lg={ 10 }>
                                        <Button type="submit" bsStyle="default" bsSize="small">Sign in</Button>
                                    </Col>
                                </FormGroup>
                            </form>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                </Row>
                { /* END row */ }
                { /* START panel */ }
                <Panel header="Form elements">
                    <form method="get" action="/" className="form-horizontal">
                        <fieldset>
                            <legend>Classic inputs</legend>
                            <FormGroup>
                                <label className="col-sm-2 control-label">Rounded Corners</label>
                                <Col sm={ 10 }>
                                    <FormControl type="text" className="form-control form-control-rounded" />
                                </Col>
                            </FormGroup>
                        </fieldset>
                        <fieldset>
                            <FormGroup>
                                <label className="col-sm-2 control-label">With help</label>
                                <Col sm={ 10 }>
                                    <FormControl type="text" className="form-control" />
                                    <span className="help-block m-b-none">A block of help text that breaks onto a new line and may extend beyond one line.</span>
                                </Col>
                            </FormGroup>
                        </fieldset>
                        <fieldset>
                            <FormGroup>
                                <label htmlFor="input-id-1" className="col-sm-2 control-label">Label focus</label>
                                <Col sm={ 10 }>
                                    <FormControl id="input-id-1" type="text" className="form-control" />
                                </Col>
                            </FormGroup>
                        </fieldset>
                        <fieldset>
                            <FormGroup>
                                <label className="col-sm-2 control-label">Password</label>
                                <Col sm={ 10 }>
                                    <FormControl type="password" name="password" className="form-control" />
                                </Col>
                            </FormGroup>
                        </fieldset>
                        <fieldset>
                            <FormGroup>
                                <label className="col-sm-2 control-label">Placeholder</label>
                                <Col sm={ 10 }>
                                    <FormControl type="text" placeholder="placeholder" className="form-control" />
                                </Col>
                            </FormGroup>
                        </fieldset>
                        <fieldset>
                            <FormGroup>
                                <label className="col-lg-2 control-label">Disabled</label>
                                <Col lg={ 10 }>
                                    <FormControl type="text" placeholder="Disabled input here..." disabled className="form-control" />
                                </Col>
                            </FormGroup>
                        </fieldset>
                        <fieldset>
                            <FormGroup>
                                <label className="col-lg-2 control-label">Static control</label>
                                <Col lg={ 10 }>
                                    <p className="form-control-static">email@example.com</p>
                                </Col>
                            </FormGroup>
                        </fieldset>
                        <fieldset>
                            <FormGroup>
                                <label className="col-sm-2 control-label">Checkboxes and radios</label>
                                <Col sm={ 10 }>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" value="" />Option one is this and that—be sure to include why it's great</label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                            <input id="optionsRadios1" type="radio" name="optionsRadios" value="option1" defaultChecked />Option one is this and that—be sure to include why it's great</label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                            <input id="optionsRadios2" type="radio" name="optionsRadios" value="option2" />Option two can be something else and selecting it will deselect option one</label>
                                    </div>
                                </Col>
                            </FormGroup>
                        </fieldset>
                        <fieldset>
                            <FormGroup>
                                <label className="col-sm-2 control-label">Inline checkboxes</label>
                                <Col sm={ 10 }>
                                    <label className="checkbox checkbox-inline">
                                        <input id="inlineCheckbox1" type="checkbox" value="option1" />a</label>
                                    <label className="checkbox-inline">
                                        <input id="inlineCheckbox2" type="checkbox" value="option2" />b</label>
                                    <label className="checkbox-inline">
                                        <input id="inlineCheckbox3" type="checkbox" value="option3" />c</label>
                                </Col>
                            </FormGroup>
                        </fieldset>
                        <fieldset className="last-child">
                            <FormGroup>
                                <label className="col-sm-2 control-label">Select</label>
                                <Col sm={ 10 }>
                                    <FormControl componentClass="select" name="account" className="form-control m-b">
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option>
                                    </FormControl>
                                    <br/>
                                    <Row>
                                        <div className="col-lg-4">
                                            <FormControl componentClass="select" multiple="" className="form-control">
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                                <option>Option 4</option>
                                            </FormControl>
                                        </div>
                                    </Row>
                                </Col>
                            </FormGroup>
                        </fieldset>
                        <fieldset>
                            <legend>Input variants</legend>
                            <FormGroup>
                                <label className="col-sm-2 control-label">Custom Checkboxes &amp; radios</label>
                                <Col sm={ 10 }>
                                    <div className="checkbox c-checkbox needsclick">
                                        <label className="needsclick">
                                            <input type="checkbox" value="" className="needsclick" />
                                            <em className="fa fa-check"></em>Option one</label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" defaultChecked value="" />
                                            <em className="fa fa-check"></em>Option two checked</label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" defaultChecked disabled value="" />
                                            <em className="fa fa-check"></em>Option three checked and disabled</label>
                                    </div>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" disabled value="" />
                                            <em className="fa fa-check"></em>Option four disabled</label>
                                    </div>
                                    <div className="radio c-radio">
                                        <label>
                                            <input type="radio" name="a" value="option1" />
                                            <em className="fa fa-circle"></em>Option one</label>
                                    </div>
                                    <div className="radio c-radio">
                                        <label>
                                            <input type="radio" name="a" value="option2" defaultChecked />
                                            <em className="fa fa-circle"></em>Option two checked</label>
                                    </div>
                                    <div className="radio c-radio">
                                        <label>
                                            <input type="radio" value="option2" defaultChecked disabled />
                                            <em className="fa fa-circle"></em>Option three checked and disabled</label>
                                    </div>
                                    <div className="radio c-radio">
                                        <label>
                                            <input type="radio" name="a" disabled/>
                                            <em className="fa fa-circle"></em>Option four disabled</label>
                                    </div>
                                </Col>
                            </FormGroup>
                        </fieldset>
                        <fieldset>
                            <FormGroup>
                                <label className="col-sm-2 control-label">Inline checkboxes</label>
                                <Col sm={ 10 }>
                                    <label className="checkbox-inline c-checkbox">
                                        <input id="inlineCheckbox10" type="checkbox" value="option1" />
                                        <em className="fa fa-check"></em>a</label>
                                    <label className="checkbox-inline c-checkbox">
                                        <input id="inlineCheckbox20" type="checkbox" value="option2" />
                                        <em className="fa fa-check"></em>b</label>
                                    <label className="checkbox-inline c-checkbox">
                                        <input id="inlineCheckbox30" type="checkbox" value="option3" />
                                        <em className="fa fa-check"></em>c</label>
                                </Col>
                            </FormGroup>
                        </fieldset>
                        <fieldset>
                            <FormGroup>
                                <label className="col-sm-2 control-label">Rounded</label>
                                <Col sm={ 10 }>
                                    <label className="checkbox c-checkbox c-checkbox-rounded">
                                        <input id="roundedcheckbox10" type="checkbox" defaultChecked />
                                        <em className="fa fa-check"></em>Lorem</label>
                                    <label className="checkbox c-checkbox c-checkbox-rounded">
                                        <input id="roundedcheckbox20" type="checkbox" />
                                        <em className="fa fa-check"></em>Ipsum</label>
                                </Col>
                            </FormGroup>
                        </fieldset>
                        <fieldset>
                            <FormGroup>
                                <label className="col-sm-2 control-label">Inline radios</label>
                                <Col sm={ 10 }>
                                    <label className="radio-inline c-radio">
                                        <input id="inlineradio1" type="radio" name="i-radio" value="option1" defaultChecked />
                                        <em className="fa fa-circle"></em>a</label>
                                    <label className="radio-inline c-radio">
                                        <input id="inlineradio2" type="radio" name="i-radio" value="option2" />
                                        <em className="fa fa-circle"></em>b</label>
                                    <label className="radio-inline c-radio">
                                        <input id="inlineradio3" type="radio" name="i-radio" value="option3" />
                                        <em className="fa fa-circle"></em>c</label>
                                </Col>
                            </FormGroup>
                        </fieldset>
                        <fieldset>
                            <FormGroup>
                                <label className="col-sm-2 control-label">Custom icons</label>
                                <Col sm={ 10 }>
                                    <label className="radio-inline c-radio">
                                        <input id="inlineradio10" type="radio" name="i-radio" value="option1" defaultChecked />
                                        <em className="fa fa-check"></em>a</label>
                                    <label className="radio-inline c-radio">
                                        <input id="inlineradio20" type="radio" name="i-radio" value="option2" defaultChecked />
                                        <em className="fa fa-user"></em>b</label>
                                    <label className="radio-inline c-radio">
                                        <input id="inlineradio30" type="radio" name="i-radio" value="option3" defaultChecked />
                                        <em className="fa fa-tint"></em>c</label>
                                    <br/>
                                    <label className="checkbox-inline c-checkbox">
                                        <input id="inlinecheckbox10" type="checkbox" value="option1" defaultChecked />
                                        <em className="fa fa-star"></em>a</label>
                                    <label className="checkbox-inline c-checkbox">
                                        <input id="inlinecheckbox20" type="checkbox" value="option2" defaultChecked />
                                        <em className="fa fa-heart"></em>b</label>
                                    <label className="checkbox-inline c-checkbox">
                                        <input id="inlinecheckbox30" type="checkbox" value="option3" defaultChecked />
                                        <em className="fa fa-bell"></em>c</label>
                                </Col>
                            </FormGroup>
                        </fieldset>
                        <fieldset>
                            <FormGroup validationState="success">
                                <label className="col-sm-2 control-label">Input with success</label>
                                <Col sm={ 10 }>
                                    <FormControl type="text" className="form-control" />
                                </Col>
                            </FormGroup>
                        </fieldset>
                        <fieldset>
                            <FormGroup validationState="warning">
                                <label className="col-sm-2 control-label">Input with warning</label>
                                <Col sm={ 10 }>
                                    <FormControl type="text" className="form-control" />
                                </Col>
                            </FormGroup>
                        </fieldset>
                        <fieldset>
                            <FormGroup validationState="error">
                                <label className="col-sm-2 control-label">Input with error</label>
                                <Col sm={ 10 }>
                                    <FormControl type="text" className="form-control" />
                                </Col>
                            </FormGroup>
                        </fieldset>
                        <fieldset>
                            <FormGroup>
                                <label className="col-sm-2 control-label">Control sizing</label>
                                <Col sm={ 10 }>
                                    <FormControl type="text" placeholder=".input-lg" className="form-control input-lg m-b" />
                                    <br/>
                                    <FormControl type="text" placeholder="Default input" className="form-control m-b" />
                                    <br/>
                                    <FormControl type="text" placeholder=".input-sm" className="form-control input-sm" />
                                </Col>
                            </FormGroup>
                        </fieldset>
                        <fieldset>
                            <FormGroup>
                                <label className="col-sm-2 control-label">Column sizing</label>
                                <Col sm={ 10 }>
                                    <Row>
                                        <div className="col-md-2">
                                            <FormControl type="text" placeholder=".col-md-2" className="form-control" />
                                        </div>
                                        <div className="col-md-3">
                                            <FormControl type="text" placeholder=".col-md-3" className="form-control" />
                                        </div>
                                        <div className="col-md-4">
                                            <FormControl type="text" placeholder=".col-md-4" className="form-control" />
                                        </div>
                                    </Row>
                                </Col>
                            </FormGroup>
                        </fieldset>
                        <fieldset>
                            <FormGroup>
                                <label className="col-sm-2 control-label">Input groups</label>
                                <Col sm={ 10 }>
                                    <InputGroup>
                                      <InputGroup.Addon>@</InputGroup.Addon>
                                      <FormControl type="text" />
                                    </InputGroup>
                                    <br />
                                    <InputGroup>
                                      <FormControl type="text" />
                                      <InputGroup.Addon>.00</InputGroup.Addon>
                                    </InputGroup>
                                    <br />
                                    <InputGroup>
                                      <InputGroup.Addon>$</InputGroup.Addon>
                                      <FormControl type="text" />
                                      <InputGroup.Addon>.00</InputGroup.Addon>
                                    </InputGroup>
                                    <br />
                                    <InputGroup>
                                      <InputGroup.Button>
                                        <Button>Before</Button>
                                      </InputGroup.Button>
                                      <FormControl type="text" />
                                    </InputGroup>
                                    <br />
                                    <InputGroup>
                                      <FormControl type="text" />
                                      <DropdownButton
                                        componentClass={InputGroup.Button}
                                        id="input-dropdown-addon"
                                        title="Action">
                                        <MenuItem key="1">Item</MenuItem>
                                      </DropdownButton>
                                    </InputGroup>
                                    <br />
                                    <InputGroup>
                                      <InputGroup.Addon>
                                        <input type="radio" aria-label="..." />
                                      </InputGroup.Addon>
                                      <FormControl type="text" />
                                    </InputGroup>
                                    <br />
                                    <InputGroup>
                                      <InputGroup.Addon>
                                        <input type="checkbox" aria-label="..." />
                                      </InputGroup.Addon>
                                      <FormControl type="text" />
                                    </InputGroup>
                                </Col>
                            </FormGroup>
                        </fieldset>
                    </form>
                </Panel>
                { /* END panel */ }
            </ContentWrapper>
            );
    }

}

export default FormStandard;
