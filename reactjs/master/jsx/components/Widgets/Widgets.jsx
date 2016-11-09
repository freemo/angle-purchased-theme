import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import WidgetsRun from './Widgets.run';
import { Tabs, Tab } from 'react-bootstrap'

class Widgets extends React.Component {

    componentDidMount() {
        WidgetsRun();
    }

    render() {
        return (
            <ContentWrapper>
                <h3>Widgets</h3>
                {/* START row */}
                <div className="row">
                   <div className="col-lg-4">
                      {/* START widget */}
                      <div className="panel widget">
                         <div className="panel-body">
                            <div className="text-right text-muted">
                               <em className="fa fa-gamepad fa-2x"></em>
                            </div>
                            <h3 className="mt0">99.999</h3>
                            <p className="text-muted">Games played last month</p>
                            <div className="progress progress-striped progress-xs">
                               <div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="70" className="progress-bar progress-bar-warning progress-60">
                                  <span className="sr-only">60% Complete</span>
                               </div>
                            </div>
                         </div>
                      </div>
                      {/* END widget */}
                   </div>
                   <div className="col-lg-4">
                      {/* START widget */}
                      <div className="panel widget">
                         <div className="panel-body">
                            <div className="text-right text-muted">
                               <em className="fa fa-coffee fa-2x"></em>
                            </div>
                            <h3 className="mt0">300</h3>
                            <p className="text-muted">Coffee cups per day</p>
                            <div className="progress progress-striped progress-xs">
                               <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-green progress-80">
                                  <span className="sr-only">80% Complete</span>
                               </div>
                            </div>
                         </div>
                      </div>
                      {/* END widget */}
                   </div>
                   <div className="col-lg-4">
                      {/* START widget */}
                      <div className="panel widget">
                         <div className="panel-body">
                            <div className="text-right text-muted">
                               <em className="fa fa-upload fa-2x"></em>
                            </div>
                            <h3 className="mt0">1000 Gb</h3>
                            <p className="text-muted">Average Monthly Uploads</p>
                            <div className="progress progress-striped progress-xs">
                               <div role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-info progress-40">
                                  <span className="sr-only">40% Complete</span>
                               </div>
                            </div>
                         </div>
                      </div>
                      {/* END widget */}
                   </div>
                </div>
                {/* END row */}
                {/* START row */}
                <div className="row">
                   <div className="col-lg-4">
                      {/* START widget */}
                      <div className="panel widget">
                         <div className="row row-table row-flush">
                            <div className="col-xs-6 bb br">
                               <div className="row row-table row-flush">
                                  <div className="col-xs-4 text-center text-info">
                                     <em className="fa fa-users fa-2x"></em>
                                  </div>
                                  <div className="col-xs-8">
                                     <div className="panel-body text-center">
                                        <h4 className="mt0">10k</h4>
                                        <p className="mb0 text-muted">VISITORS</p>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="col-xs-6 bb">
                               <div className="row row-table row-flush">
                                  <div className="col-xs-4 text-center text-danger">
                                     <em className="fa fa-music fa-2x"></em>
                                  </div>
                                  <div className="col-xs-8">
                                     <div className="panel-body text-center">
                                        <h4 className="mt0">100%</h4>
                                        <p className="mb0 text-muted">VOLUME</p>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <div className="row row-table row-flush">
                            <div className="col-xs-6 br">
                               <div className="row row-table row-flush">
                                  <div className="col-xs-4 text-center text-inverse">
                                     <em className="fa fa-code-fork fa-2x"></em>
                                  </div>
                                  <div className="col-xs-8">
                                     <div className="panel-body text-center">
                                        <h4 className="mt0">150</h4>
                                        <p className="mb0 text-muted">FORKS</p>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="col-xs-6">
                               <div className="row row-table row-flush">
                                  <div className="col-xs-4 text-center text-success">
                                     <em className="fa fa-inbox fa-2x"></em>
                                  </div>
                                  <div className="col-xs-8">
                                     <div className="panel-body text-center">
                                        <h4 className="mt0">10</h4>
                                        <p className="mb0 text-muted">NEW MESSAGES</p>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                      {/* END widget */}
                      {/* START widget */}
                      <div className="panel widget">
                         <div className="row row-table row-flush">
                            <div className="col-xs-6 bb br">
                               <div className="row row-table row-flush">
                                  <div className="col-xs-4 text-center text-info">
                                     {/* Bar chart */}
                                     <div data-sparkline="" data-bar-color="#5d9cec" data-height="20" data-bar-width="3" data-bar-spacing="2" data-values="5,9,4,1,3,4,7,5"></div>
                                  </div>
                                  <div className="col-xs-8">
                                     <div className="panel-body text-center">
                                        <h4 className="mt0">10k</h4>
                                        <p className="mb0 text-muted">VISITORS</p>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="col-xs-6 bb">
                               <div className="row row-table row-flush">
                                  <div className="col-xs-4 text-center text-danger">
                                     {/* Bar chart */}
                                     <div data-sparkline="" data-bar-color="#5d9cec" data-height="20" data-bar-width="3" data-bar-spacing="2" data-values="1,2,3,4,5,6,7,8,9"></div>
                                  </div>
                                  <div className="col-xs-8">
                                     <div className="panel-body text-center">
                                        <h4 className="mt0">100%</h4>
                                        <p className="mb0 text-muted">CONVERSIONS</p>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <div className="row row-table row-flush">
                            <div className="col-xs-6 br">
                               <div className="row row-table row-flush">
                                  <div className="col-xs-4 text-center text-inverse">
                                     {/* Bar chart */}
                                     <div data-sparkline="" data-bar-color="#5d9cec" data-height="20" data-bar-width="3" data-bar-spacing="2" data-values="1,0,4,9,5,7,8,4,7"></div>
                                  </div>
                                  <div className="col-xs-8">
                                     <div className="panel-body text-center">
                                        <h4 className="mt0">150</h4>
                                        <p className="mb0 text-muted">RETURNS</p>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="col-xs-6">
                               <div className="row row-table row-flush">
                                  <div className="col-xs-4 text-center text-success">
                                     {/* Bar chart */}
                                     <div data-sparkline="" data-bar-color="#5d9cec" data-height="20" data-bar-width="3" data-bar-spacing="2" data-values="1,5,2,2,8,4,4,8"></div>
                                  </div>
                                  <div className="col-xs-8">
                                     <div className="panel-body text-center">
                                        <h4 className="mt0">10</h4>
                                        <p className="mb0 text-muted">UNIQUES</p>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                      {/* END widget */}
                   </div>
                   <div className="col-lg-4">
                      {/* START widget */}
                      <div className="panel widget">
                         <div className="half-float">
                            <img src="img/bg3.jpg" alt="" className="img-responsive" />
                            <div className="half-float-bottom">
                               <img src="img/user/09.jpg" alt="Image" className="img-thumbnail img-circle thumb128" />
                            </div>
                         </div>
                         <div className="panel-body text-center">
                            <h3 className="m0">Ted Berry</h3>
                            <p className="text-muted">Lead director</p>
                            <p>Proin metus justo, commodo in ultrices at, lobortis sit amet dui. Fusce dolor purus, adipiscing a tempus at, gravida vel purus.</p>
                         </div>
                         <div className="panel-body text-center bg-gray-dark">
                            <div className="row row-table">
                               <div className="col-xs-4">
                                  <h3 className="m0">400</h3>
                                  <p className="m0">Photos</p>
                               </div>
                               <div className="col-xs-4">
                                  <h3 className="m0">2000</h3>
                                  <p className="m0">Likes</p>
                               </div>
                               <div className="col-xs-4">
                                  <h3 className="m0">500</h3>
                                  <p className="m0">Following</p>
                               </div>
                            </div>
                         </div>
                      </div>
                      {/* END widget */}
                   </div>
                   <div className="col-lg-4">
                      {/* START widget */}
                      <div className="panel widget">
                         <div style={{backgroundImage: "url('img/bg4.jpg')"}} className="panel-body text-center bg-center">
                            <div className="row row-table">
                               <div className="col-xs-12 text-white">
                                  <img src="img/user/06.jpg" alt="Image" className="img-thumbnail img-circle thumb128" />
                                  <h3 className="m0">Chris</h3>
                                  <p className="m0">
                                     <em className="fa fa-twitter fa-fw"></em>@chris</p>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body text-center bg-gray-darker">
                            <div className="row row-table">
                               <div className="col-xs-4">
                                  <a href="#" className="text-white">
                                     <em className="fa fa-twitter fa-2x"></em>
                                  </a>
                               </div>
                               <div className="col-xs-4">
                                  <a href="#" className="text-white">
                                     <em className="fa fa-facebook fa-2x"></em>
                                  </a>
                               </div>
                               <div className="col-xs-4">
                                  <a href="#" className="text-white">
                                     <em className="fa fa-comments fa-2x"></em>
                                  </a>
                               </div>
                            </div>
                         </div>
                         <div className="list-group">
                            <a href="#" className="list-group-item">
                               <span className="label label-primary pull-right">15</span>
                               <em className="fa fa-fw fa-clock-o text-muted"></em>Recent Activity</a>
                            <a href="#" className="list-group-item">
                               <span className="label label-primary pull-right">100</span>
                               <em className="fa fa-fw fa-user text-muted"></em>Following</a>
                            <a href="#" className="list-group-item">
                               <span className="label label-primary pull-right">300</span>
                               <em className="fa fa-fw fa-folder-open-o text-muted"></em>Photos</a>
                         </div>
                      </div>
                      {/* END widget */}
                   </div>
                </div>
                {/* END row */}
                {/* START row */}
                <div className="row">
                   <div className="col-lg-4 col-md-6">
                      {/* START widget */}
                      <div className="panel widget bg-success">
                         <div className="row row-table">
                            <div className="col-xs-4 text-center bg-success-dark pv-lg">
                               <em className="icon-share fa-3x"></em>
                            </div>
                            <div className="col-xs-8 pv-lg">
                               <div className="h1 m0 text-bold">150</div>
                               <div className="text-uppercase">New connections</div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div className="col-lg-4 col-md-6">
                      {/* START widget */}
                      <div className="panel widget bg-danger">
                         <div className="row row-table">
                            <div className="col-xs-4 text-center bg-danger-dark pv-lg">
                               <em className="icon-star fa-3x"></em>
                            </div>
                            <div className="col-xs-8 pv-lg">
                               <div className="h1 m0 text-bold">7000</div>
                               <div className="text-uppercase">Ratings received</div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div className="col-lg-4 col-md-12">
                      {/* START widget */}
                      <div className="panel widget bg-warning">
                         <div className="row row-table">
                            <div className="col-xs-4 text-center bg-warning-dark pv-lg">
                               <em className="icon-trophy fa-3x"></em>
                            </div>
                            <div className="col-xs-8 pv-lg">
                               <div className="h1 m0 text-bold">10</div>
                               <div className="text-uppercase">Achievements</div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                {/* END row */}
                {/* START row */}
                <div className="row">
                   <div className="col-lg-4">
                      {/* START widget */}
                      <div className="panel widget">
                         <div className="panel-body bg-success">
                            <div className="h5 mt0">Received all time</div>
                            {/* Line chart */}
                            <div data-sparkline="" data-values="1,3,4,7,5,9,4,4,7,5,9,6,4" data-type="line" data-height="80" data-width="100%" data-line-width="2" data-line-color="#dddddd" data-spot-color="#bbbbbb" data-fill-color="" data-highlight-line-color="#fff"
                            data-spot-radius="3" data-resize="true"></div>
                        {/* Bar chart */}
                            <div className="text-center">
                               <div data-sparkline="" data-bar-color="#fff" data-height="50" data-bar-width="6" data-bar-spacing="6" data-values="1,3,4,7,5,9,4,4,7,5,9,6,4"></div>
                            </div>
                         </div>
                         <div className="panel-body bg-inverse">
                            <div className="row row-table text-center">
                               <div className="col-xs-4">
                                  <p className="m0 h3">15080</p>
                                  <p className="m0 text-muted">Shots</p>
                               </div>
                               <div className="col-xs-4">
                                  <p className="m0 h3">12000</p>
                                  <p className="m0 text-muted">Likes</p>
                               </div>
                               <div className="col-xs-4">
                                  <p className="m0 h3">5100</p>
                                  <p className="m0 text-muted">Comments</p>
                               </div>
                            </div>
                         </div>
                      </div>
                      {/* END widget */}
                   </div>
                   <div className="col-lg-4">
                      {/* START widget */}
                      <div className="panel widget">
                         <div className="panel-body bg-primary">
                            <div className="h5 mt0">Monthly incomes</div>
                            {/* Line chart */}
                            <div data-sparkline="" data-type="line" data-height="80" data-width="100%" data-line-width="2" data-line-color="#dddddd" data-spot-color="#bbbbbb" data-fill-color="" data-highlight-line-color="#fff" data-spot-radius="3" data-resize="true"
                            data-values="1,3,4,7,5,9,4,4,7,5,9,6,4"></div>
                         </div>
                         <div className="panel-body bg-inverse">
                            <div className="row text-center">
                               <div className="col-xs-6">
                                  {/* Bar chart */}
                                  <div data-sparkline="" data-bar-color="#5d9cec" data-height="30" data-bar-width="6" data-bar-spacing="6" data-values="1,3,4,7,5,9,4,4,7,5,9,6,4"></div>
                               </div>
                               <div className="col-xs-6">
                                  <h4 className="m0">+150</h4>
                                  <p className="m0 text-muted">
                                     <small>From last month</small>
                                  </p>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body">
                            <div className="row row-table text-center">
                               <div className="col-xs-6">
                                  <p className="m0 text-muted">Gross income</p>
                                  <h4 className="m0">12000</h4>
                               </div>
                               <div className="col-xs-6">
                                  <p className="m0 text-muted">Net income</p>
                                  <h4 className="m0">5100</h4>
                               </div>
                            </div>
                         </div>
                      </div>
                      {/* END widget */}
                   </div>
                   <div className="col-lg-4">
                      {/* START widget */}
                      <div className="panel widget">
                         <div className="row row-table row-flush">
                            <div className="col-xs-8">
                               <img src="img/bg1.jpg" alt="" className="img-responsive" />
                            </div>
                            <div className="col-xs-4 align-middle bg-info">
                               <div className="text-center">
                                  <div className="text-lg mt0">11&deg;</div>
                                  <p>Cold</p>
                                  <em className="fa fa-sun-o fa-2x"></em>
                               </div>
                            </div>
                         </div>
                      </div>
                      {/* END widget */}
                   </div>
                </div>
                {/* END row */}
                {/* START row */}
                <div className="row">
                   <div className="col-lg-3">
                      {/* START widget */}
                      <div className="panel widget">
                         <div className="row row-table row-flush">
                            <div className="col-xs-4 bg-info text-center">
                               <em className="fa fa-users fa-2x"></em>
                            </div>
                            <div className="col-xs-8">
                               <div className="panel-body text-center">
                                  <h4 className="mt0">10k</h4>
                                  <p className="mb0 text-muted">VISITORS</p>
                               </div>
                            </div>
                         </div>
                      </div>
                      {/* END widget */}
                   </div>
                   <div className="col-lg-3">
                      {/* START widget */}
                      <div className="panel widget">
                         <div className="row row-table row-flush">
                            <div className="col-xs-4 bg-danger text-center">
                               <em className="fa fa-music fa-2x"></em>
                            </div>
                            <div className="col-xs-8">
                               <div className="panel-body text-center">
                                  <h4 className="mt0">100%</h4>
                                  <p className="mb0 text-muted">VOLUME</p>
                               </div>
                            </div>
                         </div>
                      </div>
                      {/* END widget */}
                   </div>
                   <div className="col-lg-3">
                      {/* START widget */}
                      <div className="panel widget">
                         <div className="row row-table row-flush">
                            <div className="col-xs-4 bg-inverse text-center">
                               <em className="fa fa-code-fork fa-2x"></em>
                            </div>
                            <div className="col-xs-8">
                               <div className="panel-body text-center">
                                  <h4 className="mt0">150</h4>
                                  <p className="mb0 text-muted">FORKS</p>
                               </div>
                            </div>
                         </div>
                      </div>
                      {/* END widget */}
                   </div>
                   <div className="col-lg-3">
                      {/* START widget */}
                      <div className="panel widget">
                         <div className="row row-table row-flush">
                            <div className="col-xs-4 bg-green text-center">
                               <em className="fa fa-inbox fa-2x"></em>
                            </div>
                            <div className="col-xs-8">
                               <div className="panel-body text-center">
                                  <h4 className="mt0">10</h4>
                                  <p className="mb0 text-muted">NEW MESSAGES</p>
                               </div>
                            </div>
                         </div>
                      </div>
                      {/* END widget */}
                   </div>
                </div>
                {/* END row */}
                {/* START row */}
                <div className="row">
                   <div className="col-lg-4">
                      {/* START widget */}
                      <div className="panel widget">
                         <div className="row row-table row-flush">
                            <div className="col-xs-5">
                               <picture className="lateral-picture">
                                  <img src="img/bg2.jpg" alt="" />
                               </picture>
                            </div>
                            <div className="col-xs-7 align-middle p-lg">
                               <div className="pull-right"><a href="#" className="btn btn-primary btn-sm">Register</a>
                               </div>
                               <p>
                                  <span className="text-lg">16</span>Aug</p>
                               <p>
                                  <strong>EVENT INVITATION</strong>
                               </p>
                               <p>Donec posuere neque in elit luctus tempor consequat enim egestas. Nulla dictum egestas leo at lobortis.</p>
                            </div>
                         </div>
                      </div>
                      {/* END widget */}
                   </div>
                   <div className="col-lg-4">
                      {/* START widget */}
                      <div className="panel widget">
                         <div className="panel-body bg-danger text-center">
                            <div className="clearfix">
                               <div className="pull-left">200 Following</div>
                               <div className="pull-right">150 Followers</div>
                            </div>
                            <img src="img/user/06.jpg" alt="Image" className="img-thumbnail img-circle thumb96" />
                            <h4 className="mt0">Lois Berry</h4>
                            <p className="m0">
                               <em className="fa fa-fw fa-map-marker"></em>San Francisco, California</p>
                            <div className="clearfix">
                               <div className="pull-left">15k Likes</div>
                               <div className="pull-right">100 Feeds</div>
                            </div>
                         </div>
                      </div>
                      {/* END widget */}
                   </div>
                   <div className="col-lg-4">
                      {/* START widget */}
                      <div className="panel widget">
                         <div data-gmap="" data-zoom="14" data-address="276 N TUSTIN ST, ORANGE, CA 92867" data-toggle="gmap" className="gmap gmap-sm"></div>
                         <div className="panel-body bg-inverse">
                            <div className="row row-table">
                               <div className="col-xs-6">
                                  <div className="h2 m0">Find Us!</div>
                               </div>
                               <div className="col-xs-1">
                                  <em className="fa fa-map-marker fa-3x"></em>
                               </div>
                               <div className="col-xs-5">
                                  <p className="m0">Street 123</p>
                                  <p className="m0">Location, Unknow</p>
                               </div>
                            </div>
                         </div>
                      </div>
                      {/* END widget */}
                   </div>
                </div>
                {/* END row */}
                {/* START row */}
                <div className="row">
                   <div className="col-lg-4">
                      {/* START widget */}
                      <div className="panel widget">
                         <img src="img/bg1.jpg" alt="Image" className="img-responsive" />
                         <div className="panel-body">
                            <div className="row row-table text-center">
                               <div className="col-xs-4">
                                  <p>Comments</p>
                                  <h3 className="m0 text-primary">700</h3>
                               </div>
                               <div className="col-xs-4">
                                  <p>Likes</p>
                                  <h3 className="m0 text-primary">1500</h3>
                               </div>
                               <div className="col-xs-4">
                                  <p>Shots</p>
                                  <h3 className="m0 text-primary">300</h3>
                               </div>
                            </div>
                         </div>
                      </div>
                      {/* END widget */}
                   </div>
                   <div className="col-lg-4">
                      {/* START widget */}
                      <div className="panel widget">
                         <div className="panel-body">
                            <div className="row row-table">
                               <div className="col-xs-6 text-center">
                                  <img src="img/user/09.jpg" alt="Image" className="img-circle thumb96" />
                               </div>
                               <div className="col-xs-6">
                                  <h3 className="mt0">Peggy Peters</h3>
                                  <ul className="list-unstyled">
                                     <li className="mb-sm">
                                        <em className="fa fa-map-marker fa-fw"></em>ASD, Qwerty</li>
                                     <li className="mb-sm">
                                        <em className="fa fa-twitter fa-fw"></em>@asdasd</li>
                                     <li className="mb-sm">
                                        <em className="fa fa-envelope fa-fw"></em>asdasd@mail.com</li>
                                  </ul>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body bg-inverse">
                            <div className="row row-table text-center">
                               <div className="col-xs-4">
                                  <p className="m0 h3">700</p>
                                  <p className="m0 text-muted">Followers</p>
                               </div>
                               <div className="col-xs-4">
                                  <p className="m0 h3">1500</p>
                                  <p className="m0 text-muted">Following</p>
                               </div>
                               <div className="col-xs-4">
                                  <p className="m0 h3">510</p>
                                  <p className="m0 text-muted">Loved</p>
                               </div>
                            </div>
                         </div>
                      </div>
                      {/* END widget */}
                      {/* START widget */}
                      <div className="panel widget">
                         <div className="panel-body">
                            <div className="row row-table">
                               <div className="col-xs-6 text-center">
                                  <img src="img/user/06.jpg" alt="Image" className="img-thumbnail img-circle img-responsive thumb96" />
                               </div>
                               <div className="col-xs-6">
                                  <div className="pull-right"><a href="#" className="btn btn-success">Follow</a>
                                  </div>
                                  <h3 className="mt0">Sarah Pierce</h3>
                                  <p className="text-muted">150 Following / 100 Followers</p>
                               </div>
                            </div>
                         </div>
                      </div>
                      {/* END widget */}
                   </div>
                   <div className="col-lg-4">
                      <div className="row">
                         <div className="col-sm-6">
                            {/* START widget */}
                            <div className="panel widget">
                               <div className="panel-body bg-info text-center">
                                  <div className="text-lg m0">300</div>
                                  <p>Re-Tweets</p>
                                  <div className="mb-lg"></div>
                                  <em className="fa fa-twitter text-alpha"></em>
                               </div>
                            </div>
                            {/* END widget */}
                         </div>
                         <div className="col-sm-6">
                            {/* START widget */}
                            <div className="panel widget">
                               <div className="panel-body bg-primary text-center">
                                  <div className="text-lg m0">12&deg;</div>
                                  <p>Bariloche</p>
                                  <div className="mb-lg"></div>
                                  <em className="fa fa-sun-o"></em>
                               </div>
                            </div>
                            {/* END widget */}
                         </div>
                      </div>
                      <div className="row">
                         <div className="col-sm-6">
                            {/* START widget */}
                            <div className="panel widget">
                               <div className="panel-body bg-danger text-center">
                                  <div className="radial-bar radial-bar-40 radial-bar radial-bar-danger m0">
                                     <img src="img/user/03.jpg" alt="" />
                                  </div>
                                  <p>
                                     <strong>40%</strong>
                                     <span>complete</span>
                                  </p>
                               </div>
                            </div>
                            {/* END widget */}
                         </div>
                         <div className="col-sm-6">
                            {/* START widget */}
                            <div className="panel widget">
                               <div className="panel-body bg-purple text-center">
                                  <p>
                                     <img src="img/user/08.jpg" alt="" className="img-rounded thumb80" />
                                  </p>
                                  <p>
                                     <strong>Mika</strong>
                                     <span>is now following you</span>
                                  </p>
                               </div>
                            </div>
                            {/* END widget */}
                         </div>
                      </div>
                      <div className="row"></div>
                      {/* START widget */}
                      <div className="panel widget">
                         <div className="panel-body">
                            <div className="row row-table">
                               <div className="col-xs-3 text-center">
                                  <img src="img/user/06.jpg" alt="Image" className="img-thumbnail img-circle img-responsive thumb64" />
                               </div>
                               <div className="col-xs-5 text-center">
                                  <h3 className="m0">Sylvia Morris</h3>
                               </div>
                               <div className="col-xs-4">
                                  <a href="#" className="btn btn-purple">
                                     <em className="fa fa-hand-o-right"></em>
                                     <span>Touch</span>
                                  </a>
                               </div>
                            </div>
                         </div>
                      </div>
                      {/* END widget */}
                   </div>
                </div>
                {/* END row */}
                {/* START row */}
                <div className="row">
                   <div className="col-lg-3 col-md-6">
                      {/* START panel */}
                      <div className="panel panel-primary">
                         <div className="panel-heading">
                            <div className="row">
                               <div className="col-xs-3">
                                  <em className="fa fa-comments fa-5x"></em>
                               </div>
                               <div className="col-xs-9 text-right">
                                  <div className="text-lg">26</div>
                                  <p className="m0">New Comments!</p>
                               </div>
                            </div>
                         </div>
                         <a href="#" className="panel-footer bg-gray-dark bt0 clearfix btn-block">
                            <span className="pull-left">View Details</span>
                            <span className="pull-right">
                               <em className="fa fa-chevron-circle-right"></em>
                            </span>
                         </a>
                         {/* END panel */}
                      </div>
                   </div>
                   <div className="col-lg-3 col-md-6">
                      {/* START panel */}
                      <div className="panel panel-green">
                         <div className="panel-heading">
                            <div className="row">
                               <div className="col-xs-3">
                                  <em className="fa fa-tasks fa-5x"></em>
                               </div>
                               <div className="col-xs-9 text-right">
                                  <div className="text-lg">12</div>
                                  <p className="m0">New Tasks!</p>
                               </div>
                            </div>
                         </div>
                         <a href="#" className="panel-footer bg-gray-dark bt0 clearfix btn-block">
                            <span className="pull-left">View Details</span>
                            <span className="pull-right">
                               <em className="fa fa-chevron-circle-right"></em>
                            </span>
                         </a>
                      </div>
                      {/* END panel */}
                   </div>
                   <div className="col-lg-3 col-md-6">
                      {/* START panel */}
                      <div className="panel panel-warning">
                         <div className="panel-heading">
                            <div className="row">
                               <div className="col-xs-3">
                                  <em className="fa fa-shopping-cart fa-5x"></em>
                               </div>
                               <div className="col-xs-9 text-right">
                                  <div className="text-lg">124</div>
                                  <p className="m0">New Orders!</p>
                               </div>
                            </div>
                         </div>
                         <a href="#" className="panel-footer bg-gray-dark bt0 clearfix btn-block">
                            <span className="pull-left">View Details</span>
                            <span className="pull-right">
                               <em className="fa fa-chevron-circle-right"></em>
                            </span>
                         </a>
                      </div>
                      {/* END panel */}
                   </div>
                   <div className="col-lg-3 col-md-6">
                      {/* START panel */}
                      <div className="panel panel-danger">
                         <div className="panel-heading">
                            <div className="row">
                               <div className="col-xs-3">
                                  <em className="fa fa-support fa-5x"></em>
                               </div>
                               <div className="col-xs-9 text-right">
                                  <div className="text-lg">13</div>
                                  <p className="m0">Support Tickets!</p>
                               </div>
                            </div>
                         </div>
                         <a href="#" className="panel-footer bg-gray-dark bt0 clearfix btn-block">
                            <span className="pull-left">View Details</span>
                            <span className="pull-right">
                               <em className="fa fa-chevron-circle-right"></em>
                            </span>
                         </a>
                      </div>
                      {/* END panel */}
                   </div>
                </div>
                {/* END row */}
                {/* START panel tab */}
                <div role="tabpanel" className="panel">
                    <Tabs defaultActiveKey={1} justified id="tabID">
                        <Tab eventKey={1} title="Tasks Panel">
                             {/* START list group */}
                             <div className="list-group mb0">
                                <a href="#" className="list-group-item">
                                   <span className="label label-purple pull-right">just now</span>
                                   <em className="fa fa-fw fa-calendar mr"></em>Calendar updated</a>
                                <a href="#" className="list-group-item">
                                   <span className="label label-purple pull-right">4 minutes ago</span>
                                   <em className="fa fa-fw fa-comment mr"></em>Commented on a post</a>
                                <a href="#" className="list-group-item">
                                   <span className="label label-purple pull-right">23 minutes ago</span>
                                   <em className="fa fa-fw fa-truck mr"></em>Order 392 shipped</a>
                                <a href="#" className="list-group-item">
                                   <span className="label label-purple pull-right">46 minutes ago</span>
                                   <em className="fa fa-fw fa-money mr"></em>Invoice 653 has been paid</a>
                                <a href="#" className="list-group-item">
                                   <span className="label label-purple pull-right">1 hour ago</span>
                                   <em className="fa fa-fw fa-user mr"></em>A new user has been added</a>
                                <a href="#" className="list-group-item">
                                   <span className="label label-purple pull-right">2 hours ago</span>
                                   <em className="fa fa-fw fa-check mr"></em>Completed task: "pick up dry cleaning"</a>
                                <a href="#" className="list-group-item">
                                   <span className="label label-purple pull-right">yesterday</span>
                                   <em className="fa fa-fw fa-globe mr"></em>Saved the world</a>
                                <a href="#" className="list-group-item">
                                   <span className="label label-purple pull-right">two days ago</span>
                                   <em className="fa fa-fw fa-check mr"></em>Completed task: "fix error on sales page"</a>
                                <a href="#" className="list-group-item">
                                   <span className="label label-purple pull-right">two days ago</span>
                                   <em className="fa fa-fw fa-check mr"></em>Completed task: "fix error on sales page"</a>
                             </div>
                             {/* END list group */}
                             <div className="panel-footer text-right"><a href="#" className="btn btn-default btn-sm">View All Activity </a>
                             </div>
                        </Tab>
                        <Tab eventKey={2} title="Transactions Panel">
                             {/* START table responsive */}
                             <div className="table-responsive">
                                <table className="table table-bordered table-hover table-striped">
                                   <thead>
                                      <tr>
                                         <th>Order #</th>
                                         <th>Order Date</th>
                                         <th>Order Time</th>
                                         <th>Amount (USD)</th>
                                      </tr>
                                   </thead>
                                   <tbody>
                                      <tr>
                                         <td>3326</td>
                                         <td>10/21/2013</td>
                                         <td>3:29 PM</td>
                                         <td>$321.33</td>
                                      </tr>
                                      <tr>
                                         <td>3325</td>
                                         <td>10/21/2013</td>
                                         <td>3:20 PM</td>
                                         <td>$234.34</td>
                                      </tr>
                                      <tr>
                                         <td>3324</td>
                                         <td>10/21/2013</td>
                                         <td>3:03 PM</td>
                                         <td>$724.17</td>
                                      </tr>
                                      <tr>
                                         <td>3323</td>
                                         <td>10/21/2013</td>
                                         <td>3:00 PM</td>
                                         <td>$23.71</td>
                                      </tr>
                                      <tr>
                                         <td>3322</td>
                                         <td>10/21/2013</td>
                                         <td>2:49 PM</td>
                                         <td>$8345.23</td>
                                      </tr>
                                      <tr>
                                         <td>3321</td>
                                         <td>10/21/2013</td>
                                         <td>2:23 PM</td>
                                         <td>$245.12</td>
                                      </tr>
                                      <tr>
                                         <td>3320</td>
                                         <td>10/21/2013</td>
                                         <td>2:15 PM</td>
                                         <td>$5663.54</td>
                                      </tr>
                                      <tr>
                                         <td>3319</td>
                                         <td>10/21/2013</td>
                                         <td>2:13 PM</td>
                                         <td>$943.45</td>
                                      </tr>
                                   </tbody>
                                </table>
                             </div>
                             {/* END table responsive */}
                             <div className="panel-footer text-right"><a href="#" className="btn btn-default btn-sm">View All Transactions</a>
                             </div>
                        </Tab>
                    </Tabs>
                </div>
                {/* END panel tab */}
            </ContentWrapper>
        );
    }

}

export default Widgets;
