import React, { useEffect } from 'react';
import './dashboard.scss';
import { observer } from "mobx-react";
import useService from '../../../../services/requests';
import bell from "./../../../../assets/notifications _icon1.png";
import Footer from '../../partials/footer/Footer';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import profileStore from "../profile/ProfileStore";
import Greating from './dashboardcomponents/Greating';
import TransactionsList from './dashboardcomponents/TransactionsList';
import BtnMoney from './dashboardcomponents/BtnMoney';
import TotalBalance from './dashboardcomponents/TotalBalance';

function Dashboard(props) {

    const { GET_USER_DATA } = useService();

    useEffect(() => {
        GET_USER_DATA()
            .then((data) => {
                console.log(">>>> main data", data);
                profileStore.setProfile(data);
            })
    }, []);
    const deleteNotifications = () => {
        const token = localStorage.getItem("jwt");
        fetch("http://49.13.31.246:9191/notifications", {
            "headers": {
                "x-access-token": token
            },
            "body": null,
            "method": "DELETE",
        });
    }

    return (
        <div className='container_dashboard'>
            <div className='header_dashboard container'>
                <div className='row mt-4'>
                    <div className='col-6  '>
                        <p className='title_dashboard'>Dashboard</p>
                    </div>
                    <div className='col-6' style={{ display: "flex", alignItems: "center", justifyContent: "end",margin:"0 0 17px 0"}}>
                        <img
                            className='avatar_user'
                            src={profileStore.avatar}
                            alt='avatar_user'
                            onError={(e) => {
                                e.target.src = 'https://static-00.iconduck.com/assets.00/avatar-default-icon-248x256-bdv8pdld.png'
                            }
                            } />
                    </div>
                </div>
                <Greating
                    name={profileStore.username} />
                <TotalBalance/>
                <div className='row mb-3'>
                    <div className='col-6'>
                        <div className='money'>${profileStore.balance}</div>
                    </div>
                    <div className='col-6' style={{ fontWeight: "bold", fontSize: "15px", display: "flex", alignItems: "center", justifyContent: "end" }} >
                        <Link to="/allrequests"><button onClick={deleteNotifications}>
                            <Badge badgeContent={profileStore.notifications.length} classes={{ badge: 'custom-badge' }} color="secondary">
                                <img className='img_ntf' src={bell} alt='img_ntf' />
                            </Badge>
                        </button></Link>
                    </div>
                </div>
            </div>
            <BtnMoney/>
            <div className='container'>
                <div className='row mt-3'>
                    <div className='col-6'
                        style={{ display: "flex", alignItems: "center", justifyContent: "start", fontWeight: "bold", fontSize: "15px" }}>
                        <p className='text_trns'>Transactions</p>
                    </div>
                    <div className='col-6 '
                        style={{ fontWeight: "bold", fontSize: "15px", display: "flex", alignItems: "center", justifyContent: "end" }}>
                        <p className='text_view'>View All</p>
                    </div>
                </div>
                {profileStore.transactions.map((item) => (
                    <TransactionsList
                        userAvatar={item.userAvatar}
                        amount={item.amount}
                        trType={item.trType}
                        trDate={item.trDate}
                        userName={item.userName} />
                ))}
            </div>
            <Footer />
        </div>

    );
}

export default observer(Dashboard);