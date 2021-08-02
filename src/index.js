import React from 'react';
import ReactDOM from 'react-dom';

import 'styles/normalize.css';
import 'styles/global.css';
import reportWebVitals from 'reportWebVitals';
import { MainWrapper } from 'components/MainWrapper/MainWrapper';
import { ShowDetails } from 'components/ShowDetails/ShowDetails';

const showEpisodes = [
  {
    id: 160178,
    url: 'https://www.tvmaze.com/episodes/160178/the-powerpuff-girls-1x01-monkey-see-doggie-do-mommy-fearest',
    name: 'Monkey See, Doggie Do / Mommy Fearest',
    season: 1,
    number: 1,
    type: 'regular',
    airdate: '1998-11-18',
    airtime: '',
    airstamp: '1998-11-18T17:00:00+00:00',
    runtime: 30,
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_landscape/157/393188.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/157/393188.jpg',
    },
    summary:
      '<p>In "Monkey See, Doggie Do", Mojo Jojo swipes some cursed artifacts from the Townsville Museum and using them, turns all of the people of Townsville and then the whole world into dogs. In "Mommy Fearest", the Professor falls for a mysterious woman who grounds the girls and bans them from staying up late to save the day. But it turns out that she is one of their many antagonists, Sedusa.</p>',
    _links: {
      self: {
        href: 'https://api.tvmaze.com/episodes/160178',
      },
    },
  },
];

ReactDOM.render(
  <React.StrictMode>
    <MainWrapper>
      <ShowDetails
        image="https://static.tvmaze.com/uploads/images/medium_portrait/11/27896.jpg"
        title="The Powerpuff Girls"
        description={`The city of Townsville may be a beautiful, bustling metropolis, but don't be fooled! There's evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as <b>The Powerpuff Girls</b>. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who's who of evil, they show what it really means to \"fight like a girl.\"`}
        episodes={showEpisodes}
      />
    </MainWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
