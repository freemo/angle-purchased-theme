import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import AnimationRun from './Animation.run';
import { Grid, Row, Col, Panel, PageHeader } from 'react-bootstrap';

class Animation extends React.Component {
    componentDidMount() {
        AnimationRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Animations
                    <small>animo is a powerful little tool that makes managing CSS animations extremely easy.</small>
                </h3>
                { /* START row */ }
                <Row>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-bounce" header="bounce">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-bounce" data-play="bounce">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-flash" header="flash">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-flash" data-play="flash">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-pulse" header="pulse">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-pulse" data-play="pulse">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-rubberBand" header="rubberBand">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-rubberBand" data-play="rubberBand">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-shake" header="shake">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-shake" data-play="shake">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-swing" header="swing">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-swing" data-play="swing">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-tada" header="tada">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-tada" data-play="tada">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-wobble" header="wobble">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-wobble" data-play="wobble">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-bounceIn" header="bounceIn">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-bounceIn" data-play="bounceIn">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-bounceInDown" header="bounceInDown">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-bounceInDown" data-play="bounceInDown">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-bounceInLeft" header="bounceInLeft">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-bounceInLeft" data-play="bounceInLeft">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-bounceInRight" header="bounceInRight">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-bounceInRight" data-play="bounceInRight">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-bounceInUp" header="bounceInUp">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-bounceInUp" data-play="bounceInUp">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-bounceOut" header="bounceOut">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-bounceOut" data-play="bounceOut">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-bounceOutDown" header="bounceOutDown">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-bounceOutDown" data-play="bounceOutDown">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-bounceOutLeft" header="bounceOutLeft">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-bounceOutLeft" data-play="bounceOutLeft">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-bounceOutRight" header="bounceOutRight">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-bounceOutRight" data-play="bounceOutRight">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-bounceOutUp" header="bounceOutUp">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-bounceOutUp" data-play="bounceOutUp">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-fadeIn" header="fadeIn">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-fadeIn" data-play="fadeIn">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-fadeInDown" header="fadeInDown">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-fadeInDown" data-play="fadeInDown">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-fadeInDownBig" header="fadeInDownBig">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-fadeInDownBig" data-play="fadeInDownBig">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-fadeInLeft" header="fadeInLeft">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-fadeInLeft" data-play="fadeInLeft">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-fadeInLeftBig" header="fadeInLeftBig">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-fadeInLeftBig" data-play="fadeInLeftBig">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-fadeInRight" header="fadeInRight">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-fadeInRight" data-play="fadeInRight">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-fadeInRightBig" header="fadeInRightBig">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-fadeInRightBig" data-play="fadeInRightBig">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-fadeInUp" header="fadeInUp">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-fadeInUp" data-play="fadeInUp">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-fadeInUpBig" header="fadeInUpBig">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-fadeInUpBig" data-play="fadeInUpBig">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-fadeOut" header="fadeOut">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-fadeOut" data-play="fadeOut">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-fadeOutDown" header="fadeOutDown">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-fadeOutDown" data-play="fadeOutDown">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-fadeOutDownBig" header="fadeOutDownBig">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-fadeOutDownBig" data-play="fadeOutDownBig">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-fadeOutLeft" header="fadeOutLeft">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-fadeOutLeft" data-play="fadeOutLeft">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-fadeOutLeftBig" header="fadeOutLeftBig">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-fadeOutLeftBig" data-play="fadeOutLeftBig">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-fadeOutRight" header="fadeOutRight">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-fadeOutRight" data-play="fadeOutRight">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-fadeOutRightBig" header="fadeOutRightBig">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-fadeOutRightBig" data-play="fadeOutRightBig">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-fadeOutUp" header="fadeOutUp">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-fadeOutUp" data-play="fadeOutUp">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-fadeOutUpBig" header="fadeOutUpBig">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-fadeOutUpBig" data-play="fadeOutUpBig">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-flip" header="flip">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-flip" data-play="flip">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-flipInX" header="flipInX">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-flipInX" data-play="flipInX">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-flipInY" header="flipInY">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-flipInY" data-play="flipInY">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-flipOutX" header="flipOutX">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-flipOutX" data-play="flipOutX">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-flipOutY" header="flipOutY">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-flipOutY" data-play="flipOutY">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-lightSpeedIn" header="lightSpeedIn">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-lightSpeedIn" data-play="lightSpeedIn">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-lightSpeedOut" header="lightSpeedOut">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-lightSpeedOut" data-play="lightSpeedOut">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-rotateIn" header="rotateIn">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-rotateIn" data-play="rotateIn">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-rotateInDownLeft" header="rotateInDownLeft">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-rotateInDownLeft" data-play="rotateInDownLeft">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-rotateInDownRight" header="rotateInDownRight">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-rotateInDownRight" data-play="rotateInDownRight">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-rotateInUpLeft" header="rotateInUpLeft">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-rotateInUpLeft" data-play="rotateInUpLeft">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-rotateInUpRight" header="rotateInUpRight">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-rotateInUpRight" data-play="rotateInUpRight">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-rotateOut" header="rotateOut">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-rotateOut" data-play="rotateOut">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-rotateOutDownLeft" header="rotateOutDownLeft">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-rotateOutDownLeft" data-play="rotateOutDownLeft">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-rotateOutDownRight" header="rotateOutDownRight">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-rotateOutDownRight" data-play="rotateOutDownRight">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-rotateOutUpLeft" header="rotateOutUpLeft">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-rotateOutUpLeft" data-play="rotateOutUpLeft">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-rotateOutUpRight" header="rotateOutUpRight">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-rotateOutUpRight" data-play="rotateOutUpRight">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-hinge" header="hinge">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-hinge" data-play="hinge">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-rollIn" header="rollIn">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-rollIn" data-play="rollIn">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-rollOut" header="rollOut">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-rollOut" data-play="rollOut">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-zoomIn" header="zoomIn">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-zoomIn" data-play="zoomIn">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-zoomInDown" header="zoomInDown">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-zoomInDown" data-play="zoomInDown">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-zoomInLeft" header="zoomInLeft">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-zoomInLeft" data-play="zoomInLeft">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-zoomInRight" header="zoomInRight">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-zoomInRight" data-play="zoomInRight">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-zoomInUp" header="zoomInUp">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-zoomInUp" data-play="zoomInUp">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-zoomOut" header="zoomOut">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-zoomOut" data-play="zoomOut">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-zoomOutDown" header="zoomOutDown">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-zoomOutDown" data-play="zoomOutDown">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-zoomOutLeft" header="zoomOutLeft">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-zoomOutLeft" data-play="zoomOutLeft">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-zoomOutRight" header="zoomOutRight">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-zoomOutRight" data-play="zoomOutRight">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 2 }>
                        { /* START panel */ }
                        <Panel id="panel-anim-zoomOutUp" header="zoomOutUp">
                            { /* Animation trigger */ }
                            <a href="#" data-animate="" data-target="#panel-anim-zoomOutUp" data-play="zoomOutUp">
                                <em className="fa fa-play fa-2x"></em>
                            </a>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                </Row>
                { /* END row */ }
                <h4 className="page-header">Trigger Animations on Scroll</h4>
                <Row>
                    <Col md={ 4 }>
                        { /* START panel */ }
                        <Panel data-animate="" data-play="bounceIn" data-offset="0" header="bounceIn">
                            <code>animate</code>
                            <code>data-play="bounceIn"</code>
                            <code>data-offset="0"</code>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 4 }>
                        { /* START panel */ }
                        <Panel data-animate="" data-play="fadeInDown" data-offset="0" header="fadeInDown">
                            <code>animate</code>
                            <code>data-play="fadeInDown"</code>
                            <code>data-offset="0"</code>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col md={ 4 }>
                        { /* START panel */ }
                        <Panel data-animate="" data-play="fadeInLeftBig" data-offset="0" data-delay="1000" header="fadeInLeftBig">
                            <code>animate</code>
                            <code>data-play="fadeInLeftBig"</code>
                            <code>data-offset="0"</code>
                            <code>data-delay="1000"</code>
                        </Panel>
                        { /* END panel */ }
                    </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default Animation;