import React from 'react';
import Sendbutton from './../../../../designComponents/Sendbutton';
import Requestbutton from './../../../../designComponents/RequestButton';
import sendIcon from "./../../../../../assets/send_icon.png";
import requestIcon from "./../../../../../assets/request_icon.png";
import { Link } from 'react-router-dom';

function BtnMoney(props) {
    return (
        <div className='container'>
            <div className='row mt-3'>
                <div className='col-6'>
                    <Link to='/sendmoney'><Sendbutton icon={<img src={sendIcon} alt='icon' width="18px" />} text={'Send Money'} /></Link>
                </div>
                <div className='col-6'>
                    <Link to='/requestmoney'><Requestbutton icon={<img src={requestIcon} alt='icon' width="18px" />} text={'Request Money'} /></Link>
                </div>
            </div></div>


    );
}

export default BtnMoney;