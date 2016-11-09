import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

class VoteLinks extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <ContentWrapper>
                <h3>User links
                   <small>Vestibulum pretium aliquam scelerisque.</small>
                </h3>
                <ul className="nav nav-pills mv-lg">
                   <li className="active"><a href="" className="pv-sm">Popular</a>
                   </li>
                   <li><a href="" className="pv-sm">New</a>
                   </li>
                   <li><a href="" className="pv-sm">Recent</a>
                   </li>
                </ul>
                { /* Vote panel */ }
                <div className="panel">
                   <div className="table-responsive">
                      <table className="table">
                         <tbody>
                            <tr>
                               <td className="b0 wd-xxs text-center">
                                  <p>
                                     <a href="#">
                                        <em className="fa fa-angle-up fa-lg"></em>
                                     </a>
                                  </p>
                                  <p>10</p>
                                  <p className="mb0">
                                     <a href="#">
                                        <em className="fa fa-angle-down fa-lg"></em>
                                     </a>
                                  </p>
                               </td>
                               <td className="b0 wd-xs hidden-xs">
                                  <a href="#">
                                     <img src="img/dummy.png" className="img-responsive thumb64" />
                                  </a>
                               </td>
                               <td className="b0">
                                  <p className="h4 mt0">
                                     <span className="label bg-gray-lighter ph-lg mr text-sm visible-lg-inline">
                                        <span className="text-muted">question</span>
                                     </span><a href="#" className="align-middle text-bold link-unstyled">[Lorem Ipsum] Phasellus ullamcorper rhoncus sagittis.</a>
                                  </p>
                                  <small className="text-muted">In ac turpis vitae ante pretium cursus. Suspendisse nisl arcu, venenatis elementum lacinia sed.
                                     <br/>5 hours ago - <a href="#" className="text-bold">harperray</a>
                                  </small>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                </div>
                { /* end Vote panel */ }
                { /* Vote panel */ }
                <div className="panel">
                   <div className="table-responsive">
                      <table className="table">
                         <tbody>
                            <tr>
                               <td className="b0 wd-xxs text-center">
                                  <p>
                                     <a href="#">
                                        <em className="fa fa-angle-up fa-lg"></em>
                                     </a>
                                  </p>
                                  <p>20</p>
                                  <p className="mb0">
                                     <a href="#">
                                        <em className="fa fa-angle-down fa-lg"></em>
                                     </a>
                                  </p>
                               </td>
                               <td className="b0 wd-xs hidden-xs">
                                  <a href="#">
                                     <img src="img/dummy.png" className="img-responsive thumb64" />
                                  </a>
                               </td>
                               <td className="b0">
                                  <p className="h4 mt0">
                                     <span className="label bg-gray-lighter ph-lg mr text-sm visible-lg-inline">
                                        <span className="text-muted">culture</span>
                                     </span><a href="#" className="align-middle text-bold link-unstyled">Donec volutpat tristique laoreet Pellentesque sed purus libero.</a>
                                  </p>
                                  <small className="text-muted">In ac turpis vitae ante pretium cursus. Suspendisse nisl arcu, venenatis elementum lacinia sed.
                                     <br/>yesterday - <a href="#" className="text-bold">harperray</a>
                                  </small>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                </div>
                { /* end Vote panel */ }
                { /* Vote panel */ }
                <div className="panel">
                   <div className="table-responsive">
                      <table className="table">
                         <tbody>
                            <tr>
                               <td className="b0 wd-xxs text-center">
                                  <p>
                                     <a href="#">
                                        <em className="fa fa-angle-up fa-lg"></em>
                                     </a>
                                  </p>
                                  <p>27</p>
                                  <p className="mb0">
                                     <a href="#">
                                        <em className="fa fa-angle-down fa-lg"></em>
                                     </a>
                                  </p>
                               </td>
                               <td className="b0 wd-xs hidden-xs">
                                  <a href="#">
                                     <img src="img/dummy.png" className="img-responsive thumb64" />
                                  </a>
                               </td>
                               <td className="b0">
                                  <p className="h4 mt0">
                                     <span className="label bg-gray-lighter ph-lg mr text-sm visible-lg-inline">
                                        <span className="text-muted">peding</span>
                                     </span><a href="#" className="align-middle text-bold link-unstyled">Suspendisse ullamcorper eros eget augue ultrices feugiat.</a>
                                  </p>
                                  <small className="text-muted">In ac turpis vitae ante pretium cursus. Suspendisse nisl arcu, venenatis elementum lacinia sed.
                                     <br/>3 days ago - <a href="#" className="text-bold">harperray</a>
                                  </small>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                </div>
                { /* end Vote panel */ }
                { /* Vote panel */ }
                <div className="panel">
                   <div className="table-responsive">
                      <table className="table">
                         <tbody>
                            <tr>
                               <td className="b0 wd-xxs text-center">
                                  <p>
                                     <a href="#">
                                        <em className="fa fa-angle-up fa-lg"></em>
                                     </a>
                                  </p>
                                  <p>10</p>
                                  <p className="mb0">
                                     <a href="#">
                                        <em className="fa fa-angle-down fa-lg"></em>
                                     </a>
                                  </p>
                               </td>
                               <td className="b0 wd-xs hidden-xs">
                                  <a href="#">
                                     <img src="img/dummy.png" className="img-responsive thumb64" />
                                  </a>
                               </td>
                               <td className="b0">
                                  <p className="h4 mt0">
                                     <span className="label bg-gray-lighter ph-lg mr text-sm visible-lg-inline">
                                        <span className="text-muted">news</span>
                                     </span><a href="#" className="align-middle text-bold link-unstyled">Sed porta fermentum felis in molestie.</a>
                                  </p>
                                  <small className="text-muted">In ac turpis vitae ante pretium cursus. Suspendisse nisl arcu, venenatis elementum lacinia sed.
                                     <br/>last week - <a href="#" className="text-bold">harperray</a>
                                  </small>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                </div>
                { /* end Vote panel */ }
                { /* Vote panel */ }
                <div className="panel">
                   <div className="table-responsive">
                      <table className="table">
                         <tbody>
                            <tr>
                               <td className="b0 wd-xxs text-center">
                                  <p>
                                     <a href="#">
                                        <em className="fa fa-angle-up fa-lg"></em>
                                     </a>
                                  </p>
                                  <p>5</p>
                                  <p className="mb0">
                                     <a href="#">
                                        <em className="fa fa-angle-down fa-lg"></em>
                                     </a>
                                  </p>
                               </td>
                               <td className="b0 wd-xs hidden-xs">
                                  <a href="#">
                                     <img src="img/dummy.png" className="img-responsive thumb64" />
                                  </a>
                               </td>
                               <td className="b0">
                                  <p className="h4 mt0">
                                     <span className="label bg-gray-lighter ph-lg mr text-sm visible-lg-inline">
                                        <span className="text-muted">education</span>
                                     </span><a href="#" className="align-middle text-bold link-unstyled">Aenean eu odio vitae augue elementum molestie sed quis turpis.</a>
                                  </p>
                                  <small className="text-muted">In ac turpis vitae ante pretium cursus. Suspendisse nisl arcu, venenatis elementum lacinia sed.
                                     <br/>2 weeks ago - <a href="#" className="text-bold">harperray</a>
                                  </small>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                </div>
                { /* end Vote panel */ }
                { /* Vote panel */ }
                <div className="panel">
                   <div className="table-responsive">
                      <table className="table">
                         <tbody>
                            <tr>
                               <td className="b0 wd-xxs text-center">
                                  <p>
                                     <a href="#">
                                        <em className="fa fa-angle-up fa-lg"></em>
                                     </a>
                                  </p>
                                  <p>10</p>
                                  <p className="mb0">
                                     <a href="#">
                                        <em className="fa fa-angle-down fa-lg"></em>
                                     </a>
                                  </p>
                               </td>
                               <td className="b0 wd-xs hidden-xs">
                                  <a href="#">
                                     <img src="img/dummy.png" className="img-responsive thumb64" />
                                  </a>
                               </td>
                               <td className="b0">
                                  <p className="h4 mt0">
                                     <span className="label bg-gray-lighter ph-lg mr text-sm visible-lg-inline">
                                        <span className="text-muted">programming</span>
                                     </span><a href="#" className="align-middle text-bold link-unstyled">Sed tempor lacinia tempus. Curabitur sit amet lacus id odio volutpat faucibus nec quis enim.</a>
                                  </p>
                                  <small className="text-muted">In ac turpis vitae ante pretium cursus. Suspendisse nisl arcu, venenatis elementum lacinia sed.
                                     <br/>2 months ago - <a href="#" className="text-bold">harperray</a>
                                  </small>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                </div>
                { /* end Vote panel */ }
                { /* Vote panel */ }
                <div className="panel">
                   <div className="table-responsive">
                      <table className="table">
                         <tbody>
                            <tr>
                               <td className="b0 wd-xxs text-center">
                                  <p>
                                     <a href="#">
                                        <em className="fa fa-angle-up fa-lg"></em>
                                     </a>
                                  </p>
                                  <p>-1</p>
                                  <p className="mb0">
                                     <a href="#">
                                        <em className="fa fa-angle-down fa-lg"></em>
                                     </a>
                                  </p>
                               </td>
                               <td className="b0 wd-xs hidden-xs">
                                  <a href="#">
                                     <img src="img/dummy.png" className="img-responsive thumb64" />
                                  </a>
                               </td>
                               <td className="b0">
                                  <p className="h4 mt0">
                                     <span className="label bg-gray-lighter ph-lg mr text-sm visible-lg-inline">
                                        <span className="text-muted">tech</span>
                                     </span><a href="#" className="align-middle text-bold link-unstyled">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi in leo odio.</a>
                                  </p>
                                  <small className="text-muted">In ac turpis vitae ante pretium cursus. Suspendisse nisl arcu, venenatis elementum lacinia sed.
                                     <br/>2 months ago - <a href="#" className="text-bold">harperray</a>
                                  </small>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                </div>
                { /* end Vote panel */ }
                { /* Vote panel */ }
                <div className="panel">
                   <div className="table-responsive">
                      <table className="table">
                         <tbody>
                            <tr>
                               <td className="b0 wd-xxs text-center">
                                  <p>
                                     <a href="#">
                                        <em className="fa fa-angle-up fa-lg"></em>
                                     </a>
                                  </p>
                                  <p>300</p>
                                  <p className="mb0">
                                     <a href="#">
                                        <em className="fa fa-angle-down fa-lg"></em>
                                     </a>
                                  </p>
                               </td>
                               <td className="b0 wd-xs hidden-xs">
                                  <a href="#">
                                     <img src="img/dummy.png" className="img-responsive thumb64" />
                                  </a>
                               </td>
                               <td className="b0">
                                  <p className="h4 mt0">
                                     <span className="label bg-gray-lighter ph-lg mr text-sm visible-lg-inline">
                                        <span className="text-muted">question</span>
                                     </span><a href="#" className="align-middle text-bold link-unstyled">Quisque risus ante, laoreet a sagittis quis, dignissim luctus purus.</a>
                                  </p>
                                  <small className="text-muted">In ac turpis vitae ante pretium cursus. Suspendisse nisl arcu, venenatis elementum lacinia sed.
                                     <br/>5 months ago - <a href="#" className="text-bold">harperray</a>
                                  </small>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                </div>
                { /* end Vote panel */ }
                <ul className="pagination pagination-sm">
                   <li className="active"><a href="#">1</a>
                   </li>
                   <li><a href="#">2</a>
                   </li>
                   <li><a href="#">3</a>
                   </li>
                   <li><a href="#">»</a>
                   </li>
                </ul>
            </ContentWrapper>
            );
    }

}

export default VoteLinks;
