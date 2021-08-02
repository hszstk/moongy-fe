import styled from 'styled-components';

export const EpisodeList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin: 0;
  padding: 0;

  list-style: none;
`;

export const EpisodeListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-bottom: 10px;

  background-color: #2d2b2b;
`;
