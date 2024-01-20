
import React from 'react';
import search_icon from './../../assets/search_icon.png'
import "./inputSearchContacts.scss";
import contactsStore from '../pages/private/contacts/ContactsStore';

function InputSearchContacts(props) {

    const handleInputChange = (event) => {
        props.onChange(event.target.value);
    };
    const handleSelectUser = (selectedUser) => {
        props.onSelectUser(selectedUser);
    };
    const filteredUsers = contactsStore.users.filter((user) => {
        if (props.value) {
            return user.username.toLowerCase().includes(props.value.toLowerCase())

        } else { return user }

    });

    return (
        <div className="input-container">
            <div className='row'>
                <div className='col'>
                    <input
                        className="form-control"
                        list="datalistOptions"
                        placeholder="Enter a name"
                        value={props.value}
                        onChange={handleInputChange}
                        style={{
                            borderRadius: "15px",
                            padding: "10px",
                            background: props.value ? "transparent" : "#FFF",
                            height: "49px",
                            fontSize: "14px"}}/>
                        <img src={search_icon} alt='pay' 
                        className="search-icon" 
                        style={{ width:"18px",height: "18px"}}/>
                        </div>
                <datalist id="datalistOptions">
                    {filteredUsers.map((item) => (
                        <option
                            value={item.username}
                            key={item._id}
                            onClick={() => handleSelectUser(item)}
                        />
                    ))}
                </datalist>
            </div>
        </div>
    );
}

export default InputSearchContacts;