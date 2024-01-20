import React from 'react';
import "./requestmoney.scss";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import contactsStore from '../contacts/ContactsStore';
import axios from "axios"
import ModalMoney from '../../partials/modal/modalmoney/ModalMoney';
import requestStore from './RequestsStore';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import request_icon from "../../../../assets/request_icon.png";
import back_icon from "./../../../../assets/back_icon.png";

const RequestMoney = observer((props) => {
    const navigate = useNavigate();
    const Back = () => {
        navigate(-1)
    }
    const { id } = useParams();
    const { handleSubmit, reset, register } = useForm();

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

    useEffect(() => {
        contactsStore.users.forEach((item) => {
            if (item._id === id) {
                console.log("sendMoneyV", item)
                requestStore.addUserContact(item);
                requestStore.userId = id; 
                requestStore.setTrDate(`${formattedDate}  ${hours}:${minutes}`);
            }
        });
    }, [id]);

    const onSubmit = (data) => {
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
            {requestStore.userContact.map((item) => (
                <div className='row' key={item._id}>
                    <div className='col-2'>
                        <img className='Oval-user'
                            src={item.avatar} alt='Oval-user'
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-2'>
                    <p className='pay_amount'>Payment Amount</p>
                    <input
                        className='amount_inputrequest'
                        type="number"
                        id="exampleFormControlInput1"
                        {...register("amount")}
                        onChange={(e) => requestStore.setAmount(e.target.value)}
                        placeholder="Amount" />
                </div>
                <div className='mt-2'>
                    <p className='pay_note'>Payment Note</p>
                    <textarea
                        className='note-input'
                        placeholder='Add payment note'
                        id="exampleFormControlTextarea1"
                        type="text"
                        {...register("trDate")}
                        defaultValue={`${formattedDate}  ${hours}:${minutes}`}
                        rows="3"
                    />
                </div>
                <footer className="footer-form" >
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

export default RequestMoney;