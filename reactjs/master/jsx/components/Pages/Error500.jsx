import React from 'react';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import { Router, Route, Link, History } from 'react-router';

class Error500 extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="abs-center wd-xl">
               <div className="text-center mb-xl">
                  <div className="mb-lg">
                     <em className="fa fa-wrench fa-5x text-muted"></em>
                  </div>
                  <div className="text-lg mb-lg">500</div>
                  <p className="lead m0">Oh! Something went wrong :(</p>
                  <p>Don't worry, we're now checking this.</p>
                  <p>In the meantime, please try one of those links below or come back in a moment</p>
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

export default Error500;
