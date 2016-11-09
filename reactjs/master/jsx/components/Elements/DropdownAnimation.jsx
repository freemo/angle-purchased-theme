import React from 'react';
import classNames from 'classnames';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, ButtonGroup, ButtonToolbar, SplitButton, Dropdown, MenuItem, Pagination, Pager, PageItem } from 'react-bootstrap';

class DropdownAnimation extends React.Component {

    renderDropdownButton(title) {
        var ddClass = classNames('animated', title);
        return (
            <Dropdown id="dropdown-custom-1">
              <Dropdown.Toggle>
                {title}
              </Dropdown.Toggle>
              <Dropdown.Menu className={ddClass}>
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3" active>Active Item</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">Separated link</MenuItem>
              </Dropdown.Menu>
            </Dropdown>
            );
    }
    render() {

        const ANIMATED = ['bounce','flash','pulse','rubberBand','shake','swing','tada','wobble','bounceIn','bounceInDown','bounceInLeft','bounceInRight','bounceInUp','fadeIn','fadeInDown','fadeInDownBig','fadeInLeft','fadeInLeftBig','fadeInRight','fadeInRightBig','fadeInUp','fadeInUpBig','flip','flipInX','flipInY','lightSpeedIn','rotateIn','rotateInDownLeft','rotateInDownRight','rotateInUpLeft','rotateInUpRight','hinge','rollIn','zoomIn','zoomInDown','zoomInLeft','zoomInRight','zoomInUp']

        return (
            <ContentWrapper>
                <h3>Dropdown Animations
                   <small>Extends the dropdown effects when open just adding an animation class</small>
                </h3>
                {/* START row */}
                <Row>
                    { ANIMATED.map((tit, i) => {
                       return (
                            <Col md={3} key={ i }>
                                {/* START box placeholder */}
                                <div className="box-placeholder">
                                     {/* START button group */}
                                     {this.renderDropdownButton( tit )}
                                     {/* END button group */}
                                </div>
                                {/* END box placeholder */}
                            </Col>
                        )
                    }) }
                </Row>
                {/* END row */}
            </ContentWrapper>
        );
    }

}

export default DropdownAnimation;