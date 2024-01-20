import React from 'react';
import logo from '../../../../assets/logo.png';

import { Link, useNavigate } from 'react-router-dom';
import './mirWallet.scss';
import PrimaryBtn from '../../../designComponents/PrimaryBtn';
const MirWallet = () => {
    const navigation = useNavigate();
    const handleClick = () => {
        navigation("/signUp");
    }
    return (
        <div className=' mirwallet_container '>
            <div className='mirwallet_content text-center'>
                <div className='row'>
                    <div className='col mt-5'>
                        <img className='icon_logo' src={logo} alt='logo' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col mt-2'>
                        <p className='icon_text'>MirWallet</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col mt-4'>
                        <p className='descr'>The Best Way to <span className='midledescr'>Transfer Money </span> Safely </p>
                    </div>
                </div>
            </div>
            <div className='btn_content'>
                <div className='row text-center'>
                    <div className='col'>
                        <PrimaryBtn onClick={handleClick} text={"Create new account"} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col link mb-2'>
                        <Link to='/login'>Already have account?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MirWallet;