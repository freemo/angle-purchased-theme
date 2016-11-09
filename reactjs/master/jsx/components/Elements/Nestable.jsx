import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col } from 'react-bootstrap';
import NestableRun from './Nestable.run';

class Nestable extends React.Component {

    componentDidMount() {
        NestableRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Nestable
                    <small>Drag &amp; drop hierarchical list with mouse and touch compatibility</small>
                </h3>
                <Grid fluid>
                    <div className="js-nestable-action"><a data-action="expand-all" className="btn btn-default btn-sm mr-sm">Expand All</a><a data-action="collapse-all" className="btn btn-default btn-sm">CollapseAll</a>
                    </div>
                    <Row>
                        <Col md={ 6 }>
                            <div id="nestable" className="dd">
                                <ol className="dd-list">
                                    <li data-id="1" className="dd-item">
                                        <div className="dd-handle">Item 1</div>
                                    </li>
                                    <li data-id="2" className="dd-item">
                                        <div className="dd-handle">Item 2</div>
                                        <ol className="dd-list">
                                            <li data-id="3" className="dd-item">
                                                <div className="dd-handle">Item 3</div>
                                            </li>
                                            <li data-id="4" className="dd-item">
                                                <div className="dd-handle">Item 4</div>
                                            </li>
                                            <li data-id="5" className="dd-item">
                                                <div className="dd-handle">Item 5</div>
                                                <ol className="dd-list">
                                                    <li data-id="6" className="dd-item">
                                                        <div className="dd-handle">Item 6</div>
                                                    </li>
                                                    <li data-id="7" className="dd-item">
                                                        <div className="dd-handle">Item 7</div>
                                                    </li>
                                                    <li data-id="8" className="dd-item">
                                                        <div className="dd-handle">Item 8</div>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li data-id="9" className="dd-item">
                                                <div className="dd-handle">Item 9</div>
                                            </li>
                                            <li data-id="10" className="dd-item">
                                                <div className="dd-handle">Item 10</div>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-id="11" className="dd-item">
                                        <div className="dd-handle">Item 11</div>
                                    </li>
                                    <li data-id="12" className="dd-item">
                                        <div className="dd-handle">Item 12</div>
                                    </li>
                                </ol>
                            </div>
                            <textarea id="nestable-output" className="form-control"></textarea>
                        </Col>
                        <Col md={ 6 }>
                            <div id="nestable2" className="dd">
                                <ol className="dd-list">
                                    <li data-id="13" className="dd-item dd3-item">
                                        <div className="dd-handle dd3-handle">Drag</div>
                                        <div className="dd3-content">Item 13</div>
                                    </li>
                                    <li data-id="14" className="dd-item dd3-item">
                                        <div className="dd-handle dd3-handle">Drag</div>
                                        <div className="dd3-content">Item 14</div>
                                    </li>
                                    <li data-id="15" className="dd-item dd3-item">
                                        <div className="dd-handle dd3-handle">Drag</div>
                                        <div className="dd3-content">Item 15</div>
                                        <ol className="dd-list">
                                            <li data-id="16" className="dd-item dd3-item">
                                                <div className="dd-handle dd3-handle">Drag</div>
                                                <div className="dd3-content">Item 16</div>
                                            </li>
                                            <li data-id="17" className="dd-item dd3-item">
                                                <div className="dd-handle dd3-handle">Drag</div>
                                                <div className="dd3-content">Item 17</div>
                                            </li>
                                            <li data-id="18" className="dd-item dd3-item">
                                                <div className="dd-handle dd3-handle">Drag</div>
                                                <div className="dd3-content">Item 18</div>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </div>
                            <textarea id="nestable2-output" className="form-control"></textarea>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <p>(*) Note that in a React enviroment, 'serialize' api from Nestable plugin will read also the 'data-react-id' attribute</p>
                </Grid>
            </ContentWrapper>
            );
    }

}

export default Nestable;