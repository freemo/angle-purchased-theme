import React from 'react';
import { Router, Route, Link, History } from 'react-router';
import pubsub from 'pubsub-js';
import { Collapse } from 'react-bootstrap';
import SidebarRun from './Sidebar.run';

class Sidebar extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            userBlockCollapse: false,
            collapse: {
                dashboard: this.routeActive(['dashboard', 'dashboardv2', 'dashboardv3']),
                widget: this.routeActive('widgets'),
                elements: this.routeActive(['buttons', 'notifications', 'sweetalert', 'tour', 'carousel', 'spinners', 'animations', 'dropdown', 'nestable', 'sortable', 'panels', 'portlet', 'grid', 'grid-masonry', 'typography', 'icons-font', 'icons-weather', 'colors']),
                forms: this.routeActive(['form-standard', 'form-extended', 'form-validation', 'form-wizard', 'form-upload', 'form-xeditable', 'form-cropper']),
                charts: this.routeActive(['chart-flot', 'chart-radial', 'chart-chartjs', 'chart-rickshaw', 'chart-morris', 'chart-chartist']),
                tables: this.routeActive(['table-standard', 'table-extended', 'table-datatable', 'table-jqgrid']),
                maps: this.routeActive(['map-google', 'map-vector']),
                extras: this.routeActive(['mailbox', 'timeline', 'calendar', 'invoice', 'search', 'todo', 'profile','bug-tracker','contact-details','contacts','faq','file-manager','followers','help-center','plans','project-details','projects','settings','social-board','team-viewer','vote-links']),
                blog: this.routeActive(['blog-list', 'blog-post', 'blog-articles', 'blog-article-view']),
                ecommerce: this.routeActive(['ecommerce-orders', 'ecommerce-order-view', 'ecommerce-products', 'ecommerce-product-view', 'ecommerce-checkout']),
                forum: this.routeActive(['forum-categories', 'forum-topics', 'forum-discussion']),
                pages: false,
                layouts: false
            }
        };
        this.pubsub_token = pubsub.subscribe('toggleUserblock', () => {
            this.setState({
                userBlockCollapse: !this.state.userBlockCollapse
            });
        });
    };

    componentDidMount() {
        SidebarRun();
    }

    componentWillUnmount() {
        // React removed me from the DOM, I have to unsubscribe from the pubsub using my token
        pubsub.unsubscribe(this.pubsub_token);
    }

    routeActive(paths) {
        paths = Array.isArray(paths) ? paths : [paths];
        for (let p in paths) {
            if (this.context.router.isActive(paths[p]) === true)
                return true;
        }
        return false;
    }

    toggleItemCollapse(stateName) {
        var newCollapseState = {};
        for (let c in this.state.collapse) {
            if (this.state.collapse[c] === true && c !== stateName)
                this.state.collapse[c] = false;
        }
        this.setState({
            collapse: {
                [stateName]: !this.state.collapse[stateName]
            }
        });
    }

    render() {
        return (
            <aside className='aside'>
                { /* START Sidebar (left) */ }
                <div className="aside-inner">
                    <nav data-sidebar-anyclick-close="" className="sidebar">
                        { /* START sidebar nav */ }
                        <ul className="nav">
                            { /* START user info */ }
                            <li className="has-user-block">
                                <Collapse id="user-block" in={ this.state.userBlockCollapse }>
                                    <div className="item user-block">
                                        { /* User picture */ }
                                        <div className="user-block-picture">
                                            <div className="user-block-status">
                                                <img src="img/user/02.jpg" alt="Avatar" width="60" height="60" className="img-thumbnail img-circle" />
                                                <div className="circle circle-success circle-lg"></div>
                                            </div>
                                        </div>
                                        { /* Name and Job */ }
                                        <div className="user-block-info">
                                            <span className="user-block-name">Hello, Mike</span>
                                            <span className="user-block-role">Designer</span>
                                        </div>
                                    </div>
                                </Collapse>
                            </li>
                            { /* END user info */ }
                            { /* Iterates over all sidebar items */ }
                            <li className="nav-heading ">
                                <span data-localize="sidebar.heading.HEADER">Main Navigation</span>
                            </li>
                            <li className={ this.routeActive(['dashboard', 'dashboardv2', 'dashboardv3']) ? 'active' : '' }>
                                <div className="nav-item" onClick={ this.toggleItemCollapse.bind(this, 'dashboard') }>
                                    <div className="pull-right label label-info">3</div>
                                    <em className="icon-speedometer"></em>
                                    <span data-localize="sidebar.nav.DASHBOARD">Dashboard</span>
                                </div>
                                <Collapse in={ this.state.collapse.dashboard } timeout={ 100 }>
                                    <ul id="dashboard" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Dashboard</li>
                                        <li className={ this.routeActive('dashboard') ? 'active' : '' }>
                                            <Link to="dashboard" title="Dashboard v1">
                                            <span>Dashboard v1</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('dashboardv2') ? 'active' : '' }>
                                            <Link to="dashboardv2" title="Dashboard v2">
                                            <span>Dashboard v2</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('dashboardv3') ? 'active' : '' }>
                                            <Link to="dashboardv3" title="Dashboard v3">
                                            <span>Dashboard v3</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>
                            <li className={ this.routeActive('widgets') ? 'active' : '' }>
                                <Link to="widgets" title="Widgets">
                                <div className="pull-right label label-success">30</div>
                                <em className="icon-grid"></em>
                                <span data-localize="sidebar.nav.WIDGETS">Widgets</span>
                                </Link>
                            </li>
                            <li>
                                <div className="nav-item" title="Elements" onClick={ this.toggleItemCollapse.bind(this, 'layouts') }>
                                    <em className="icon-layers"></em>
                                    <span>Layouts</span>
                                </div>
                                <Collapse in={ this.state.collapse.layouts }>
                                    <ul id="#" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Layouts</li>
                                        <li>
                                            <Link to="dashboardv1h" title="Horizontal">
                                            <span>Horizontal</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>
                            <li className="nav-heading ">
                                <span data-localize="sidebar.heading.COMPONENTS">Components</span>
                            </li>
                            <li className={ this.routeActive(['buttons', 'notifications', 'sweetalert', 'tour', 'carousel', 'spinners', 'animations', 'dropdown', 'nestable', 'sortable', 'panels', 'portlet', 'grid', 'grid-masonry', 'typography', 'icons-font', 'icons-weather', 'colors']) ? 'active' : '' }>
                                <div className="nav-item" title="Elements" onClick={ this.toggleItemCollapse.bind(this, 'elements') }>
                                    <em className="icon-chemistry"></em>
                                    <span data-localize="sidebar.nav.element.ELEMENTS">Elements</span>
                                </div>
                                <Collapse in={ this.state.collapse.elements }>
                                    <ul id="#" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Elements</li>
                                        <li className={ this.routeActive('buttons') ? 'active' : '' }>
                                            <Link to="buttons" title="Buttons">
                                            <span data-localize="sidebar.nav.element.BUTTON">Buttons</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('notifications') ? 'active' : '' }>
                                            <Link to="notifications" title="Notifications">
                                            <span data-localize="sidebar.nav.element.NOTIFICATION">Notifications</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('sweetalert') ? 'active' : '' }>
                                            <Link to="sweetalert" title="Sweet Alert">
                                            <span>Sweet Alert</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('tour') ? 'active' : '' }>
                                            <Link to="tour" title="Tour">
                                            <span>Tour</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('carousel') ? 'active' : '' }>
                                            <Link to="carousel" title="Carousel">
                                            <span data-localize="sidebar.nav.element.INTERACTION">Carousel</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('spinners') ? 'active' : '' }>
                                            <Link to="spinners" title="Spinners">
                                            <span data-localize="sidebar.nav.element.SPINNER">Spinners</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('animations') ? 'active' : '' }>
                                            <Link to="animations" title="Animations">
                                            <span data-localize="sidebar.nav.element.ANIMATION">Animations</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('dropdown') ? 'active' : '' }>
                                            <Link to="dropdown" title="Dropdown">
                                            <span data-localize="sidebar.nav.element.DROPDOWN">Dropdown</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('nestable') ? 'active' : '' }>
                                            <Link to="nestable" title="Nestable">
                                            <span>Nestable</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('sortable') ? 'active' : '' }>
                                            <Link to="sortable" title="Sortable">
                                            <span>Sortable</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('panels') ? 'active' : '' }>
                                            <Link to="panels" title="Panels">
                                            <span data-localize="sidebar.nav.element.PANEL">Panels</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('grid') ? 'active' : '' }>
                                            <Link to="grid" title="Grid">
                                            <span data-localize="sidebar.nav.element.GRID">Grid</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('grid-masonry') ? 'active' : '' }>
                                            <Link to="grid-masonry" title="Grid Masonry">
                                            <span data-localize="sidebar.nav.element.GRID_MASONRY">Grid Masonry</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('typography') ? 'active' : '' }>
                                            <Link to="typography" title="Typography">
                                            <span data-localize="sidebar.nav.element.TYPO">Typography</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('icons-font') ? 'active' : '' }>
                                            <Link to="icons-font" title="Font Icons">
                                            <div className="pull-right label label-success">+400</div>
                                            <span data-localize="sidebar.nav.element.FONT_ICON">Font Icons</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('icons-weather') ? 'active' : '' }>
                                            <Link to="icons-weather" title="Weather Icons">
                                            <div className="pull-right label label-success">+100</div>
                                            <span data-localize="sidebar.nav.element.WEATHER_ICON">Weather Icons</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('colors') ? 'active' : '' }>
                                            <Link to="colors" title="Colors">
                                            <span data-localize="sidebar.nav.element.COLOR">Colors</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>
                            <li className={ this.routeActive(['form-standard', 'form-extended', 'form-validation', 'form-wizard', 'form-upload', 'form-xeditable', 'form-cropper']) ? 'active' : '' }>
                                <div className="nav-item" title="Forms" onClick={ this.toggleItemCollapse.bind(this, 'forms') }>
                                    <em className="icon-note"></em>
                                    <span data-localize="sidebar.nav.form.FORM">Forms</span>
                                </div>
                                <Collapse in={ this.state.collapse.forms }>
                                    <ul id="#" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Forms</li>
                                        <li className={ this.routeActive('form-standard') ? 'active' : '' }>
                                            <Link to="form-standard" title="Standard">
                                            <span data-localize="sidebar.nav.form.STANDARD">Standard</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('form-extended') ? 'active' : '' }>
                                            <Link to="form-extended" title="Extended">
                                            <span data-localize="sidebar.nav.form.EXTENDED">Extended</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('form-validation') ? 'active' : '' }>
                                            <Link to="form-validation" title="Validation">
                                            <span data-localize="sidebar.nav.form.VALIDATION">Validation</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('form-wizard') ? 'active' : '' }>
                                            <Link to="form-wizard" title="Wizard">
                                            <span>Wizard</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('form-upload') ? 'active' : '' }>
                                            <Link to="form-upload" title="Upload">
                                            <span>Upload</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('form-xeditable') ? 'active' : '' }>
                                            <Link to="form-xeditable" title="xEditable">
                                            <span>xEditable</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('form-cropper') ? 'active' : '' }>
                                            <Link to="form-cropper" title="Cropper">
                                            <span>Cropper</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>
                            <li className={ this.routeActive(['chart-flot', 'chart-radial', 'chart-chartjs', 'chart-rickshaw', 'chart-morris', 'chart-chartist']) ? 'active' : '' }>
                                <div className="nav-item" title="Charts" onClick={ this.toggleItemCollapse.bind(this, 'charts') }>
                                    <em className="icon-graph"></em>
                                    <span data-localize="sidebar.nav.chart.CHART">Charts</span>
                                </div>
                                <Collapse in={ this.state.collapse.charts }>
                                    <ul id="" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Charts</li>
                                        <li className={ this.routeActive('chart-flot') ? 'active' : '' }>
                                            <Link to="chart-flot" title="Flot">
                                            <span data-localize="sidebar.nav.chart.FLOT">Flot</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('chart-radial') ? 'active' : '' }>
                                            <Link to="chart-radial" title="Radial">
                                            <span data-localize="sidebar.nav.chart.RADIAL">Radial</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('chart-chartjs') ? 'active' : '' }>
                                            <Link to="chart-chartjs" title="Chart JS">
                                            <span>Chart JS</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('chart-rickshaw') ? 'active' : '' }>
                                            <Link to="chart-rickshaw" title="Rickshaw">
                                            <span>Rickshaw</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('chart-morris') ? 'active' : '' }>
                                            <Link to="chart-morris" title="MorrisJS">
                                            <span>MorrisJS</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('chart-chartist') ? 'active' : '' }>
                                            <Link to="chart-chartist" title="Chartist">
                                            <span>Chartist</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>
                            <li className={ this.routeActive(['table-standard', 'table-extended', 'table-datatable', 'table-jqgrid']) ? 'active' : '' }>
                                <div className="nav-item" title="Tables" onClick={ this.toggleItemCollapse.bind(this, 'tables') }>
                                    <em className="icon-grid"></em>
                                    <span data-localize="sidebar.nav.table.TABLE">Tables</span>
                                </div>
                                <Collapse in={ this.state.collapse.tables }>
                                    <ul id="" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Tables</li>
                                        <li className={ this.routeActive('table-standard') ? 'active' : '' }>
                                            <Link to="table-standard" title="Standard">
                                            <span data-localize="sidebar.nav.table.STANDARD">Standard</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('table-extended') ? 'active' : '' }>
                                            <Link to="table-extended" title="Extended">
                                            <span data-localize="sidebar.nav.table.EXTENDED">Extended</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('table-datatable') ? 'active' : '' }>
                                            <Link to="table-datatable" title="DataTables">
                                            <span data-localize="sidebar.nav.table.DATATABLE">DataTables</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('table-jqgrid') ? 'active' : '' }>
                                            <Link to="table-jqgrid" title="jqGrid">
                                            <span>jqGrid</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>
                            <li className={ this.routeActive(['map-google', 'map-vector']) ? 'active' : '' }>
                                <div className="nav-item" title="Maps" onClick={ this.toggleItemCollapse.bind(this, 'maps') }>
                                    <em className="icon-map"></em>
                                    <span data-localize="sidebar.nav.map.MAP">Maps</span>
                                </div>
                                <Collapse in={ this.state.collapse.maps }>
                                    <ul id="" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Maps</li>
                                        <li className={ this.routeActive('map-google') ? 'active' : '' }>
                                            <Link to="map-google" title="Google Maps">
                                            <span data-localize="sidebar.nav.map.GOOGLE">Google Maps</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('map-vector') ? 'active' : '' }>
                                            <Link to="map-vector" title="Vector Maps">
                                            <span data-localize="sidebar.nav.map.VECTOR">Vector Maps</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>
                            <li className="nav-heading ">
                                <span data-localize="sidebar.heading.MORE">More</span>
                            </li>
                            <li>
                                <div className="nav-item" title="Pages" onClick={ this.toggleItemCollapse.bind(this, 'pages') }>
                                    <em className="icon-doc"></em>
                                    <span data-localize="sidebar.nav.pages.PAGES">Pages</span>
                                </div>
                                <Collapse in={ this.state.collapse.pages }>
                                    <ul id="pages" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Pages</li>
                                        <li>
                                            <Link to="login" title="Login">
                                            <span data-localize="sidebar.nav.pages.LOGIN">Login</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="register" title="Sign up">
                                            <span data-localize="sidebar.nav.pages.REGISTER">Sign up</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="recover" title="Recover Password">
                                            <span data-localize="sidebar.nav.pages.RECOVER">Recover Password</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="lock" title="Lock">
                                            <span data-localize="sidebar.nav.pages.LOCK">Lock</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="notfound" title="404">
                                            <span>404</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="error500" title="500">
                                            <span>500</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="maintenance" title="Maintenance">
                                            <span>Maintenance</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>
                            <li className={ this.routeActive(['mailbox', 'timeline', 'calendar', 'invoice', 'search', 'todo', 'profile']) ? 'active' : '' }>
                                <div className="nav-item" title="Extras" onClick={ this.toggleItemCollapse.bind(this, 'extras') }>
                                    <em className="icon-cup"></em>
                                    <span data-localize="sidebar.nav.extra.EXTRA">Extras</span>
                                </div>
                                <Collapse in={ this.state.collapse.extras }>
                                    <ul id="" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Extras</li>
                                        <li className={ this.routeActive('mailbox') ? 'active' : '' }>
                                            <Link to="mailbox" title="Mailbox">
                                            <span data-localize="sidebar.nav.extra.MAILBOX">Mailbox</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('bug-tracker') ? 'active' : '' }>
                                            <Link to="bug-tracker" title="Bug Tracker">
                                            <span>Bug Tracker</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('contact-details') ? 'active' : '' }>
                                            <Link to="contact-details" title="Contact Details">
                                            <span>Contact Details</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('contacts') ? 'active' : '' }>
                                            <Link to="contacts" title="Contacts">
                                            <span>Contacts</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('faq') ? 'active' : '' }>
                                            <Link to="faq" title="Faq">
                                            <span>Faq</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('file-manager') ? 'active' : '' }>
                                            <Link to="file-manager" title="File Manager">
                                            <span>File Manager</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('followers') ? 'active' : '' }>
                                            <Link to="followers" title="Followers">
                                            <span>Followers</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('help-center') ? 'active' : '' }>
                                            <Link to="help-center" title="Help Center">
                                            <span>Help Center</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('plans') ? 'active' : '' }>
                                            <Link to="plans" title="Plans">
                                            <span>Plans</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('project-details') ? 'active' : '' }>
                                            <Link to="project-details" title="Project Details">
                                            <span>Project Details</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('projects') ? 'active' : '' }>
                                            <Link to="projects" title="Projects">
                                            <span>Projects</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('settings') ? 'active' : '' }>
                                            <Link to="settings" title="Settings">
                                            <span>Settings</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('social-board') ? 'active' : '' }>
                                            <Link to="social-board" title="Social Board">
                                            <span>Social Board</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('team-viewer') ? 'active' : '' }>
                                            <Link to="team-viewer" title="Team Viewer">
                                            <span>Team Viewer</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('vote-links') ? 'active' : '' }>
                                            <Link to="vote-links" title="Vote Links">
                                            <span>Vote Links</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('timeline') ? 'active' : '' }>
                                            <Link to="timeline" title="Timeline">
                                            <span data-localize="sidebar.nav.extra.TIMELINE">Timeline</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('calendar') ? 'active' : '' }>
                                            <Link to="calendar" title="Calendar">
                                            <span data-localize="sidebar.nav.extra.CALENDAR">Calendar</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('invoice') ? 'active' : '' }>
                                            <Link to="invoice" title="Invoice">
                                            <span data-localize="sidebar.nav.extra.INVOICE">Invoice</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('search') ? 'active' : '' }>
                                            <Link to="search" title="Search">
                                            <span data-localize="sidebar.nav.extra.SEARCH">Search</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('todo') ? 'active' : '' }>
                                            <Link to="todo" title="Todo List">
                                            <span data-localize="sidebar.nav.extra.TODO">Todo List</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('profile') ? 'active' : '' }>
                                            <Link to="profile" title="Profile">
                                            <span data-localize="sidebar.nav.extra.PROFILE">Profile</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>
                            <li className={ this.routeActive(['blog-list', 'blog-post', 'blog-articles', 'blog-article-view']) ? 'active' : '' }>
                                <div className="nav-item" title="Blog" onClick={ this.toggleItemCollapse.bind(this, 'blog') }>
                                    <em className="icon-notebook"></em>
                                    <span>Blog</span>
                                </div>
                                <Collapse in={ this.state.collapse.blog }>
                                    <ul id="" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Blog</li>
                                        <li className={ this.routeActive('blog-list') ? 'active' : '' }>
                                            <Link to="blog-list" title="List">
                                            <span>List</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('blog-post') ? 'active' : '' }>
                                            <Link to="blog-post" title="Post">
                                            <span>Post</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('blog-articles') ? 'active' : '' }>
                                            <Link to="blog-articles" title="Articles">
                                            <span>Articles</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('blog-article-view') ? 'active' : '' }>
                                            <Link to="blog-article-view" title="Article View">
                                            <span>Article View</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>
                            <li className={ this.routeActive(['ecommerce-orders', 'ecommerce-order-view', 'ecommerce-products', 'ecommerce-product-view']) ? 'active' : '' }>
                                <div className="nav-item" title="Ecommerce" onClick={ this.toggleItemCollapse.bind(this, 'ecommerce') }>
                                    <em className="icon-basket-loaded"></em>
                                    <span>eCommerce</span>
                                </div>
                                <Collapse in={ this.state.collapse.ecommerce }>
                                    <ul id="" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">eCommerce</li>
                                        <li className={ this.routeActive('ecommerce-orders') ? 'active' : '' }>
                                            <Link to="ecommerce-orders" title="Orders">
                                            <div className="pull-right label label-info">10</div>
                                            <span>Orders</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('ecommerce-order-view') ? 'active' : '' }>
                                            <Link to="ecommerce-order-view" title="Order View">
                                            <span>Order View</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('ecommerce-products') ? 'active' : '' }>
                                            <Link to="ecommerce-products" title="Products">
                                            <span>Products</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('ecommerce-product-view') ? 'active' : '' }>
                                            <Link to="ecommerce-product-view" title="Product View">
                                            <span>Product View</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('ecommerce-checkout') ? 'active' : '' }>
                                            <Link to="ecommerce-checkout" title="Checkout">
                                            <span>Checkout</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>
                            <li className={ this.routeActive(['forum-categories', 'forum-topics', 'forum-discussion']) ? 'active' : '' }>
                                <div className="nav-item" title="Forum" onClick={ this.toggleItemCollapse.bind(this, 'forum') }>
                                    <em className="icon-speech"></em>
                                    <span>Forum</span>
                                </div>
                                <Collapse in={ this.state.collapse.forum }>
                                    <ul id="" className="nav sidebar-subnav">
                                        <li className="sidebar-subnav-header">Forum</li>
                                        <li className={ this.routeActive('forum-categories') ? 'active' : '' }>
                                            <Link to="forum-categories" title="Categories">
                                            <span>Categories</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('forum-topics') ? 'active' : '' }>
                                            <Link to="forum-topics" title="Topics">
                                            <span>Topics</span>
                                            </Link>
                                        </li>
                                        <li className={ this.routeActive('forum-discussion') ? 'active' : '' }>
                                            <Link to="forum-discussion" title="Discussion">
                                            <span>Discussion</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>
                        </ul>
                        { /* END sidebar nav */ }
                    </nav>
                </div>
                { /* END Sidebar (left) */ }
            </aside>
            );
    }

}

Sidebar.contextTypes = {
    router: React.PropTypes.object
};

export default Sidebar;
