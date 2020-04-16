import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import {search} from '../../helpers/Api';

class SaerchResults extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const searchTerm = this.props.match.params.searchTerm;
        search(searchTerm)
            .then((response_body) => {
                this.setState({
                    movies: response_body.movies.results,
                    searchTerm
                });
            })
            .catch((err) =>{
                console.error(err);
            });
    }

    render() {
        return(
            <Fragment>
                <Header />
                <div className='app-sesrch-results content'>
                    <h3>Search Results for "{this.state.searchTerm}"</h3>
                    { this.state.movies &&
                    <ListGroup>
                        {this.state.movies.map((movie, i) => {
                            return(
                                <ListGroupItem key={i}>
                                    <ListGroupItemHeading><a href={'/movies/' + movie.id}>{movie.title}</a></ListGroupItemHeading>
                                </ListGroupItem>
                            );
                        })}
                    </ListGroup>
                    }
                </div>
            </Fragment>
        );
    }
};

SaerchResults.propTypes = {
  movies: PropTypes.array
};

export default SaerchResults;