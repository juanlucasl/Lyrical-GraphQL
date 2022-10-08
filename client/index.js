import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { IndexRoute, Route, Router, hashHistory } from 'react-router';
import App from './components/App';
import SongList from './components/SongList';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/graphql'
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList}/>
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root/>,
  document.querySelector('#root')
);
