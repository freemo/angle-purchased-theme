import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, FormControl } from 'react-bootstrap';
import FormValidationRun from './FormValidation.run';

class FormValidation extends React.Component {
    componentDidMount() {
        FormValidationRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Form Validation
                   <small>Validating forms frontend have never been so powerful and easy.</small>
                </h3>
                { /* START row */ }
                <Row>
                    <Col lg={ 6 }>
                        <form method="post" action="#" data-parsley-validate="" noValidate>
                            { /* START panel */ }
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <div className="panel-title">Form Register</div>
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <label className="control-label">Email Address *</label>
                                        <FormControl type="text" name="email" required="required" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Password *</label>
                                        <FormControl id="id-password" type="password" name="password" required="required" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Confirm Password *</label>
                                        <FormControl type="password" name="confirmPassword" required="required" data-parsley-equalto="#id-password" className="form-control" />
                                    </div>
                                    <div className="required">* Required fields</div>
                                </div>
                                <div className="panel-footer">
                                    <div className="clearfix">
                                        <div className="pull-left">
                                            <div className="checkbox c-checkbox">
                                                <label>
                                                    <input type="checkbox" name="agreements" required="required" data-parsley-error-message="Please read and agree the terms" />
                                                    <em className="fa fa-check"></em>I agree with the <a href="#">terms</a>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="pull-right">
                                            <button type="submit" className="btn btn-primary">Register</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            { /* END panel */ }
                        </form>
                    </Col>
                    <Col lg={ 6 }>
                        <form method="post" data-parsley-validate="" noValidate>
                            { /* START panel */ }
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <div className="panel-title">Form Login</div>
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <label className="control-label">Email Address *</label>
                                        <FormControl type="text" name="email" required="required" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Password *</label>
                                        <FormControl type="password" name="password" required="required" className="form-control" />
                                    </div>
                                    <div className="required">* Required fields</div>
                                </div>
                                <div className="panel-footer">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                            </div>
                            { /* END panel */ }
                        </form>
                    </Col>
                </Row>
                { /* END row */ }
                { /* START row */ }
                <Row>
                    <div className="col-md-12">
                        <form action="#" data-parsley-validate="" noValidate className="form-horizontal">
                            { /* START panel */ }
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <div className="panel-title">Fields validation</div>
                                </div>
                                <div className="panel-body">
                                    <h4>Type validation</h4>
                                    <fieldset>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Required Text</label>
                                            <Col sm={ 6 }>
                                                <FormControl type="text" name="required" required="required" className="form-control" />
                                            </Col>
                                            <Col sm={ 4 }>
                                                <code>required</code>
                                            </Col>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Email</label>
                                            <Col sm={ 6 }>
                                                <FormControl type="email" name="email" data-parsley-type="email" className="form-control" />
                                            </Col>
                                            <Col sm={ 4 }>
                                                <code>data-parsley-type="email"</code>
                                            </Col>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Number</label>
                                            <Col sm={ 6 }>
                                                <FormControl type="text" name="number" data-parsley-type="number" className="form-control" />
                                            </Col>
                                            <Col sm={ 4 }>
                                                <code>data-parsley-type="number"</code>
                                            </Col>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Integer</label>
                                            <Col sm={ 6 }>
                                                <FormControl type="text" name="integer" data-parsley-type="integer" className="form-control" />
                                            </Col>
                                            <Col sm={ 4 }>
                                                <code>data-parsley-type="integer"</code>
                                            </Col>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Digits</label>
                                            <Col sm={ 6 }>
                                                <FormControl type="text" name="digits" data-parsley-type="digits" className="form-control" />
                                            </Col>
                                            <Col sm={ 4 }>
                                                <code>data-parsley-type="digits"</code>
                                            </Col>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Alphanum</label>
                                            <Col sm={ 6 }>
                                                <FormControl type="text" name="alphanum" data-parsley-type="alphanum" className="form-control" />
                                            </Col>
                                            <Col sm={ 4 }>
                                                <code>data-parsley-type="alphanum"</code>
                                            </Col>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Url</label>
                                            <Col sm={ 6 }>
                                                <FormControl type="text" name="url" data-parsley-type="url" className="form-control" />
                                            </Col>
                                            <Col sm={ 4 }>
                                                <code>data-parsley-type="url"</code>
                                            </Col>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Equal to</label>
                                            <div className="col-sm-3">
                                                <FormControl id="id-source" type="text" placeholder="#id-source" className="form-control" />
                                            </div>
                                            <div className="col-sm-3">
                                                <FormControl type="text" data-parsley-equalto="#id-source" className="form-control" />
                                            </div>
                                            <Col sm={ 4 }>
                                                <code>data-parsley-equalto='#id-source'</code>
                                            </Col>
                                        </div>
                                    </fieldset>
                                    <h4>Range validation</h4>
                                    <fieldset>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Minlength</label>
                                            <Col sm={ 6 }>
                                                <FormControl type="text" name="minlength" data-parsley-minlength="6" className="form-control" />
                                            </Col>
                                            <Col sm={ 4 }>
                                                <code>data-parsley-minlength="6"</code>
                                            </Col>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Maxlength</label>
                                            <Col sm={ 6 }>
                                                <FormControl type="text" name="maxlength" data-parsley-maxlength="10" className="form-control" />
                                            </Col>
                                            <Col sm={ 4 }>
                                                <code>data-parsley-maxlength="10"</code>
                                            </Col>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Length</label>
                                            <Col sm={ 6 }>
                                                <FormControl type="text" name="length" data-parsley-length="[6, 10]" className="form-control" />
                                            </Col>
                                            <Col sm={ 4 }>
                                                <code>data-parsley-length="[6, 10]"</code>
                                            </Col>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Min</label>
                                            <Col sm={ 6 }>
                                                <FormControl type="text" name="min" data-parsley-min="6" className="form-control" />
                                            </Col>
                                            <Col sm={ 4 }>
                                                <code>data-parsley-min="6"</code>
                                            </Col>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Max</label>
                                            <Col sm={ 6 }>
                                                <FormControl type="text" name="max" data-parsley-max="6" className="form-control" />
                                            </Col>
                                            <Col sm={ 4 }>
                                                <code>data-parsley-max="6"</code>
                                            </Col>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Min words</label>
                                            <Col sm={ 6 }>
                                                <FormControl type="text" data-minwords="6" className="form-control" />
                                            </Col>
                                            <Col sm={ 4 }>
                                                <code>data-minwords='6'</code>
                                            </Col>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Max words</label>
                                            <Col sm={ 6 }>
                                                <FormControl type="text" data-maxwords="6" className="form-control" />
                                            </Col>
                                            <Col sm={ 4 }>
                                                <code>data-maxwords='6'</code>
                                            </Col>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label">Range of words</label>
                                            <Col sm={ 6 }>
                                                <FormControl type="text" data-rangewords="[6,10]" className="form-control" />
                                            </Col>
                                            <Col sm={ 4 }>
                                                <code>data-rangewords='[6,10]'</code>
                                            </Col>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="panel-footer text-center">
                                    <button type="submit" className="btn btn-info">Run validation</button>
                                </div>
                            </div>
                            { /* END panel */ }
                        </form>
                    </div>
                </Row>
                { /* END row */ }
            </ContentWrapper>
            );
    }

}

export default FormValidation;

