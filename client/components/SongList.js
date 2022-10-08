import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_SONGS = gql`{ songs { id, title } }`;

/**
 * Fetches songs and represents them in a JSX ul element.
 *
 * @returns {JSX.Element}
 */
const SongList = () => {
  const { data, loading } = useQuery(GET_SONGS);

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

export default SongList;
