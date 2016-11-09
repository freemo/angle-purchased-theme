import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Tab, Tabs } from 'react-bootstrap';

class EcommerceProductView extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 1
        };
    }

    handleSelect(key) {
        this.setState({
            key
        });
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">Product #000123</div>
                <form className="panel">
                    <Tabs activeKey={ this.state.key } onSelect={ this.handleSelect.bind(this) } justified id="tabID">
                        <Tab eventKey={ 1 } title="Product Edit">
                            <fieldset>
                                <div className="form-group">
                                    <label className="col-md-2 control-label">Name:</label>
                                    <div className="col-md-10">
                                        <input type="text" placeholder="Product name.." className="form-control" />
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <div className="form-group">
                                    <label className="col-md-2 control-label">Description:</label>
                                    <div className="col-md-10">
                                        <textarea cols="5" placeholder="Short description.." className="form-control"></textarea>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <div className="form-group">
                                    <label className="col-md-2 control-label">Price:</label>
                                    <div className="col-md-10">
                                        <input type="text" placeholder="$ 123.20" className="form-control" />
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <div className="form-group">
                                    <label className="col-md-2 control-label">Quantity:</label>
                                    <div className="col-md-10">
                                        <input type="number" placeholder="0" min="0" className="form-control" />
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <div className="form-group">
                                    <label className="col-md-2 control-label">Tax :</label>
                                    <div className="col-md-10">
                                        <input type="text" placeholder="20%" className="form-control" />
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <div className="form-group">
                                    <label className="col-md-2 control-label">Status:</label>
                                    <div className="col-md-10">
                                        <select className="form-control">
                                            <option value="">Select..</option>
                                            <option value="0">Public</option>
                                            <option value="1">Pending</option>
                                        </select>
                                    </div>
                                </div>
                            </fieldset>
                        </Tab>
                        <Tab eventKey={ 2 } title="SEO Metadata">
                            <fieldset>
                                <div className="form-group">
                                    <label className="col-md-2 control-label">Title</label>
                                    <div className="col-md-10">
                                        <input type="text" placeholder="Brief description.." className="form-control" />
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <div className="form-group">
                                    <label className="col-md-2 control-label">Description</label>
                                    <div className="col-md-10">
                                        <textarea rows="5" placeholder="Max 255 characters..." className="form-control"></textarea>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <div className="form-group">
                                    <label className="col-md-2 control-label">Keywords</label>
                                    <div className="col-md-10">
                                        <textarea rows="5" placeholder="Max 1000 characters..." className="form-control"></textarea>
                                    </div>
                                </div>
                            </fieldset>
                        </Tab>
                        <Tab eventKey={ 3 } title="Pictures">
                            <div className="row mb-lg">
                                <div className="col-xs-3">
                                    <strong>Preview</strong>
                                </div>
                                <div className="col-xs-9">
                                    <strong>Details</strong>
                                </div>
                            </div>
                            <div className="row mb-lg pb-lg bb">
                                <div className="col-xs-6 col-sm-3">
                                    <a href="#" title="Product 1">
                                        <img src="img/bg7.jpg" alt="Product 1" className="img-responsive" />
                                    </a>
                                </div>
                                <div className="col-xs-6 col-sm-9">
                                    <fieldset>
                                        <div className="form-group">
                                            <input type="text" placeholder="Brief description.." className="form-control" />
                                        </div>
                                    </fieldset>
                                    <p>
                                        <strong>Picture type</strong>
                                    </p>
                                    <div className="radio c-radio c-radio-nofont">
                                        <label>
                                            <input type="radio" name="prod1-pic" value="option1" checked="" />
                                            <span></span>Primary</label>
                                    </div>
                                    <div className="radio c-radio c-radio-nofont">
                                        <label>
                                            <input type="radio" name="prod1-pic" value="option2" />
                                            <span></span>Thumbnail</label>
                                    </div>
                                    <div className="radio c-radio c-radio-nofont">
                                        <label>
                                            <input type="radio" name="prod1-pic" value="option3" />
                                            <span></span>Gallery</label>
                                    </div>
                                    <div className="text-right">
                                        <button type="button" className="btn btn-sm btn-danger">
                                            <em className="fa fa-times-circle fa-fw"></em>Remove</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-lg pb-lg bb">
                                <div className="col-xs-6 col-sm-3">
                                    <a href="#" title="Product 2">
                                        <img src="img/bg8.jpg" alt="Product 1" className="img-responsive" />
                                    </a>
                                </div>
                                <div className="col-xs-6 col-sm-9">
                                    <fieldset>
                                        <div className="form-group">
                                            <input type="text" placeholder="Brief description.." className="form-control" />
                                        </div>
                                    </fieldset>
                                    <p>
                                        <strong>Picture type</strong>
                                    </p>
                                    <div className="radio c-radio c-radio-nofont">
                                        <label>
                                            <input type="radio" name="prod2-pic" value="option1" checked="" />
                                            <span></span>Primary</label>
                                    </div>
                                    <div className="radio c-radio c-radio-nofont">
                                        <label>
                                            <input type="radio" name="prod2-pic" value="option2" />
                                            <span></span>Thumbnail</label>
                                    </div>
                                    <div className="radio c-radio c-radio-nofont">
                                        <label>
                                            <input type="radio" name="prod2-pic" value="option3" />
                                            <span></span>Gallery</label>
                                    </div>
                                    <div className="text-right">
                                        <button type="button" className="btn btn-sm btn-danger">
                                            <em className="fa fa-times-circle fa-fw"></em>Remove</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-lg pb-lg">
                                <div className="col-xs-6 col-sm-3">
                                    <a href="#" title="Product 3">
                                        <img src="img/bg10.jpg" alt="Product 1" className="img-responsive" />
                                    </a>
                                </div>
                                <div className="col-xs-6 col-sm-9">
                                    <fieldset>
                                        <div className="form-group">
                                            <input type="text" placeholder="Brief description.." className="form-control" />
                                        </div>
                                    </fieldset>
                                    <p>
                                        <strong>Picture type</strong>
                                    </p>
                                    <div className="radio c-radio c-radio-nofont">
                                        <label>
                                            <input type="radio" name="prod3-pic" value="option1" checked="" />
                                            <span></span>Primary</label>
                                    </div>
                                    <div className="radio c-radio c-radio-nofont">
                                        <label>
                                            <input type="radio" name="prod3-pic" value="option2" />
                                            <span></span>Thumbnail</label>
                                    </div>
                                    <div className="radio c-radio c-radio-nofont">
                                        <label>
                                            <input type="radio" name="prod3-pic" value="option3" />
                                            <span></span>Gallery</label>
                                    </div>
                                    <div className="text-right">
                                        <button type="button" className="btn btn-sm btn-danger">
                                            <em className="fa fa-times-circle fa-fw"></em>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </form>
                <div className="text-right mt-lg">
                    <Button bsStyle="warning">Discard</Button>
                    <Button bsStyle="success">Save</Button>
                </div>
            </ContentWrapper>
            );
    }

}

export default EcommerceProductView;
