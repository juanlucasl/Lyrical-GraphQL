import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import FETCH_SONGS from '../queries/fetchSongs';
import DELETE_SONG from '../queries/deleteSong';

/**
 * Fetches songs and represents them in a JSX ul element.
 *
 * @returns {JSX.Element}
 */
const SongList = () => {
  const { data, loading, refetch } = useQuery(FETCH_SONGS);
  const [deleteSong] = useMutation(DELETE_SONG);

  const onSongDelete = async (id) => {
    await deleteSong({ variables: { id } });
    await refetch();
  }

  /**
   * Iterates over the songs array and returns a JSX element for each song.
   *
   * @returns {JSX.Element | JSX.Element[]}
   */
  const renderSongs = () => {
    return data.songs.map(song => (
      <li key={song.id} className="collection-item">
        {song.title}
        <i className="material-icons" onClick={() => onSongDelete(song.id)}>
          delete
        </i>
      </li>
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
