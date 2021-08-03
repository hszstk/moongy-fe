import { EpisodeCard } from 'components/EpisodeCard/EpisodeCard';
import * as S from './ShowEpisodes.styles';

export const ShowEpisodes = ({ showId, episodes }) => {
  return (
    <S.EpisodeList>
      {episodes.map((episode) => (
        <S.EpisodeListItem key={`episodeList-${episode.id}`}>
          <EpisodeCard
            showId={showId}
            id={episode.id}
            img={episode.image.medium}
            name={episode.name}
            summary={episode.summary}
            episodeNumber={`S${episode.season} E${episode.number}`}
          />
        </S.EpisodeListItem>
      ))}
    </S.EpisodeList>
  );
};
