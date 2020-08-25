import React, { Component } from 'react';

import UserAuth from '../../components/Templates/UserAuth';

export class Signin extends Component {
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
