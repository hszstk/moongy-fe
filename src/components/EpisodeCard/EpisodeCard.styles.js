import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;

  cursor: pointer;

  > img {
    margin: 0 auto;
    max-width: 200px;
  }

  @media (min-width: 868px) {
    flex-direction: row;

    > img {
      max-width: 230px;
    }
  }
`;

export const EpisodeNameWrapper = styled.div`
  padding-top: 10px;

  @media (min-width: 868px) {
    margin-left: 10px;
  }
`;

export const EpisodeName = styled.h3`
  margin: 0;
  padding: 0 2px;
  font-size: 14px;
  text-align: center;
`;

export const EpisodeSummary = styled.p``;
