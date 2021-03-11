import React from 'react';
import {AppRegistry} from 'react-native';
import {ApolloClient, ApolloProvider} from '@apollo/client';
import App from './src/App';
import {name as appName} from './app.json';
import {cache} from './src/config/cache';

const client = new ApolloClient({
  uri: 'https://b42-challenge.azurewebsites.net/graphql',
  cache,
});

const AppProvider = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => AppProvider);
