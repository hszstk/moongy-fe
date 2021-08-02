import * as S from './ShowDetails.styles';

import { ShowEpisodes } from 'components/ShowEpisodes/ShowEpisodes';
import { StripHtmlFromString } from 'helpers/Utils';

export const ShowDetails = ({ image, title, description, episodes }) => {
  return (
    <S.Wrapper>
      <S.DetailsHeader>
        <S.DetailsHeaderImage>
          <img src={image} alt={`${title} banner`} />
        </S.DetailsHeaderImage>

        <S.DetailsHeaderText>
          <h1>{title}</h1>
          <h2>{StripHtmlFromString(description)}</h2>
        </S.DetailsHeaderText>
      </S.DetailsHeader>

      <S.EpisodesContainer>
        <h3>Episodes</h3>
        <ShowEpisodes episodes={episodes} />
      </S.EpisodesContainer>
    </S.Wrapper>
  );
};
