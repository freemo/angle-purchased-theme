import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import MapsVectorRun from './MapsVector.run';

class MapsVector extends React.Component {
    componentDidMount() {
        MapsVectorRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Vector Maps
                   <br/>
                   <small>Resolution independent maps</small>
                </h3>
                <div data-vector-map="" data-height="700" data-map-name="world_mill_en"></div>
            </ContentWrapper>
        );
    }

}

export default MapsVector;
