import React from 'react';
import AppIndex from './components/views/AppIndex';
import Detail from './components/views/Detail';
import NavBar from './components/common/Nav'
import SearchResults from './components/views/SearchResults'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function app() {
  return (
    <Router>
      <div>
      <NavBar />
        <Switch>
          <Route exact path="/">
            <AppIndex />
          </Route>
          <Route path="/movies/:movieId" component={Detail} />
          <Route path="/search/:searchTerm" component={SearchResults} />
        </Switch>
      </div>
    </Router>
  );
}