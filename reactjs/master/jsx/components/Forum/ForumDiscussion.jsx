import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table, Collapse } from 'react-bootstrap';


class ForumDiscussion extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            replyCollapse: false
        };
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div className="pull-right"><a href="" className="btn btn-sm btn-default text-sm">&lt; back</a>
                    </div>Forum - Discussion
                    <small>Topic ID: 999</small>
                </div>
                <Panel>
                    <Table striped>
                        <thead>
                            <tr>
                                <th colSpan="2" className="h4">Powered by AngularJS
                                    <span className="mh">-</span>
                                    <small>by
                                  <a href="">
                                     <strong>Glen Dunn</strong>
                                  </a>on
                                  <em>March 10, 2015</em>
                               </small>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">
                                    <a href="">
                                        <strong>Leslie Stewart</strong>
                                    </a>
                                </td>
                                <td className="text-right">on
                                    <em>March 10, 2015 at 12:00</em>
                                </td>
                            </tr>
                            <tr>
                                <td style={{width: "15%"}} className="text-center">
                                    <div className="mt">
                                        <a href="">
                                            <img src="img/user/01.jpg" alt="avatar" className="img-circle thumb64" />
                                        </a>
                                    </div>
                                    <small>98 Posts</small>
                                    <br/>
                                    <small>Since 10/01/2010</small>
                                </td>
                                <td>
                                    <p>Duis ut urna diam, ac sagittis neque. Nunc vitae ipsum elit, non lacinia dui. Curabitur porttitor fermentum dapibus. Vivamus feugiat faucibus
                                        enim. Quisque vehicula rutrum justo, sed aliquam sem fringilla nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <div className="text-right">
                                        <em>I am me</em>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">
                                    <a href="">
                                        <strong>Terrence Moreno</strong>
                                    </a>
                                </td>
                                <td className="text-right">on
                                    <em>March 25, 2015 at 19:30</em>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">
                                    <div className="mt">
                                        <a href="">
                                            <img src="img/user/02.jpg" alt="avatar" className="img-circle thumb64" />
                                        </a>
                                    </div>
                                    <small>87 Posts</small>
                                    <br/>
                                    <small>Since 10/01/2010</small>
                                </td>
                                <td>
                                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed elementum lorem dolor, id fermentum metus.
                                        In massa justo, pellentesque a porttitor sit amet, imperdiet sed nisl.</p>
                                    <p>Praesent a rhoncus magna. Integer ligula mauris, iaculis pellentesque consequat non, semper sit amet velit.</p>
                                    <div className="text-right">
                                        <em>Signed by some user</em>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">
                                    <a href="">
                                        <strong>Robin Richardson</strong>
                                    </a>
                                </td>
                                <td className="text-right">on
                                    <em>May 11, 2015 at 15:00</em>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">
                                    <div className="mt">
                                        <a href="">
                                            <img src="img/user/03.jpg" alt="avatar" className="img-circle thumb64" />
                                        </a>
                                    </div>
                                    <small>333 Posts</small>
                                    <br/>
                                    <small>Since 10/01/2010</small>
                                </td>
                                <td>
                                    <p>Suspendisse risus nisl, iaculis at rhoncus sed, ultrices sed lacus. Nullam rutrum convallis lacus non mattis. Fusce at enim eget nibh convallis
                                        elementum. Fusce quis nibh id elit pharetra ultricies eget auctor nibh. Nunc posuere eleifend lobortis. Aenean risus nulla, aliquam sed
                                        aliquam vitae, ultricies non elit. Cras aliquam mauris massa. Duis eleifend rutrum purus, sit amet rutrum lacus facilisis id. Class aptent
                                        taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec et lacus velit. Nullam lobortis consectetur hendrerit.</p>
                                    <p>Mauris id augue id elit convallis accumsan. Ut tempus libero vel metus pellentesque commodo. Cras lorem magna, viverra ac facilisis vitae,
                                        porttitor sed massa. Fusce quis nibh id elit pharetra ultricies eget auctor nibh. Aenean fringilla porttitor elit, sit amet vestibulum
                                        magna viverra a. Curabitur imperdiet consequat hendrerit. Cras aliquam mauris massa.</p>
                                    <div className="text-right">
                                        <em>Signed by some user</em>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">
                                    <a href="">
                                        <strong>Salvador Stone</strong>
                                    </a>
                                </td>
                                <td className="text-right">on
                                    <em>Apr 13, 2015 at 10:10</em>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">
                                    <div className="mt">
                                        <a href="">
                                            <img src="img/user/04.jpg" alt="avatar" className="img-circle thumb64" />
                                        </a>
                                    </div>
                                    <small>123 Posts</small>
                                    <br/>
                                    <small>Since 10/01/2010</small>
                                </td>
                                <td>
                                    <p>Praesent lacus nisi, hendrerit ac dignissim a, accumsan at purus. Maecenas neque eros, viverra vitae cursus sit amet, varius ut ante. Nam
                                        eget risus tellus. Sed ac nulla risus, nec tempus massa.</p>
                                    <div className="text-right">
                                        <em>Signed by some user</em>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">
                                    <a href="">
                                        <strong>Alicia Garrett</strong>
                                    </a>
                                </td>
                                <td className="text-right">on
                                    <em>Apr 13, 2015 at 10:10</em>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">
                                    <div className="mt">
                                        <a href="">
                                            <img src="img/user/05.jpg" alt="avatar" className="img-circle thumb64" />
                                        </a>
                                    </div>
                                    <small>6588 Posts</small>
                                    <br/>
                                    <small>Since 10/01/2010</small>
                                </td>
                                <td>
                                    <p>Suspendisse velit erat, vulputate sit amet feugiat a, lobortis nec felis. Cras et dui non erat ornare ornare eget non sapien. Curabitur ipsum
                                        arcu, molestie a adipiscing consequat, cursus in leo. Nam in purus in lacus dictum pharetra sit amet ac arcu. Vestibulum rutrum venenatis
                                        pretium. Sed accumsan adipiscing enim. Quisque sed tortor at ligula pharetra pulvinar. Donec gravida metus dictum sapien auctor eu egestas
                                        mauris hendrerit. Duis nec leo ipsum, a dignissim libero. Nam blandit fringilla faucibus.</p>
                                    <div className="text-right">
                                        <em>Signed by some user</em>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Panel>
                <div className="text-center mb-lg">
                    <Button onClick={ ()=> this.setState({ replyCollapse: !this.state.replyCollapse })} bsStyle="primary">Reply to this topic</Button>
                </div>
                <Collapse in={this.state.replyCollapse}>
                    <div>
                        <div className="text-center">
                            <small>Make sure you have read the <a href="">forum rules </a>before posting</small>
                        </div>
                        <Row>
                            <Col md={ 8 } mdOffset={ 2 }>
                                <form action="/" method="post" className="form-horizontal">
                                    <div className="form-group">
                                        <div className="col-md-12">
                                            <textarea id="reply-message" name="reply-message" rows="5" placeholder="Type your answer..." className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-12 text-center">
                                            <Button bsStyle="primary" bsSize="small">Post Answer</Button>
                                        </div>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </Collapse>
            </ContentWrapper>
            );
    }

}

export default ForumDiscussion;
