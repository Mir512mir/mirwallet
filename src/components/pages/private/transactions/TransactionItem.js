import React from 'react';

function TransactionItem(props) {
    return (
        <div className='mt-3' key={props._id}>
            <div className='row'>
                <div className='col-2'
                    style={{ display: "flex", alignItems: "center", justifyContent: "start" }}>
                    <img
                        className='ava_icon'
                        src={props.userAvatar}
                        alt='avatar_icon'
                        onError={(e) => {
                            e.target.src = 'https://static-00.iconduck.com/assets.00/avatar-default-icon-248x256-bdv8pdld.png'
                        }}
                        style={{ minWidth: "40px", height: "40px", borderRadius: "50%" }} />
                </div>
                <div className='col-6'>
                    <p className='user&' style={{ fontSize: "15px", margin: "0 0 2px 0px", fontWeight: "bold" }}>{props.userName}</p>
                    <p className='trDate&' style={{ fontSize: "12px", margin: "0" }}>{props.trDate}</p>
                </div>
                <div className='col-4' style={{fontWeight: "bold", fontSize: "15px", display: "flex", alignItems: "center", justifyContent: "end" }}>
                    <p className='all-view' style={{ margin: "3px 0 0px 0px"}}>
                        <span>{props.trType === "in" ? "+" : "-"}</span>${props.amount}</p>
                </div>
            </div>
        </div>


    );
}

export default TransactionItem;