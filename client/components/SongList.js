import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

/**
 * Fetches songs and represents them in a JSX ul element.
 *
 * @param {boolean} loading
 * @param {{id: string, title: string}[]} songs
 * @returns {JSX.Element}
 */
const SongList = ({ data: { loading, songs } }) => {
  /**
   * Iterates over the songs array and returns a JSX element for each song.
   *
   * @returns {JSX.Element | JSX.Element[]}
   */
  const renderSongs = () => {
    if (loading) return (<div>Loading...</div>);

    return songs.map(song => (<li key={song.id} className="collection-item">{song.title}</li>));
  }

  return (
    <ul className="collection">
      {renderSongs()}
    </ul>
  );
}

const query = gql`{ songs { id, title } }`;

export default graphql(query)(SongList);
