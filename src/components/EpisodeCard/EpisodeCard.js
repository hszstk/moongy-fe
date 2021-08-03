import { useHistory } from 'react-router-dom';
import * as S from './EpisodeCard.styles';

import { StripHtmlFromString } from 'helpers/Utils';

export const EpisodeCard = ({
  showId,
  id,
  img,
  name,
  summary,
  episodeNumber,
}) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/show/${showId}/episode/${id}`);
  };

  return (
    <S.Wrapper onClick={handleClick}>
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
