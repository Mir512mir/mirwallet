
import { useNavigate } from 'react-router-dom';
import ModalMoney from '../../partials/modal/modalmoney/ModalMoney';
import "./sendmoney.scss";
import axios from 'axios';
import { observer } from 'mobx-react';
import back_icon from "./../../../../assets/back_icon.png";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import contactsStore from '../contacts/ContactsStore';
import sendIcon from "../../../../assets/send_icon.svg";
import sendMoneyStore from './SendMoneyStore';
import { useForm } from 'react-hook-form';
import ListSendMoney from './componentsSendmoney/ListSendMoney';

function Sendmoney(props) {
    const { id } = useParams();
    const { handleSubmit, reset, register } = useForm();
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
        width: "315px",
        height: "49px"

    }
    useEffect(() => {
        contactsStore.users.forEach((item) => {
            if (item._id === id) {
                console.log("sendMoney", item)
                sendMoneyStore.addUserContact(item);
                sendMoneyStore.userId = id;
            }
        });
    }, [id]);

    const onSubmit = (data) => {
        sendMoneyStore.setTrDate(`${formattedDate}  ${hours}:${minutes}`)
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
            })
            .catch((error) => {
                console.error('There was a problem with the axios operation:', error);
                alert('Ошибка аутентификации: ' + error.message);
            });

    };
    const navigate = useNavigate();
    const Back = () => {
        navigate(-1)
    };
    return (

        <div className='container'>
            <div className='row mt-3'>
                <div className='col-2'>
                    <img
                        onClick={Back}
                        src={back_icon}
                        alt='back_icon'
                    />
                </div>
                <div className='col-8 text-center'>
                    <p className='Send'>Send Money</p>
                </div>
                <div className='col-2'>
                </div>
            </div>
            <hr />
            {sendMoneyStore.userContact.map((item) => (
                <ListSendMoney
                    avatar={item.avatar}
                    _id={item._id}
                    fullName={item.fullName}
                    username={item.username}
                />
            ))}

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-2'>
                        <p className='pay_amount'>Payment Amount</p>
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

}
export default observer(Sendmoney);