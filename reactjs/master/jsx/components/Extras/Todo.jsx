import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

class Todo extends React.Component {
    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">Todo List
                    <button className="pull-right btn btn-danger">Clear All Items</button>
                    <small>Keeping track of tasks</small>
                </div>
                <div className="table-grid todo">
                    <div className="col col-lg">
                        <div className="pr-lg">
                            <form className="mb-xl">
                                <div className="form-group">
                                    <input type="text" placeholder="Task title.." required="required" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Type a description.." rows="8" className="form-control"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Add Todo</button>
                            </form>
                        </div>
                    </div>
                    <div className="col todo-item-list">
                        <div id="accordion" role="tablist" aria-multiselectable="true" className="panel-group">
                            <div className="todo-item panel panel-default todo-complete">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                      <span role="button" data-toggle="collapse-disabled" data-parent="#accordion" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="clickable">
                                         <span className="close">&times;</span>
                                         <span className="inline checkbox c-checkbox">
                                            <label>
                                               <input id="todo-item-0" type="checkbox" />
                                               <em className="fa fa-check"></em>
                                            </label>
                                         </span>
                                         <span className="todo-title">Meeting with Mark at 7am.</span>
                                         <span className="todo-edit fa fa-pencil"></span>
                                      </span>
                                   </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>
                                            <span>Pellentesque convallis mauris eu elit imperdiet quis eleifend quam aliquet.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="todo-item panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                      <span role="button" data-toggle="collapse" data-parent="#accordion" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="clickable collapsed">
                                         <span className="close">&times;</span>
                                         <span className="inline checkbox c-checkbox">
                                            <label>
                                               <input id="todo-item-1" type="checkbox" />
                                               <em className="fa fa-check"></em>
                                            </label>
                                         </span>
                                         <span className="todo-title">Call Sonya. Talk about the new project.</span>
                                         <span className="todo-edit fa fa-pencil"></span>
                                      </span>
                                   </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>
                                            <span className="text-muted">No item description</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="todo-item panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                      <span role="button" data-toggle="collapse" data-parent="#accordion" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" className="clickable collapsed">
                                         <span className="close">&times;</span>
                                         <span className="inline checkbox c-checkbox">
                                            <label>
                                               <input id="todo-item-2" type="checkbox" />
                                               <em className="fa fa-check"></em>
                                            </label>
                                         </span>
                                         <span className="todo-title">Find a new place for vacations</span>
                                         <span className="todo-edit fa fa-pencil"></span>
                                      </span>
                                   </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>
                                            <span className="text-muted">No item description</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-right">
                            <span>1 Completed</span>-
                            <span>2 Pending</span>
                        </p>
                    </div>
                </div>
            </ContentWrapper>
            );
    }

}

export default Todo;
