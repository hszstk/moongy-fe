import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ShowDetailsPage from 'pages/ShowDetailsPage';
import EpisodeDetailsPage from 'pages/EpisodeDetailsPage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/show/1955" />
        </Route>
        <Route exact path="/show/:id">
          <ShowDetailsPage />
        </Route>
        <Route exact path="/show/:showId/episode/:episodeId">
          <EpisodeDetailsPage />
        </Route>
        <Route path="*">
          <Redirect to="/show/1955" />
        </Route>
      </Switch>
    </div>
  );
}
