import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

class Mailbox extends React.Component {

    render() {
        return (
            <ContentWrapper>
                <h3>MailBox</h3>
                <div className="table-grid table-grid-desktop">
                    <div className="col col-md">
                        <div className="pr">
                            <div className="clearfix mb">
                                <button type="button" data-toggle="collapse" data-target=".mb-boxes" className="btn btn-sm btn-default mb-toggle-button pull-right dropdown-toggle">
                                    <em className="fa fa-bars fa-fw fa-lg"></em>
                                </button>
                                <a href="#" className="btn btn-purple btn-sm mb-compose-button">
                                    <em className="fa fa-pencil"></em>
                                    <span>Compose</span>
                                </a>
                            </div>
                            { /* START mailbox list */ }
                            <div className="mb-boxes collapse">
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <ul className="nav nav-pills nav-stacked">
                                            <li className="p">
                                                <small className="text-muted">MAILBOXES</small>
                                            </li>
                                            <li className="active">
                                                <a href="#">
                                                    <span className="label label-green pull-right">42</span>
                                                    <em className="fa fa-fw fa-lg fa-inbox"></em>
                                                    <span>Inbox</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="label label-green pull-right">10</span>
                                                    <em className="fa fa-fw fa-lg fa-star"></em>
                                                    <span>Starred</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="label label-green pull-right">0</span>
                                                    <em className="fa fa-fw fa-lg fa-paper-plane-o"></em>
                                                    <span>Sent</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="label label-green pull-right">5</span>
                                                    <em className="fa fa-fw fa-lg fa-edit"></em>
                                                    <span>Draft</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="label label-green pull-right">0</span>
                                                    <em className="fa fa-fw fa-lg fa-trash"></em>
                                                    <span>Trash</span>
                                                </a>
                                            </li>
                                            <li className="p">
                                                <small className="text-muted">LABELS</small>
                                            </li>
                                            <li className="p-h">
                                                <a href="#" className="pv-sm">
                                                    <span className="circle circle-danger"></span>
                                                    <span>Red</span>
                                                </a>
                                            </li>
                                            <li className="p-h">
                                                <a href="#" className="pv-sm">
                                                    <span className="circle circle-pink"></span>
                                                    <span>Pink</span>
                                                </a>
                                            </li>
                                            <li className="p-h">
                                                <a href="#" className="pv-sm">
                                                    <span className="circle circle-info"></span>
                                                    <span>Blue</span>
                                                </a>
                                            </li>
                                            <li className="p-h">
                                                <a href="#" className="pv-sm">
                                                    <span className="circle circle-warning"></span>
                                                    <span>Yellow</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            { /* END mailbox list */ }
                        </div>
                    </div>
                    <div className="col">
                        { /* START action buttons */ }
                        <div className="clearfix mb">
                            <div className="btn-group pull-left">
                                <button type="button" className="btn btn-default btn-sm">
                                    <em className="fa fa-mail-reply text-gray-dark"></em>
                                </button>
                                <button type="button" className="btn btn-default btn-sm">
                                    <em className="fa fa-mail-reply-all text-gray-dark"></em>
                                </button>
                                <button type="button" className="btn btn-default btn-sm">
                                    <em className="fa fa-mail-forward text-gray-dark"></em>
                                </button>
                            </div>
                            <div className="btn-group pull-right">
                                <button type="button" className="btn btn-default btn-sm">
                                    <em className="fa fa-exclamation text-gray-dark"></em>
                                </button>
                                <button type="button" className="btn btn-default btn-sm">
                                    <em className="fa fa-times text-gray-dark"></em>
                                </button>
                            </div>
                        </div>
                        { /* END action buttons */ }
                        <div className="panel panel-default">
                            <div className="panel-body">
                                { /* p.lead.text-centerNo mails here */ }
                                <table className="table table-hover mb-mails">
                                    <tbody>
                                        { /* ngRepeat: mail in mails | filter:folder */ }
                                        <tr>
                                            <td>
                                                <div className="checkbox c-checkbox">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <em className="fa fa-check"></em>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <em className="fa fa-lg fa-star-o text-muted"></em>
                                            </td>
                                            <td>
                                                <img alt="Mail Avatar" src="img/user/01.jpg" className="mb-mail-avatar pull-left" />
                                                <div className="mb-mail-date pull-right">10 minutes ago</div>
                                                <div className="mb-mail-meta">
                                                    <div className="pull-left">
                                                        <div className="mb-mail-subject">Admin web application</div>
                                                        <div className="mb-mail-from">Evelyn Holmes</div>
                                                    </div>
                                                    <div className="mb-mail-preview">Fusce gravida, diam ac adipiscing pretium, sem nibh bibendum diam, non consequat quam metus non nunc</div>
                                                </div>
                                            </td>
                                        </tr>
                                        { /* end ngRepeat: mail in mails | filter:folder */ }
                                        <tr>
                                            <td>
                                                <div className="checkbox c-checkbox">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <em className="fa fa-check"></em>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <em className="fa fa-lg fa-star-o text-muted"></em>
                                            </td>
                                            <td>
                                                <img alt="Mail Avatar" src="img/user/02.jpg" className="mb-mail-avatar pull-left" />
                                                <div className="mb-mail-date pull-right">1 day ago</div>
                                                <div className="mb-mail-meta">
                                                    <div className="pull-left">
                                                        <div className="mb-mail-subject">Admin theme based on Bootstrap and AngularJS</div>
                                                        <div className="mb-mail-from">Allison Grant</div>
                                                    </div>
                                                    <div className="mb-mail-preview">Nunc eget lacinia felis. <b>Pellentesque sollicitudin sollicitudin erat, in imperdiet tortor fringil</b>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        { /* end ngRepeat: mail in mails | filter:folder */ }
                                        <tr>
                                            <td>
                                                <div className="checkbox c-checkbox">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <em className="fa fa-check"></em>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <em className="fa fa-lg fa-star-o text-muted"></em>
                                            </td>
                                            <td>
                                                <img alt="Mail Avatar" src="img/user/03.jpg" className="mb-mail-avatar pull-left" />
                                                <div className="mb-mail-date pull-right">2 days ago</div>
                                                <div className="mb-mail-meta">
                                                    <div className="pull-left">
                                                        <div className="mb-mail-subject">Nested route mailbox application</div>
                                                        <div className="mb-mail-from">Daryl Carlson</div>
                                                    </div>
                                                    <div className="mb-mail-preview">Nulla
                                                        <strong>facilisi</strong>. Sed sit amet sem vel purus pulvinar venenatis. Class aptent taciti</div>
                                                </div>
                                            </td>
                                        </tr>
                                        { /* end ngRepeat: mail in mails | filter:folder */ }
                                        <tr>
                                            <td>
                                                <div className="checkbox c-checkbox">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <em className="fa fa-check"></em>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <em className="fa fa-lg fa-star-o text-muted"></em>
                                            </td>
                                            <td>
                                                <img alt="Mail Avatar" src="img/user/04.jpg" className="mb-mail-avatar pull-left" />
                                                <div className="mb-mail-date pull-right">3 days ago</div>
                                                <div className="mb-mail-meta">
                                                    <div className="pull-left">
                                                        <div className="mb-mail-subject">Angular with lazy load components</div>
                                                        <div className="mb-mail-from">George Clark</div>
                                                    </div>
                                                    <div className="mb-mail-preview">Integer sit amet vulputate mauris. Proin purus nisl, tempor ut tempor at, ornare vel mauris. Ut ac l</div>
                                                </div>
                                            </td>
                                        </tr>
                                        { /* end ngRepeat: mail in mails | filter:folder */ }
                                        <tr>
                                            <td>
                                                <div className="checkbox c-checkbox">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <em className="fa fa-check"></em>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <em className="fa fa-lg fa-star text-warning"></em>
                                            </td>
                                            <td>
                                                <img alt="Mail Avatar" src="img/user/05.jpg" className="mb-mail-avatar pull-left" />
                                                <div className="mb-mail-date pull-right">4 days ago</div>
                                                <div className="mb-mail-meta">
                                                    <div className="pull-left">
                                                        <div className="mb-mail-subject">Translation ready and RTL support!</div>
                                                        <div className="mb-mail-from">Bonnie Bowman</div>
                                                    </div>
                                                    <div className="mb-mail-preview">Integer sit amet vulputate mauris. Proin purus nisl, tempor ut tempor at, ornare vel mauris. Ut ac l</div>
                                                </div>
                                            </td>
                                        </tr>
                                        { /* end ngRepeat: mail in mails | filter:folder */ }
                                        <tr>
                                            <td>
                                                <div className="checkbox c-checkbox">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <em className="fa fa-check"></em>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <em className="fa fa-lg fa-star-o text-muted"></em>
                                            </td>
                                            <td>
                                                <img alt="Mail Avatar" src="img/user/06.jpg" className="mb-mail-avatar pull-left" />
                                                <div className="mb-mail-date pull-right">5 days ago</div>
                                                <div className="mb-mail-meta">
                                                    <div className="pull-left">
                                                        <div className="mb-mail-subject">Don&apos;t forget to check latest updates!</div>
                                                        <div className="mb-mail-from">Warren Watts</div>
                                                    </div>
                                                    <div className="mb-mail-preview">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In at conseq</div>
                                                </div>
                                            </td>
                                        </tr>
                                        { /* end ngRepeat: mail in mails | filter:folder */ }
                                        <tr>
                                            <td>
                                                <div className="checkbox c-checkbox">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <em className="fa fa-check"></em>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <em className="fa fa-lg fa-star text-warning"></em>
                                            </td>
                                            <td>
                                                <img alt="Mail Avatar" src="img/user/07.jpg" className="mb-mail-avatar pull-left" />
                                                <div className="mb-mail-date pull-right">6 days ago</div>
                                                <div className="mb-mail-meta">
                                                    <div className="pull-left">
                                                        <div className="mb-mail-subject">We have to meet someday</div>
                                                        <div className="mb-mail-from">Elijah Ward</div>
                                                    </div>
                                                    <div className="mb-mail-preview">Nunc hendrerit, neque ullamcorper eleifend ornare, arcu est bibendum ipsum, id malesuada sem justo v</div>
                                                </div>
                                            </td>
                                        </tr>
                                        { /* end ngRepeat: mail in mails | filter:folder */ }
                                        <tr>
                                            <td>
                                                <div className="checkbox c-checkbox">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <em className="fa fa-check"></em>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <em className="fa fa-lg fa-star text-warning"></em>
                                            </td>
                                            <td>
                                                <img alt="Mail Avatar" src="img/user/08.jpg" className="mb-mail-avatar pull-left" />
                                                <div className="mb-mail-date pull-right">7 days ago</div>
                                                <div className="mb-mail-meta">
                                                    <div className="pull-left">
                                                        <div className="mb-mail-subject">New issue found</div>
                                                        <div className="mb-mail-from">Colleen Payne</div>
                                                    </div>
                                                    <div className="mb-mail-preview">Integer sit amet vulputate mauris. Proin purus nisl, tempor ut tempor at, ornare vel mauris. Ut ac l</div>
                                                </div>
                                            </td>
                                        </tr>
                                        { /* end ngRepeat: mail in mails | filter:folder */ }
                                        <tr>
                                            <td>
                                                <div className="checkbox c-checkbox">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <em className="fa fa-check"></em>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <em className="fa fa-lg fa-star-o text-muted"></em>
                                            </td>
                                            <td>
                                                <img alt="Mail Avatar" src="img/user/09.jpg" className="mb-mail-avatar pull-left" />
                                                <div className="mb-mail-date pull-right">8 days ago</div>
                                                <div className="mb-mail-meta">
                                                    <div className="pull-left">
                                                        <div className="mb-mail-subject">Issue #5478 awaiting reply</div>
                                                        <div className="mb-mail-from">Rose Fox</div>
                                                    </div>
                                                    <div className="mb-mail-preview">Sed eu felis nulla. Nunc malesuada sapien at risus eleifend ut lacinia sem pretium.</div>
                                                </div>
                                            </td>
                                        </tr>
                                        { /* end ngRepeat: mail in mails | filter:folder */ }
                                        <tr>
                                            <td>
                                                <div className="checkbox c-checkbox">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <em className="fa fa-check"></em>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <em className="fa fa-lg fa-star text-warning"></em>
                                            </td>
                                            <td>
                                                <img alt="Mail Avatar" src="img/user/10.jpg" className="mb-mail-avatar pull-left" />
                                                <div className="mb-mail-date pull-right">9 days ago</div>
                                                <div className="mb-mail-meta">
                                                    <div className="pull-left">
                                                        <div className="mb-mail-subject">Check Angle for your next startup project</div>
                                                        <div className="mb-mail-from">Jenny Knight</div>
                                                    </div>
                                                    <div className="mb-mail-preview">Morbi varius sem quis purus suscipit tempus. Integer fermentum accumsan metus, id sagittis ipsum mol</div>
                                                </div>
                                            </td>
                                        </tr>
                                        { /* end ngRepeat: mail in mails | filter:folder */ }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
            );
    }

}

export default Mailbox;

