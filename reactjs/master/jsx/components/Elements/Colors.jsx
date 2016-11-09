import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, PageHeader } from 'react-bootstrap';

class Colors extends React.Component {

    render() {
        return (
            <ContentWrapper>
                <h3>Colors
                   <small>Color swatches</small>
                </h3>
                <Panel>
                    <div className="table-grid">
                        <div className="col">
                            <div className="box-placeholder b0 bg-primary-light">.bg-primary-light</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-primary">.bg-primary</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-primary-dark">.bg-primary-dark</div>
                        </div>
                    </div>
                    <div className="table-grid">
                        <div className="col">
                            <div className="box-placeholder b0 bg-success-light">.bg-success-light</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-success">.bg-success</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-success-dark">.bg-success-dark</div>
                        </div>
                    </div>
                    <div className="table-grid">
                        <div className="col">
                            <div className="box-placeholder b0 bg-info-light">.bg-info-light</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-info">.bg-info</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-info-dark">.bg-info-dark</div>
                        </div>
                    </div>
                    <div className="table-grid">
                        <div className="col">
                            <div className="box-placeholder b0 bg-warning-light">.bg-warning-light</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-warning">.bg-warning</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-warning-dark">.bg-warning-dark</div>
                        </div>
                    </div>
                    <div className="table-grid">
                        <div className="col">
                            <div className="box-placeholder b0 bg-danger-light">.bg-danger-light</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-danger">.bg-danger</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-danger-dark">.bg-danger-dark</div>
                        </div>
                    </div>
                    <div className="table-grid">
                        <div className="col">
                            <div className="box-placeholder b0 bg-inverse-light">.bg-inverse-light</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-inverse">.bg-inverse</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-inverse-dark">.bg-inverse-dark</div>
                        </div>
                    </div>
                    <div className="table-grid">
                        <div className="col">
                            <div className="box-placeholder b0 bg-green-light">.bg-green-light</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-green">.bg-green</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-green-dark">.bg-green-dark</div>
                        </div>
                    </div>
                    <div className="table-grid">
                        <div className="col">
                            <div className="box-placeholder b0 bg-pink-light">.bg-pink-light</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-pink">.bg-pink</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-pink-dark">.bg-pink-dark</div>
                        </div>
                    </div>
                    <div className="table-grid">
                        <div className="col">
                            <div className="box-placeholder b0 bg-purple-light">.bg-purple-light</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-purple">.bg-purple</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-purple-dark">.bg-purple-dark</div>
                        </div>
                    </div>
                    <div className="table-grid">
                        <div className="col">
                            <div className="box-placeholder b0 bg-yellow-light">.bg-yellow-light</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-yellow">.bg-yellow</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-yellow-dark">.bg-yellow-dark</div>
                        </div>
                    </div>
                    <div className="table-grid">
                        <div className="col">
                            <div className="box-placeholder b0 bg-gray-darker">.bg-gray-darker</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-gray-dark">.bg-gray-dark</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-gray">.bg-gray</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-gray-light">.bg-gray-light</div>
                        </div>
                        <div className="col">
                            <div className="box-placeholder b0 bg-gray-lighter">.bg-gray-lighter</div>
                        </div>
                    </div>
                </Panel>
            </ContentWrapper>
            );
    }

}

export default Colors;