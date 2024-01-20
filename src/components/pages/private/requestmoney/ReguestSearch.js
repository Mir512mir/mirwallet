
import React, { useState } from 'react';
import { observer } from 'mobx-react';
import contactsStore from '../contacts/ContactsStore';
import { useForm } from 'react-hook-form';
import axios from "axios";
import InputSearch from '../../../designComponents/InputSearch';
import ModalMoney from '../../partials/modal/modalmoney/ModalMoney';
import requestStore from './RequestsStore';
import request_icon from "./../../../../assets/request_icon.png";
import sendMoneyStore from '../sendmoney/SendMoneyStore';
import { useNavigate } from 'react-router-dom';
import back_icon from "./../../../../assets/back_icon.png";
import "./requestmoney.scss";

const RequestSearch = observer(() => {
    const { reset, register } = useForm();
    const [searchedUsername, setSearchedUsername] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchedUsernameSend, setSearchedUsernameSend] = useState(null);
    const navigate = useNavigate();
    const Back = () => {
        navigate(-1)
    }
    const styleBtn = {
        borderRadius: "10px",
        backgroundColor: "#1A87DD",
        padding: "13px",
        color: "#FFF",
        textTransform: 'none',
        textAlign: "center",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "21px",
        width: "100%",
    }
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    const handleSearchInputChange = (event) => {
        const newValue = event.target.value;
        setSearchedUsername(newValue);
        setSearchedUsernameSend(newValue);
        console.log("searchedUser", searchedUsernameSend)
    };

    const handleSearchUser = () => {
        // Search пользователя после введения username
        const item = contactsStore.users.find(item => item.username === searchedUsername);
        if (item) {
            setSelectedUser(item);
            console.log("item", item)
            requestStore.addUserContact(item);
            requestStore.userId = item._id;
        } else {
            console.error("User not found");
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        sendMoneyStore.setTrDate(`${formattedDate}  ${hours}:${minutes}`);
        const requestData = requestStore.getDataForRequest();
        if (!requestData) {
            console.error("User data not found");
            return;
        }
        const token = localStorage.getItem("jwt");

        axios.post("http://49.13.31.246:9191/transaction", requestData, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token
            }
        })

            .then((response) => {
                console.log("Response data:", response.data);
                reset();
                sendMoneyStore.clearUserContact();
            })
            .catch((error) => {
                console.error('There was a problem with the axios operation:', error);
                alert('Ошибка аутентификации: ' + error.message);
            });
    };

    return (
        <div className='container'>
            <div className='row mt-3'>
                <div className='col-2'>
                    <img
                        className='back_icon'
                        onClick={Back}
                        src={back_icon}
                        alt='back_icon'
                    />
                </div>
                <div className='col-8 text-center'>
                    <p className='Send'>Request Money</p>
                </div>
                <div className='col-2'></div>
            </div>
            <hr />
            <div className='contacts-search'>
                <InputSearch users={contactsStore.users} onChange={handleSearchInputChange} value={searchedUsername} />
                <button className="search_user" onClick={handleSearchUser}>Search User</button>
            </div>
            {requestStore.userContact.map((item) => (
                <div className="row" key={item._id}>
                    <div className="col-2 avatar-transactions" id='send_avatarImg'>
                        <img id='send_avatar'
                            src={item.avatar} alt="avatar"
                            style={{ minWidth: "40px", height: "40px", borderRadius: "50%" }} />
                    </div>
                    <div className="col-3 bio-transactions">
                        <p className="username" id='send-fullname'
                            style={{ fontSize: "15px", margin: "0 0 2px 0px", fontWeight: "bold" }}>{item.fullName}</p>
                        <p className="date" id='send-username'
                            style={{ fontSize: "10px", margin: "0" }}>{item.username}</p>
                    </div>
                </div>
            ))}
            <form onSubmit={handleFormSubmit}>
                <div className="mt-2">
                    <p className="pay_amount">Payment Amount</p>
                    <input
                        className="amount_inputrequest"
                        type="number"
                        id="exampleFormControlInput1"
                        {...register("amount")}
                        onChange={(e) => requestStore.setAmount(e.target.value)}
                        placeholder="Amount" />
                </div>
                <div className="mt-2">
                    <p className='pay_note'>Payment Note</p>
                    <textarea
                        className="note-input"
                        id="exampleFormControlTextarea1"
                        {...register("trDate")}
                        defaultValue={`${formattedDate}  ${hours}:${minutes}`}
                        placeholder="Date"
                        rows="3"></textarea>
                </div>
                <footer className="footer-form">
                    <ModalMoney
                        style={styleBtn}
                        text="Request Payment"
                        textP="The amount has been sent successfully!"
                        iconM={<img src={request_icon} alt='pay' />}
                        type="submit"
                    />
                </footer>
            </form>
        </div>


    );
});

export default RequestSearch;