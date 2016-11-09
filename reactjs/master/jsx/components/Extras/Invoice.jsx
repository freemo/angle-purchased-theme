import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table } from 'react-bootstrap';

class Invoice extends React.Component {

    render() {
        return (
            <ContentWrapper>
                <h3>
                   <Button bsStyle="primary" className="pull-right">
                      <em className="fa fa-plus-circle fa-fw mr-sm"></em>New Invoice</Button>Invoice</h3>
                <Panel>
                    <Button bsStyle="default" className="pull-right btn-sm">Copy this invoice</Button>
                    <h3 className="mt0">Invoice 00004879</h3>
                    <hr/>
                    <Row className="mb-lg">
                        <Col lg={ 4 } xs={ 6 } className="br pv">
                            <Row>
                                <Col md={ 2 } className="text-center visible-md visible-lg">
                                    <em className="fa fa-plane fa-4x text-muted"></em>
                                </Col>
                                <Col md={ 10 }>
                                    <h4>Bill Mitchelle</h4>
                                    <address></address>Nowhere 1024
                                    <br/>Happy St., 50487
                                    <br/>Neverland
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={ 4 } xs={ 6 } className="br pv">
                            <Row>
                                <Col md={ 2 } className="text-center visible-md visible-lg">
                                    <em className="fa fa-truck fa-4x text-muted"></em>
                                </Col>
                                <Col md={ 10 }>
                                    <h4>Lloyd Gonzales</h4>
                                    <address></address>Basilisa 2145
                                    <br/>Mate, Cliff., 20145
                                    <br/>Moon
                                </Col>
                            </Row>
                        </Col>
                        <div className="clearfix hidden-md hidden-lg">
                            <hr/>
                        </div>
                        <div className="col-lg-4 col-xs-12 pv">
                            <div className="clearfix">
                                <p className="pull-left">INVOICE NO.</p>
                                <p className="pull-right mr">00004879</p>
                            </div>
                            <div className="clearfix">
                                <p className="pull-left">Date</p>
                                <p className="pull-right mr">25/08/2014</p>
                            </div>
                            <div className="clearfix">
                                <p className="pull-left">Due Date</p>
                                <p className="pull-right mr">30/08/2014</p>
                            </div>
                        </div>
                    </Row>
                    <Table className="mb-lg" responsive bordered>
                        <thead>
                            <tr>
                                <th>Item #</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th className="text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1001</td>
                                <td>Iphone 5s - 64Gb</td>
                                <td>3</td>
                                <td>$ 200</td>
                                <td className="text-right">$ 600</td>
                            </tr>
                            <tr>
                                <td>2002</td>
                                <td>Iphone 6s - 128Gb</td>
                                <td>5</td>
                                <td>$ 500</td>
                                <td className="text-right">$ 2500</td>
                            </tr>
                            <tr>
                                <td>3010</td>
                                <td>Ipad 11z - 512Gb</td>
                                <td>1</td>
                                <td>$ 650</td>
                                <td className="text-right">$ 650</td>
                            </tr>
                            <tr>
                                <td>3009</td>
                                <td>iMac ProRetina 17</td>
                                <td>6</td>
                                <td>$ 1100</td>
                                <td className="text-right">$ 6600</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Row>
                        <Col smOffset={ 8 } sm={ 4 } className="pv">
                            <div className="clearfix">
                                <p className="pull-left">Subtotal</p>
                                <p className="pull-right mr">$ 10300</p>
                            </div>
                            <div className="clearfix">
                                <p className="pull-left">Tax (21%)</p>
                                <p className="pull-right mr">$ 2700</p>
                            </div>
                            <div className="clearfix">
                                <p className="pull-left h3">GRAND TOTAL</p>
                                <p className="pull-right mr h3">$ 13000</p>
                            </div>
                        </Col>
                    </Row>
                    <hr className="hidden-print" />
                    <div className="clearfix">
                        <Button bsStyle="info" className="pull-left mr">Edit</Button>
                        <Button bsStyle="default" onClick={() => { window.print() }} className="pull-left">Print</Button>
                        <Button bsStyle="success" className="pull-right">Send Invoice</Button>
                    </div>
                </Panel>
            </ContentWrapper>
            );
    }

}

export default Invoice;
