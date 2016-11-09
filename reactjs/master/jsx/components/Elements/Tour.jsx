import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import TourRun from './Tour.run';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

class Tour extends React.Component {

    componentWillMount() {
        // This text will be included in the <pre> tag below
        this.formattedText = '\
// Instance the tour \n\
var tour = new Tour({\n\
  steps: [\n\
  {\n\
    element: "#my-element",\n\
    title: "Title of my step",\n\
    content: "Content of my step"\n\
  },\n\
  {\n\
    element: "#my-other-element",\n\
    title: "Title of my step",\n\
    content: "Content of my step"\n\
  }\n\
]});\n\
// Initialize the tour\n\
tour.init();\n\
// Start the tour\n\
tour.start();'
    }

    componentDidMount() {
        TourRun();
    }

    render() {
        return (
            <ContentWrapper>
                <h3>Tour
                    <small>The easiest way to show people how to use your website.</small>
                </h3>
                <Grid fluid>
                    <Button id="start-tour" bsStyle="primary" className="mb-lg">Start Tour!</Button>
                    <Row>
                        <Col lg={6}>
                            <div id="tour-step-1" data-title="Step 1" data-content="This is the fisrt step" data-placement="right" className="tour-step">
                                <Panel header="About">
                                    <p>The easiest way to show people how to use your website. Duis ut nibh sapien. Duis et orci vitae nunc ultricies tempor a quis arcu. Aliquam
                                        condimentum enim a risus cursus blandit. Vivamus et urna magna. Nulla egestas faucibus tincidunt. Quisque eu ligula tellus. Proin euismod
                                        malesuada dui ac laoreet. Fusce vehicula, est id tincidunt convallis, risus purus vestibulum erat, hendrerit aliquam lacus tortor sit
                                        amet turpis.</p>
                                </Panel>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div id="tour-step-2" data-title="Step 2" data-content="This is the second step" data-placement="left" className="tour-step">
                                <Panel header="Configuration">
                                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ac leo dui, vel pellentesque mauris. Integer cursus
                                        lectus vel eros placerat vitae faucibus leo dignissim. Praesent leo quam, faucibus at facilisis id, rhoncus sit amet metus. Ut consectetur
                                        ullamcorper purus a rutrum. Duis nec leo ipsum, a dignissim libero. Nulla mauris sem, hendrerit sed fringilla a, facilisis vitae eros.
                                        Vestibulum commodo augue tincidunt est dictum,</p>
                                </Panel>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div id="tour-step-3" data-title="Last Step" data-content="This is the last step" data-placement="top" className="tour-step">
                                <Panel header="Setup your tour:">
                                    <pre>{this.formattedText}</pre>
                                </Panel>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </ContentWrapper>
            );
    }

}

export default Tour;