import React from 'react';
import { useMutation } from '@apollo/client';
import LIKE_LYRIC from '../graphql/likeLyric';

const LyricList = ({ lyrics }) => {
  const [likeLyric] = useMutation(LIKE_LYRIC);

  const onLike = (id, likes) => {
    likeLyric({
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          __typename: 'LyricType',
          id,
          likes: likes + 1
        }
      },
      variables: { id }
    });
  }

  /**
   * Iterates over the lyrics array and returns a JSX element for each song.
   *
   * @returns {JSX.Element | JSX.Element[]}
   */
  const renderLyrics = () => {
    return lyrics.map(({ id, content, likes }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            <i className="material-icons" onClick={() => onLike(id, likes)}>thumb_up</i>
            {likes}
          </div>
        </li>
      );
    });
  };

  return (
    <ul className="collection">{renderLyrics()}</ul>
  );
};

export default LyricList;
