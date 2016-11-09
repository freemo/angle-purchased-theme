import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table } from 'react-bootstrap';

class ForumTopics extends React.Component {

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div className="pull-right"><a href="" className="btn btn-sm btn-default text-sm">&lt; back</a>
                    </div>Forum - Topics
                    <small>Category ID: 1324</small>
                </div>
                <Panel>
                    <Table className="table table-striped">
                        <thead>
                            <tr>
                                <th style={{width: "50%"}} className="h4">Welcome</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h4>
                                  <a href="">
                                     <strong>Powered by AngularJS</strong>
                                  </a>
                               </h4>
                                    <div className="text-muted text-sm">
                                        <span>
                                     <strong className="mr-sm">17</strong>views</span>
                                        <span className="mh-sm"></span>
                                        <span>
                                     <strong className="mr-sm">19</strong>comments</span>
                                    </div>
                                </td>
                                <td className="text-right hidden-xs hidden-sm">
                                    <div className="text-muted">
                                        <small className="mr-sm">Started by</small><a href="" className="mr-sm">Victoria West</a>
                                        <small>on March 10, 2015</small>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                  <a href="">
                                     <strong>How to create an AngularJS admin GUI?</strong>
                                  </a>
                               </h4>
                                    <div className="text-muted text-sm">
                                        <span>
                                     <strong className="mr-sm">7</strong>views</span>
                                        <span className="mh-sm"></span>
                                        <span>
                                     <strong className="mr-sm">13</strong>comments</span>
                                    </div>
                                </td>
                                <td className="text-right hidden-xs hidden-sm">
                                    <div className="text-muted">
                                        <small className="mr-sm">Started by</small><a href="" className="mr-sm">Olivia Reynolds</a>
                                        <small>on March 10, 2015</small>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                  <a href="">
                                     <strong>Issue found..</strong>
                                  </a>
                               </h4>
                                    <div className="text-muted text-sm">
                                        <span>
                                     <strong className="mr-sm">13</strong>views</span>
                                        <span className="mh-sm"></span>
                                        <span>
                                     <strong className="mr-sm">500</strong>comments</span>
                                    </div>
                                </td>
                                <td className="text-right hidden-xs hidden-sm">
                                    <div className="text-muted">
                                        <small className="mr-sm">Started by</small><a href="" className="mr-sm">Michelle Lane</a>
                                        <small>on March 10, 2015</small>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                  <a href="">
                                     <strong>Share your application</strong>
                                  </a>
                               </h4>
                                    <div className="text-muted text-sm">
                                        <span>
                                     <strong className="mr-sm">98</strong>views</span>
                                        <span className="mh-sm"></span>
                                        <span>
                                     <strong className="mr-sm">1900</strong>comments</span>
                                    </div>
                                </td>
                                <td className="text-right hidden-xs hidden-sm">
                                    <div className="text-muted">
                                        <small className="mr-sm">Started by</small><a href="" className="mr-sm">Derek Jensen</a>
                                        <small>on March 10, 2015</small>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                  <a href="">
                                     <strong>Angle - Angular Admin Template</strong>
                                  </a>
                               </h4>
                                    <div className="text-muted text-sm">
                                        <span>
                                     <strong className="mr-sm">17</strong>views</span>
                                        <span className="mh-sm"></span>
                                        <span>
                                     <strong className="mr-sm">19</strong>comments</span>
                                    </div>
                                </td>
                                <td className="text-right hidden-xs hidden-sm">
                                    <div className="text-muted">
                                        <small className="mr-sm">Started by</small><a href="" className="mr-sm">Colleen Cole</a>
                                        <small>on March 10, 2015</small>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                  <a href="">
                                     <strong>Take a breakfast and happy coding</strong>
                                  </a>
                               </h4>
                                    <div className="text-muted text-sm">
                                        <span>
                                     <strong className="mr-sm">31</strong>view</span>
                                        <span className="mh-sm"></span>
                                        <span>
                                     <strong className="mr-sm">190</strong>comments</span>
                                    </div>
                                </td>
                                <td className="text-right hidden-xs hidden-sm">
                                    <div className="text-muted">
                                        <small className="mr-sm">Started by</small><a href="" className="mr-sm">Charlene Barrett</a>
                                        <small>on March 10, 2015</small>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                  <a href="">
                                     <strong>Sed vitae nisi eget metus semper congue.</strong>
                                  </a>
                               </h4>
                                    <div className="text-muted text-sm">
                                        <span>
                                     <strong className="mr-sm">27</strong>views</span>
                                        <span className="mh-sm"></span>
                                        <span>
                                     <strong className="mr-sm">419</strong>comments</span>
                                    </div>
                                </td>
                                <td className="text-right hidden-xs hidden-sm">
                                    <div className="text-muted">
                                        <small className="mr-sm">Started by</small><a href="" className="mr-sm">Austin Montgomery</a>
                                        <small>on March 10, 2015</small>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Panel>
            </ContentWrapper>
            );
    }

}

export default ForumTopics;
