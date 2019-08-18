import React, { Component } from 'react';
import SiteModal from './SiteModal';

class Register extends Component {
  state = {
    userName: '',
    email: '',
    password: '',
    password2: '',
    errors: {},
    modalIsOpen: false,
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    console.log(newUser);
  };

  // opens modal
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  // closes modal
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <SiteModal
        buttonName={"Register"}
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          openModal={this.openModal}
          registerForm={
            <form onSubmit={this.onSubmit}>
              <label htmlFor="userName" />

              <input
                onChange={this.onChange}
                value={this.state.value}
                error={errors.userName}
                id="userName"
                type="text"
              />
              <label htmlFor="email" />
              <input
                onChange={this.onChange}
                value={this.state.value}
                error={errors.email}
                id="email"
                type="email"
              />
              <label htmlFor="password" />
              <input
                onChange={this.onChange}
                value={this.state.value}
                error={errors.password}
                id="password"
                type="password"
              />
              <label htmlFor="password2" />
              <input
                onChange={this.onChange}
                value={this.state.value}
                error={errors.password2}
                id="password2"
                type="password"
              />
              <button type="submit">Register</button>
            </form>
          }
        />
      </div>
    );
  }
}

export default Register;
