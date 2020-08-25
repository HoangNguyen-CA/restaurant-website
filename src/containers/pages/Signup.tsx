import React, { Component } from 'react';
import UserAuth from '../../components/Templates/UserAuth';

export class Signup extends Component {
  state = {
    controls: {
      email: {
        type: 'input',
        config: {},
        value: '',
      },
      password: {
        type: 'input',
        config: {},
        value: '',
      },
    },
  };

  handleOnChange = (e: Event, controlName: 'password' | 'email') => {
    const updatedControls: any = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: (e.target as HTMLInputElement).value,
      },
    };

    this.setState({ controls: updatedControls });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      this.state.controls.email.value,
      this.state.controls.password.value
    );
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
