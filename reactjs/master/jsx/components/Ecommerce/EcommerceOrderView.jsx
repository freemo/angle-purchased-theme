import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Alert, Table } from 'react-bootstrap';

class EcommerceOrderView extends React.Component {

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">Order #987654</div>
                <Panel header="Order Information">
                    <Row>
                        <Col md={ 6 }>
                            <p className="lead bb">Details</p>
                            <form className="form-horizontal p-20">
                                <div className="form-group">
                                    <div className="col-sm-4">Order ID:</div>
                                    <div className="col-sm-8">
                                        <strong>987654</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">Purchased On:</div>
                                    <div className="col-sm-8">
                                        <strong>03/11/2015 10:10</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">Client Name:</div>
                                    <div className="col-sm-8">
                                        <strong>Addison Nichols</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">Items:</div>
                                    <div className="col-sm-8">
                                        <strong>547</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">Amount:</div>
                                    <div className="col-sm-8">
                                        <strong>$515.20</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">Shipment:</div>
                                    <div className="col-sm-8">
                                        <strong>04/10/2015</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">Status</div>
                                    <div className="col-sm-8">
                                        <div className="label label-info">Shipped</div>
                                    </div>
                                </div>
                            </form>
                        </Col>
                        <Col md={ 6 }>
                            <p className="lead bb">Client</p>
                            <form className="form-horizontal p-20">
                                <div className="form-group">
                                    <div className="col-sm-4">Client ID:</div>
                                    <div className="col-sm-8">
                                        <strong>#32654</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">Name:</div>
                                    <div className="col-sm-8">
                                        <strong>Addison Nichols</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">Email:</div>
                                    <div className="col-sm-8">
                                        <strong>addisong@mail.com</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">Company:</div>
                                    <div className="col-sm-8">
                                        <strong>Addison co.</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">Phone:</div>
                                    <div className="col-sm-8">
                                        <strong>(123) 123 456465</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">Status</div>
                                    <div className="col-sm-8">
                                        <div className="label label-success">Active</div>
                                    </div>
                                </div>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 6 }>
                            <p className="lead bb">Billing Address</p>
                            <form className="form-horizontal p-20">
                                <div className="form-group">
                                    <div className="col-sm-4">First Name</div>
                                    <div className="col-sm-8">
                                        <strong>John</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">Last Name:</div>
                                    <div className="col-sm-8">
                                        <strong>Johnson</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">Company:</div>
                                    <div className="col-sm-8">
                                        <strong>John co.</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">Address:</div>
                                    <div className="col-sm-8">
                                        <strong>2125 Chesterfield</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">City:</div>
                                    <div className="col-sm-8">
                                        <strong>San Francisco</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">State</div>
                                    <div className="col-sm-8">
                                        <strong>N/a</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">ZIP/Post Code</div>
                                    <div className="col-sm-8">
                                        <strong>1324</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">Country</div>
                                    <div className="col-sm-8">
                                        <strong>Neverland</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">Phone</div>
                                    <div className="col-sm-8">
                                        <strong>(123) 132 456789</strong>
                                    </div>
                                </div>
                            </form>
                        </Col>
                        <Col md={ 6 }>
                            <p className="lead bb">Shipping Address</p>
                            <form className="form-horizontal p-20">
                                <div className="form-group">
                                    <div className="col-sm-4">First Name</div>
                                    <div className="col-sm-8">
                                        <strong>John</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">Last Name:</div>
                                    <div className="col-sm-8">
                                        <strong>Johnson</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">Company:</div>
                                    <div className="col-sm-8">
                                        <strong>John co.</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">Address:</div>
                                    <div className="col-sm-8">
                                        <strong>2125 Chesterfield</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">City:</div>
                                    <div className="col-sm-8">
                                        <strong>San Francisco</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">State</div>
                                    <div className="col-sm-8">
                                        <strong>N/a</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">ZIP/Post Code</div>
                                    <div className="col-sm-8">
                                        <strong>1324</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">Country</div>
                                    <div className="col-sm-8">
                                        <strong>Neverland</strong>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4">Phone</div>
                                    <div className="col-sm-8">
                                        <strong>(123) 132 456789</strong>
                                    </div>
                                </div>
                            </form>
                        </Col>
                    </Row>
                    <Alert bsStyle="warning">
                        <em className="fa fa-exclamation-circle fa-lg fa-fw"></em>Shipping address is different than billing address</Alert>
                </Panel>
                <Panel header="Products in order">
                    <Table responsive hover bordered striped>
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Tax</th>
                                <th className="text-center">Status</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="">Product #123</a>
                                </td>
                                <td>$ 100.00</td>
                                <td>5</td>
                                <td>21%</td>
                                <td className="text-center">
                                    <span className="label label-success">In Stock</span>
                                </td>
                                <td>$ 605.00</td>
                            </tr>
                            <tr>
                                <td><a href="">Product #123</a>
                                </td>
                                <td>$ 100.00</td>
                                <td>5</td>
                                <td>21%</td>
                                <td className="text-center">
                                    <span className="label label-success">In Stock</span>
                                </td>
                                <td>$ 605.00</td>
                            </tr>
                            <tr>
                                <td><a href="">Product #123</a>
                                </td>
                                <td>$ 100.00</td>
                                <td>5</td>
                                <td>21%</td>
                                <td className="text-center">
                                    <span className="label label-warning">N/A</span>
                                </td>
                                <td>$ 605.00</td>
                            </tr>
                            <tr>
                                <td><a href="">Product #123</a>
                                </td>
                                <td>$ 100.00</td>
                                <td>5</td>
                                <td>21%</td>
                                <td className="text-center">
                                    <span className="label label-danger">Out Stock</span>
                                </td>
                                <td>$ 605.00</td>
                            </tr>
                            <tr>
                                <td><a href="">Product #123</a>
                                </td>
                                <td>$ 100.00</td>
                                <td>5</td>
                                <td>21%</td>
                                <td className="text-center">
                                    <span className="label label-success">In Stock</span>
                                </td>
                                <td>$ 605.00</td>
                            </tr>
                        </tbody>
                    </Table>
                </Panel>
            </ContentWrapper>
            );
    }

}

export default EcommerceOrderView;
