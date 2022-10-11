import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router';
import FETCH_SONGS from '../queries/fetchSongs';

/**
 * Fetches songs and represents them in a JSX ul element.
 *
 * @returns {JSX.Element}
 */
const SongList = () => {
  const { data, loading } = useQuery(FETCH_SONGS);

  /**
   * Iterates over the songs array and returns a JSX element for each song.
   *
   * @returns {JSX.Element | JSX.Element[]}
   */
  const renderSongs = () => {
    return data.songs.map(song => (
      <li key={song.id} className="collection-item">{song.title}</li>
    ));
  }

  return loading ?
    (<div>Loading...</div>) :
    (<div>
      <ul className="collection">
        {renderSongs()}
      </ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>);
}

export default SongList;
