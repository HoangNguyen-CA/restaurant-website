import React, { Component } from 'react';

import UserAuth from '../../components/Templates/UserAuth';

export class Signin extends Component {
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
  };

  render() {
    return (
      <div>
        <UserAuth
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
