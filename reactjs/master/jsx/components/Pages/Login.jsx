import React from 'react';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

class Login extends React.Component {

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
                        <p className="text-center pv">SIGN IN TO CONTINUE.</p>
                        <form role="form" data-parsley-validate="" noValidate className="mb-lg">
                            <div className="form-group has-feedback">
                                <input id="exampleInputEmail1" type="email" placeholder="Enter email" autoComplete="off" required="required" className="form-control" />
                                <span className="fa fa-envelope form-control-feedback text-muted"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <input id="exampleInputPassword1" type="password" placeholder="Password" required="required" className="form-control" />
                                <span className="fa fa-lock form-control-feedback text-muted"></span>
                            </div>
                            <div className="clearfix">
                                <div className="checkbox c-checkbox pull-left mt0">
                                    <label>
                                        <input type="checkbox" value="" name="remember" />
                                        <em className="fa fa-check"></em>Remember Me</label>
                                </div>
                                <div className="pull-right"><a href="/recover" className="text-muted">Forgot your password?</a>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-block btn-primary mt-lg">Login</button>
                        </form>
                        <p className="pt-lg text-center">Need to Signup?</p><a href="register" className="btn btn-block btn-default">Register Now</a>
                    </div>
                </div>
                { /* END panel */ }
            </div>
            );
    }

}

export default Login;
