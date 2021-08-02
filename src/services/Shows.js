import httpRequest from './http-request/http-request';

const getShowDetails = ({ showId }) => {
  return httpRequest({
    method: 'get',
    url: `shows/${showId}?embed=episodes`,
  });
};

export { getShowDetails };
