import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import  ApolloClient from 'apollo-boost';
import AppContainer from "./components/AppContainer";
import Homepage from './components/AppContainer';

// const App = () => <AppContainer />;

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

function App (){
  return (
    <ApolloProvider client={client}>
      <Router>
      
      <div className="flex-column justify-flex-start min-100-vh">
        Will this work?
        </div>
      </Router>
      </ApolloProvider>
  );
}

export default App;