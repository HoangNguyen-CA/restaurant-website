import React, { Component } from 'react';
import UserAuth from '../../components/Templates/UserAuth';
import FirebaseContext from '../../firebase/FirebaseContext';

export class Signup extends Component {
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

  handleOnChange = (e: Event, controlName: 'Password' | 'Email' | 'Name') => {
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

    let cred = await firebase.auth.createUserWithEmailAndPassword(
      this.state.controls.Email.value,
      this.state.controls.Password.value
    );
    console.log(cred);
  };

  render() {
    return (
      <div>
        <UserAuth
          controls={this.state.controls}
          onChange={this.handleOnChange}
          handleSubmit={this.handleSubmit}
          title='Sign Up'
        />
      </div>
    );
  }
}

export default Signup;
