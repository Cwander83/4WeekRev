import React, { Component } from 'react';
//import ReactPlayer from 'react-player';
import rows from '../videos/bentoverRow.mp4';
import SiteModal from '../components/SiteModal';
import Register from '../components/Register';
import Login from '../components/Login';
import Header from '../components/Header'
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

class Dashboard extends Component {
  state = {
    modalIsOpen: false,
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
    return (
      <div className="dashboard">
      <Header />
        <h1>Welcome to users dashboard</h1>

        <SiteModal
          buttonName={'video'}
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          openModal={this.openModal}
          video={<video src={rows} autoPlay loop muted />}
        />
        <Register />
        <Login />
      </div>
    );
  }
}

export default Dashboard;
