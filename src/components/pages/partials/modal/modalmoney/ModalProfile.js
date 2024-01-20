import React, { useEffect, useState } from 'react';
import ModalProfileStore from './ModalProfileStore';
import profileStore from '../../../private/profile/ProfileStore';

const ModalProfile = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [userData, setUserData] = useState({
    fullName: '',
    bio: '',
    username: '',
    avatar: ''
  });
  const BtnStyle = {
    backgroundColor: "#1A87DD",
    border: "solid 2px",
    borderRadius: "10px",
    width: "100%",
    height: "50px",
    color: "white",
   
  }
  const [editedData, setEditedData] = useState({ ...userData });

  useEffect(() => {
    setUserData({
      fullName: profileStore.fullName || '',
      username: profileStore.username || '',
      avatar: profileStore.avatar || ''
    });
  }, [profileStore]);

  const handleEditClick = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleProfileEdit = (editedData) => {
    const token = localStorage.getItem("jwt")
    // Отправка данных на сервер
    fetch("http://49.13.31.246:9191/me", {
      method: "PUT",
      headers: {
        "x-access-token": token,
        "content-type": "application/json",
      },
      body: JSON.stringify(editedData)
    })
      .then(response => {
        return response.json()
      })
    console.log('Edited data:', editedData);
    setEditedData({ ...editedData });

  };

  return (
    <div className='container'>
      <div className='row mt-2'>
        <div className='col'><button onClick={handleEditClick} style={BtnStyle}>edit profile</button></div>
      </div>
      <ModalProfileStore
        show={showEditModal}
        handleClose={handleCloseEditModal}
        userData={userData}
        onSubmit={handleProfileEdit}
        editedData={editedData}
      />
    </div>
  );
};

export default ModalProfile;