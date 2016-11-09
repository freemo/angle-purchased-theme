import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import JqGridRun from './JqGrid.run';

class JqGrid extends React.Component {
    componentDidMount() {
        JqGridRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>jqGrid
                   <small>Grid plugin</small>
                </h3>
                { /* JSON */ }
                <div className="jqgrid-responsive mb-lg">
                    <table id="jqGridJSON"></table>
                    <div id="jqGridJSONPager"></div>
                </div>
                { /* NESTED */ }
                <div className="jqgrid-responsive mb-lg">
                    <table id="jqGridTree"></table>
                    <div id="jqGridTreePager"></div>
                </div>
            </ContentWrapper>
            );
    }

}

export default JqGrid;
