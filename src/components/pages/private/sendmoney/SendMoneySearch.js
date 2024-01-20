
import React, { useState } from 'react';
import { observer } from 'mobx-react';
import sendIcon from "../../../../assets/send_icon.svg";
import { useForm } from 'react-hook-form';
import axios from "axios";
import ModalMoney from '../../partials/modal/modalmoney/ModalMoney';
import sendMoneyStore from './SendMoneyStore';
import contactsStore from '../contacts/ContactsStore';
import InputSearch from '../../../designComponents/InputSearch';
import back_icon from "./../../../../assets/back_icon.png";
import { useNavigate } from 'react-router-dom';
import "./sendmoney.scss";
import ListSendMoney from './componentsSendmoney/ListSendMoney';

const SendMoneySearch = observer((props) => {
    const { handleSubmit, reset, register } = useForm();

    const [searchedUsernameSend, setSearchedUsernameSend] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);

    const navigate = useNavigate();
    const Back = () => {
        navigate(-1)
    };
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    const styleBtn = {
        borderRadius: "10px",
        backgroundColor: "#F8BB18",
        padding: "13px",
        color: "#1A1A1A",
        textTransform: 'none',
        textAlign: "center",
        fontSize: "14px",
        fontWeight: "600",
        width: "100%",
        height: "49px"
    }

    const handleSearchInputChange = (event) => {
        const newValue = event.target.value;
        console.log('newValue:', newValue); // Выведение в консоль для проверки значения
        setSearchedUsernameSend(newValue);
        console.log("searchedUser", searchedUsernameSend)
    };

    const handleSearchUser = () => {
        // Находим пользователя после введения username
        console.log("serchedName", searchedUsernameSend);
        const item = contactsStore.users.find(item => item.username === searchedUsernameSend);
        if (item) {
            setSelectedUser(item);
            console.log("item", item)
            sendMoneyStore.addUserContact(item);
            sendMoneyStore.userId = item._id;

        } else {
            console.error("User not found");
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        sendMoneyStore.setTrDate(`${formattedDate}  ${hours}:${minutes}`);
        const requestData = sendMoneyStore.getDataForRequest();
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
                    <p className='Send'>Send Money</p>
                </div>
                <div className='col-2'></div>
            </div>
            <hr />
            <div className='contacts-search'>
                <InputSearch users={contactsStore.users} onChange={handleSearchInputChange} value={searchedUsernameSend} />
                <button className="search_user" onClick={handleSearchUser}>Search User</button>
            </div>
            {sendMoneyStore.userContact.map((item) => (
                <ListSendMoney
                    avatar={item.avatar}
                    _id={item._id}
                    fullName={item.fullName}
                    username={item.username}
                />
            ))}
            <form onSubmit={handleFormSubmit}>
                <div className="mt-2">
                    <p className="pay_amount">Payment Amount</p>
                </div>
                <input
                    type="number"
                    className="amount_input"
                    id="exampleFormControlInput1"
                    {...register("amount")}
                    onChange={(e) => sendMoneyStore.setAmount(e.target.value)}
                    placeholder="Amount"
                />
                <div className='mt-2'>
                    <p className='pay_note'>Payment Note</p>
                    <textarea
                        className='note-input'
                        {...register("trDate")}
                        defaultValue={`${formattedDate}  ${hours}:${minutes}`}
                        placeholder="Date"
                        rows="3"
                    />
                </div>
                <footer className="footer-form">
                    <ModalMoney
                        style={styleBtn}
                        text="Send Payment"
                        textP="The amount has been requested successfully!"
                        iconM={<img src={sendIcon} alt='pay' />}
                        type="submit"
                    />
                </footer>
            </form>
        </div>


    );
});

export default SendMoneySearch;