import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import SongList from './SongList';
import SongCreate from './SongCreate';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/graphql'
});

/**
 * @returns {JSX.Element}
 */
const App = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<SongList />} />
            <Route path="/songs/new" element={<SongCreate />} />
          </Routes>
        </div>
      </HashRouter>
    </ApolloProvider>
  )
};

export default App;
