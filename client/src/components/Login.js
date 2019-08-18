import React, { Component } from 'react';
import SiteModal from './SiteModal';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
    modalIsOpen: false,
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(userData);
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
          buttonName={'Login'}
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          openModal={this.openModal}
          loginForm={
            <form onSubmit={this.onSubmit}>
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
              <button type="submit">Submit</button>
            </form>
          }
        />
      </div>
    );
  }
}

export default Login;
