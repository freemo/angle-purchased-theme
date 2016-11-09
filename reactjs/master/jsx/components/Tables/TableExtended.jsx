import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table, Pagination } from 'react-bootstrap';
import TableExtendedRun from './TableExtended.run';

class TableExtended extends React.Component {
    componentDidMount() {
        TableExtendedRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Tables
                               <small>A showcase of different components inside tables</small>
                            </h3>
                { /* START panel */ }
                <div className="panel panel-default">
                    <div className="panel-heading">Demo Table #1</div>
                    { /* START table-responsive */ }
                    <Table id="table-ext-1" responsive bordered hover>
                        <thead>
                            <tr>
                                <th>UID</th>
                                <th>Picture</th>
                                <th>Username</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Profile</th>
                                <th>Last Login</th>
                                <th data-check-all="data-check-all">
                                    <div data-toggle="tooltip" data-title="Check All" className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" />
                                            <em className="fa fa-check"></em>
                                        </label>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <div className="media">
                                        <img src="img/user/01.jpg" alt="Image" className="img-responsive img-circle" />
                                    </div>
                                </td>
                                <td>@twitter</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>mail@example.com</td>
                                <td className="text-center">
                                    <div data-label="25%" className="radial-bar radial-bar-25 radial-bar-xs"></div>
                                </td>
                                <td>1 week</td>
                                <td>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" />
                                            <em className="fa fa-check"></em>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <div className="media">
                                        <img src="img/user/02.jpg" alt="Image" className="img-responsive img-circle" />
                                    </div>
                                </td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>mail@example.com</td>
                                <td className="text-center">
                                    <div data-label="50%" className="radial-bar radial-bar-50 radial-bar-xs"></div>
                                </td>
                                <td>25 minutes</td>
                                <td>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" />
                                            <em className="fa fa-check"></em>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <div className="media">
                                        <img src="img/user/03.jpg" alt="Image" className="img-responsive img-circle" />
                                    </div>
                                </td>
                                <td>@fat</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>mail@example.com</td>
                                <td className="text-center">
                                    <div data-label="80%" className="radial-bar radial-bar-80 radial-bar-xs"></div>
                                </td>
                                <td>10 hours</td>
                                <td>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" />
                                            <em className="fa fa-check"></em>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    { /* END table-responsive */ }
                    <div className="panel-footer">
                        <Row>
                            <Col lg={ 2 }>
                                <div className="input-group">
                                    <input type="text" placeholder="Search" className="input-sm form-control" />
                                    <span className="input-group-btn">
                                              <button type="button" className="btn btn-sm btn-default">Search</button>
                                           </span>
                                </div>
                            </Col>
                            <Col lg={ 8 }></Col>
                            <Col lg={ 2 }>
                                <div className="input-group pull-right">
                                    <select className="input-sm form-control">
                                        <option value="0">Bulk action</option>
                                        <option value="1">Delete</option>
                                        <option value="2">Clone</option>
                                        <option value="3">Export</option>
                                    </select>
                                    <span className="input-group-btn">
                                              <button className="btn btn-sm btn-default">Apply</button>
                                           </span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                { /* END panel */ }
                { /* START panel */ }
                <div className="panel panel-default">
                    <div className="panel-heading">Demo Table #2</div>
                    { /* START table-responsive */ }
                    <Table id="table-ext-2" responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th data-check-all="data-check-all">
                                    <div data-toggle="tooltip" data-title="Check All" className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" />
                                            <em className="fa fa-check"></em>
                                        </label>
                                    </div>
                                </th>
                                <th>Description</th>
                                <th>Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" />
                                            <em className="fa fa-check"></em>
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div className="media">
                                        <a href="#" className="pull-left">
                                            <img src="img/user/01.jpg" alt="" className="media-object img-responsive img-circle" />
                                        </a>
                                        <div className="media-body">
                                            <div className="pull-right badge baed-info">admin</div>
                                            <h4 className="media-heading">Holly Wallace</h4>
                                            <p>Username: holly123</p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus
                                            odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                                            felis in faucibus.</div>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span></span>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" />
                                            <em className="fa fa-check"></em>
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div className="media">
                                        <a href="#" className="pull-left">
                                            <img src="img/user/03.jpg" alt="" className="media-object img-responsive img-circle" />
                                        </a>
                                        <div className="media-body">
                                            <div className="pull-right badge baed-info">writer</div>
                                            <h4 className="media-heading">Alexis Foster</h4>
                                            <p>Username: ali89</p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus
                                            odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                                            felis in faucibus.</div>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked />
                                        <span></span>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" />
                                            <em className="fa fa-check"></em>
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div className="media">
                                        <a href="#" className="pull-left">
                                            <img src="img/user/05.jpg" alt="" className="media-object img-responsive img-circle" />
                                        </a>
                                        <div className="media-body">
                                            <div className="pull-right badge baed-info">editor</div>
                                            <h4 className="media-heading">Mario Miles</h4>
                                            <p>Username: mariomiles</p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras
                                            purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                                            congue felis in faucibus.</div>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked />
                                        <span></span>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    { /* END table-responsive */ }
                    <div className="panel-footer">
                        <Row>
                            <Col lg={ 2 }>
                                <div className="input-group pull-right">
                                    <select className="input-sm form-control">
                                        <option value="0">Bulk action</option>
                                        <option value="1">Delete</option>
                                        <option value="2">Clone</option>
                                        <option value="3">Export</option>
                                    </select>
                                    <span className="input-group-btn">
                                              <button className="btn btn-sm btn-default">Apply</button>
                                           </span>
                                </div>
                            </Col>
                            <Col lg={ 8 }></Col>
                            <Col lg={ 2 } className="text-right">
                              <Pagination prev next items={3} maxButtons={3} bsSize="small" />
                            </Col>
                        </Row>
                    </div>
                </div>
                { /* END panel */ }
                { /* START row */ }
                <Row>
                    <Col lg={ 6 }>
                        { /* START panel */ }
                        <Panel header="Demo Table #3">
                            { /* START table-responsive */ }
                            <Table id="table-ext-3" responsive striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Task name</th>
                                        <th>Progress</th>
                                        <th>Deadline</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Nunc luctus, quam non condimentum ornare</td>
                                        <td>
                                            <div className="progress progress-striped progress-xs">
                                                <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-success progress-80">
                                                    <span className="sr-only">80% Complete</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>05/05/2014</td>
                                    </tr>
                                    <tr>
                                        <td>Integer in convallis felis.</td>
                                        <td>
                                            <div className="progress progress-striped progress-xs">
                                                <div role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-danger progress-20">
                                                    <span className="sr-only">20% Complete</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>15/05/2014</td>
                                    </tr>
                                    <tr>
                                        <td>Nullam sit amet magna vestibulum libero dapibus iaculis.</td>
                                        <td>
                                            <div className="progress progress-striped progress-xs">
                                                <div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-info progress-50">
                                                    <span className="sr-only">50% Complete</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>05/10/2014</td>
                                    </tr>
                                </tbody>
                            </Table>
                            { /* END table-responsive */ }
                        </Panel>
                        { /* END panel */ }
                    </Col>
                    <Col lg={ 6 }>
                        { /* START panel */ }
                        <Panel header="Demo Table #4">
                            { /* START table-responsive */ }
                            <Table responsive striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Project</th>
                                        <th>Activity</th>
                                        <th>Completion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Bootstrap 5.x</td>
                                        <td>
                                            <div data-sparkline="" data-bar-color="#5d9cec" data-height="20" data-bar-width="5" data-bar-spacing="2" data-values="1,4,4,7,5,9,10" data-resize="true"></div>
                                        </td>
                                        <td>
                                            <div className="label label-danger">Canceled</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Web Engine</td>
                                        <td>
                                            <div data-sparkline="" data-bar-color="#7266ba" data-height="20" data-bar-width="5" data-bar-spacing="2" data-values="1,4,4,10,5,9,2" data-resize="true"></div>
                                        </td>
                                        <td>
                                            <div className="label label-success">Complete</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Nullam sit amet</td>
                                        <td>
                                            <div data-sparkline="" data-bar-color="#23b7e5" data-height="20" data-bar-width="5" data-bar-spacing="2" data-values="1,4,4,7,5,9,4" data-resize="true"></div>
                                        </td>
                                        <td>
                                            <div className="label label-warning">Delayed</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            { /* END table-responsive */ }
                        </Panel>
                        { /* END panel */ }
                    </Col>
                </Row>
                { /* END row */ }
            </ContentWrapper>
            );
    }

}

export default TableExtended;
