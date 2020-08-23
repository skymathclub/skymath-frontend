import React, {Component} from 'react';
import { Grid, Button } from '@material-ui/core';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const google_client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;

class GoogleButton extends Component {
    
    constructor (props) {

        super(props);
        this.state = {
            isLoggedIn: false

        }

        this.onGoogleLogInFailure = this.onGoogleLogInFailure.bind(this);
        this.onGoogleLogInSuccess = this.onGoogleLogInSuccess.bind(this);
        this.onGoogleLogOutFailure = this.onGoogleLogOutFailure.bind(this);
        this.onGoogleLogOutSuccess = this.onGoogleLogOutSuccess.bind(this);
    }
    
    onGoogleLogOutSuccess = (res) => {
        console.log('Log Out Success');
        this.setState(state => ({
            isLoggedIn: false
        }))
    }

    onGoogleLogOutFailure = (res) => {
        console.log('Log Out Failed:', res);
    }

    onGoogleLogInSuccess = (profile) => {
        console.log(profile);
        this.setState(state => ({
            isLoggedIn: true
        }))
    }

    onGoogleLogInFailure = (res) => {
        console.log('Log In Failed:', res);
    }

    render () {
        return (
            <div>
                {
                    this.state.isLoggedIn ?
                    <GoogleLogout
                        clientId={google_client_id}
                        buttonText='Log Out'
                        onLogoutSuccess={this.onGoogleLogOutSuccess}
                        onFailure={this.onGoogleLogOutFailure}
                        ></GoogleLogout> : <GoogleLogin
                        clientId={google_client_id}
                        buttonText='Log In'
                        onSuccess={this.onGoogleLogInSuccess}
                        onFailure={this.onGoogleLogInFailure}
                        cookiePolicy={'single_host_origin'}
                        responseType='code,token'
                        />

                }
            </div>
        )
    }

}

export default GoogleButton;
