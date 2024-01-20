import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useForm } from 'react-hook-form';
import axios from "axios"
import ModalMoney from '../../partials/modal/modalmoney/ModalMoney';
import { useLocation } from 'react-router-dom';
import sendRequestStore from './SendRequestStore';
import sendIcon from "../../../../assets/send_icon.png";
import { useNavigate } from 'react-router-dom';
import "./sendrequest.scss";
import back_icon from "./../../../../assets/back_icon.png";

const SendRequest = observer((props) => {
    const location = useLocation();
    const receivedData = location.state;
    console.log("receivedData", receivedData);
    const { handleSubmit, reset, register, setValue } = useForm();

    const styleBtn = {
        borderRadius: "10px",
        backgroundColor: "#F8BB18",
        padding: "13px",
        color: "#1A1A1A",
        textTransform: 'none',
        textAlign: "center",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "bold",
        lineHeight: "21px",
        width: "100%",
    }

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const navigate = useNavigate();
    const Back = () => {
        navigate(-1)
    };

    useEffect(() => {
        sendRequestStore.setUserName(receivedData.username);
        sendRequestStore.setUserAvatar(receivedData.avatar);
        sendRequestStore.setAmount(receivedData.amount);
        sendRequestStore.setTrDate(`${formattedDate}  ${hours}:${minutes}`);
    }, [])

    useEffect(() => {
        setValue('amount', receivedData.amount);
    }, [setValue, receivedData.amount]);

    const onSubmit = (data) => {
        const requestData = sendRequestStore.getDataForRequest();
        console.log("requestDATA", requestData);
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
                alert('Error: ' + error.message);
            });

    };

    return (
        <div className='container mt-3'>
            <div className="listSendMoney" key={receivedData.tradingCode}>
                <div className='row'>
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
                <div className="row list-transactions" >
                    <div className="col-auto avatar-transactions" id='send_avatarImg'>
                        <img id='send_avatar'
                            src={receivedData.avatar}
                            style={{ minWidth: "40px", height: "40px", borderRadius: "50%" }}
                            alt="avatar" />
                    </div>
                    <div className="col bio-transactions">
                        <span className="date" id='send-username' style={{ fontSize: "12px", margin: "0", fontWeight: "bold" }}>{receivedData.username}</span>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} style={{ fontSize: "14px", margin: "0", fontWeight: "bold" }}>
                    <div className="mt-3">
                        <p className='pay_amount'>Payment Amount</p>
                        <input
                            type="number"
                            className="amount_input"
                            id="exampleFormControlInput1"
                            {...register("amount")}
                            defaultValue={receivedData.amount}
                            placeholder="Amount"
                        />
                    </div>
                    <div className="mt-2 mb-5">
                        <p className='pay_note'>Payment Note</p>
                        <textarea
                            className="note-input"
                            id="exampleFormControlTextarea1"
                            {...register("trDate")}
                            placeholder="Date"
                            defaultValue={`${formattedDate}  ${hours}:${minutes}`}
                            rows="3"
                        ></textarea>
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
        </div>
    );
});

export default SendRequest;