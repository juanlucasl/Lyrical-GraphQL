import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const ADD_SONG = gql`
    mutation AddSong($title: String) {
        addSong(title: $title) {
            title
        }
    }
`

/**
 * Displays a form with a text input that sends a mutation to add a new song to
 * the database when submitted.
 *
 * @returns {JSX.Element}
 */
const SongCreate = () => {
  const [addSong, { data, loading }] = useMutation(ADD_SONG);
  const [title, setTitle] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addSong({ variables: { title } });
    setTitle('');
  }

  return (
    <div>
      <h3>Create a New Song</h3>
      <form onSubmit={onSubmit}>
        <label>Song Title:</label>
        <input value={title} onChange={event => setTitle(event.target.value)}/>
      </form>
    </div>
  );
}

export default SongCreate;
