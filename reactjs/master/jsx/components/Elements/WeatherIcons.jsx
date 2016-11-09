import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col } from 'react-bootstrap';
import WeatherIconsRun from './WeatherIcons.run';

class WeatherIcons extends React.Component {
    componentDidMount() {
        WeatherIconsRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Weather Icons
                   <small>Static and animated weather themed icons, ready to be dropped right into your project.</small>
                </h3>
                <Row>
                    <Col sm={ 12 }>
                        <h4 className="page-header mt0">Skycons</h4>
                        <Row>
                            <Col xs={ 3 }>
                                <div data-skycon="clear-day" data-color="#888" data-width="60" data-height="60" className="center-block"></div>
                                <p>
                                    <code>clear-day</code>
                                </p>
                            </Col>
                            <Col xs={ 3 }>
                                <div data-skycon="clear-night" data-color="#888" data-width="60" data-height="60" className="center-block"></div>
                                <p>
                                    <code>clear-night</code>
                                </p>
                            </Col>
                            <Col xs={ 3 }>
                                <div data-skycon="partly-cloudy-day" data-color="#888" data-width="60" data-height="60" className="center-block"></div>
                                <p>
                                    <code>partly-cloudy-day</code>
                                </p>
                            </Col>
                            <Col xs={ 3 }>
                                <div data-skycon="partly-cloudy-night" data-color="#888" data-width="60" data-height="60" className="center-block"></div>
                                <p>
                                    <code>partly-cloudy-night</code>
                                </p>
                            </Col>
                            <Col xs={ 3 }>
                                <div data-skycon="cloudy" data-color="#888" data-width="60" data-height="60" className="center-block"></div>
                                <p>
                                    <code>cloudy</code>
                                </p>
                            </Col>
                            <Col xs={ 3 }>
                                <div data-skycon="rain" data-color="#888" data-width="60" data-height="60" className="center-block"></div>
                                <p>
                                    <code>rain</code>
                                </p>
                            </Col>
                            <Col xs={ 3 }>
                                <div data-skycon="sleet" data-color="#888" data-width="60" data-height="60" className="center-block"></div>
                                <p>
                                    <code>sleet</code>
                                </p>
                            </Col>
                            <Col xs={ 3 }>
                                <div data-skycon="snow" data-color="#888" data-width="60" data-height="60" className="center-block"></div>
                                <p>
                                    <code>snow</code>
                                </p>
                            </Col>
                            <Col xs={ 3 }>
                                <div data-skycon="wind" data-color="#888" data-width="60" data-height="60" className="center-block"></div>
                                <p>
                                    <code>wind</code>
                                </p>
                            </Col>
                            <Col xs={ 3 }>
                                <div data-skycon="fog" data-color="#888" data-width="60" data-height="60" className="center-block"></div>
                                <p>
                                    <code>fog</code>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col sm={ 12 }>
                        <p className="lead mt-lg">Daytime</p>
                        <Row>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-sunny"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi.wi-day-sunny</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-cloudy"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi.wi-day-cloudy</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-cloudy-gusts"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi.wi-day-cloudy-gusts</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-cloudy-windy"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi.wi-day-cloudy-windy</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-fog"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi.wi-day-fog</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-hail"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi.wi-day-hail</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-haze"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-day-haze</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-lightning"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-day-lightning</Col>
                                </Row>
                            </Col>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-rain"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-day-rain</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-rain-mix"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-day-rain-mix</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-rain-wind"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-day-rain-wind</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-showers"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-day-showers</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-sleet"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-day-sleet</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-sleet-storm"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-day-sleet-storm</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-snow"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-day-snow</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-snow-thunderstorm"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-day-snow-thunderstorm</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-snow-wind"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-day-snow-wind</Col>
                                </Row>
                            </Col>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-sprinkle"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-day-sprinkle</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-storm-showers"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-day-storm-showers</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-sunny-overcast"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-day-sunny-overcast</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-thunderstorm"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-day-thunderstorm</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-windy"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-day-windy</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-solar-eclipse"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-solar-eclipse</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-hot"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-hot</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-cloudy-high"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-day-cloudy-high</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-day-light-wind"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-day-light-wind</Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={ 12 }>
                        <p className="lead mt-lg">Nighttime</p>
                        <Row>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-clear"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-clear</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-alt-cloudy"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-alt-cloudy</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-alt-cloudy-gusts"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-alt-cloudy-gusts</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-alt-cloudy-windy"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-alt-cloudy-windy</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-alt-hail"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-alt-hail</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-alt-lightning"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-alt-lightning</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-alt-rain"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-alt-rain</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-alt-rain-mix"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-alt-rain-mix</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-alt-rain-wind"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-alt-rain-wind</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-alt-showers"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-alt-showers</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-alt-sleet"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-alt-sleet</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-alt-sleet-storm"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-alt-sleet-storm</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-alt-snow"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-alt-snow</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-alt-snow-thunderstorm"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-alt-snow-thunderstorm</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-alt-snow-wind"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-alt-snow-wind</Col>
                                </Row>
                            </Col>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-alt-sprinkle"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-alt-sprinkle</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-alt-storm-showers"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-alt-storm-showers</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-alt-thunderstorm"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-alt-thunderstorm</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-cloudy"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-cloudy</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-cloudy-gusts"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-cloudy-gusts</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-cloudy-windy"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-cloudy-windy</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-fog"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-fog</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-hail"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-hail</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-lightning"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-lightning</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-partly-cloudy"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-partly-cloudy</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-rain"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-rain</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-rain-mix"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-rain-mix</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-rain-wind"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-rain-wind</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-showers"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-showers</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-sleet"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-sleet</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-sleet-storm"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-sleet-storm</Col>
                                </Row>
                            </Col>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-snow"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-snow</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-snow-thunderstorm"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-snow-thunderstorm</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-snow-wind"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-snow-wind</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-sprinkle"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-sprinkle</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-storm-showers"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-storm-showers</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-thunderstorm"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-thunderstorm</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-lunar-eclipse"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-lunar-eclipse</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-stars"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-stars</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-storm-showers"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-storm-showers</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-thunderstorm"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-thunderstorm</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-alt-cloudy-high"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-alt-cloudy-high</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-cloudy-high"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-cloudy-high</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-night-alt-partly-cloudy"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-night-alt-partly-cloudy</Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={ 12 }>
                        <p className="lead mt-lg">Neutral</p>
                        <Row>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-cloud"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-cloud</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-cloudy"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-cloudy</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-cloudy-gusts"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-cloudy-gusts</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-cloudy-windy"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-cloudy-windy</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-fog"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-fog</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-hail"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-hail</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-rain"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-rain</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-rain-mix"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-rain-mix</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-rain-wind"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-rain-wind</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-showers"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-showers</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-sleet"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-sleet</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-snow"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-snow</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-sprinkle"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-sprinkle</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-storm-showers"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-storm-showers</Col>
                                </Row>
                            </Col>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-thunderstorm"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-thunderstorm</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-snow-wind"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-snow-wind</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-snow"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-snow</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-smog"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-smog</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-smoke"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-smoke</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-lightning"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-lightning</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-raindrops"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-raindrops</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-raindrop"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-raindrop</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-dust"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-dust</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-snowflake-cold"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-snowflake-cold</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-windy"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-windy</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-strong-wind"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-strong-wind</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-sandstorm"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-sandstorm</Col>
                                </Row>
                            </Col>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-earthquake"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-earthquake</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-fire"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-fire</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-flood"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-flood</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-meteor"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-meteor</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-tsunami"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-tsunami</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-volcano"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-volcano</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-hurricane"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-hurricane</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-tornado"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-tornado</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-small-craft-advisory"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-small-craft-advisory</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-gale-warning"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-gale-warning</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-storm-warning"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-storm-warning</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-hurricane-warning"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-hurricane-warning</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind-direction"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind-direction</Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={ 12 }>
                        <p className="lead mt-lg">Miscellaneous</p>
                        <Row>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-alien"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-alien</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-celsius"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-celsius</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-fahrenheit"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-fahrenheit</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-degrees"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-degrees</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-thermometer"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-thermometer</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-thermometer-exterior"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-thermometer-exterior</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-thermometer-internal"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-thermometer-internal</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-cloud-down"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-cloud-down</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-cloud-up"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-cloud-up</Col>
                                </Row>
                            </Col>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-cloud-refresh"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-cloud-refresh</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-horizon"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-horizon</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-horizon-alt"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-horizon-alt</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-sunrise"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-sunrise</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-sunset"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-sunset</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moonrise"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moonrise</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moonset"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moonset</Col>
                                </Row>
                            </Col>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-refresh"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-refresh</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-refresh-alt"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-refresh-alt</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-umbrella"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-umbrella</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-barometer"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-barometer</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-humidity"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-humidity</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-na"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-na</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-train"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-train</Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={ 12 }>
                        <p className="lead mt-lg">Moon Phases</p>
                        <Row>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-new"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-new</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waxing-crescent-1"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waxing-crescent-1</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waxing-crescent-2"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waxing-crescent-2</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waxing-crescent-3"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waxing-crescent-3</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waxing-crescent-4"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waxing-crescent-4</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waxing-crescent-5"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waxing-crescent-5</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waxing-crescent-6"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waxing-crescent-6</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-first-quarter"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-first-quarter</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waxing-gibbous-1"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waxing-gibbous-1</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waxing-gibbous-2"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waxing-gibbous-2</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waxing-gibbous-3"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waxing-gibbous-3</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waxing-gibbous-4"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waxing-gibbous-4</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waxing-gibbous-5"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waxing-gibbous-5</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waxing-gibbous-6"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waxing-gibbous-6</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-full"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-full</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waning-gibbous-1"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waning-gibbous-1</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waning-gibbous-2"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waning-gibbous-2</Col>
                                </Row>
                            </Col>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waning-gibbous-3"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waning-gibbous-3</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waning-gibbous-4"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waning-gibbous-4</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waning-gibbous-5"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waning-gibbous-5</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waning-gibbous-6"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waning-gibbous-6</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-third-quarter"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-third-quarter</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waning-crescent-1"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waning-crescent-1</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waning-crescent-2"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waning-crescent-2</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waning-crescent-3"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waning-crescent-3</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waning-crescent-4"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waning-crescent-4</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waning-crescent-5"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waning-crescent-5</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-waning-crescent-6"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-waning-crescent-6</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-new"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-new</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waxing-crescent-1"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waxing-crescent-1</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waxing-crescent-2"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waxing-crescent-2</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waxing-crescent-3"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waxing-crescent-3</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waxing-crescent-4"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waxing-crescent-4</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waxing-crescent-5"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waxing-crescent-5</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waxing-crescent-6"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waxing-crescent-6</Col>
                                </Row>
                            </Col>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-first-quarter"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-first-quarter</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waxing-gibbous-1"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waxing-gibbous-1</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waxing-gibbous-2"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waxing-gibbous-2</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waxing-gibbous-3"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waxing-gibbous-3</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waxing-gibbous-4"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waxing-gibbous-4</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waxing-gibbous-5"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waxing-gibbous-5</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waxing-gibbous-6"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waxing-gibbous-6</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-full"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-full</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waning-gibbous-1"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waning-gibbous-1</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waning-gibbous-2"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waning-gibbous-2</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waning-gibbous-3"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waning-gibbous-3</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waning-gibbous-4"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waning-gibbous-4</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waning-gibbous-5"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waning-gibbous-5</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waning-gibbous-6"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waning-gibbous-6</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-third-quarter"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-third-quarter</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waning-crescent-1"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waning-crescent-1</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waning-crescent-2"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waning-crescent-2</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waning-crescent-3"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waning-crescent-3</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waning-crescent-4"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waning-crescent-4</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waning-crescent-5"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waning-crescent-5</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-moon-alt-waning-crescent-6"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-moon-alt-waning-crescent-6</Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={ 12 }>
                        <p className="lead mt-lg">Time</p>
                        <Row>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-time-1"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-time-1</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-time-2"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-time-2</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-time-3"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-time-3</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-time-4"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-time-4</Col>
                                </Row>
                            </Col>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-time-5"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-time-5</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-time-6"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-time-6</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-time-7"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-time-7</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-time-8"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-time-8</Col>
                                </Row>
                            </Col>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-time-9"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-time-9</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-time-10"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-time-10</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-time-11"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-time-11</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-time-12"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-time-12</Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={ 12 }>
                        <p className="lead mt-lg">Directional Arrows</p>
                        <Row>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-direction-up"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-direction-up</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-direction-up-right"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-direction-up-right</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-direction-right"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-direction-right</Col>
                                </Row>
                            </Col>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-direction-down-right"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-direction-down-right</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-direction-down"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-direction-down</Col>
                                </Row>
                            </Col>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-direction-down-left"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-direction-down-left</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-direction-left"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-direction-left</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-direction-up-left"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-direction-up-left</Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={ 12 }>
                        <p className="lead mt-lg">Wind Degree Examples</p>
                        <Row>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind towards-0-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.towards-0-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind towards-23-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.towards-23-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind towards-45-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.towards-45-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind towards-68-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.towards-68-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind towards-90-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.towards-90-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind towards-113-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.towards-113-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind towards-135-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.towards-135-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind towards-158-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.towards-158-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind towards-180-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.towards-180-deg</Col>
                                </Row>
                            </Col>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind towards-203-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.towards-203-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind towards-225-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.towards-225-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind towards-248-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.towards-248-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind towards-270-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.towards-270-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind towards-293-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.towards-293-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind towards-313-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.towards-313-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind towards-336-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.towards-336-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind from-180-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.from-180-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind from-203-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.from-203-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind from-225-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.from-225-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind from-248-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.from-248-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind from-270-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.from-270-deg</Col>
                                </Row>
                            </Col>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind from-293-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.from-293-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind from-313-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.from-313-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind from-336-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.from-336-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind from-0-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.from-0-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind from-23-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.from-23-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind from-45-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.from-45-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind from-68-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.from-68-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind from-90-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.from-90-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind from-113-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.from-113-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind from-135-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.from-135-deg</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind from-158-deg"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.from-158-deg</Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={ 12 }>
                        <p className="lead mt-lg">Wind Cardinal Examples</p>
                        <Row>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-towards-n"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-towards-n</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-towards-nne"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-towards-nne</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-towards-ne"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-towards-ne</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-towards-ene"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-towards-ene</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-towards-e"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-towards-e</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-towards-ese"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-towards-ese</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-towards-se"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-towards-se</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-towards-sse"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-towards-sse</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-towards-s"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-towards-s</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-towards-ssw"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-towards-ssw</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-towards-sw"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-towards-sw</Col>
                                </Row>
                            </Col>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-towards-wsw"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-towards-wsw</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-towards-w"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-towards-w</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-towards-wnw"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-towards-wnw</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-towards-nw"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-towards-nw</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-towards-nnw"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-towards-nnw</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-from-n"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.wi-from-n</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-from-nne"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.wi-from-nne</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-from-ne"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.wi-from-ne</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-from-ene"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.wi-from-ene</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-from-e"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.wi-from-e</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-from-ese"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.wi-from-ese</Col>
                                </Row>
                            </Col>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-from-se"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.wi-from-se</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-from-sse"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.wi-from-sse</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-from-s"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.wi-from-s</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-from-ssw"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.wi-from-ssw</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-from-sw"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.wi-from-sw</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-from-wsw"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.wi-from-wsw</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-from-w"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.wi-from-w</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-from-wnw"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.wi-from-wnw</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-from-nw"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.wi-from-nw</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind wi-from-nnw"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind.wi-from-nnw</Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={ 12 }>
                        <p className="lead mt-lg">Beaufort Wind Scale</p>
                        <Row>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind-beaufort-0"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind-beaufort-0</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind-beaufort-1"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind-beaufort-1</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind-beaufort-2"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind-beaufort-2</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind-beaufort-3"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind-beaufort-3</Col>
                                </Row>
                            </Col>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind-beaufort-4"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind-beaufort-4</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind-beaufort-5"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind-beaufort-5</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind-beaufort-6"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind-beaufort-6</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind-beaufort-7"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind-beaufort-7</Col>
                                </Row>
                            </Col>
                            <Col lg={ 4 }>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind-beaufort-8"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind-beaufort-8</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind-beaufort-9"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind-beaufort-9</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind-beaufort-10"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind-beaufort-10</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind-beaufort-11"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind-beaufort-11</Col>
                                </Row>
                                <Row>
                                    <Col xs={ 1 } className="text-md"><i className="wi wi-wind-beaufort-12"></i>
                                    </Col>
                                    <Col xs={ 11 }>.wi-wind-beaufort-12</Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default WeatherIcons;