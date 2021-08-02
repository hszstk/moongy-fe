import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(0 0 0 / 80%);
`;

export const DetailsHeader = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  padding: 20px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 2fr;
  }
`;

export const DetailsHeaderImage = styled.div`
  display: flex;
  flex: ;
  align-items: center;
  justify-content: center;

  img {
    max-width: 295px;
  }
`;

export const DetailsHeaderText = styled.div`
  h1 {
    margin: 0 0 16px;

    font-size: 1.8rem;
  }

  h2 {
    margin: 0;

    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.2;
  }
`;
export const EpisodesContainer = styled.div`
  flex: 1;
  padding: 0 20px;
`;
