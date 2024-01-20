
import React, { useState } from 'react';
import contactsStore from '../pages/private/contacts/ContactsStore';

function InputSearch(props) {
    const [searchValue, setSearchValue] = useState(""); 

    const styleInputSearch = {
        fontSize:"14px",
        borderRadius: "10px",
        background: searchValue ? "transparent" : "#FFF",
        height:"50px",
        width:"100%",
        padding:"15px",
        fontWeight:"500"
    }

    const handleChange = (event) => {
        props.onChange(event); 
    }
    const handleInputChange = (event) => {
        setSearchValue(event.target.value); 
    }
    const handleSelectUser = (selectedUser) => {
        props.onSelectUser(selectedUser);
    };
    const filteredUsers = contactsStore.users.filter((user) =>
        user.username.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
        <div className="input_search">
            <input
                className="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder= ""
                value={props.value}
                style={styleInputSearch}
                onChange={handleChange}
                onInput={handleInputChange}
            />
            <datalist id="datalistOptions">
                {filteredUsers.map((item) => (
                    <option 
                    value={item.username} 
                    key={item._id}
                    onClick={() => handleSelectUser(item)} />
                ))}
            </datalist>
        </div>
    );
}

export default InputSearch;