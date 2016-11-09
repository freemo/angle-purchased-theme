import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, FormControl } from 'react-bootstrap';
import FormWizardRun from './FormWizard.run';

class FormWizard extends React.Component {
    componentDidMount() {
        FormWizardRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Form Wizard</h3>
                <Panel header="Basic Form (jquery.validate)">
                    <form id="example-form" action="#">
                        <div>
                            <h4>Account
                               <br/>
                               <small>Nam egestas, leo eu gravida tincidunt</small>
                            </h4>
                            <fieldset>
                                <label htmlFor="userName">User name *</label>
                                <FormControl id="userName" name="userName" type="text" className="form-control required" />
                                <label htmlFor="password">Password *</label>
                                <FormControl id="password" name="password" type="text" className="form-control required" />
                                <label htmlFor="confirm">Confirm Password *</label>
                                <FormControl id="confirm" name="confirm" type="text" className="form-control required" />
                                <p>(*) Mandatory</p>
                            </fieldset>
                            <h4>Profile
                               <br/>
                               <small>Nam egestas, leo eu gravida tincidunt</small>
                            </h4>
                            <fieldset>
                                <label htmlFor="name">First name *</label>
                                <FormControl id="name" name="name" type="text" className="form-control required" />
                                <label htmlFor="surname">Last name *</label>
                                <FormControl id="surname" name="surname" type="text" className="form-control required" />
                                <label htmlFor="email">Email *</label>
                                <FormControl id="email" name="email" type="text" className="form-control required email" />
                                <label htmlFor="address">Address</label>
                                <FormControl id="address" name="address" type="text" className="form-control" />
                                <p>(*) Mandatory</p>
                            </fieldset>
                            <h4>Hints
                               <br/>
                               <small>Nam egestas, leo eu gravida tincidunt</small>
                            </h4>
                            <fieldset>
                                <p className="lead text-center">Almost there!</p>
                            </fieldset>
                            <h4>Finish
                               <br/>
                               <small>Nam egestas, leo eu gravida tincidunt</small>
                            </h4>
                            <fieldset>
                                <p className="lead">One last check</p>
                                <div className="checkbox c-checkbox">
                                    <label>
                                        <FormControl type="checkbox" required="required" name="terms" />
                                        <span className="fa fa-check"></span>I agree with the Terms and Conditions.</label>
                                </div>
                            </fieldset>
                        </div>
                    </form>
                </Panel>
                <Panel header="Basic Vertical Example">
                    <div id="example-vertical">
                        <h4>Keyboard</h4>
                        <section>
                            <p>Try the keyboard navigation by clicking arrow left or right!</p>
                        </section>
                        <h4>Effects</h4>
                        <section>
                            <p>Wonderful transition effects.</p>
                        </section>
                        <h4>Pager</h4>
                        <section>
                            <p>The next and previous buttons help you to navigate through your content.</p>
                        </section>
                    </div>
                </Panel>
            </ContentWrapper>
            );
    }

}

export default FormWizard;
