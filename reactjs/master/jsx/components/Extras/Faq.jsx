import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Accordion } from 'react-bootstrap';

class Faq extends React.Component {
    componentDidMount() {
    }
    render() {
        var accordionHeader = (
            <span>
                <small>
                    <em className="fa fa-plus text-primary mr"></em>
                </small>
                How can I change the color?
            </span>
        );

        return (
            <ContentWrapper>
                <div className="container container-md">
                   <Row className="mb-lg">
                      <Col md={8}>
                         <div className="h1 text-bold">FAQs</div>
                         <p className="text-muted">Praesent id mauris urna, et tristique lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                      </Col>
                      <Col md={4}>
                         <div className="panel">
                            <div className="panel-body text-center">
                               <p className="mb-lg">Sed semper diam vitae purus tristique at scelerisque massa ultricies.</p>
                               <button type="button" className="btn btn-info">Contact support</button>
                            </div>
                         </div>
                      </Col>
                   </Row>
                   <h4 className="mv-lg pv-lg text-dark">Some presale Questions</h4>
                   <Accordion>
                        <Panel header={accordionHeader} eventKey="1" className="b0">
                           <p>Donec congue sagittis mi sit amet tincidunt. Quisque sollicitudin massa vel erat tincidunt blandit. Curabitur quis leo nulla. Phasellus faucibus placerat luctus. Integer fermentum molestie massa at congue. Quisque quis quam dictum diam
                              volutpat adipiscing.</p>
                           <p>Proin ut urna enim.</p>
                           <div className="pull-right">
                              <small className="text-muted mr">Was this information useful?</small>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-up text-muted"></em>
                              </button>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-down text-muted"></em>
                              </button>
                           </div>
                        </Panel>
                        <Panel header={accordionHeader} eventKey="2" className="b0">
                           <p>Donec congue sagittis mi sit amet tincidunt. Quisque sollicitudin massa vel erat tincidunt blandit. Curabitur quis leo nulla. Phasellus faucibus placerat luctus. Integer fermentum molestie massa at congue. Quisque quis quam dictum diam
                              volutpat adipiscing.</p>
                           <p>Proin ut urna enim.</p>
                           <div className="pull-right">
                              <small className="text-muted mr">Was this information useful?</small>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-up text-muted"></em>
                              </button>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-down text-muted"></em>
                              </button>
                           </div>
                        </Panel>
                        <Panel header={accordionHeader} eventKey="3" className="b0">
                           <p>Donec congue sagittis mi sit amet tincidunt. Quisque sollicitudin massa vel erat tincidunt blandit. Curabitur quis leo nulla. Phasellus faucibus placerat luctus. Integer fermentum molestie massa at congue. Quisque quis quam dictum diam
                              volutpat adipiscing.</p>
                           <p>Proin ut urna enim.</p>
                           <div className="pull-right">
                              <small className="text-muted mr">Was this information useful?</small>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-up text-muted"></em>
                              </button>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-down text-muted"></em>
                              </button>
                           </div>
                        </Panel>
                        <Panel header={accordionHeader} eventKey="4" className="b0">
                           <p>Donec congue sagittis mi sit amet tincidunt. Quisque sollicitudin massa vel erat tincidunt blandit. Curabitur quis leo nulla. Phasellus faucibus placerat luctus. Integer fermentum molestie massa at congue. Quisque quis quam dictum diam
                              volutpat adipiscing.</p>
                           <p>Proin ut urna enim.</p>
                           <div className="pull-right">
                              <small className="text-muted mr">Was this information useful?</small>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-up text-muted"></em>
                              </button>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-down text-muted"></em>
                              </button>
                           </div>
                        </Panel>
                        <Panel header={accordionHeader} eventKey="5" className="b0">
                           <p>Donec congue sagittis mi sit amet tincidunt. Quisque sollicitudin massa vel erat tincidunt blandit. Curabitur quis leo nulla. Phasellus faucibus placerat luctus. Integer fermentum molestie massa at congue. Quisque quis quam dictum diam
                              volutpat adipiscing.</p>
                           <p>Proin ut urna enim.</p>
                           <div className="pull-right">
                              <small className="text-muted mr">Was this information useful?</small>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-up text-muted"></em>
                              </button>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-down text-muted"></em>
                              </button>
                           </div>
                        </Panel>
                   </Accordion>
                   <h4 className="mv-lg pv-lg text-dark">Buyer Questions</h4>
                   <Accordion>
                        <Panel header={accordionHeader} eventKey="2" className="b0">
                           <p>Donec congue sagittis mi sit amet tincidunt. Quisque sollicitudin massa vel erat tincidunt blandit. Curabitur quis leo nulla. Phasellus faucibus placerat luctus. Integer fermentum molestie massa at congue. Quisque quis quam dictum diam
                              volutpat adipiscing.</p>
                           <p>Proin ut urna enim.</p>
                           <div className="pull-right">
                              <small className="text-muted mr">Was this information useful?</small>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-up text-muted"></em>
                              </button>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-down text-muted"></em>
                              </button>
                           </div>
                        </Panel>
                        <Panel header={accordionHeader} eventKey="3" className="b0">
                           <p>Donec congue sagittis mi sit amet tincidunt. Quisque sollicitudin massa vel erat tincidunt blandit. Curabitur quis leo nulla. Phasellus faucibus placerat luctus. Integer fermentum molestie massa at congue. Quisque quis quam dictum diam
                              volutpat adipiscing.</p>
                           <p>Proin ut urna enim.</p>
                           <div className="pull-right">
                              <small className="text-muted mr">Was this information useful?</small>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-up text-muted"></em>
                              </button>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-down text-muted"></em>
                              </button>
                           </div>
                        </Panel>
                        <Panel header={accordionHeader} eventKey="4" className="b0">
                           <p>Donec congue sagittis mi sit amet tincidunt. Quisque sollicitudin massa vel erat tincidunt blandit. Curabitur quis leo nulla. Phasellus faucibus placerat luctus. Integer fermentum molestie massa at congue. Quisque quis quam dictum diam
                              volutpat adipiscing.</p>
                           <p>Proin ut urna enim.</p>
                           <div className="pull-right">
                              <small className="text-muted mr">Was this information useful?</small>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-up text-muted"></em>
                              </button>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-down text-muted"></em>
                              </button>
                           </div>
                        </Panel>
                        <Panel header={accordionHeader} eventKey="5" className="b0">
                           <p>Donec congue sagittis mi sit amet tincidunt. Quisque sollicitudin massa vel erat tincidunt blandit. Curabitur quis leo nulla. Phasellus faucibus placerat luctus. Integer fermentum molestie massa at congue. Quisque quis quam dictum diam
                              volutpat adipiscing.</p>
                           <p>Proin ut urna enim.</p>
                           <div className="pull-right">
                              <small className="text-muted mr">Was this information useful?</small>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-up text-muted"></em>
                              </button>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-down text-muted"></em>
                              </button>
                           </div>
                        </Panel>
                   </Accordion>
                   <h4 className="mv-lg pv-lg text-dark">Seller Questions</h4>
                   <Accordion>
                        <Panel header={accordionHeader} eventKey="1" className="b0">
                           <p>Donec congue sagittis mi sit amet tincidunt. Quisque sollicitudin massa vel erat tincidunt blandit. Curabitur quis leo nulla. Phasellus faucibus placerat luctus. Integer fermentum molestie massa at congue. Quisque quis quam dictum diam
                              volutpat adipiscing.</p>
                           <p>Proin ut urna enim.</p>
                           <div className="pull-right">
                              <small className="text-muted mr">Was this information useful?</small>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-up text-muted"></em>
                              </button>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-down text-muted"></em>
                              </button>
                           </div>
                        </Panel>
                        <Panel header={accordionHeader} eventKey="2" className="b0">
                           <p>Donec congue sagittis mi sit amet tincidunt. Quisque sollicitudin massa vel erat tincidunt blandit. Curabitur quis leo nulla. Phasellus faucibus placerat luctus. Integer fermentum molestie massa at congue. Quisque quis quam dictum diam
                              volutpat adipiscing.</p>
                           <p>Proin ut urna enim.</p>
                           <div className="pull-right">
                              <small className="text-muted mr">Was this information useful?</small>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-up text-muted"></em>
                              </button>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-down text-muted"></em>
                              </button>
                           </div>
                        </Panel>
                        <Panel header={accordionHeader} eventKey="3" className="b0">
                           <p>Donec congue sagittis mi sit amet tincidunt. Quisque sollicitudin massa vel erat tincidunt blandit. Curabitur quis leo nulla. Phasellus faucibus placerat luctus. Integer fermentum molestie massa at congue. Quisque quis quam dictum diam
                              volutpat adipiscing.</p>
                           <p>Proin ut urna enim.</p>
                           <div className="pull-right">
                              <small className="text-muted mr">Was this information useful?</small>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-up text-muted"></em>
                              </button>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-down text-muted"></em>
                              </button>
                           </div>
                        </Panel>
                        <Panel header={accordionHeader} eventKey="4" className="b0">
                           <p>Donec congue sagittis mi sit amet tincidunt. Quisque sollicitudin massa vel erat tincidunt blandit. Curabitur quis leo nulla. Phasellus faucibus placerat luctus. Integer fermentum molestie massa at congue. Quisque quis quam dictum diam
                              volutpat adipiscing.</p>
                           <p>Proin ut urna enim.</p>
                           <div className="pull-right">
                              <small className="text-muted mr">Was this information useful?</small>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-up text-muted"></em>
                              </button>
                              <button type="button" className="btn btn-default btn-xs">
                                 <em className="fa fa-thumbs-down text-muted"></em>
                              </button>
                           </div>
                        </Panel>
                   </Accordion>
                </div>
            </ContentWrapper>
            );
    }

}

export default Faq;
