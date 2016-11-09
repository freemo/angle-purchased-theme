import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import MapsGoogleRun from './MapsGoogle.run';

class MapsGoogle extends React.Component {
    componentDidMount() {
        MapsGoogleRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Google Maps
                   <small>Easy usage directly from data attribute</small>
                </h3>
                <Row>
                    <Col md={ 6 }>
                        <Panel header="Classic Map">
                            <div data-gmap="" data-address="276 N TUSTIN ST, ORANGE, CA 92867" className="gmap"></div>
                        </Panel>
                    </Col>
                    <Col md={ 6 }>
                        <Panel header="Custom zoom">
                            <div data-gmap="" data-address="276 N TUSTIN ST, ORANGE, CA 92867" data-zoom="19" className="gmap"></div>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col md={ 6 }>
                        <Panel header="Different Map Type">
                            <div data-gmap="" data-address="276 N TUSTIN ST, ORANGE, CA 92867" data-maptype="SATELLITE" className="gmap"></div>
                        </Panel>
                    </Col>
                    <Col md={ 6 }>
                        <Panel header="Multiple Addresses">
                            <div data-gmap="" data-address="276 N TUSTIN ST, ORANGE, CA 92867; 376 N TUSTIN ST, ORANGE, CA 92867" data-title="Location 1; Location 2" className="gmap"></div>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col md={ 12 }>
                        <Panel header="Styled Maps">
                            <div data-gmap="" data-address="276 N TUSTIN ST, ORANGE, CA 92867" data-maptype="ROADMAP" data-styled="data-styled" className="gmap"></div>
                        </Panel>
                    </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default MapsGoogle;

