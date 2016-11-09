/*!
 *
 * Angle - Bootstrap Admin App + ReactJS
 *
 * Version: 3.5.1
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, useRouterHistory, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import initTranslation from './components/Common/localize';
import initLoadCss from './components/Common/load-css';

import Base from './components/Layout/Base';
import BasePage from './components/Layout/BasePage';
import BaseHorizontal from './components/Layout/BaseHorizontal';

import DashboardV1 from './components/Dashboard/DashboardV1';
import DashboardV2 from './components/Dashboard/DashboardV2';
import DashboardV3 from './components/Dashboard/DashboardV3';

import Widgets from './components/Widgets/Widgets';

import Buttons from './components/Elements/Buttons';
import Notifications from './components/Elements/Notifications';
import SweetAlert from './components/Elements/SweetAlert';
import Tour from './components/Elements/Tour';
import BsCarousel from './components/Elements/Carousel';
import Spinner from './components/Elements/Spinner';
import Animation from './components/Elements/Animation';
import DropdownAnimation from './components/Elements/DropdownAnimation';
import Nestable from './components/Elements/Nestable';
import Sortable from './components/Elements/Sortable';
import Panels from './components/Elements/Panels';
import Grid from './components/Elements/Grid';
import GridMasonry from './components/Elements/GridMasonry';
import Typography from './components/Elements/Typography';
import FontIcons from './components/Elements/FontIcons';
import WeatherIcons from './components/Elements/WeatherIcons';
import Colors from './components/Elements/Colors';

import ChartFlot from './components/Charts/ChartFlot';
import ChartRadial from './components/Charts/ChartRadial';
import ChartChartJS from './components/Charts/ChartChartJS';
import ChartRickshaw from './components/Charts/ChartRickshaw';
import ChartMorris from './components/Charts/ChartMorris';
import ChartChartist from './components/Charts/ChartChartist';

import MapsGoogle from './components/Maps/MapsGoogle';
import MapsVector from './components/Maps/MapsVector';

import TableStandard from './components/Tables/TableStandard';
import TableExtended from './components/Tables/TableExtended';
import Datatable from './components/Tables/Datatable';
import JqGrid from './components/Tables/JqGrid';

import FormStandard from './components/Forms/FormStandard';
import FormExtended from './components/Forms/FormExtended';
import FormValidation from './components/Forms/FormValidation';
import FormWizard from './components/Forms/FormWizard';
import FormUpload from './components/Forms/FormUpload';
import FormXEditable from './components/Forms/FormXEditable';
import FormCropper from './components/Forms/FormCropper';

import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import Recover from './components/Pages/Recover';
import Lock from './components/Pages/Lock';
import NotFound from './components/Pages/NotFound';
import Error500 from './components/Pages/Error500';
import Maintenance from './components/Pages/Maintenance';

import Mailbox from './components/Extras/Mailbox';
import Timeline from './components/Extras/Timeline';
import Calendar from './components/Extras/Calendar';
import Invoice from './components/Extras/Invoice';
import Search from './components/Extras/Search';
import Todo from './components/Extras/Todo';
import Profile from './components/Extras/Profile';
import BugTracker from './components/Extras/BugTracker';
import ContactDetails from './components/Extras/ContactDetails';
import Contacts from './components/Extras/Contacts';
import Faq from './components/Extras/Faq';
import FileManager from './components/Extras/FileManager';
import Followers from './components/Extras/Followers';
import HelpCenter from './components/Extras/HelpCenter';
import Plans from './components/Extras/Plans';
import ProjectDetails from './components/Extras/ProjectDetails';
import Projects from './components/Extras/Projects';
import Settings from './components/Extras/Settings';
import SocialBoard from './components/Extras/SocialBoard';
import TeamViewer from './components/Extras/TeamViewer';
import VoteLinks from './components/Extras/VoteLinks';

import EcommerceOrder from './components/Ecommerce/EcommerceOrders';
import EcommerceOrderView from './components/Ecommerce/EcommerceOrderView';
import EcommerceProduct from './components/Ecommerce/EcommerceProducts';
import EcommerceProductView from './components/Ecommerce/EcommerceProductView';
import EcommerceCheckout from './components/Ecommerce/EcommerceCheckout';

import BlogList from './components/Blog/BlogList';
import BlogPost from './components/Blog/BlogPost';
import BlogArticle from './components/Blog/BlogArticles';
import BlogArticleView from './components/Blog/BlogArticleView';

import ForumCategories from './components/Forum/ForumCategories';
import ForumTopic from './components/Forum/ForumTopics';
import ForumDiscussion from './components/Forum/ForumDiscussion';


// Init translation system
initTranslation();
// Init css loader (for themes)
initLoadCss();

// Disable warning "Synchronous XMLHttpRequest on the main thread is deprecated.."
$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
    options.async = true;
});

// specify basename below if running in a subdirectory or set as "/" if app runs in root
const appHistory = useRouterHistory(createHistory)({
  basename: '/'
})

ReactDOM.render(
    <Router history={appHistory}>
        <Route path="/" component={Base}>

            {/* Default route*/}
            <IndexRoute component={DashboardV1} />

            {/*Dashboard*/}
            <Route path="dashboard" component={DashboardV1}/>
            <Route path="dashboardv2" component={DashboardV2}/>
            <Route path="dashboardv3" component={DashboardV3}/>

            {/*Widgets*/}
            <Route path="widgets" component={Widgets}/>

            {/*Elements*/}
            <Route path="buttons" component={Buttons}/>
            <Route path="notifications" component={Notifications}/>
            <Route path="sweetalert" component={SweetAlert}/>
            <Route path="tour" component={Tour}/>
            <Route path="carousel" component={BsCarousel}/>
            <Route path="spinners" component={Spinner}/>
            <Route path="animations" component={Animation}/>
            <Route path="dropdown" component={DropdownAnimation}/>
            <Route path="nestable" component={Nestable}/>
            <Route path="sortable" component={Sortable}/>
            <Route path="panels" component={Panels}/>
            <Route path="grid" component={Grid}/>
            <Route path="grid-masonry" component={GridMasonry}/>
            <Route path="typography" component={Typography}/>
            <Route path="icons-font" component={FontIcons}/>
            <Route path="icons-weather" component={WeatherIcons}/>
            <Route path="colors" component={Colors}/>

            {/*Forms*/}
            <Route path="form-standard" component={FormStandard}/>
            <Route path="form-extended" component={FormExtended}/>
            <Route path="form-validation" component={FormValidation}/>
            <Route path="form-wizard" component={FormWizard}/>
            <Route path="form-upload" component={FormUpload}/>
            <Route path="form-xeditable" component={FormXEditable}/>
            <Route path="form-cropper" component={FormCropper}/>

            {/*Charts*/}
            <Route path="chart-flot" component={ChartFlot}/>
            <Route path="chart-radial" component={ChartRadial}/>
            <Route path="chart-chartjs" component={ChartChartJS}/>
            <Route path="chart-rickshaw" component={ChartRickshaw}/>
            <Route path="chart-morris" component={ChartMorris}/>
            <Route path="chart-chartist" component={ChartChartist}/>

            {/*Table*/}
            <Route path="table-standard" component={TableStandard}/>
            <Route path="table-extended" component={TableExtended}/>
            <Route path="table-datatable" component={Datatable}/>
            <Route path="table-jqgrid" component={JqGrid}/>

            {/*Maps*/}
            <Route path="map-google" component={MapsGoogle}/>
            <Route path="map-vector" component={MapsVector}/>

            {/*Extras*/}
            <Route path="mailbox" component={Mailbox}/>
            <Route path="timeline" component={Timeline}/>
            <Route path="calendar" component={Calendar}/>
            <Route path="invoice" component={Invoice}/>
            <Route path="search" component={Search}/>
            <Route path="todo" component={Todo}/>
            <Route path="profile" component={Profile}/>
            <Route path="ecommerce-orders" component={EcommerceOrder}/>
            <Route path="ecommerce-order-view" component={EcommerceOrderView}/>
            <Route path="ecommerce-products" component={EcommerceProduct}/>
            <Route path="ecommerce-product-view" component={EcommerceProductView}/>
            <Route path="ecommerce-checkout" component={EcommerceCheckout}/>
            <Route path="blog-list" component={BlogList}/>
            <Route path="blog-post" component={BlogPost}/>
            <Route path="blog-articles" component={BlogArticle}/>
            <Route path="blog-article-view" component={BlogArticleView}/>
            <Route path="forum-categories" component={ForumCategories}/>
            <Route path="forum-topics" component={ForumTopic}/>
            <Route path="forum-discussion" component={ForumDiscussion}/>
            <Route path="bug-tracker" component={BugTracker}/>
            <Route path="contact-details" component={ContactDetails}/>
            <Route path="contacts" component={Contacts}/>
            <Route path="faq" component={Faq}/>
            <Route path="file-manager" component={FileManager}/>
            <Route path="followers" component={Followers}/>
            <Route path="help-center" component={HelpCenter}/>
            <Route path="plans" component={Plans}/>
            <Route path="project-details" component={ProjectDetails}/>
            <Route path="projects" component={Projects}/>
            <Route path="settings" component={Settings}/>
            <Route path="social-board" component={SocialBoard}/>
            <Route path="team-viewer" component={TeamViewer}/>
            <Route path="vote-links" component={VoteLinks}/>

        </Route>

        {/*Horizontal Layout*/}
        <Route path="/" component={BaseHorizontal}>
            <Route path="dashboardv1h" component={DashboardV1}/>
            <Route path="dashboardv3h" component={DashboardV2}/>
            <Route path="dashboardv2h" component={DashboardV3}/>
            <Route path="widgetsh" component={Widgets}/>
        </Route>

        {/*Pages*/}
        <Route path="/" component={BasePage}>
            <Route path="login" component={Login}/>
            <Route path="register" component={Register}/>
            <Route path="recover" component={Recover}/>
            <Route path="lock" component={Lock}/>
            <Route path="notfound" component={NotFound}/>
            <Route path="error500" component={Error500}/>
            <Route path="maintenance" component={Maintenance}/>
        </Route>

        {/* Not found handler */}
        <Route path="*" component={NotFound}/>

    </Router>,
    document.getElementById('app')
);

// Auto close sidebar on route changes
appHistory.listen(function(ev) {
    $('body').removeClass('aside-toggled');
});
