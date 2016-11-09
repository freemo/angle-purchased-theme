import React from 'react';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

class Register extends React.Component {

    render() {
        return (
            <div className="block-center mt-xl wd-xl">
                { /* START panel */ }
                <div className="panel panel-dark panel-flat">
                    <div className="panel-heading text-center">
                        <a href="#">
                            <img src="img/logo.png" alt="Image" className="block-center img-rounded" />
                        </a>
                    </div>
                    <div className="panel-body">
                        <p className="text-center pv">SIGNUP TO GET INSTANT ACCESS.</p>
                        <form role="form" data-parsley-validate="" noValidate className="mb-lg">
                            <div className="form-group has-feedback">
                                <label htmlFor="signupInputEmail1" className="text-muted">Email address</label>
                                <input id="signupInputEmail1" type="email" placeholder="Enter email" autoComplete="off" required="required" className="form-control" />
                                <span className="fa fa-envelope form-control-feedback text-muted"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <label htmlFor="signupInputPassword1" className="text-muted">Password</label>
                                <input id="signupInputPassword1" type="password" placeholder="Password" autoComplete="off" required="required" className="form-control" />
                                <span className="fa fa-lock form-control-feedback text-muted"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <label htmlFor="signupInputRePassword1" className="text-muted">Retype Password</label>
                                <input id="signupInputRePassword1" type="password" placeholder="Retype Password" autoComplete="off" required="required" data-parsley-equalto="#signupInputPassword1"
                                className="form-control" />
                                <span className="fa fa-lock form-control-feedback text-muted"></span>
                            </div>
                            <div className="clearfix">
                                <div className="checkbox c-checkbox pull-left mt0">
                                    <label>
                                        <input type="checkbox" value="" required="required" name="agreed" />
                                        <em className="fa fa-check"></em>I agree with the <a href="#">terms</a>
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-block btn-primary mt-lg">Create account</button>
                        </form>
                        <p className="pt-lg text-center">Have an account?</p><a href="/login" className="btn btn-block btn-default">Signup</a>
                    </div>
                </div>
                { /* END panel */ }
            </div>

            );
    }

}

export default Register;

