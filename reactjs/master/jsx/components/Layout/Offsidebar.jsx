import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import OffsidebarRun from './Offsidebar.run';

class Offsidebar extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 1
        };
    }

    componentDidMount() {
        OffsidebarRun();
    }

    handleSelect(key) {
        this.setState({
            key
        });
    }

    render() {
        const tabIconA = <em className="icon-equalizer fa-lg"></em>;
        const tabIconB = <em className="icon-user fa-lg"></em>;
        return (
            <aside className="offsidebar hide">
                { /* START Off Sidebar (right) */ }
                <Tabs activeKey={ this.state.key } onSelect={ this.handleSelect.bind(this) } justified id="tabID">
                    <Tab eventKey={ 1 } title={ tabIconA }>
                        <h3 className="text-center text-thin">Settings</h3>
                        <div className="p">
                            <h4 className="text-muted text-thin">Themes</h4>
                            <div className="table-grid mb">
                                <div className="col mb">
                                    <div className="setting-color">
                                        <label data-load-css="css/theme-a.css">
                                            <input type="radio" name="setting-theme" defaultChecked />
                                            <span className="icon-check"></span>
                                            <span className="split">
                                                           <span className="color bg-info"></span>
                                            <span className="color bg-info-light"></span>
                                            </span>
                                            <span className="color bg-white"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col mb">
                                    <div className="setting-color">
                                        <label data-load-css="css/theme-b.css">
                                            <input type="radio" name="setting-theme" />
                                            <span className="icon-check"></span>
                                            <span className="split">
                                                           <span className="color bg-green"></span>
                                            <span className="color bg-green-light"></span>
                                            </span>
                                            <span className="color bg-white"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col mb">
                                    <div className="setting-color">
                                        <label data-load-css="css/theme-c.css">
                                            <input type="radio" name="setting-theme" />
                                            <span className="icon-check"></span>
                                            <span className="split">
                                                           <span className="color bg-purple"></span>
                                            <span className="color bg-purple-light"></span>
                                            </span>
                                            <span className="color bg-white"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col mb">
                                    <div className="setting-color">
                                        <label data-load-css="css/theme-d.css">
                                            <input type="radio" name="setting-theme" />
                                            <span className="icon-check"></span>
                                            <span className="split">
                                                           <span className="color bg-danger"></span>
                                            <span className="color bg-danger-light"></span>
                                            </span>
                                            <span className="color bg-white"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="table-grid mb">
                                <div className="col mb">
                                    <div className="setting-color">
                                        <label data-load-css="css/theme-e.css">
                                            <input type="radio" name="setting-theme" />
                                            <span className="icon-check"></span>
                                            <span className="split">
                                                           <span className="color bg-info-dark"></span>
                                            <span className="color bg-info"></span>
                                            </span>
                                            <span className="color bg-gray-dark"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col mb">
                                    <div className="setting-color">
                                        <label data-load-css="css/theme-f.css">
                                            <input type="radio" name="setting-theme" />
                                            <span className="icon-check"></span>
                                            <span className="split">
                                                           <span className="color bg-green-dark"></span>
                                            <span className="color bg-green"></span>
                                            </span>
                                            <span className="color bg-gray-dark"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col mb">
                                    <div className="setting-color">
                                        <label data-load-css="css/theme-g.css">
                                            <input type="radio" name="setting-theme" />
                                            <span className="icon-check"></span>
                                            <span className="split">
                                                           <span className="color bg-purple-dark"></span>
                                            <span className="color bg-purple"></span>
                                            </span>
                                            <span className="color bg-gray-dark"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col mb">
                                    <div className="setting-color">
                                        <label data-load-css="css/theme-h.css">
                                            <input type="radio" name="setting-theme" />
                                            <span className="icon-check"></span>
                                            <span className="split">
                                                           <span className="color bg-danger-dark"></span>
                                            <span className="color bg-danger"></span>
                                            </span>
                                            <span className="color bg-gray-dark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p">
                            <h4 className="text-muted text-thin">Layout</h4>
                            <div className="clearfix">
                                <p className="pull-left">Fixed</p>
                                <div className="pull-right">
                                    <label className="switch">
                                        <input id="chk-fixed" type="checkbox" data-toggle-state="layout-fixed" />
                                        <em></em>
                                    </label>
                                </div>
                            </div>
                            <div className="clearfix">
                                <p className="pull-left">Boxed</p>
                                <div className="pull-right">
                                    <label className="switch">
                                        <input id="chk-boxed" type="checkbox" data-toggle-state="layout-boxed" />
                                        <em></em>
                                    </label>
                                </div>
                            </div>
                            {/*
                            <div className="clearfix">
                                <p className="pull-left">RTL</p>
                                <div className="pull-right">
                                    <label className="switch">
                                        <input id="chk-rtl" type="checkbox" />
                                        <em></em>
                                    </label>
                                </div>
                            </div>
                            */}
                        </div>
                        <div className="p">
                            <h4 className="text-muted text-thin">Aside</h4>
                            <div className="clearfix">
                                <p className="pull-left">Collapsed</p>
                                <div className="pull-right">
                                    <label className="switch">
                                        <input id="chk-collapsed" type="checkbox" data-toggle-state="aside-collapsed" />
                                        <em></em>
                                    </label>
                                </div>
                            </div>
                            <div className="clearfix">
                                <p className="pull-left">Collapsed Text</p>
                                <div className="pull-right">
                                    <label className="switch">
                                        <input id="chk-collapsed-text" type="checkbox" data-toggle-state="aside-collapsed-text" />
                                        <em></em>
                                    </label>
                                </div>
                            </div>
                            <div className="clearfix">
                                <p className="pull-left">Float</p>
                                <div className="pull-right">
                                    <label className="switch">
                                        <input id="chk-float" type="checkbox" data-toggle-state="aside-float" />
                                        <em></em>
                                    </label>
                                </div>
                            </div>
                            <div className="clearfix">
                                <p className="pull-left">Hover</p>
                                <div className="pull-right">
                                    <label className="switch">
                                        <input id="chk-hover" type="checkbox" data-toggle-state="aside-hover" />
                                        <em></em>
                                    </label>
                                </div>
                            </div>
                            <div className="clearfix">
                                <p className="pull-left">Show Scrollbar</p>
                                <div className="pull-right">
                                    <label className="switch">
                                        <input id="chk-hover" type="checkbox" data-toggle-state="show-scrollbar" data-target=".sidebar" />
                                        <em></em>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey={ 2 } title={ tabIconB }>
                        <h3 className="text-center text-thin">Connections</h3>
                        <ul className="nav">
                            { /* START list title */ }
                            <li className="p">
                                <small className="text-muted">ONLINE</small>
                            </li>
                            { /* END list title */ }
                            <li>
                                { /* START User status */ }
                                <a href="#" className="media-box p mt0">
                                    <span className="pull-right">
                                                     <span className="circle circle-success circle-lg"></span>
                                    </span>
                                    <span className="pull-left">
                                                     { /* Contact avatar */ }
                                                     <img src="img/user/05.jpg" alt="Image" className="media-box-object img-circle thumb48" />
                                                  </span>
                                    { /* Contact info */ }
                                    <span className="media-box-body">
                                                     <span className="media-box-heading">
                                                        <strong>Juan Sims</strong>
                                                        <br />
                                                        <small className="text-muted">Designeer</small>
                                                     </span>
                                    </span>
                                </a>
                                { /* END User status */ }
                                { /* START User status */ }
                                <a href="#" className="media-box p mt0">
                                    <span className="pull-right">
                                                     <span className="circle circle-success circle-lg"></span>
                                    </span>
                                    <span className="pull-left">
                                                     { /* Contact avatar */ }
                                                     <img src="img/user/06.jpg" alt="Image" className="media-box-object img-circle thumb48" />
                                                  </span>
                                    { /* Contact info */ }
                                    <span className="media-box-body">
                                                     <span className="media-box-heading">
                                                        <strong>Maureen Jenkins</strong>
                                                        <br />
                                                        <small className="text-muted">Designeer</small>
                                                     </span>
                                    </span>
                                </a>
                                { /* END User status */ }
                                { /* START User status */ }
                                <a href="#" className="media-box p mt0">
                                    <span className="pull-right">
                                                     <span className="circle circle-danger circle-lg"></span>
                                    </span>
                                    <span className="pull-left">
                                                     { /* Contact avatar */ }
                                                     <img src="img/user/07.jpg" alt="Image" className="media-box-object img-circle thumb48" />
                                                  </span>
                                    { /* Contact info */ }
                                    <span className="media-box-body">
                                                     <span className="media-box-heading">
                                                        <strong>Billie Dunn</strong>
                                                        <br />
                                                        <small className="text-muted">Designeer</small>
                                                     </span>
                                    </span>
                                </a>
                                { /* END User status */ }
                                { /* START User status */ }
                                <a href="#" className="media-box p mt0">
                                    <span className="pull-right">
                                                     <span className="circle circle-warning circle-lg"></span>
                                    </span>
                                    <span className="pull-left">
                                                     { /* Contact avatar */ }
                                                     <img src="img/user/08.jpg" alt="Image" className="media-box-object img-circle thumb48" />
                                                  </span>
                                    { /* Contact info */ }
                                    <span className="media-box-body">
                                                     <span className="media-box-heading">
                                                        <strong>Tomothy Roberts</strong>
                                                        <br />
                                                        <small className="text-muted">Designer</small>
                                                     </span>
                                    </span>
                                </a>
                                { /* END User status */ }
                            </li>
                            { /* START list title */ }
                            <li className="p">
                                <small className="text-muted">OFFLINE</small>
                            </li>
                            { /* END list title */ }
                            <li>
                                { /* START User status */ }
                                <a href="#" className="media-box p mt0">
                                    <span className="pull-right">
                                                     <span className="circle circle-lg"></span>
                                    </span>
                                    <span className="pull-left">
                                                     { /* Contact avatar */ }
                                                     <img src="img/user/09.jpg" alt="Image" className="media-box-object img-circle thumb48" />
                                                  </span>
                                    { /* Contact info */ }
                                    <span className="media-box-body">
                                                     <span className="media-box-heading">
                                                        <strong>Lawrence Robinson</strong>
                                                        <br />
                                                        <small className="text-muted">Developer</small>
                                                     </span>
                                    </span>
                                </a>
                                { /* END User status */ }
                                { /* START User status */ }
                                <a href="#" className="media-box p mt0">
                                    <span className="pull-right">
                                                     <span className="circle circle-lg"></span>
                                    </span>
                                    <span className="pull-left">
                                                     { /* Contact avatar */ }
                                                     <img src="img/user/10.jpg" alt="Image" className="media-box-object img-circle thumb48" />
                                                  </span>
                                    { /* Contact info */ }
                                    <span className="media-box-body">
                                                     <span className="media-box-heading">
                                                        <strong>Tyrone Owens</strong>
                                                        <br />
                                                        <small className="text-muted">Designer</small>
                                                     </span>
                                    </span>
                                </a>
                                { /* END User status */ }
                            </li>
                            <li>
                                <div className="p-lg text-center">
                                    { /* Optional link to list more users */ }
                                    <a href="#" title="See more contacts" className="btn btn-purple btn-sm">
                                        <strong>Load more..</strong>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        { /* Extra items */ }
                        <div className="p">
                            <p>
                                <small className="text-muted">Tasks completion</small>
                            </p>
                            <div className="progress progress-xs m0">
                                <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-success progress-80">
                                    <span className="sr-only">80% Complete</span>
                                </div>
                            </div>
                        </div>
                        <div className="p">
                            <p>
                                <small className="text-muted">Upload quota</small>
                            </p>
                            <div className="progress progress-xs m0">
                                <div role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-warning progress-40">
                                    <span className="sr-only">40% Complete</span>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
                { /* END Off Sidebar (right) */ }
            </aside>
            );
    }

}

export default Offsidebar;
