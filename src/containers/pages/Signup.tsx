import React, { Component } from 'react';
import UserAuth from '../Templates/UserAuth';
import FirebaseContext from '../../firebase/FirebaseContext';

interface myProps {
  history: any;
}

export class Signup extends Component<myProps, any> {
  static contextType = FirebaseContext;

  state = {
    controls: {
      Name: {
        type: 'input',
        config: {},
        value: '',
      },
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

  handleSetControls = (controls: any) => {
    this.setState({ controls });
  };

  handleOnSubmit = async () => {
    const firebase = this.context;
    await firebase.auth.createUserWithEmailAndPassword(
      this.state.controls.Email.value,
      this.state.controls.Password.value
    );
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <UserAuth
          controls={this.state.controls}
          title='Sign Up'
          setControls={this.handleSetControls}
          onSubmit={this.handleOnSubmit}
        />
      </div>
    );
  }
}

export default Signup;
