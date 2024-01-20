import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import profileStore from '../../../private/profile/ProfileStore';
import "./modalprofile.scss";

const ModalProfileStore = ({ show, handleClose, userData, onSubmit }) => {
  const [editedData, setEditedData] = useState({ ...userData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(editedData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className='modal_title'>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group controlId="formLogin">
            <Form.Label className='label-profile'>UserName</Form.Label>
            <Form.Control
              type="text"
              placeholder={profileStore.username}
              className="modal_username"
              defaultValue={editedData.username}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formAvatar">
            <Form.Label className='label-profile'>Avatar</Form.Label>
            <Form.Control
              type="text"
              placeholder={profileStore.avatar}
              className="modal_avatar"
              defaultValue={editedData.avatar}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formUsername">
            <Form.Label className='label-profile'>FullName</Form.Label>
            <Form.Control
              type="text"
              placeholder={profileStore.fullName}
              className="modal_fullName"
              defaultValue={editedData.fullName}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} className='btn_close'>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit} className='btn_savechanges'>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalProfileStore;