import { EpisodeCard } from 'components/EpisodeCard/EpisodeCard';
import * as S from './ShowEpisodes.styles';

export const ShowEpisodes = ({ episodes }) => {
  return (
    <S.EpisodeList>
      {episodes.map((episode) => (
        <S.EpisodeListItem index={`episodeList-${episode.id}`}>
          <EpisodeCard
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
