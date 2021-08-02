import * as S from './EpisodeCard.styles';

import { StripHtmlFromString } from 'helpers/Utils';

export const EpisodeCard = ({ id, img, name, summary, episodeNumber }) => {
  return (
    <S.Wrapper onClick={() => console.log(`open episode id ${id}`)}>
      <img src={img} alt={`${episodeNumber}: ${name}`} />
      <S.EpisodeNameWrapper>
        <S.EpisodeName>
          {episodeNumber}: {name}
        </S.EpisodeName>
        <S.EpisodeSummary>{StripHtmlFromString(summary)}</S.EpisodeSummary>
      </S.EpisodeNameWrapper>
    </S.Wrapper>
  );
};
