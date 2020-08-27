import React, { Component } from 'react';

import UserAuth from '../../components/Templates/UserAuth';
import FirebaseContext from '../../firebase/FirebaseContext';

interface myProps {
  history: any;
}
export class Signin extends Component<myProps, any> {
  static contextType = FirebaseContext;

  state = {
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
    error: '',
  };

  handleOnChange = (e: Event, controlName: 'Password' | 'Email') => {
    const updatedControls: any = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: (e.target as HTMLInputElement).value,
      },
    };

    this.setState({ controls: updatedControls });
  };

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const firebase = this.context;

    this.setState({ error: '' });

    try {
      await firebase.auth.signInWithEmailAndPassword(
        this.state.controls.Email.value,
        this.state.controls.Password.value
      );
      this.props.history.push('/');
    } catch (e) {
      if (e.message) this.setState({ error: e.message });
    }
  };

  render() {
    return (
      <div>
        <UserAuth
          error={this.state.error}
          controls={this.state.controls}
          onChange={this.handleOnChange}
          handleSubmit={this.handleSubmit}
          title='Sign In'
        />
      </div>
    );
  }
}

export default Signin;
