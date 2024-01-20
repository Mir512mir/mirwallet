import React from 'react';

function ListSendMoney(props) {
    return (
        <div className="row" key={props._id}>
            <div className="col-2 avatar-transactions" id='send_avatarImg'>
                <img id='send_avatar'
                    src={props.avatar} alt="avatar"
                    style={{ minWidth: "40px", height: "40px", borderRadius: "50%" }} />
            </div>
            <div className="col-3 bio-transactions">
                <p className="username" id='send-fullname'
                    style={{ fontSize: "15px", margin: "0 0 2px 0px", fontWeight: "bold" }}>{props.fullName}</p>
                <p className="date" id='send-username'
                    style={{ fontSize: "10px", margin: "0" }}>{props.username}</p>
            </div>
        </div>
    );
}

export default ListSendMoney;