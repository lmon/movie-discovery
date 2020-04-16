import React, { Fragment, Component } from 'react';
import Header from '../common/Header'
import { ListGroup, ListGroupItem, Container, Row, Col, Button } from 'reactstrap';
import {getCast, getDetail, getRelated} from '../../helpers/Api'

class Detail extends Component {
  constructor (props) {
    super(props);
    this.state = {
      related: [],
      movieId: null
     };
  }

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    getDetail(movieId)
      .then((response_body) => {
          this.setState({
              movie: response_body.movie_data,
              movie_config: response_body.config,
              movieId: movieId
          });
      })
      .catch((err) =>{
          console.error(err);
      });

      getCast(movieId)
        .then((response_body) => {
          this.setState({
            credits: response_body.credits
        });
        })
        .catch((err) => {
          console.error(err)
        })
  }

  onRelated(movieId) {
    if (this.state.related.length > 0) {
      console.log('onRelated got trlated', this.state.related);
      return false;
    }
    if (!movieId){
      return ;
    }
    console.log('onRelated', movieId)
     getRelated(movieId)
     .then((response_body) => {
       this.setState({
         related: response_body.movie_data.results
     });
     })
     .catch((err) => {
       console.error(err)
     })
  }

  render() {
    console.log("rerendering", this.state)
    return (
      <Fragment>
        <Header />
        {
          this.state.movie &&
          <div className="app-detail content">
            <Container>
              <Row>
                <Col className="col-sm-12">
                  <Container>
                    <Row>
                      <Col className="col-sm-12 offset-sm-4">
                        <img
                          src={this.state.movie_config.images.base_url + this.state.movie_config.images.poster_sizes[2] + this.state.movie.poster_path}
                          alt={this.state.movie.title}
                          />
                        <h3>{this.state.movie.title}</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-sm-10">
                        <div>Released: {this.state.movie.release_date}</div>
                        <div>{this.state.movie.overview}</div>
                      </Col>
                      <Col className="col-sm-2">
                        <Container>
                          <Row>
                            <Col className="col-sm-2">
                              <Button outline color="secondary" size="x-sm" onClick={() => this.onRelated(this.state.movieId)}>Related</Button>
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                  </Col>

              </Row>
            </Container>
          </div>
        }
        <Container>
          <Row>
            <Col className="col-sm-5">
              {
                this.state.credits &&
                <Container>
                    <Row>
                      <Col className="col-sm-10">
                        <h4>Cast</h4>
                        <ListGroup>
                          {this.state.credits.cast.map((cast, i) => {
                            return(
                              <ListGroupItem key={i}>{cast.name}: {cast.character}</ListGroupItem>
                            );
                          })}
                        </ListGroup>
                      </Col>
                  </Row>
                </Container>
              }
            </Col>
            <Col className="col-sm-5">
            {
              this.state.related.length > 0 &&
              <Container>
                  <Row>
                    <Col className="col-sm-10">
                      <h4>Related</h4>
                      <ListGroup>
                        {this.state.related.map((movie, i) => {
                          return(
                            <ListGroupItem key={i}><a href={'/movies/' + movie.id}>{movie.title}</a></ListGroupItem>
                          );
                        })}
                      </ListGroup>
                    </Col>
                </Row>
              </Container>
            }
          </Col>
        </Row>
      </Container>
      </Fragment>
    );
  }
}

export default Detail;

