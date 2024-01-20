import React from 'react';
import { useState, useEffect } from 'react';
import useService from "../../../../services/requests";
import './contacts.scss';
import Footer from '../../partials/footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import contactsStore from './ContactsStore';
import { observer } from 'mobx-react';
import InputSearchContacts from '../../../designComponents/InputSearchContacts';
import sendbutton_icon from "./../../../../assets/Send Button.png";
import requestbutton_icon from "./../../../../assets/Request Button.png";
function Contacts(props) {

    const { GET_USERS } = useService();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        GET_USERS()
            // замените URL на адрес вашего сервера API
            .then(data => {
                console.log("oook", data);
                setUsers(data)
                contactsStore.addUsers(data)
            })
    }, []);

    const [searchText, setSearchText] = useState('');

    const handleChange = (value) => {
        setSearchText(value); // Оновлення тексту пошуку при зміні значення
        console.log("searchText", searchText)

    };
    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(searchText.toLowerCase())
    );
    const { avatar, username } = props;
    const navigate = useNavigate();
    const handleUserClick = () => {
        const userData = {
            avatar,
            username
        };
        navigate('/sendmoney', { state: userData });
    };

    return (
        <div className='contacts'>
            <div className='container'>
                <div className='row text-center mt-3'>
                    <div className='col'>
                        <p className='title_contacts' style={{
                            fontSize: "20px", fontWeight: "bold"
                        }}>Contacts</p>
                    </div>
                </div>
                <hr />
                <div className='row mb-2'>
                    <InputSearchContacts value={searchText}
                        onChange={handleChange} />
                </div>
                {filteredUsers.map(item => (
                    <div className='row mt-2'
                        key={item._id}>
                        <div className='col-2' style={{ display: "flex", alignItems: "center", justifyContent: "start" }}>
                            <img
                                onClick={() => handleUserClick()}
                                style={{ minWidth: "40px", height: "40px", borderRadius: "50%"}}
                                onError={(e) => {
                                    e.target.src = 'https://static-00.iconduck.com/assets.00/avatar-default-icon-248x256-bdv8pdld.png'
                                }}
                                src={item.avatar}
                                alt="Avatar" />
                        </div>
                        <div className='col-2'>
                            <p className='u_name_from_users'>{item.username}</p>
                        </div>
                        <div className='col-8'
                            style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "end" }}>
                            <Link to={`/sendmoney/${item._id}`}>
                                <img
                                src={sendbutton_icon}
                                alt='sendbutton_icon'/>
                                </Link>
                            <Link to={`/requestmoney/${item._id}`}><img
                                src={requestbutton_icon}
                                alt='requestbutton_icon'/></Link>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default observer(Contacts);