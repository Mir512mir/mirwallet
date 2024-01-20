import React from 'react';
import { useNavigate } from 'react-router-dom';
import back_icon from "./../../../../assets/back_icon.png";
import language_icon from "./../../../../assets/language_icon.png";
import location_icon from "./../../../../assets/location_icon.png";
import notification_icon from "./../../../../assets/notifications _icon.png";
import call_icon from "./../../../../assets/call_icon.png";
import logout_icon from "./../../../../assets/logout_icon.png";

function Settings(props) {
    const navigation = useNavigate();
    const handleClick = () => {
        navigation(-1);
    }
    return (
        <div className='container'>
            <div className='row mt-2'>
                <div className='col-3' onClick={handleClick}>
                    <img
                        src={back_icon}
                        alt='back_icon' />
                </div>
                <div className='col-6 text-center'
                >
                    <p className='settings' style={
                        {
                            color: "#1A1A1A",
                            fontSize: "20px",
                            fontWeight: "bold"
                        }}>Settings</p>
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className='col' >
                    <p className='general'
                        style={
                            {
                                color: "#1A87DD",
                                textAlign: "start",
                                fontSize: "14px",
                                fontWeight: "bold"
                            }}>General</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-2'>
                    <img
                        src={language_icon}
                        alt='language_icon'
                        style={{margin: "0 0 17px 0"}} />
                </div>
                <div className='col-8'>
                    <p className='language' style={{ fontSize: "16px", margin: "0px", fontWeight: "bold", alignItems: "start" }}>Language</p>
                    <span className='change_language' style={{ fontSize: "12px", opacity: "0,5" }}>Change the language of the app.</span>
                </div>
            </div>
            <div className='row'>
                <div className='col-2'>
                    <img
                    src={location_icon}
                    alt='location_icon'
                    style={{margin: "0 0 17px 0"}}/>
                </div>
                <div className='col-8'>
                    <p className='location' style={{ fontSize: "16px", margin: "0", fontWeight: "bold", alignItems: "start" }}>Locations</p>
                    <span className='change_location' style={{ fontSize: "12px", opacity: "0,5" }}>Add your home and work locations.</span>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <p className='notifications' style={
                        {
                            color: "#1A87DD",
                            textAlign: "start",
                            fontSize: "14px",
                            fontWeight: "bold"
                        }}>Notifications</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-2'>
                <img
                    src={notification_icon}
                    alt='notification_icon'
                    style={{margin: "0 0 17px 0"}}/>
                </div>
                <div className='col-8'>
                    <p className='notifications' style={{ fontSize: "16px", margin: "0px", fontWeight: "bold", alignItems: "start" }}>Push notifications</p>
                    <span className='ntfation' style={{ fontSize: "12px", opacity: "0,5" }}>For daily update and others.</span>
                </div>
            </div>
            <div className='row'>
                <div className='col-2'>
                <img
                    src={notification_icon}
                    alt='notification_icon'
                    style={{margin: "0 0 17px 0"}}/>
                </div>
                <div className='col-8'>
                    <p className='notf' style={{ fontSize: "16px", margin: "0px", fontWeight: "bold", display: "flex", alignItems: "start" }}>Promotional notifications</p>
                    <span className='notfation' style={{ fontSize: "12px", opacity: "0,5" }}>New campain and offers.</span>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <p className='more' style={
                        {
                            color: "#1A87DD",
                            textAlign: "start",
                            fontSize: "14px",
                            fontWeight: "bold"
                        }}>More</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-2'>
                <img
                    src={call_icon}
                    alt='call_icon'
                    style={{margin: "0 0 17px 0"}}/>
                </div>
                <div className='col-8'>
                    <p className='contacts' style={{ fontSize: "16px", margin: "0px", fontWeight: "bold", display: "flex", alignItems: "start" }}>Contacts us</p>
                    <span className='contacts' style={{ fontSize: "12px", opacity: "0,5" }}>For more information</span>
                </div>
            </div>
            <div className='row'>
                <div className='col-2'>
                <img
                    src={logout_icon}
                    alt='logout_icon'
                    style={{margin: "0 0 17px 0"}}/>
                </div>
                <div className='col-8 mb-2'>
                    <p className='logout' style={{ fontSize: "16px", margin: "2px", fontWeight: "bold", display: "flex", alignItems: "start" }}>Logout</p>
                </div>
            </div>
        </div>
    );
}

export default Settings;