import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table, Pagination } from 'react-bootstrap';
import SearchRun from './Search.run';

class Search extends React.Component {
    componentDidMount() {
        SearchRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Search
                   <small>Search and filter results</small>
                </h3>
                <Row>
                    <Col lg={ 9 }>
                        <div className="form-group mb-xl">
                            <input type="text" placeholder="Search products, people, apps, etc." className="form-control mb" />
                            <div className="clearfix">
                                <button type="button" className="pull-left btn btn-default">Search</button>
                                <div className="pull-right">
                                    <label className="checkbox-inline c-checkbox">
                                        <input id="inlineCheckbox10" type="checkbox" defaultValue="option1" />
                                        <em className="fa fa-check"></em>Products</label>
                                    <label className="checkbox-inline c-checkbox">
                                        <input id="inlineCheckbox20" type="checkbox" defaultValue="option2" />
                                        <em className="fa fa-check"></em>People</label>
                                    <label className="checkbox-inline c-checkbox">
                                        <input id="inlineCheckbox30" type="checkbox" defaultValue="option3" />
                                        <em className="fa fa-check"></em>Apps</label>
                                </div>
                            </div>
                        </div>
                        { /* START panel */ }
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <a href="#" data-tool="panel-refresh" data-toggle="tooltip" title="Refresh Panel" className="pull-right">
                                    <em className="fa fa-refresh"></em>
                                </a>Search Results</div>
                            { /* START table-responsive */ }
                            <Table responsive striped bordered hover>
                                <thead>
                                    <tr>
                                        <th data-check-all="">
                                            <div data-toggle="tooltip" data-title="Check All" className="checkbox c-checkbox">
                                                <label>
                                                    <input type="checkbox" />
                                                    <em className="fa fa-check"></em>
                                                </label>
                                            </div>
                                        </th>
                                        <th>Description</th>
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
                                            <div className="media-box">
                                                <a href="#" className="pull-left">
                                                    <img src="img/dummy.png" alt="" className="media-box-object img-responsive img-rounded thumb64" />
                                                </a>
                                                <div className="media-box-body">
                                                    <div className="pull-right btn btn-info btn-sm">View</div>
                                                    <h4 className="media-box-heading">Product 1</h4>
                                                    <small className="text-muted">Category1, Category2</small>
                                                    <p>Sed gravida auctor odio. Sed viverra rutrum hendrerit. Praesent dapibus justo dolor. Suspendisse rhoncus consectetur eros
                                                        vehicula accumsan.</p>
                                                </div>
                                            </div>
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
                                            <div className="media-box">
                                                <a href="#" className="pull-left">
                                                    <img src="img/dummy.png" alt="" className="media-box-object img-responsive img-rounded thumb64" />
                                                </a>
                                                <div className="media-box-body">
                                                    <div className="pull-right btn btn-info btn-sm">View</div>
                                                    <h4 className="media-box-heading">Product 2</h4>
                                                    <small className="text-muted">Category1, Category2</small>
                                                    <p>Sed gravida auctor odio. Sed viverra rutrum hendrerit. Praesent dapibus justo dolor. Suspendisse rhoncus consectetur eros
                                                        vehicula accumsan.</p>
                                                </div>
                                            </div>
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
                                            <div className="media-box">
                                                <a href="#" className="pull-left">
                                                    <img src="img/dummy.png" alt="" className="media-box-object img-responsive img-rounded thumb64" />
                                                </a>
                                                <div className="media-box-body">
                                                    <div className="pull-right btn btn-info btn-sm">View</div>
                                                    <h4 className="media-box-heading">Product 3</h4>
                                                    <small className="text-muted">Category1, Category2</small>
                                                    <p>Sed gravida auctor odio. Sed viverra rutrum hendrerit. Praesent dapibus justo dolor. Suspendisse rhoncus consectetur eros
                                                        vehicula accumsan.</p>
                                                </div>
                                            </div>
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
                                            <div className="media-box">
                                                <a href="#" className="pull-left">
                                                    <img src="img/dummy.png" alt="" className="media-box-object img-responsive img-rounded thumb64" />
                                                </a>
                                                <div className="media-box-body">
                                                    <div className="pull-right btn btn-info btn-sm">View</div>
                                                    <h4 className="media-box-heading">Product 4</h4>
                                                    <small className="text-muted">Category1, Category2</small>
                                                    <p>Sed gravida auctor odio. Sed viverra rutrum hendrerit. Praesent dapibus justo dolor. Suspendisse rhoncus consectetur eros
                                                        vehicula accumsan.</p>
                                                </div>
                                            </div>
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
                                            <div className="media-box">
                                                <a href="#" className="pull-left">
                                                    <img src="img/dummy.png" alt="" className="media-box-object img-responsive img-rounded thumb64" />
                                                </a>
                                                <div className="media-box-body">
                                                    <div className="pull-right btn btn-info btn-sm">View</div>
                                                    <h4 className="media-box-heading">Product 5</h4>
                                                    <small className="text-muted">Category1, Category2</small>
                                                    <p>Sed gravida auctor odio. Sed viverra rutrum hendrerit. Praesent dapibus justo dolor. Suspendisse rhoncus consectetur eros
                                                        vehicula accumsan.</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            { /* END table-responsive */ }
                            <div className="panel-footer">
                                <Row>
                                    <Col lg={ 2 }>
                                        <button className="btn btn-sm btn-default">Clear</button>
                                    </Col>
                                    <Col lg={ 8 }></Col>
                                    <Col lg={ 2 } className="text-right">
                                        <Pagination bsSize="small" prev next items={ 3 } maxButtons={ 5 } />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        { /* END panel */ }
                    </Col>
                    <Col lg={ 3 }>
                        <h3 className="m0 pb-lg">Filters</h3>
                        <div className="form-group mb-xl">
                            <label className="control-label mb">by Text</label>
                            <br/>
                            <select className="chosen-select input-md form-control">
                                <optgroup label="NFC EAST">
                                    <option>Dallas Cowboys</option>
                                    <option>New York Giants</option>
                                    <option>Philadelphia Eagles</option>
                                    <option>Washington Redskins</option>
                                </optgroup>
                                <optgroup label="NFC NORTH">
                                    <option>Chicago Bears</option>
                                    <option>Detroit Lions</option>
                                    <option>Green Bay Packers</option>
                                    <option>Minnesota Vikings</option>
                                </optgroup>
                                <optgroup label="NFC SOUTH">
                                    <option>Atlanta Falcons</option>
                                    <option>Carolina Panthers</option>
                                    <option>New Orleans Saints</option>
                                    <option>Tampa Bay Buccaneers</option>
                                </optgroup>
                                <optgroup label="NFC WEST">
                                    <option>Arizona Cardinals</option>
                                    <option>St. Louis Rams</option>
                                    <option>San Francisco 49ers</option>
                                    <option>Seattle Seahawks</option>
                                </optgroup>
                                <optgroup label="AFC EAST">
                                    <option>Buffalo Bills</option>
                                    <option>Miami Dolphins</option>
                                    <option>New England Patriots</option>
                                    <option>New York Jets</option>
                                </optgroup>
                                <optgroup label="AFC NORTH">
                                    <option>Baltimore Ravens</option>
                                    <option>Cincinnati Bengals</option>
                                    <option>Cleveland Browns</option>
                                    <option>Pittsburgh Steelers</option>
                                </optgroup>
                                <optgroup label="AFC SOUTH">
                                    <option>Houston Texans</option>
                                    <option>Indianapolis Colts</option>
                                    <option>Jacksonville Jaguars</option>
                                    <option>Tennessee Titans</option>
                                </optgroup>
                                <optgroup label="AFC WEST">
                                    <option>Denver Broncos</option>
                                    <option>Kansas City Chiefs</option>
                                    <option>Oakland Raiders</option>
                                    <option>San Diego Chargers</option>
                                </optgroup>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="control-label mb">by Date</label>
                            <br/>
                            <p id="datetimepicker" className="input-group date">
                                <input type="text" className="form-control" />
                                <span className="input-group-addon">
                               <span className="fa fa-Search"></span>
                                </span>
                            </p>
                        </div>
                        <div className="form-group mb-xl">
                            <label className="control-label mb">by Range</label>
                            <br/>
                            <input id="sl2" data-ui-slider type="text" defaultValue="" data-slider-min="10" data-slider-max="1000" data-slider-step="5" data-slider-value="[250,750]" className="slider"/>
                        </div>
                        <Button bsStyle="default" bsSize="large">Apply</Button>
                    </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default Search;
