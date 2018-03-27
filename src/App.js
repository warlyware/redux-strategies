import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions'

import logo from './logo.svg';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <button onClick={() => props.fetchData()}>Load Data</button>
        {console.log(props.appData)}
      </header>
      <ul>
        {
          props.appData.data.length ?
          props.appData.data.map((person, i) => {
            return <li key={i}>{person.name}</li>
          }) : null
        }
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
