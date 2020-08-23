import React from 'react';
import logo from './logo.svg';
import { Grid } from '@material-ui/core';
import './App.css';
import GoogleButton from './components/GoogleButton';

function App() {
  return (
    <Grid container style={{width: '100%', marginTop: '2em'}}>
      <Grid item xs />
      <Grid item xs style={{display: 'flex', justifyContent: 'right'}} >
          <GoogleButton/>
      </Grid>
    </Grid>
  );
}

export default App;
