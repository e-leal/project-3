import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import  ApolloClient from 'apollo-boost';
import AppContainer from './components/AppContainer';
import SearchJobs from '../src/pages/SearchJobs';


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
      <Switch>
              <Route exact path="/" component={SearchJobs} />
              {/* <Route exact path="/signup" component={Signup} /> */}
              {/* <Route component={NoMatch} /> */}
            </Switch>
      </Router>
      </ApolloProvider>
  );
} 

export default App;