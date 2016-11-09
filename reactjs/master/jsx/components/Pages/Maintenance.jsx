import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

class Maintenance extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="abs-center">
               <div className="text-center mv-lg">
                  <h1 className="mb-lg"><sup><em className="fa fa-cog fa-2x text-muted fa-spin text-info"></em></sup>
                     <em className="fa fa-cog fa-5x text-muted fa-spin text-purple"></em>
                     <em className="fa fa-cog fa-lg text-muted fa-spin text-success"></em>
                  </h1>
                  <div className="text-bold text-lg mb-lg">SITE IS UNDER MAINTENANCE</div>
                  <p className="lead m0">We'll back online shortly!</p>
               </div>
            </div>
            );
    }

}

export default Maintenance;
