import React from 'react';
import logo from './logo.svg';
import { Grid, Button } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import './App.css';

const google_client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const onGoogleSignIn = (profile) => {
  console.log(profile);
}


function App() {
  return (
    <Grid container style={{width: '100%', marginTop: '2em'}}>
      <Grid item xs />
      <Grid item xs style={{display: 'flex', justifyContent: 'center'}} >
        <GoogleLogin
        clientId={google_client_id}
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
