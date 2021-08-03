import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchDetails, selectEpisodeById } from 'store/slices/ShowSlice';
import { EpisodeDetails } from 'components/EpisodeDetails/EpisodeDetails';

function EpisodeDetailsPage() {
  const { showId, episodeId } = useParams();
  const episode = useSelector((state) => selectEpisodeById(state, episodeId));
  const showStatus = useSelector((state) => state.show.status);
  const error = useSelector((state) => state.show.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (showStatus === 'idle') {
      dispatch(fetchDetails({ showId: showId }));
    }
  }, [showStatus, dispatch, showId]);

  if (showStatus === 'loading' || showStatus === 'idle') {
    return <div className="loader">Loading...</div>;
  } else if (showStatus === 'failed') {
    return <div>{error}</div>;
  }

  if (episode === undefined) {
    return <h1>The episode {episodeId} doesn't exist</h1>;
  }

  return (
    <EpisodeDetails
      image={episode.image.medium}
      title={episode.name}
      description={episode.summary}
    />
  );
}

export default EpisodeDetailsPage;
