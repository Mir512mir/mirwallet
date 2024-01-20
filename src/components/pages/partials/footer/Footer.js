import "./footer.scss";
import {NavLink } from "react-router-dom";

import home from './../../../../assets/home_icon.png';
import arrows from './../../../../assets/arrows_icon.png';
import contacts from './../../../../assets/contacts_icon.png';
import user_icon from './../../../../assets/user_icon.png';
function Footer() {
    return (
        <div className='container_footer'>
            <div className="footer_opacity">
                <div className='row'>
                    <div className='col-3'>
                        <NavLink to='/dashboard'style={({isActive}) => ({opacity: isActive ? '1' : '0.3'})} >
                            <img src={home} alt="home" />
                            <br />Home</NavLink>
                    </div>
                    <div className='col-3'>
                        <NavLink to='/transactions'style={({isActive}) => ({opacity: isActive ? '1' : '0.3'})} >
                            <img src={arrows} alt="arrows" />
                            <br />Transactions</NavLink>
                    </div>
                    <div className='col-3'>
                        < NavLink to='/contacts'style={({isActive}) => ({opacity: isActive ? '1' : '0.3'})} >
                            <img src={contacts} alt="contacts" />
                            <br />Contacts</NavLink>
                    </div>
                    <div className='col-3'>
                        <NavLink to='/profile'style={({isActive}) => ({opacity: isActive ? '1' : '0.3'})} >
                            <img src={user_icon} alt="icon" />
                            <br />Profile</NavLink>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;