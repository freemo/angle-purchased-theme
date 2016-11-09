import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

class Plans extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <ContentWrapper>
                <div className="container container-md pv-lg">
                   <div className="text-center mb-lg pb-lg">
                      <div className="h2 text-bold">Launch your business today</div>
                      <p>Select the plan in different options that best fit your project</p>
                   </div>
                </div>
                <div className="container container-md">
                   { /* START PLAN TABLE */ }
                   <Row>
                      { /* PLAN */ }
                      <Col md={4}>
                         <div className="plan">
                            <h3 className="plan-header">Single</h3>
                            <div className="plan-price">
                               <div className="text-lg"><sup><small>$</small></sup>18
                                  { /* span.plan-period /mo */ }
                               </div>
                            </div>
                            <ul className="plan-features">
                               <li>
                                  <em className="fa fa-check"></em>Unlimited Styles</li>
                               <li>
                                  <em className="fa fa-check"></em>RTL &amp; Translation</li>
                               <li>
                                  <em className="fa fa-check"></em>Customer support</li>
                               <li>
                                  <em className="fa fa-check"></em>Free Updates</li>
                               <li>
                                  <em className="fa fa-check"></em>Limited to one client</li>
                               <li>
                                  <em className="fa fa-times plan-feature-disable"></em>Multiple installation</li>
                               <li>
                                  <em className="fa fa-times plan-feature-disable"></em>Not ready for resale</li>
                            </ul>
                            <hr/>
                            <div className="text-center"><a href="" className="btn btn-info">Choose</a>
                            </div>
                         </div>
                      </Col>
                      { /* PLAN */ }
                      <Col md={4}>
                         <div className="plan">
                            <h3 className="plan-header">Multiple</h3>
                            <div className="plan-price">
                               <div className="text-lg"><sup><small>$</small></sup>60
                                  { /* span.plan-period /mo */ }
                               </div>
                            </div>
                            <ul className="plan-features">
                               <li>
                                  <em className="fa fa-check"></em>Unlimited Styles</li>
                               <li>
                                  <em className="fa fa-check"></em>RTL &amp; Translation</li>
                               <li>
                                  <em className="fa fa-check"></em>Customer support</li>
                               <li>
                                  <em className="fa fa-check"></em>Free Updates</li>
                               <li>
                                  <em className="fa fa-check"></em>Unlimited clients</li>
                               <li>
                                  <em className="fa fa-check"></em>Multiple installation</li>
                               <li>
                                  <em className="fa fa-times plan-feature-disable"></em>Not ready for resale</li>
                            </ul>
                            <hr/>
                            <p className="plan-description">The perfect price for all your project solutions.</p>
                            <div className="text-center"><a href="" className="btn btn-info">Choose</a>
                            </div>
                         </div>
                      </Col>
                      { /* PLAN */ }
                      <Col md={4}>
                         <div className="plan">
                            <h3 className="plan-header">Extended</h3>
                            <div className="plan-price">
                               <div className="text-lg"><sup><small>$</small></sup>900
                                  { /* span.plan-period /mo */ }
                               </div>
                            </div>
                            <ul className="plan-features">
                               <li>
                                  <em className="fa fa-check"></em>Unlimited Styles</li>
                               <li>
                                  <em className="fa fa-check"></em>RTL &amp; Translation</li>
                               <li>
                                  <em className="fa fa-check"></em>Customer support</li>
                               <li>
                                  <em className="fa fa-check"></em>Free Updates</li>
                               <li>
                                  <em className="fa fa-check"></em>Unlimited clients</li>
                               <li>
                                  <em className="fa fa-check"></em>Multiple installation</li>
                               <li>
                                  <em className="fa fa-check"></em>Ready for resale</li>
                            </ul>
                            <hr/>
                            <div className="text-center"><a href="" className="btn btn-info">Choose</a>
                            </div>
                         </div>
                         <p className="text-center text-muted">
                            <small>* Subject to specific license terms. Price and features listed for demo only.</small>
                         </p>
                      </Col>
                   </Row>
                   { /* END PLAN TABLE */ }
                   <div className="text-center mv-lg pv-lg">
                      <div className="h2 text-bold">Native styles</div>
                      <p>Example plan table using panel for demonstration</p>
                   </div>
                   { /* START PLAN TABLE */ }
                   <Row>
                      { /* PLAN */ }
                      <Col md={4}>
                         <div className="panel b">
                            <div className="panel-body text-center bb">
                               <div className="text-bold">STARTER</div>
                               <h3 className="mv-lg"><sup>$</sup>
                                  <span className="text-lg">17</span>
                                  <span className="text-xs">/mo</span>
                               </h3>
                            </div>
                            <div className="panel-body">
                               <p>
                                  <em className="fa fa-check fa-fw text-green mr"></em>
                                  <span>Unlimited Styles</span>
                               </p>
                               <p>
                                  <em className="fa fa-check fa-fw text-green mr"></em>
                                  <span>RTL &amp; Translation</span>
                               </p>
                               <p>
                                  <em className="fa fa-check fa-fw text-green mr"></em>
                                  <span>Customer support</span>
                               </p>
                               <p>
                                  <em className="fa fa-check fa-fw text-green mr"></em>
                                  <span>Free Updates</span>
                               </p>
                               <p>
                                  <em className="fa fa-check fa-fw text-green mr"></em>
                                  <span>Limited to one client</span>
                               </p>
                               <p>
                                  <em className="fa fa-times fa-fw text-warning mr"></em>
                                  <span>Multiple installation</span>
                               </p>
                               <p>
                                  <em className="fa fa-times fa-fw text-warning mr"></em>
                                  <span>Not ready for resale</span>
                               </p>
                            </div>
                            <div className="panel-body text-center"><a href="" className="btn btn-default btn-lg">Select this plan</a>
                            </div>
                         </div>
                      </Col>
                      { /* PLAN */ }
                      <Col md={4}>
                         <div className="panel b">
                            <div className="panel-body text-center bg-green">
                               <div className="text-bold">IDEAL</div>
                               <h3 className="mv-lg"><sup>$</sup>
                                  <span className="text-lg">49</span>
                                  <span className="text-xs">/mo</span>
                               </h3>
                            </div>
                            <div className="panel-body">
                               <p>
                                  <em className="fa fa-check fa-fw text-green mr"></em>
                                  <span>Unlimited Styles</span>
                               </p>
                               <p>
                                  <em className="fa fa-check fa-fw text-green mr"></em>
                                  <span>RTL &amp; Translation</span>
                               </p>
                               <p>
                                  <em className="fa fa-check fa-fw text-green mr"></em>
                                  <span>Customer support</span>
                               </p>
                               <p>
                                  <em className="fa fa-check fa-fw text-green mr"></em>
                                  <span>Free Updates</span>
                               </p>
                               <p>
                                  <em className="fa fa-check fa-fw text-green mr"></em>
                                  <span>Limited to one client</span>
                               </p>
                               <p>
                                  <em className="fa fa-check fa-fw text-green mr"></em>
                                  <span>Multiple installation</span>
                               </p>
                               <p>
                                  <em className="fa fa-times fa-fw text-warning mr"></em>
                                  <span>Not ready for resale</span>
                               </p>
                            </div>
                            <div className="panel-body text-center"><a href="" className="btn btn-danger btn-lg">Select this plan</a>
                            </div>
                         </div>
                      </Col>
                      { /* PLAN */ }
                      <Col md={4}>
                         <div className="panel b">
                            <div className="panel-body text-center bb">
                               <div className="text-bold">PREMIUM</div>
                               <h3 className="mv-lg"><sup>$</sup>
                                  <span className="text-lg">95</span>
                                  <span className="text-xs">/mo</span>
                               </h3>
                            </div>
                            <div className="panel-body">
                               <p>
                                  <em className="fa fa-check fa-fw text-green mr"></em>
                                  <span>Unlimited Styles</span>
                               </p>
                               <p>
                                  <em className="fa fa-check fa-fw text-green mr"></em>
                                  <span>RTL &amp; Translation</span>
                               </p>
                               <p>
                                  <em className="fa fa-check fa-fw text-green mr"></em>
                                  <span>Customer support</span>
                               </p>
                               <p>
                                  <em className="fa fa-check fa-fw text-green mr"></em>
                                  <span>Free Updates</span>
                               </p>
                               <p>
                                  <em className="fa fa-check fa-fw text-green mr"></em>
                                  <span>Limited to one client</span>
                               </p>
                               <p>
                                  <em className="fa fa-check fa-fw text-green mr"></em>
                                  <span>Multiple installation</span>
                               </p>
                               <p>
                                  <em className="fa fa-check fa-fw text-green mr"></em>
                                  <span>Ready for resale*</span>
                               </p>
                            </div>
                            <div className="panel-body text-center"><a href="" className="btn btn-default btn-lg">Select this plan</a>
                            </div>
                         </div>
                      </Col>
                   </Row>
                   <p className="text-center text-muted">
                      <small>* Subject to specific license terms. Price and features listed for demo only.</small>
                   </p>
                </div>
            </ContentWrapper>
            );
    }

}

export default Plans;
