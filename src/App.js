import React, { Component } from "react";
import { Grid } from '@material-ui/core';
import './App.css';
import GoogleButton from './components/GoogleButton';
import ZoomButton from './components/ZoomButton';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }))
          .catch(err => err);
  }

  componentDidMount() {
      this.callAPI();
  }

  render() {

    return (
      <Grid container style={{width: '100%', marginTop: '2em'}}>
        <Grid item xs={2} >
          <p className="App-intro">{this.state.apiResponse}</p>
        </Grid>
        <Grid item xs={4} style={{display: 'flex', justifyContent: 'center'}} >
            <ZoomButton/> 
        </Grid>
        <Grid item xs={4} style={{display: 'flex', justifyContent: 'right'}} >
            <GoogleButton/> 
        </Grid>
      </Grid>
    
    );
  }
}

export default App;
