import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import ADD_SONG from '../queries/addSong';
import FETCH_SONGS from '../queries/fetchSongs';

/**
 * Displays a form with a text input that sends a mutation to add a new song to
 * the database when submitted.
 *
 * @returns {JSX.Element}
 */
const SongCreate = () => {
  const [addSong] = useMutation(ADD_SONG);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    await addSong({
      variables: { title },
      refetchQueries: [{ query: FETCH_SONGS }]
    });
    setTitle('');
    navigate('/');
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>Create a New Song</h3>
      <form onSubmit={onSubmit}>
        <label>Song Title:</label>
        <input value={title} onChange={event => setTitle(event.target.value)}/>
      </form>
    </div>
  );
}

export default SongCreate;
