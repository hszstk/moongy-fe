import { useHistory } from 'react-router-dom';

import * as S from './EpisodeDetails.styles';
import { StripHtmlFromString } from 'helpers/Utils';

export const EpisodeDetails = ({ image, title, description }) => {
  const history = useHistory();

  return (
    <S.Wrapper>
      <S.BackButton onClick={history.goBack}>&lt; Go Back</S.BackButton>
      <S.DetailsHeader>
        <S.DetailsHeaderImage>
          <img src={image} alt={`${title} banner`} />
        </S.DetailsHeaderImage>

        <S.DetailsHeaderText>
          <h1>{title}</h1>
          <h2>{StripHtmlFromString(description)}</h2>
        </S.DetailsHeaderText>
      </S.DetailsHeader>
    </S.Wrapper>
  );
};
