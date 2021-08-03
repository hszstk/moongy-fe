import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getShowDetails } from 'services/Shows';

export const fetchDetails = createAsyncThunk(
  'show/fetchDetails',
  async ({ showId }) => {
    const response = await getShowDetails({ showId });
    return response.data;
  }
);

export const showSlice = createSlice({
  name: 'show',
  initialState: {
    showDetails: {
      name: '',
      description: '',
      image: '',
    },
    episodes: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setShowData: (state, action) => {
      state.showDetails = {
        name: 'The Powerpuff Girls',
        description: 'description',
        image:
          'https://static.tvmaze.com/uploads/images/medium_portrait/11/27896.jpg',
      };
    },
  },
  extraReducers: {
    [fetchDetails.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchDetails.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      // Add any fetched posts to the array

      state.showDetails = {
        name: action.payload.name,
        description: action.payload.summary,
        image: action.payload.image.medium,
      };

      state.episodes = action.payload['_embedded'].episodes;
    },
    [fetchDetails.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShowData } = showSlice.actions;

export default showSlice.reducer;

export const selectEpisodeById = (state, episodeId) =>
  state.show.episodes.find((episode) => episode.id === +episodeId);
