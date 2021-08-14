import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions'

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_API,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        console.log(this.auth);
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }

  onSignIn = () => {
    this.auth.signIn(this.auth.currentUser.get().getId());
  }

  onSignOut = () => {
    this.auth.signOut();
  }

  onAuthChange = (isSignedIn) => {
    isSignedIn ? this.props.signIn() : this.props.signOut();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <div>I don't know if signed in</div>;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignIn} className="ui red google button">
          <i className="google icon" />
          Sign in with Google
        </button>
      )
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);