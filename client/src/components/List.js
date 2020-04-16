import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';

const List = (props) => {
  return(
    <ListGroup>
        {props.movies.map((movie, i) => {
            return(
            <ListGroupItem key={i}>
                <ListGroupItemHeading><a href={'/movies/' + movie.id}>{movie.title}</a></ListGroupItemHeading>
            </ListGroupItem>
            );
        })}
    </ListGroup>
  );
};

List.propTypes = {
  movies: PropTypes.array
};

export default List;