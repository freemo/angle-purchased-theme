import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import SortableRun from './Sortable.run';

class Sortable extends React.Component {
    componentDidMount() {
        SortableRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Sortable
                   <small>Lightweight jQuery plugin to create sortable lists and grids using native HTML5 drag and drop API.</small>
                </h3>
                <ListGroup className="sortable">
                    <ListGroupItem>
                        <em className="fa fa-reorder fa-fw text-muted mr-lg"></em>Donald Hoffman
                    </ListGroupItem>
                    <ListGroupItem>
                        <em className="fa fa-reorder fa-fw text-muted mr-lg"></em>Wallace Barrett
                    </ListGroupItem>
                    <ListGroupItem>
                        <em className="fa fa-reorder fa-fw text-muted mr-lg"></em>Marsha Hicks
                    </ListGroupItem>
                    <ListGroupItem>
                        <em className="fa fa-reorder fa-fw text-muted mr-lg"></em>Roland Brown
                    </ListGroupItem>
                </ListGroup>
            </ContentWrapper>
            );
    }

}

export default Sortable;