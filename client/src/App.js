import React, { Component } from 'react';
import './App.css';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import AppContainer from "./components/AppContainer";

const App = () => <AppContainer />;

const client = new ApolloClient({
  request: (operation) => {
    console.log("007 operation: ", operation)
    const token = localStorage.getItem('id_token');
    console.log("our client app.js is saying our token is: ", token)
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: '/graphql'
});

export default App;