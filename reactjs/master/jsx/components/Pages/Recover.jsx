import React from 'react';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

class Recover extends React.Component {

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
                        <p className="text-center pv">PASSWORD RESET</p>
                        <form role="form">
                            <p className="text-center">Fill with your mail to receive instructions on how to reset your password.</p>
                            <div className="form-group has-feedback">
                                <label htmlFor="resetInputEmail1" className="text-muted">Email address</label>
                                <input id="resetInputEmail1" type="email" placeholder="Enter email" autoComplete="off" className="form-control" />
                                <span className="fa fa-envelope form-control-feedback text-muted"></span>
                            </div>
                            <button type="submit" className="btn btn-danger btn-block">Reset</button>
                        </form>
                    </div>
                </div>
                { /* END panel */ }
            </div>
            );
    }

}

export default Recover;

