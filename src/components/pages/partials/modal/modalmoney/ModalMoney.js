
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./modalmoney.scss";
import send_illustration from "../../../../../assets/sent_illustration.svg";

const ModalMoney = ({ style, iconM, text, textP }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClick = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <div className="modal-money-btn">
      <button className="modal-money-btn"
        onClick={handleEditClick}
        style={style}
        icon={iconM}
      >{text}</button>
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group >
              <Form.Label>
                <img className="img-" src={send_illustration} alt="pay" />
                <div>{textP}</div>
              </Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseEditModal}>
            Ok, Thanks!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalMoney;