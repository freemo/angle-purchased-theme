import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Accordion, Tabs, Tab, Well, Jumbotron } from 'react-bootstrap';

class EcommerceCheckout extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <ContentWrapper>
                <div className="row">
                   <div className="col-md-3">
                      <div className="panel b">
                         <div className="panel-heading bb">
                            <h4 className="panel-title">Order Summnary</h4>
                         </div>
                         <div className="panel-body bt">
                            <h4 className="b0">Order #65487</h4>
                         </div>
                         <table className="table">
                            <tbody>
                               <tr>
                                  <td>Subtotal</td>
                                  <td>
                                     <div className="text-right text-bold">$400</div>
                                  </td>
                               </tr>
                               <tr>
                                  <td>Estimated Tax</td>
                                  <td>
                                     <div className="text-right text-bold">$1.44</div>
                                  </td>
                               </tr>
                               <tr>
                                  <td>Shiping</td>
                                  <td>
                                     <div className="text-right text-bold">$5</div>
                                  </td>
                               </tr>
                            </tbody>
                         </table>
                         <div className="panel-body">
                            <div className="clearfix">
                               <div className="pull-right text-right">
                                  <div className="text-bold">$406.44</div>
                                  <div className="text-sm">USD</div>
                               </div>
                               <div className="pull-left text-bold text-dark">ORDER TOTAL</div>
                            </div>
                         </div>
                         <div className="panel-body">
                            <p>
                               <button type="button" className="btn btn-primary btn-block">EXPRESS CHECKOUT</button>
                            </p>
                            <small className="text-muted">* To use this method you must be registered first</small>
                         </div>
                      </div>
                   </div>
                   <div className="col-md-9">
                      <div className="container-md">
                         { /* Checkout Process */ }
                         <form action="" method="post" noValidate>

                            <Accordion>
                               { /* Checkout Method */ }
                               <Panel header="1. Checkout Method" eventKey="1">


                                        <div className="row">
                                           <div className="col-md-6">
                                              <p>
                                                 <strong>REGISTER AND SAVE TIME!</strong>
                                              </p>
                                              <p className="mb0">Fast and simple check out</p>
                                              <p>Quick access to order history</p>
                                              <div className="mv-lg">
                                                 <button type="button" className="btn btn-primary">Register</button>
                                              </div>
                                              <hr/>
                                              <button type="button" className="btn btn-default">Checkout as Guest</button>
                                           </div>
                                           <div className="col-md-6">
                                              <div className="form-group">
                                                 <p>Already a Member?</p>
                                              </div>
                                              <div className="form-group">
                                                 <input type="text" name="login-name" required="" placeholder="Email Address" className="form-control" />
                                              </div>
                                              <div className="form-group">
                                                 <input type="text" name="login-password" required="" placeholder="Password" className="form-control" />
                                              </div>
                                              <p><a href="#">Forgot password?</a>
                                              </p>
                                              <button type="button" className="btn btn-primary">Login</button>
                                           </div>
                                        </div>


                               </Panel>
                               { /* Billing Information */ }
                               <Panel header="2. Billing Information" eventKey="2">


                                        <div className="row">
                                           <div className="col-lg-6">
                                              <div className="form-group">
                                                 <label>First Name*</label>
                                                 <input type="text" name="checkout-name" required="" className="form-control" />
                                              </div>
                                              <div className="form-group">
                                                 <label>Company</label>
                                                 <input type="text" name="checkout-company" className="form-control" />
                                              </div>
                                           </div>
                                           <div className="col-lg-6">
                                              <div className="form-group">
                                                 <label>Last Name*</label>
                                                 <input type="text" name="checkout-lastname" required="" className="form-control" />
                                              </div>
                                              <div className="form-group">
                                                 <label>Email Address*</label>
                                                 <input type="text" name="checkout-email" required="" className="form-control" />
                                              </div>
                                           </div>
                                        </div>
                                        <div className="row">
                                           <div className="col-lg-12">
                                              <div className="form-group">
                                                 <label>Address</label>
                                                 <input type="text" name="checkout-address" required="" className="form-control" />
                                              </div>
                                           </div>
                                        </div>
                                        <div className="row">
                                           <div className="col-lg-6">
                                              <div className="form-group">
                                                 <label>City*</label>
                                                 <input type="text" name="checkout-city" required="" className="form-control" />
                                              </div>
                                              <div className="form-group">
                                                 <label>Zip/Postal Code*</label>
                                                 <input type="text" name="checkout-zip" required="" className="form-control" />
                                              </div>
                                              <div className="form-group">
                                                 <label>Telephone*</label>
                                                 <input type="text" name="checkout-telephone" required="" className="form-control" />
                                              </div>
                                           </div>
                                           <div className="col-lg-6">
                                              <div className="form-group">
                                                 <label>State/Province*</label>
                                                 <input type="text" name="checkout-state" required="" className="form-control" />
                                              </div>
                                              <div className="form-group">
                                                 <label>Country*</label>
                                                 <input type="text" name="checkout-country" required="" className="form-control" />
                                              </div>
                                              <div className="form-group">
                                                 <label>Fax</label>
                                                 <input type="text" name="checkout-fax" className="form-control" />
                                              </div>
                                           </div>
                                        </div>
                                        <div className="mv">
                                           <div className="radio c-radio">
                                              <label>
                                                 <input id="chk-guest" type="radio" name="checkout-ship-to" defaultValue="address" />
                                                 <em className="fa fa-check"></em>Ship to this address</label>
                                           </div>
                                           <div className="radio c-radio">
                                              <label>
                                                 <input id="chk-guest" type="radio" name="checkout-ship-to" defaultValue="other" />
                                                 <em className="fa fa-check"></em>Ship to different address</label>
                                           </div>
                                        </div>
                                        <div className="pt clearfix">
                                           <p className="pull-right text-sm"><i>Fields marked with (*) are required</i>
                                           </p>
                                           <div className="pull-left">
                                              <button type="button" className="btn btn-primary">Continue</button>
                                           </div>
                                        </div>


                               </Panel>
                               { /* Shipping Information */ }
                               <Panel header="3. Shipping Information" eventKey="3">


                                        <div className="row">
                                           <div className="col-lg-6">
                                              <div className="form-group">
                                                 <label>First Name*</label>
                                                 <input type="text" name="checkout-ship-name" required="" className="form-control" />
                                              </div>
                                              <div className="form-group">
                                                 <label>Company</label>
                                                 <input type="text" name="checkout-ship-company" className="form-control" />
                                              </div>
                                           </div>
                                           <div className="col-lg-6">
                                              <div className="form-group">
                                                 <label>Last Name*</label>
                                                 <input type="text" name="checkout-ship-lastname" required="" className="form-control" />
                                              </div>
                                              <div className="form-group">
                                                 <label>Email Address*</label>
                                                 <input type="text" name="checkout-ship-email" required="" className="form-control" />
                                              </div>
                                           </div>
                                        </div>
                                        <div className="row">
                                           <div className="col-lg-12">
                                              <div className="form-group">
                                                 <label>Address</label>
                                                 <input type="text" name="checkout-ship-address" required="" className="form-control" />
                                              </div>
                                           </div>
                                        </div>
                                        <div className="row">
                                           <div className="col-lg-6">
                                              <div className="form-group">
                                                 <label>City*</label>
                                                 <input type="text" name="checkout-ship-city" required="" className="form-control" />
                                              </div>
                                              <div className="form-group">
                                                 <label>Zip/Postal Code*</label>
                                                 <input type="text" name="checkout-ship-zip" required="" className="form-control" />
                                              </div>
                                              <div className="form-group">
                                                 <label>Telephone*</label>
                                                 <input type="text" name="checkout-ship-telephone" required="" className="form-control" />
                                              </div>
                                           </div>
                                           <div className="col-lg-6">
                                              <div className="form-group">
                                                 <label>State/Province*</label>
                                                 <input type="text" name="checkout-ship-state" required="" className="form-control" />
                                              </div>
                                              <div className="form-group">
                                                 <label>Country*</label>
                                                 <input type="text" name="checkout-ship-country" required="" className="form-control" />
                                              </div>
                                              <div className="form-group">
                                                 <label>Fax</label>
                                                 <input type="text" name="checkout-ship-fax" className="form-control" />
                                              </div>
                                           </div>
                                        </div>
                                        <div className="mv">
                                           <div className="checkbox c-checkbox">
                                              <label>
                                                 <input id="chk-guest" type="checkbox" name="checkout-use-bill-address" />
                                                 <em className="fa fa-check"></em>Use Billing Address</label>
                                           </div>
                                        </div>
                                        <div className="pt clearfix">
                                           <p className="pull-right text-sm"><i>Fields marked with (*) are required</i>
                                           </p>
                                           <div className="pull-left">
                                              <button type="button" className="btn btn-primary">Continue</button>
                                           </div>
                                        </div>


                               </Panel>
                               { /* Shipping Method */ }
                               <Panel header="4. Shipping Method" eventKey="4">


                                        <table className="table">
                                           <thead className="bg-gray-lighter">
                                              <tr>
                                                 <th className="wd-xxs">
                                                    <em className="fa fa-check text-muted ml-sm"></em>
                                                 </th>
                                                 <th>Method</th>
                                                 <th>Deliver Time</th>
                                                 <th>Cost</th>
                                              </tr>
                                           </thead>
                                           <tbody>
                                              <tr>
                                                 <td>
                                                    <div className="radio c-radio">
                                                       <label>
                                                          <input id="chk-guest" type="radio" name="checkout-ship" defaultValue="free" />
                                                          <em className="fa fa-check"></em>
                                                       </label>
                                                    </div>
                                                 </td>
                                                 <td>
                                                    <strong>Free Shipping</strong>
                                                 </td>
                                                 <td>10 to 15 days</td>
                                                 <td>
                                                    <strong className="h4 text-green">Free</strong>
                                                 </td>
                                              </tr>
                                              <tr>
                                                 <td>
                                                    <div className="radio c-radio">
                                                       <label>
                                                          <input id="chk-guest" type="radio" name="checkout-ship" defaultValue="std" />
                                                          <em className="fa fa-check"></em>
                                                       </label>
                                                    </div>
                                                 </td>
                                                 <td>
                                                    <strong>Standard post</strong>
                                                 </td>
                                                 <td>4 to 7 days</td>
                                                 <td>
                                                    <strong className="h4">$9.95</strong>
                                                 </td>
                                              </tr>
                                              <tr>
                                                 <td>
                                                    <div className="radio c-radio">
                                                       <label>
                                                          <input id="chk-guest" type="radio" name="checkout-ship" defaultValue="next" />
                                                          <em className="fa fa-check"></em>
                                                       </label>
                                                    </div>
                                                 </td>
                                                 <td>
                                                    <strong>Next day</strong>
                                                 </td>
                                                 <td>tomorrow</td>
                                                 <td>
                                                    <strong className="h4">$19</strong>
                                                 </td>
                                              </tr>
                                           </tbody>
                                        </table>
                                        <div className="pt clearfix">
                                           <div className="pull-left">
                                              <button type="button" className="btn btn-primary">Continue</button>
                                           </div>
                                        </div>


                               </Panel>
                               { /* Payment Information */ }
                               <Panel header="5. Payment Information" eventKey="5">


                                        <div className="row">
                                           <div className="col-lg-6">
                                              <div className="form-group">
                                                 <div className="radio c-radio">
                                                    <label>
                                                       <input id="chk-guest" type="radio" name="checkout-pay" defaultValue="paypal" defaultChecked className="form-control" />
                                                       <em className="fa fa-check"></em>Paypal</label>
                                                 </div>
                                              </div>
                                              <div className="form-group">
                                                 <div className="radio c-radio">
                                                    <label>
                                                       <input id="chk-guest" type="radio" name="checkout-pay" defaultValue="check" className="form-control" />
                                                       <em className="fa fa-check"></em>Check / Money order</label>
                                                 </div>
                                              </div>
                                              <div className="form-group">
                                                 <div className="radio c-radio">
                                                    <label>
                                                       <input id="chk-guest" type="radio" name="checkout-pay" defaultValue="creditcard" className="form-control" />
                                                       <em className="fa fa-check"></em>Credit Card (saved)</label>
                                                 </div>
                                              </div>
                                              <div className="form-group">
                                                 <label>Name on Card*</label>
                                                 <input type="text" name="checkout-cc-name" required="" className="form-control" />
                                              </div>
                                              <div className="form-group">
                                                 <label>Credit Card Type*</label>
                                                 <select name="checkout-cc-type" required="" className="form-control">
                                                    <option defaultValue="">- Please Select -</option>
                                                    <option defaultValue="amex">American Express</option>
                                                    <option defaultValue="visa">Visa</option>
                                                    <option defaultValue="master">Mastercard</option>
                                                 </select>
                                              </div>
                                              <div className="form-group">
                                                 <label>Credit Card Number*</label>
                                                 <input type="text" name="checkout-cc-number" required="" className="form-control" />
                                              </div>
                                              <div className="row">
                                                 <div className="col-lg-5">
                                                    <div className="form-group">
                                                       <label>Credit Expiration month*</label>
                                                       <select name="checkout-cc-exp-month" required="" className="form-control">
                                                          <option defaultValue="">Month</option>
                                                          <option defaultValue="1">January</option>
                                                          <option defaultValue="2">February</option>
                                                          <option defaultValue="3">March</option>
                                                          <option defaultValue="4">April</option>
                                                          <option defaultValue="5">May</option>
                                                          <option defaultValue="6">June</option>
                                                          <option defaultValue="7">Jule</option>
                                                          <option defaultValue="8">August</option>
                                                          <option defaultValue="9">September</option>
                                                          <option defaultValue="10">October</option>
                                                          <option defaultValue="11">November</option>
                                                          <option defaultValue="12">December</option>
                                                       </select>
                                                    </div>
                                                 </div>
                                                 <div className="col-lg-5">
                                                    <div className="form-group">
                                                       <label>Credit Expiration year*</label>
                                                       <select name="checkout-cc-exp-year" required="" className="form-control">
                                                          <option defaultValue="">Year</option>
                                                          <option defaultValue="2016">2016</option>
                                                          <option defaultValue="2017">2017</option>
                                                          <option defaultValue="2018">2018</option>
                                                          <option defaultValue="2019">2019</option>
                                                          <option defaultValue="2020">2020</option>
                                                          <option defaultValue="2021">2021</option>
                                                          <option defaultValue="2022">2022</option>
                                                          <option defaultValue="2023">2023</option>
                                                       </select>
                                                    </div>
                                                 </div>
                                                 <div className="col-lg-2">
                                                    <div className="form-group">
                                                       <label>CNV*</label>
                                                       <input type="text" name="checkout-cc-verification" required="" className="form-control" />
                                                    </div>
                                                 </div>
                                              </div>
                                           </div>
                                        </div>
                                        <div className="pt clearfix">
                                           <p className="pull-right text-sm"><i>Fields marked with (*) are required</i>
                                           </p>
                                           <div className="pull-left">
                                              <button type="button" className="btn btn-primary">Continue</button>
                                           </div>
                                        </div>


                               </Panel>
                               { /* Order Review */ }
                               <Panel header="6. Order Review" eventKey="6">


                                        <div className="table-responsive">
                                           <table className="table">
                                              <colgroup>
                                                 <col span="1" className="order-pic" />
                                                 <col span="1" className="order-item-name" />
                                                 <col span="1" className="order-qty" />
                                                 <col span="1" className="order-price" />
                                                 <col span="1" className="order-tax" />
                                                 <col span="1" className="order-total" />
                                              </colgroup>
                                              <thead className="bg-gray-lighter">
                                                 <tr>
                                                    <th>Product</th>
                                                    <th>Product Title</th>
                                                    <th className="wd-xs">Qty</th>
                                                    <th>Unit Price</th>
                                                    <th>Tax</th>
                                                    <th>Total</th>
                                                 </tr>
                                              </thead>
                                              <tfoot>
                                                 <tr>
                                                    <td colSpan="5">Subtotal</td>
                                                    <td>$1540.00</td>
                                                 </tr>
                                                 <tr>
                                                    <td colSpan="5">Shipping &amp; Handling (Free)</td>
                                                    <td>$0.00</td>
                                                 </tr>
                                                 <tr>
                                                    <td colSpan="5">Tax</td>
                                                    <td>$49.00</td>
                                                 </tr>
                                                 <tr className="order-subtotal">
                                                    <td colSpan="5">Subtotal</td>
                                                    <td>$1340.00</td>
                                                 </tr>
                                              </tfoot>
                                              <tbody>
                                                 <tr>
                                                    <td className="order-pic thumb64">
                                                       <img src="img/dummy.png" />
                                                    </td>
                                                    <td className="order-item-name">Lorem Ipsum dolor</td>
                                                    <td className="order-qty">
                                                       <input type="text" name="checkout-qty" defaultValue="1" className="form-control" />
                                                    </td>
                                                    <td className="order-price">$825.00</td>
                                                    <td className="order-tax">$16.00</td>
                                                    <td className="order-total">$841.00</td>
                                                 </tr>
                                                 <tr>
                                                    <td className="order-pic">
                                                       <img src="img/dummy.png" />
                                                    </td>
                                                    <td className="order-item-name">Lorem Ipsum dolor</td>
                                                    <td className="order-qty">
                                                       <input type="text" name="checkout-qty" defaultValue="1" className="form-control" />
                                                    </td>
                                                    <td className="order-price">$825.00</td>
                                                    <td className="order-tax">$16.00</td>
                                                    <td className="order-total">$841.00</td>
                                                 </tr>
                                              </tbody>
                                           </table>
                                        </div>
                                        <div className="mt-lg">
                                           <button type="button" className="btn btn-info">Submit Order</button>
                                        </div>


                               </Panel>
                            </Accordion>
                         </form>
                      </div>
                   </div>
                </div>
            </ContentWrapper>
            );
    }

}

export default EcommerceCheckout;
