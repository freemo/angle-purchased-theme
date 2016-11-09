import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import FormExtendedRun from './FormExtended.run';

class FormExtended extends React.Component {
    componentDidMount() {
        FormExtendedRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Form Extended
                   <small>New elements to extend the classic functions</small>
                </h3>
                { /*  START panel */ }
                <Panel header="Form elements">
                    <form method="get" action="#" className="form-horizontal">
                        <fieldset>
                            <legend>New Components</legend>
                            <div className="form-group">
                               <label className="col-sm-2 control-label">Slider
                                  <br/>
                                  <small>Classic, range and vertical</small>
                               </label>
                               <div className="col-sm-4">
                                  <input data-ui-slider="" type="text" defaultValue="" data-slider-min="5" data-slider-max="35" data-slider-step="1" data-slider-value="5" data-slider-orientation="vertical" className="slider slider-vertical" />
                                  <input data-ui-slider="" type="text" defaultValue="" data-slider-min="5" data-slider-max="35" data-slider-step="1" data-slider-value="10" data-slider-orientation="vertical" className="slider slider-vertical" />
                                  <input data-ui-slider="" type="text" defaultValue="" data-slider-min="5" data-slider-max="35" data-slider-step="1" data-slider-value="15" data-slider-orientation="vertical" className="slider slider-vertical" />
                                  <input data-ui-slider="" type="text" defaultValue="" data-slider-min="5" data-slider-max="35" data-slider-step="1" data-slider-value="20" data-slider-orientation="vertical" className="slider slider-vertical" />
                                  <input data-ui-slider="" type="text" defaultValue="" data-slider-min="5" data-slider-max="35" data-slider-step="1" data-slider-value="25" data-slider-orientation="vertical" className="slider slider-vertical" />
                                  <input data-ui-slider="" type="text" defaultValue="" data-slider-min="5" data-slider-max="35" data-slider-step="1" data-slider-value="30" data-slider-orientation="vertical" className="slider slider-vertical" />
                                  <br/>
                                  <br/>
                                  <input data-ui-slider="" type="text" defaultValue="" data-slider-min="5" data-slider-max="20" data-slider-step="1" data-slider-value="10" data-slider-orientation="horizontal" className="slider slider-horizontal" />
                                  <br/>
                                  <br/>
                                  <input id="sl2" data-ui-slider="" type="text" defaultValue="" data-slider-min="10" data-slider-max="1000" data-slider-step="5" data-slider-value="[250,750]" className="slider" />
                               </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form-group">
                                <label className="col-sm-2 control-label">Switch Small</label>
                                <Col sm={ 10 }>
                                    <label className="switch switch-sm">
                                        <input type="checkbox" defaultChecked />
                                        <em></em>
                                    </label>
                                </Col>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label">Switch</label>
                                <Col sm={ 10 }>
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked />
                                        <em></em>
                                    </label>
                                </Col>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label">Switch Large</label>
                                <Col sm={ 10 }>
                                    <label className="switch switch-lg">
                                        <input type="checkbox" defaultChecked />
                                        <em></em>
                                    </label>
                                </Col>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label">Switch Radio</label>
                                <Col sm={ 10 }>
                                    <label className="switch switch-lg">
                                        <input type="radio" defaultChecked name="radioSwitch" />
                                        <em></em>
                                    </label>
                                    <label className="switch switch-lg">
                                        <input type="radio" name="radioSwitch" />
                                        <em></em>
                                    </label>
                                </Col>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form-group mb">
                                <label className="col-sm-2 control-label">Color picker</label>
                                <Col sm={ 8 }>
                                    <Row>
                                        <Col xs={ 12 }>
                                            <p>Automatically switches from hex to rgba format when transparency is selected:</p>
                                            <input type="text" defaultValue="#5367ce" className="form-control demo-colorpicker" />
                                        </Col>
                                        <Col xs={ 12 }>
                                            <p className="mt-lg">As a component:</p>
                                            <div className="input-group colorpicker-component demo-colorpicker">
                                                <input type="text" defaultValue="#00AABB" className="form-control" />
                                                <span className="input-group-addon"><i></i>
                                       </span>
                                            </div>
                                        </Col>
                                        <Col xs={ 12 }>
                                            <p className="mt-lg">Inline mode:</p>
                                            <Row>
                                                <Col xs={ 6 }>
                                                    <div id="demo_cont" data-container="#demo_cont" data-color="rgba(150,216,62,0.55)" data-inline="true" className="demo-colorpicker"></div>
                                                </Col>
                                                <Col xs={ 6 }>
                                                    <div data-container="true" data-color="rgb(50,216,62)" data-inline="true" className="demo-colorpicker"></div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={ 12 }>
                                            <p className="mt-lg">Quick select Bootstrap colors:</p>
                                            <input id="demo_selectors" type="text" data-format="hex" defaultValue="success" className="form-control" />
                                        </Col>
                                    </Row>
                                </Col>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form-group mb">
                                <label className="col-sm-2 control-label">Chosen Groups</label>
                                <Col sm={ 10 }>
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
                                </Col>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label">Chosen Multiple</label>
                                <Col sm={ 10 }>
                                    <select multiple="multiple" className="chosen-select form-control">
                                        <option>Dallas Cowboys</option>
                                        <option>New York Giants</option>
                                        <option>Philadelphia Eagles</option>
                                        <option>Washington Redskins</option>
                                        <option>Chicago Bears</option>
                                        <option>Detroit Lions</option>
                                        <option>Green Bay Packers</option>
                                        <option>Minnesota Vikings</option>
                                        <option>Atlanta Falcons</option>
                                        <option>Carolina Panthers</option>
                                        <option>New Orleans Saints</option>
                                        <option>Tampa Bay Buccaneers</option>
                                        <option>Arizona Cardinals</option>
                                        <option>St. Louis Rams</option>
                                        <option>San Francisco 49ers</option>
                                        <option>Seattle Seahawks</option>
                                        <option>Buffalo Bills</option>
                                        <option>Miami Dolphins</option>
                                        <option>New England Patriots</option>
                                        <option>New York Jets</option>
                                        <option>Baltimore Ravens</option>
                                        <option>Cincinnati Bengals</option>
                                        <option>Cleveland Browns</option>
                                        <option>Pittsburgh Steelers</option>
                                        <option>Houston Texans</option>
                                        <option>Indianapolis Colts</option>
                                        <option>Jacksonville Jaguars</option>
                                        <option>Tennessee Titans</option>
                                        <option>Denver Broncos</option>
                                        <option>Kansas City Chiefs</option>
                                        <option>Oakland Raiders</option>
                                        <option>San Diego Chargers</option>
                                    </select>
                                </Col>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form-group">
                                <label className="col-sm-2 control-label">Masked input</label>
                                <Col sm={ 10 }>
                                    <Row>
                                        <div className="col-sm-6">
                                            <input type="text" data-masked="" data-inputmask="'mask': '999-99-999-9999-9'" placeholder="ISBN" className="form-control" />
                                            <span className="help-block">data-inputmask="'mask': '999-99-999-9999-9"'</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" data-masked="" data-inputmask="'mask': '99/99/9999'" placeholder="Date" className="form-control" />
                                            <span className="help-block">data-inputmask="'mask': '99/99/9999"'</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" data-masked="" data-inputmask="'mask': '(999) 999-9999'" placeholder="Phone number" className="form-control" />
                                            <span className="help-block">data-inputmask="'mask': '(999) 999-9999"'</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" data-masked="" data-inputmask="'mask': 'aaaa-9999-aa99-9999'" placeholder="Custom Key" className="form-control" />
                                            <span className="help-block">data-inputmask="'mask': 'aaaa-9999-aa99-9999"'</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" data-masked="" data-inputmask="'mask': '$ 999.999.999,99'" placeholder="Currency Dolar" className="form-control" />
                                            <span className="help-block">data-inputmask="'mask': '$ 999.999.999,99"'</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" data-masked="" data-inputmask="'mask': '€ 999.999.999,99'" placeholder="Currency Euro" className="form-control" />
                                            <span className="help-block">data-inputmask="'mask': '€ 999.999.999,99"'</span>
                                        </div>
                                    </Row>
                                </Col>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form-group mb">
                                <label className="col-sm-2 control-label mb">Select2</label>
                                <Col sm={ 10 }>
                                    { /*  SELECT2 */ }
                                    <select id="select2-1" className="form-control">
                                        <option defaultValue="AL">Alabama</option>
                                        <option defaultValue="AR">Arkansas</option>
                                        <option defaultValue="IL">Illinois</option>
                                        <option defaultValue="IA">Iowa</option>
                                        <option defaultValue="KS">Kansas</option>
                                        <option defaultValue="KY">Kentucky</option>
                                        <option defaultValue="LA">Louisiana</option>
                                        <option defaultValue="MN">Minnesota</option>
                                        <option defaultValue="MS">Mississippi</option>
                                        <option defaultValue="MO">Missouri</option>
                                        <option defaultValue="OK">Oklahoma</option>
                                        <option defaultValue="SD">South Dakota</option>
                                        <option defaultValue="TX">Texas</option>
                                        <option defaultValue="TN">Tennessee</option>
                                        <option defaultValue="WI">Wisconsin</option>
                                    </select>
                                    <p className="mv">Multiple</p>
                                    <select id="select2-2" className="form-control">
                                        <optgroup label="Alaskan/Hawaiian Time Zone">
                                            <option defaultValue="AK">Alaska</option>
                                            <option defaultValue="HI">Hawaii</option>
                                        </optgroup>
                                        <optgroup label="Pacific Time Zone">
                                            <option defaultValue="CA">California</option>
                                            <option defaultValue="NV">Nevada</option>
                                            <option defaultValue="OR">Oregon</option>
                                            <option defaultValue="WA">Washington</option>
                                        </optgroup>
                                        <optgroup label="Mountain Time Zone">
                                            <option defaultValue="AZ">Arizona</option>
                                            <option defaultValue="CO">Colorado</option>
                                            <option defaultValue="ID">Idaho</option>
                                            <option defaultValue="MT">Montana</option>
                                            <option defaultValue="NE">Nebraska</option>
                                            <option defaultValue="NM">New Mexico</option>
                                            <option defaultValue="ND">North Dakota</option>
                                            <option defaultValue="UT">Utah</option>
                                            <option defaultValue="WY">Wyoming</option>
                                        </optgroup>
                                        <optgroup label="Central Time Zone">
                                            <option defaultValue="AL">Alabama</option>
                                            <option defaultValue="AR">Arkansas</option>
                                            <option defaultValue="IL">Illinois</option>
                                            <option defaultValue="IA">Iowa</option>
                                            <option defaultValue="KS">Kansas</option>
                                            <option defaultValue="KY">Kentucky</option>
                                            <option defaultValue="LA">Louisiana</option>
                                            <option defaultValue="MN">Minnesota</option>
                                            <option defaultValue="MS">Mississippi</option>
                                            <option defaultValue="MO">Missouri</option>
                                            <option defaultValue="OK">Oklahoma</option>
                                            <option defaultValue="SD">South Dakota</option>
                                            <option defaultValue="TX">Texas</option>
                                            <option defaultValue="TN">Tennessee</option>
                                            <option defaultValue="WI">Wisconsin</option>
                                        </optgroup>
                                        <optgroup label="Eastern Time Zone">
                                            <option defaultValue="CT">Connecticut</option>
                                            <option defaultValue="DE">Delaware</option>
                                            <option defaultValue="FL">Florida</option>
                                            <option defaultValue="GA">Georgia</option>
                                            <option defaultValue="IN">Indiana</option>
                                            <option defaultValue="ME">Maine</option>
                                            <option defaultValue="MD">Maryland</option>
                                            <option defaultValue="MA">Massachusetts</option>
                                            <option defaultValue="MI">Michigan</option>
                                            <option defaultValue="NH">New Hampshire</option>
                                            <option defaultValue="NJ">New Jersey</option>
                                            <option defaultValue="NY">New York</option>
                                            <option defaultValue="NC">North Carolina</option>
                                            <option defaultValue="OH">Ohio</option>
                                            <option defaultValue="PA">Pennsylvania</option>
                                            <option defaultValue="RI">Rhode Island</option>
                                            <option defaultValue="SC">South Carolina</option>
                                            <option defaultValue="VT">Vermont</option>
                                            <option defaultValue="VA">Virginia</option>
                                            <option defaultValue="WV">West Virginia</option>
                                        </optgroup>
                                    </select>
                                    <p className="mv">Multiple Pills</p>
                                    <select id="select2-3" multiple="multiple" className="form-control">
                                        <optgroup label="Alaskan/Hawaiian Time Zone">
                                            <option defaultValue="AK" defaultValue>Alaska</option>
                                            <option defaultValue="HI">Hawaii</option>
                                        </optgroup>
                                        <optgroup label="Pacific Time Zone">
                                            <option defaultValue="CA">California</option>
                                            <option defaultValue="NV">Nevada</option>
                                            <option defaultValue="OR">Oregon</option>
                                            <option defaultValue="WA">Washington</option>
                                        </optgroup>
                                        <optgroup label="Mountain Time Zone">
                                            <option defaultValue="AZ">Arizona</option>
                                            <option defaultValue="CO">Colorado</option>
                                            <option defaultValue="ID">Idaho</option>
                                            <option defaultValue="MT">Montana</option>
                                            <option defaultValue="NE">Nebraska</option>
                                            <option defaultValue="NM">New Mexico</option>
                                            <option defaultValue="ND">North Dakota</option>
                                            <option defaultValue="UT">Utah</option>
                                            <option defaultValue="WY">Wyoming</option>
                                        </optgroup>
                                        <optgroup label="Central Time Zone">
                                            <option defaultValue="AL">Alabama</option>
                                            <option defaultValue="AR">Arkansas</option>
                                            <option defaultValue="IL">Illinois</option>
                                            <option defaultValue="IA">Iowa</option>
                                            <option defaultValue="KS">Kansas</option>
                                            <option defaultValue="KY">Kentucky</option>
                                            <option defaultValue="LA">Louisiana</option>
                                            <option defaultValue="MN">Minnesota</option>
                                            <option defaultValue="MS">Mississippi</option>
                                            <option defaultValue="MO">Missouri</option>
                                            <option defaultValue="OK">Oklahoma</option>
                                            <option defaultValue="SD">South Dakota</option>
                                            <option defaultValue="TX">Texas</option>
                                            <option defaultValue="TN">Tennessee</option>
                                            <option defaultValue="WI">Wisconsin</option>
                                        </optgroup>
                                        <optgroup label="Eastern Time Zone">
                                            <option defaultValue="CT">Connecticut</option>
                                            <option defaultValue="DE">Delaware</option>
                                            <option defaultValue="FL">Florida</option>
                                            <option defaultValue="GA">Georgia</option>
                                            <option defaultValue="IN">Indiana</option>
                                            <option defaultValue="ME">Maine</option>
                                            <option defaultValue="MD">Maryland</option>
                                            <option defaultValue="MA">Massachusetts</option>
                                            <option defaultValue="MI">Michigan</option>
                                            <option defaultValue="NH">New Hampshire</option>
                                            <option defaultValue="NJ">New Jersey</option>
                                            <option defaultValue="NY">New York</option>
                                            <option defaultValue="NC">North Carolina</option>
                                            <option defaultValue="OH">Ohio</option>
                                            <option defaultValue="PA">Pennsylvania</option>
                                            <option defaultValue="RI">Rhode Island</option>
                                            <option defaultValue="SC">South Carolina</option>
                                            <option defaultValue="VT">Vermont</option>
                                            <option defaultValue="VA">Virginia</option>
                                            <option defaultValue="WV">West Virginia</option>
                                        </optgroup>
                                    </select>
                                    <p className="mv">Placeholders</p>
                                    <select id="select2-4" className="form-control">
                                        <optgroup label="Alaskan/Hawaiian Time Zone">
                                            <option defaultValue="AK">Alaska</option>
                                            <option defaultValue="HI">Hawaii</option>
                                        </optgroup>
                                        <optgroup label="Pacific Time Zone">
                                            <option defaultValue="CA">California</option>
                                            <option defaultValue="NV">Nevada</option>
                                            <option defaultValue="OR">Oregon</option>
                                            <option defaultValue="WA">Washington</option>
                                        </optgroup>
                                        <optgroup label="Mountain Time Zone">
                                            <option defaultValue="AZ">Arizona</option>
                                            <option defaultValue="CO">Colorado</option>
                                            <option defaultValue="ID">Idaho</option>
                                            <option defaultValue="MT">Montana</option>
                                            <option defaultValue="NE">Nebraska</option>
                                            <option defaultValue="NM">New Mexico</option>
                                            <option defaultValue="ND">North Dakota</option>
                                            <option defaultValue="UT">Utah</option>
                                            <option defaultValue="WY">Wyoming</option>
                                        </optgroup>
                                    </select>
                                    { /*  END SELECT2 */ }
                                </Col>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form-group mb">
                                <label className="col-sm-2 control-label mb">DateTimePicker</label>
                                <Col sm={ 10 }>
                                    <div id="datetimepicker1" className="input-group date">
                                        <input type="text" className="form-control" />
                                        <span className="input-group-addon">
                                    <span className="fa fa-calendar"></span>
                                        </span>
                                    </div>
                                </Col>
                            </div>
                            <div className="form-group mb">
                                <label className="col-sm-2 control-label mb">Time Picker</label>
                                <Col sm={ 10 }>
                                    <div id="datetimepicker2" className="input-group date">
                                        <input type="text" className="form-control" />
                                        <span className="input-group-addon">
                                    <span className="fa fa-clock-o"></span>
                                        </span>
                                    </div>
                                </Col>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form-group">
                                <label className="col-sm-2 control-label">Tags input
                                    <span className="text-sm text-muted">Type and press Enter</span>
                                </label>
                                <Col sm={ 10 }>
                                    <input type="text" data-role="tagsinput" defaultValue="Amsterdam,Washington,Sydney,Beijing,Cairo" className="form-control" />
                                </Col>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form-group">
                                <label className="col-sm-2 control-label">File input</label>
                                <Col sm={ 10 }>
                                    <input type="file" data-classbutton="btn btn-default" data-classinput="form-control inline" className="form-control filestyle" />
                                </Col>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form-group">
                                <label className="col-sm-2 control-label">Block Note Editor</label>
                                <Col sm={ 10 }>
                                    <Panel>
                                        <textarea rows="10" className="form-control note-editor"></textarea>
                                    </Panel>
                                    <p>With margin</p>
                                    <Panel>
                                        <textarea rows="10" className="form-control note-editor note-editor-margin"></textarea>
                                    </Panel>
                                </Col>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form-group">
                                <label className="col-sm-2 control-label">Simple wysiwyg</label>
                                <Col sm={ 10 }>
                                    <div data-role="editor-toolbar" data-target="#editor" className="btn-toolbar btn-editor">
                                        <div className="btn-group dropdown">
                                            <a data-toggle="dropdown" title="Font" className="btn btn-default">
                                                <em className="fa fa-font"></em><b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="" data-edit="fontName Arial" style={ {    fontFamily: 'Arial'} }>Arial</a>
                                                </li>
                                                <li><a href="" data-edit="fontName Sans" style={ {    fontFamily: 'Sans'} }>Sans</a>
                                                </li>
                                                <li><a href="" data-edit="fontName Serif" style={ {    fontFamily: 'Serif'} }>Serif</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group dropdown">
                                            <a data-toggle="dropdown" title="Font Size" className="btn btn-default">
                                                <em className="fa fa-text-height"></em>&nbsp;<b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="" data-edit="fontSize 5" style={ {    fontSize: "24px"} }>Huge</a>
                                                </li>
                                                <li><a href="" data-edit="fontSize 3" style={ {    fontSize: "18px"} }>Normal</a>
                                                </li>
                                                <li><a href="" data-edit="fontSize 1" style={ {    fontSize: "14px"} }>Small</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <a data-edit="bold" data-toggle="tooltip" title="Bold (Ctrl/Cmd+B)" className="btn btn-default">
                                                <em className="fa fa-bold"></em>
                                            </a>
                                            <a data-edit="italic" data-toggle="tooltip" title="Italic (Ctrl/Cmd+I)" className="btn btn-default">
                                                <em className="fa fa-italic"></em>
                                            </a>
                                            <a data-edit="strikethrough" data-toggle="tooltip" title="Strikethrough" className="btn btn-default">
                                                <em className="fa fa-strikethrough"></em>
                                            </a>
                                            <a data-edit="underline" data-toggle="tooltip" title="Underline (Ctrl/Cmd+U)" className="btn btn-default">
                                                <em className="fa fa-underline"></em>
                                            </a>
                                        </div>
                                        <div className="btn-group">
                                            <a data-edit="insertunorderedlist" data-toggle="tooltip" title="Bullet list" className="btn btn-default">
                                                <em className="fa fa-list-ul"></em>
                                            </a>
                                            <a data-edit="insertorderedlist" data-toggle="tooltip" title="Number list" className="btn btn-default">
                                                <em className="fa fa-list-ol"></em>
                                            </a>
                                            <a data-edit="outdent" data-toggle="tooltip" title="Reduce indent (Shift+Tab)" className="btn btn-default">
                                                <em className="fa fa-dedent"></em>
                                            </a>
                                            <a data-edit="indent" data-toggle="tooltip" title="Indent (Tab)" className="btn btn-default">
                                                <em className="fa fa-indent"></em>
                                            </a>
                                        </div>
                                        <div className="btn-group">
                                            <a data-edit="justifyleft" data-toggle="tooltip" title="Align Left (Ctrl/Cmd+L)" className="btn btn-default">
                                                <em className="fa fa-align-left"></em>
                                            </a>
                                            <a data-edit="justifycenter" data-toggle="tooltip" title="Center (Ctrl/Cmd+E)" className="btn btn-default">
                                                <em className="fa fa-align-center"></em>
                                            </a>
                                            <a data-edit="justifyright" data-toggle="tooltip" title="Align Right (Ctrl/Cmd+R)" className="btn btn-default">
                                                <em className="fa fa-align-right"></em>
                                            </a>
                                            <a data-edit="justifyfull" data-toggle="tooltip" title="Justify (Ctrl/Cmd+J)" className="btn btn-default">
                                                <em className="fa fa-align-justify"></em>
                                            </a>
                                        </div>
                                        <div className="btn-group dropdown">
                                            <a data-toggle="dropdown" title="Hyperlink" className="btn btn-default">
                                                <em className="fa fa-link"></em>
                                            </a>
                                            <div className="dropdown-menu">
                                                <div className="input-group ml-xs mr-xs">
                                                    <input id="LinkInput" placeholder="URL" type="text" data-edit="createLink" className="form-control input-sm" />
                                                    <div className="input-group-btn">
                                                        <button type="button" className="btn btn-sm btn-default">Add</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <a data-edit="unlink" data-toggle="tooltip" title="Remove Hyperlink" className="btn btn-default">
                                                <em className="fa fa-cut"></em>
                                            </a>
                                        </div>
                                        <div className="btn-group">
                                            <a id="pictureBtn" data-toggle="tooltip" title="Insert picture (or just drag &amp; drop)" className="btn btn-default">
                                                <em className="fa fa-picture-o"></em>
                                            </a>
                                            <input type="file" data-edit="insertImage" style={ {    position: "absolute",    opacity: "0",    width: "41px",    height: "34px"} } />
                                        </div>
                                        <div className="btn-group pull-right">
                                            <a data-edit="undo" data-toggle="tooltip" title="Undo (Ctrl/Cmd+Z)" className="btn btn-default">
                                                <em className="fa fa-undo"></em>
                                            </a>
                                            <a data-edit="redo" data-toggle="tooltip" title="Redo (Ctrl/Cmd+Y)" className="btn btn-default">
                                                <em className="fa fa-repeat"></em>
                                            </a>
                                        </div>
                                    </div>
                                    <div style={ {    overflow: "scroll",    height: "250px",    maxHeight: "250px"} } className="form-control wysiwyg mt-lg">Type something ...</div>
                                </Col>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form-group">
                                <div className="col-sm-4 col-sm-offset-2">
                                    <button type="submit" className="btn btn-default">Cancel</button>
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </Panel>
                { /*  END panel */ }
            </ContentWrapper>
            );
    }

}

export default FormExtended;
