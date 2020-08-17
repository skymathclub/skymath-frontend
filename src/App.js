import React from 'react';
import logo from './logo.svg';
import { Grid, Button } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login'
import './App.css';

const onGoogleSignIn = (profile) => {
  console.log(profile);
}


function App() {
  return (
    <Grid container style={{width: '100%', marginTop: '2em'}}>
      <Grid item xs />
      <Grid item xs style={{display: 'flex', justifyContent: 'center'}} >
        <GoogleLogin
        clientId='241162360225-ta4o1kbhao5m0fu3mbbhdao1htlm3r3d.apps.googleusercontent.com'
        buttonText='Log In'
        onSuccess={onGoogleSignIn}
        onFailure={onGoogleSignIn}
        />
      </Grid>
      <Grid item xs />
    </Grid>
  );
}

export default App;
