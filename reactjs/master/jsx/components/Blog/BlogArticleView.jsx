import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table, Alert } from 'react-bootstrap';
import BlogArticleViewRun from './BlogArticleView.run';

class BlogArticleView extends React.Component {
    componentDidMount() {
        BlogArticleViewRun();
    }
    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">New Article</div>
                <Alert bsStyle="info">
                    <em className="fa fa-exclamation-circle fa-lg fa-fw"></em>
                    <span>There is an autosaved version of this article that is more recent than the version below. <a href="#" className="text-white">Restore</a>
                   </span>
                </Alert>
                <Row>
                    { /* Article Content */ }
                    <Col lg={ 9 }>
                        <Panel>
                            <form action="">
                                <input type="text" name="article-title" placeholder="Article title..." className="mb-lg form-control input-lg" />
                                { /* Wysiswyg tooblbar */ }
                                <div data-role="editor-toolbar" data-target="#editor" className="btn-toolbar btn-editor">
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
                                        <input type="file" data-edit="insertImage" style={{position:"absolute",opacity:"0",width:"41px",height:"34px"}} />
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
                                { /* Wysiswyg Editor */ }
                                <div style={{overflow:"scroll",height:"250px",maxHeight:"250px"}} className="form-control wysiwyg mt-lg">Type something ...</div>
                                <br/>
                                <p>Notes</p>
                                <textarea cols="6" className="mb-lg form-control"></textarea>
                                <div className="clearfix">
                                    <div className="pull-left">
                                        <button type="button" className="btn btn-default m-r-10 m-t-10">
                                            <em className="fa fa-edit fa-fw"></em>Draft</button>
                                        <button type="button" className="btn btn-primary m-t-10">
                                            <em className="fa fa-check fa-fw"></em>Save</button>
                                    </div>
                                    <div className="pull-right">
                                        <button type="button" className="btn btn-danger m-r-10 m-t-10">
                                            <em className="fa fa-trash fa-fw"></em>Remove</button>
                                    </div>
                                </div>
                            </form>
                        </Panel>
                        <p className="lead">List of Comments</p>
                        <Panel>
                            <Table responsive hover>
                                <thead>
                                    <tr>
                                        <th>
                                            <strong>Comment ID</strong>
                                        </th>
                                        <th>
                                            <strong>Date</strong>
                                        </th>
                                        <th>
                                            <strong>Username</strong>
                                        </th>
                                        <th>
                                            <strong>Comment excerpt</strong>
                                        </th>
                                        <th className="text-center">
                                            <strong>Current status</strong>
                                        </th>
                                        <th style={{width:"130px"}} className="text-right">
                                            <strong>Actions</strong>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>123</td>
                                        <td>10/05/2015</td>
                                        <td><a href="">Jack Jordan</a>
                                        </td>
                                        <td>Sed quis eros libero, a euismod nisl....</td>
                                        <td className="text-center">
                                            <span className="label label-success">Approved</span>
                                        </td>
                                        <td className="text-right">
                                            <button type="button" className="btn btn-sm btn-default">
                                                <em className="fa fa-pencil"></em>
                                            </button>
                                            <button type="button" className="btn btn-sm btn-danger">
                                                <em className="fa fa-trash"></em>
                                            </button>
                                            <button type="button" className="btn btn-sm btn-success">
                                                <em className="fa fa-check"></em>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>456</td>
                                        <td>10/07/2015</td>
                                        <td><a href="">Hailey Mckinney</a>
                                        </td>
                                        <td>Nulla facilisi.</td>
                                        <td className="text-center">
                                            <span className="label label-success">Approved</span>
                                        </td>
                                        <td className="text-right">
                                            <button type="button" className="btn btn-sm btn-default">
                                                <em className="fa fa-pencil"></em>
                                            </button>
                                            <button type="button" className="btn btn-sm btn-danger">
                                                <em className="fa fa-trash"></em>
                                            </button>
                                            <button type="button" className="btn btn-sm btn-success">
                                                <em className="fa fa-check"></em>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>789</td>
                                        <td>11/05/2015</td>
                                        <td><a href="">Peyton Reyes</a>
                                        </td>
                                        <td>Quisque enim nisi, semper non pulvinar et, aliquam id lorem...</td>
                                        <td className="text-center">
                                            <span className="label label-warning">Pending</span>
                                        </td>
                                        <td className="text-right">
                                            <button type="button" className="btn btn-sm btn-default">
                                                <em className="fa fa-pencil"></em>
                                            </button>
                                            <button type="button" className="btn btn-sm btn-danger">
                                                <em className="fa fa-trash"></em>
                                            </button>
                                            <button type="button" className="btn btn-sm btn-success">
                                                <em className="fa fa-check"></em>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>999</td>
                                        <td>10/06/2015</td>
                                        <td><a href="">Darryl Harper</a>
                                        </td>
                                        <td>Nulla facilisi.</td>
                                        <td className="text-center">
                                            <span className="label label-danger">Rejected</span>
                                        </td>
                                        <td className="text-right">
                                            <button type="button" className="btn btn-sm btn-default">
                                                <em className="fa fa-pencil"></em>
                                            </button>
                                            <button type="button" disabled="" className="btn btn-sm btn-danger">
                                                <em className="fa fa-trash"></em>
                                            </button>
                                            <button type="button" className="btn btn-sm btn-success">
                                                <em className="fa fa-check"></em>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Panel>
                    </Col>
                    { /* Article sidebar */ }
                    <Col lg={ 3 }>
                        <Panel>
                            <p className="lead">Article Data</p>
                            <p>Categories</p>
                            <select multiple className="chosen-select form-control">
                                <option>coding</option>
                                <option>less</option>
                                <option>sass</option>
                                <option>angularjs</option>
                                <option>node</option>
                                <option>expressJS</option>
                            </select>
                            <p>Tags</p>
                            <select multiple className="chosen-select form-control">
                                <option>JAVASCRIPT</option>
                                <option>WEB</option>
                                <option>BOOTSTRAP</option>
                                <option>SERVER</option>
                                <option>HTML5</option>
                                <option>CSS</option>
                            </select>
                            <p>Reviewers</p>
                            <select multiple className="chosen-select form-control">
                                <option>adam@email.com</option>
                                <option>amalie@email.com</option>
                                <option>wladimir@email.com</option>
                                <option>samantha@email.com</option>
                                <option>estefanía@email.com</option>
                                <option>natasha@email.com</option>
                                <option>nicole@email.com</option>
                                <option>adrian@email.com</option>
                            </select>
                            <p className="lead">SEO Metadata</p>
                            <div className="form-group">
                                <p>Title</p>
                                <input type="text" placeholder="Brief description.." className="form-control" />
                            </div>
                            <div className="form-group">
                                <p>Description</p>
                                <textarea rows="5" placeholder="Max 255 characters..." className="form-control"></textarea>
                            </div>
                            <div className="form-group">
                                <p>Keywords</p>
                                <textarea rows="5" placeholder="Max 1000 characters..." className="form-control"></textarea>
                            </div>
                        </Panel>
                    </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default BlogArticleView;
