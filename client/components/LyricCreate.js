import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import ADD_LYRIC_TO_SONG from '../queries/addLyricToSong';

/**
 * Displays a form with a text input that sends a mutation to add a new lyric
 * to the database when submitted.
 *
 * @returns {JSX.Element}
 */
const LyricCreate = () => {
  const { id: songId } = useParams();
  const [addLyricToSong] = useMutation(ADD_LYRIC_TO_SONG)
  const [content, setContent] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setContent('');
    await addLyricToSong({
      variables: { content, songId }
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Add a Lyric</label>
      <input value={content} onChange={event => setContent(event.target.value)} />
    </form>
  );
}

export default LyricCreate;
