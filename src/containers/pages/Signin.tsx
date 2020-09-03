import React, { Component } from 'react';

import UserAuth from '../Templates/UserAuth';
import FirebaseContext from '../../firebase/FirebaseContext';

import { SignInControls } from '../../interfaces/userAuth';

type Props = {
  history: any;
};

type State = {
  controls: SignInControls;
};

export class Signin extends Component<Props, State> {
  static contextType = FirebaseContext;

  state: State = {
    controls: {
      Email: {
        type: 'input',
        config: {},
        value: '',
      },
      Password: {
        type: 'input',
        config: {},
        value: '',
      },
    },
  };

  handleSetControls = (controls: SignInControls) => {
    this.setState({ controls });
  };

  handleOnSubmit = async () => {
    const firebase = this.context;
    await firebase.auth.signInWithEmailAndPassword(
      this.state.controls.Email.value,
      this.state.controls.Password.value
    );
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <UserAuth<SignInControls>
          controls={this.state.controls}
          title='Sign In'
          setControls={this.handleSetControls}
          onSubmit={this.handleOnSubmit}
        />
      </div>
    );
  }
}

export default Signin;
