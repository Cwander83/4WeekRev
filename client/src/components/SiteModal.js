import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const SiteModal = props => {
  // state = {
  //     userName: '',
  //     email: '',
  //     password: '',
  //     password2: '',
  //     errors : {}

  // };

  return (
    <div>
      <button onClick={props.openModal}>open</button>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        className="modal"
        contentLabel="Example Modal"
        ariaHideApp={true}
      >
        <h3>Modal</h3>

        <button onClick={props.closeModal}>close</button>
      </Modal>
    </div>
  );
};

export default SiteModal;
