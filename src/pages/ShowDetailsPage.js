import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchDetails } from 'store/slices/ShowSlice';
import { ShowDetails } from 'components/ShowDetails/ShowDetails';

function ShowDetailsPage() {
  const { id } = useParams();
  const { showDetails, episodes } = useSelector((state) => state.show);
  const showStatus = useSelector((state) => state.show.status);
  const error = useSelector((state) => state.show.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (showStatus === 'idle') {
      dispatch(fetchDetails({ showId: id }));
    }
  }, [showStatus, dispatch, id]);

  if (showStatus === 'loading') {
    return <div className="loader">Loading...</div>;
  } else if (showStatus === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <ShowDetails
      showId={id}
      image={showDetails.image}
      title={showDetails.name}
      description={showDetails.description}
      episodes={episodes}
    />
  );
}

export default ShowDetailsPage;
