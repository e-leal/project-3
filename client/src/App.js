import React, { Component } from 'react';
import './App.css';
import SignupForm from '../components/SignupForm.js'
import SearchJobs from './pages/SearchJobs';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import LoginForm from './components/LoginForm.js';

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

class App extends Component {
  render() {
    return(
      <view style={styles.container}>
       <text>Code test</text>
      </view>
    )
  }
}

const styles =StyleSheet.create({
    container: {
      backgroundColor: '#ff7550'
    },
});

export default App;