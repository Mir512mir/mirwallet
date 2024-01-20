import { observer } from "mobx-react";
import back_icon from "./../../../../assets/back_icon.png";
import profileStore from "../profile/ProfileStore";
import { useNavigate } from "react-router-dom";
import Sendbtn from "../../../designComponents/Sendbtn";
import sendIcon from "./../../../../assets/send_icon.png";

const AllRequests = observer((props) => { 
    const navigate = useNavigate();
    const navigation = useNavigate();
    const Back = () => {
        navigation(-1);
    }
    const handleClick = (username, avatar, amount, tradingCode) => {

        console.log("userName", username, avatar, amount)
        const stateData = {
            username,
            avatar,
            amount,
            tradingCode,
        }

        navigate("/sendrequestmoney", { state: stateData })
    }

    const getAmount = (tradingCode) => {
        let amount = 0;
        profileStore.transactions.forEach((transaction) => {
            if (transaction.tradingCode == tradingCode) {
                amount = transaction.amount
            }
        })
        return amount
    }

    return (
        <div className='container'>
            <div className='row mt-3' >
                <div className='col-2'onClick={Back}>
                    <img 
                    src={back_icon}
                    alt="back_icon"/>
                </div>
                <div className='col-8 text-center'>
                    <p className="all_request">Requests</p>
                </div>
                <div className='col-2'> 
                </div>
            </div>
            <hr />
            {profileStore.notifications.map((item) => {
                if (item.trType === "request") {
            const amount = getAmount(item.tradingCode)
                    return (
                        <div className="row" key={item._id} >
                            <div className="col-2">
                                <img
                                    src={item.avatar}
                                    style={{ minWidth: "40px", height: "40px", borderRadius: "50%" }}
                                    alt="avatar"
                                    onError={(e) => {
                                        e.target.src = 'https://static-00.iconduck.com/assets.00/avatar-default-icon-248x256-bdv8pdld.png'
                                    }} />
                            </div>
                            <div className="col-5">
                                <p className="user_name"
                                style={{ fontSize: "14px", margin: "0 0 2px 0px", fontWeight: "bold" }}>{item.userName}</p>
                                <p className="date"style={{ fontSize: "12px", margin: "0" }}>
                                    <span>{item.trType === "request" ? "+" : "-"}</span>${amount}</p>
                            </div>
                            <div className="col-5 text-center"style={{display:"flex",justifyContent:"end"}}>
                                <Sendbtn
                                    icon={<img src={sendIcon} alt='icon' width={"15px"} height={"15px"}/>}
                                    text={'Send'}
                                    onClick={() =>
                                        handleClick(item.userName, item.avatar, amount, item.tradingCode, item.trDate)} />
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
})

export default AllRequests;