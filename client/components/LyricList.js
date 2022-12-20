import React from 'react';

const LyricList = ({ lyrics }) => {
  const onLike = (id) => {}

  /**
   * Iterates over the lyrics array and returns a JSX element for each song.
   *
   * @returns {JSX.Element | JSX.Element[]}
   */
  const renderLyrics = () => {
    return lyrics.map(({ id, content }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <i className="material-icons" onClick={() => onLike(id)}>thumb_up</i>
        </li>
      );
    });
  };

  return (
    <ul className="collection">{renderLyrics()}</ul>
  );
};

export default LyricList;
