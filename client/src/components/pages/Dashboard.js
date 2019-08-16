import React, {Component} from 'react';
//import ReactPlayer from 'react-player';
import bentoverrow from '../../videos/bentoverRow.mp4';
import SiteModal from '../SiteModal';
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
   render(){
  return (
    <div>
      <h1>Welcome to users dashboard</h1>
      
      <SiteModal 
      modalIsOpen={this.state.modalIsOpen}
      closeModal={this.closeModal}
      openModal={this.openModal}
      >
        <video src={bentoverrow} autoPlay loop muted />
      </SiteModal>
    </div>
  );}
};

export default Dashboard;
