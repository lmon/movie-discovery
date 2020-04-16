import React, { Component, Fragment } from 'react';
import Header from '../common/Header'
import List from '../List'
import {getList} from '../../helpers/Api'

class AppIndex extends Component {
    constructor (props) {
        super(props);
        this.state = {  };
    }

    componentDidMount() {
        // Call our fetch function below once the component mounts
        getList()
        .then((response_body) => {
            this.setState({
                data: response_body.movie_data.results,
                movie_config: response_body.config
            });
        })
        .catch((err) =>{
            console.error(err);
        });
    }

    render() {
        return (
          <Fragment>
            <Header />
            <div className='app-index content'>
                <h3>All Movies</h3>
                { this.state.data &&
                    <List movies = {this.state.data} movie_config = {this.state.movie_config} />
                }
            </div>
          </Fragment>
        );
    }
}

export default AppIndex;

