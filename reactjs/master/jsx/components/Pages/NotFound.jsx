import React from 'react';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import { Router, Route, Link, History } from 'react-router';

class NotFound extends React.Component {

    render() {
        return (
            <div className="abs-center wd-xl">
                <div className="text-center mb-xl">
                    <div className="text-lg mb-lg">404</div>
                    <p className="lead m0">We couldn't find this page.</p>
                    <p>The page you are looking for does not exists.</p>
                </div>
                <div className="input-group mb-xl">
                    <input type="text" placeholder="Try with a search" className="form-control" />
                    <span className="input-group-btn">
                     <button type="button" className="btn btn-default">
                        <em className="fa fa-search"></em>
                     </button>
                  </span>
                </div>
                <ul className="list-inline text-center text-sm mb-xl">
                    <li><Link to="dashboard" className="text-muted">Go to App</Link></li>
                    <li className="text-muted">|</li>
                    <li><Link to="login" className="text-muted">Login</Link></li>
                    <li className="text-muted">|</li>
                    <li><Link to="register" className="text-muted">Register</Link></li>
                </ul>
            </div>
            );
    }

}

export default NotFound;

