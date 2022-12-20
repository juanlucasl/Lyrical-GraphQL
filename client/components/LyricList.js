import React from 'react';

const LyricList = ({ lyrics }) => {
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
        </li>
      );
    });
  };

  // return loading ?
  //   (<div>Loading...</div>) :
  return (
    <ul className="collection">{renderLyrics()}</ul>
  );
};

export default LyricList;
