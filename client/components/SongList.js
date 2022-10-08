import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';

/**
 * Fetches songs and represents them in a JSX ul element.
 *
 * @returns {JSX.Element}
 */
const SongList = () => {
  const { loading, data } = useQuery(query);

  /**
   * Iterates over the songs array and returns a JSX element for each song.
   *
   * @returns {JSX.Element | JSX.Element[]}
   */
  const renderSongs = () => {
    if (loading) return (<div>Loading...</div>);

    return data.songs.map(song => (<li key={song.id} className="collection-item">{song.title}</li>));
  }

  return (
    <ul className="collection">
      {renderSongs()}
    </ul>
  );
}

const query = gql`{ songs { id, title } }`;

export default SongList;
