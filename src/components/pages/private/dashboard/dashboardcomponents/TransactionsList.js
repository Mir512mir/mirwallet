import React from 'react';

function TransactionsList(props) {
    return (
        <div className='row'
            style={{ marginBottom: "15px" }}>
            <div className='col-2 mb-2'
                style={{ display: "flex", alignItems: "center", justifyContent: "start" }}>
                <img
                    className='ava_icon'
                    src={props.userAvatar}
                    alt='avatar_icon'
                    onError={(e) => {
                        e.target.src = 'https://static-00.iconduck.com/assets.00/avatar-default-icon-248x256-bdv8pdld.png'
                    }
                    }
                    style={{ minWidth: "40px", height: "40px", borderRadius: "50%" }} />
            </div>
            <div className='col-6'>
                <p className='user&' style={{ fontSize: "15px", margin: "0 0 2px 0px", fontWeight: "bold" }}>{props.userName}</p>
                <p className='trDate&' style={{ fontSize: "12px", margin: "0" }}>{props.trDate}</p>
            </div>


            <div className='col-4' style={{ fontWeight: "bold", fontSize: "15px", margin: "15px 0 0px 0px", display: "flex", alignItems: "center", justifyContent: "end" }}>
                <p className='all-view'>
                    <span>{props.trType === "in" ? "+" : "-"}</span>${props.amount}</p>
            </div>
        </div>
    );
}

export default TransactionsList;