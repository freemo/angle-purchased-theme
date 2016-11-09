import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import CalendarRun from './Calendar.run';

class Calendar extends React.Component {
    componentDidMount() {
        CalendarRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Full Calendar
                   <small>Drag and Drop events and tasks</small>
                </h3>
                { /* START row */ }
                <div className="calendar-app">
                    <Row>
                        <Col lg={3} md={4}>
                            <Row>
                                <Col md={ 12 } sm={ 6 } xs={ 12 }>
                                    { /* START panel */ }
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">Draggable Events</h4>
                                        </div>
                                        { /* Default external events list */ }
                                        <div className="external-events-trash">
                                            <div className="panel-body">
                                                <div className="external-events">
                                                    <div className="bg-green">Lunch</div>
                                                    <div className="bg-danger">Go home</div>
                                                    <div className="bg-info">Do homework</div>
                                                    <div className="bg-warning">Work on UI design</div>
                                                    <div className="bg-inverse">Sleep tight</div>
                                                </div>
                                                <p>
                                                <span className="checkbox c-checkbox">
                                                    <label>
                                                        <input id="remove-after-drop" type="checkbox" />
                                                        <em className="fa fa-check"></em>Remove after Drop</label>
                                                </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    { /* END panel */ }
                                </Col>
                                <Col md={ 12 } sm={ 6 } xs={ 12 }>
                                    { /* START panel */ }
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h3 className="panel-title">Create Event</h3>
                                        </div>
                                        <div className="panel-body">
                                            <div className="input-group mb">
                                                <input type="text" placeholder="Event name..." className="form-control external-event-name" />
                                                <div className="input-group-btn">
                                                    <button type="button" className="btn btn-default external-event-add-btn">Add</button>
                                                </div>
                                            </div>
                                            <p className="text-muted">
                                                <small>Choose a Color</small>
                                            </p>
                                            <ul className="list-inline external-event-color-selector">
                                                <li className="p0">
                                                    <a href="#" className="circle circle-danger circle-xl selected"></a>
                                                </li>
                                                <li className="p0">
                                                    <a href="#" className="circle circle-primary circle-xl"></a>
                                                </li>
                                                <li className="p0">
                                                    <a href="#" className="circle circle-info circle-xl"></a>
                                                </li>
                                                <li className="p0">
                                                    <a href="#" className="circle circle-success circle-xl"></a>
                                                </li>
                                                <li className="p0">
                                                    <a href="#" className="circle circle-warning circle-xl"></a>
                                                </li>
                                                <li className="p0">
                                                    <a href="#" className="circle circle-green circle-xl"></a>
                                                </li>
                                                <li className="p0">
                                                    <a href="#" className="circle circle-pink circle-xl"></a>
                                                </li>
                                                <li className="p0">
                                                    <a href="#" className="circle circle-inverse circle-xl"></a>
                                                </li>
                                                <li className="p0">
                                                    <a href="#" className="circle circle-purple circle-xl"></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    { /* END panel */ }
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={ 9 } md={ 8 }>
                            { /* START panel */ }
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    { /* START calendar */ }
                                    <div id="calendar"></div>
                                    { /* END calendar */ }
                                </div>
                            </div>
                            { /* END panel */ }
                        </Col>
                    </Row>
                    { /* END row */ }
                </div>
            </ContentWrapper>
            );
    }

}

export default Calendar;


