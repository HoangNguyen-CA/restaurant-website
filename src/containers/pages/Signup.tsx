import React, { Component } from 'react';
import UserAuth from '../../components/Templates/UserAuth';

export class Signup extends Component {
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

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      this.state.controls.Name.value,
      this.state.controls.Email.value,
      this.state.controls.Password.value
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
