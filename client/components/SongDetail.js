import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import FETCH_ONE_SONG from '../queries/fetchOneSong';
import LyricCreate from './LyricCreate';

/**
 * Fetches lyrics corresponding to a given song and represents them in a JSX ul
 * element.
 *
 * @returns {JSX.Element}
 */
const SongDetail = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(FETCH_ONE_SONG, {
    variables: { id }
  });

  return loading ?
    (<div>Loading...</div>) :
    (<div>
      <Link to="/">Back</Link>
      <h3>{data.song.title}</h3>
      <LyricCreate />
    </div>);
}
export default SongDetail;
