import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import Footer from '../../partials/footer/Footer';
import './profile.scss';
import profileStore from './../../private/profile/ProfileStore';
import useService from '../../../../services/requests';
import { useEffect } from 'react';
import profile_icon from './../../../../assets/profile_icon.png';
import card_icon from './../../../../assets/card_icon.png';
import settings_icon from './../../../../assets/settings_icon.png';
import help_icon from './../../../../assets/help_icon.png';
import arrow_icon from './../../../../assets/arrow_icon.png';
import edit_icon from './../../../../assets/edit_icon.png'

function Profile(props) {

  const { GET_USER_DATA } = useService();

  useEffect(() => {

    GET_USER_DATA()

      .then((data) => {
        console.log("myData", data);
        profileStore.setProfile(data);
      })
  }, []);

  return (
    <div className='_profile'>
      <div className='header_ctn_profile container'>
        <div className='row mt-3'>
          <div className='col-2'>
          </div>
          <div className='col-8 text-center'>
            <p className='my_title'>My Profile</p>
          </div>
          <div className='col-2'>
            <Link to='/modalprofile'><img
              src={edit_icon}
              alt='edit_icon'
              style={{ margin: "0 0 15px 0" }} />
            </Link>
          </div>
        </div>
        <div className='row mt-2 text-center'>
          <div className='col'>
            <img
              className='useroval'
              src={profileStore.avatar}
              style={{ minWidth: "50px", height: "50px", borderRadius: "50%" }}
              alt='useroval'
              onError={(e) => {
                e.target.src = 'https://static-00.iconduck.com/assets.00/avatar-default-icon-248x256-bdv8pdld.png'
              }
              } />
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col mb-2'>
            <p className='my_fullname'>{profileStore.username}</p>
          </div>
        </div>
      </div>
      <div className='container mt-2'
        style={{ fontSize: "14px", fontWeight: "bold" }}>
        <div className='row profile-main'>
          <div className='col-2'>
            <img src={profile_icon}
              minWidth="24" height="24"
              alt='pay' />
          </div>
          <div className='col'>My Info</div>
          <div className='col-2'>
            <Link to='/myinfo'>
              <img
                src={arrow_icon}
                style={{ minWidth: "24px", height: "24px" }}
                alt='pay' /> </Link>
          </div>
        </div>
        <div className='row profile-main'>
          <div className='col-2'><img src={card_icon} alt='pay' /></div>
          <div className='col'
          >My Cards</div>
          <div className='col-2'>
            <Link to='/mycards'><img src={arrow_icon}
              style={{ minWidth: "24px", height: "24px" }}
              alt='pay' /></Link>
          </div>
        </div>
        <div className='row profile-main'>
          <div className='col-2'><img src={settings_icon} alt='pay' /></div>
          <div className='col'
          >Settings</div>
          <div className='col-2'>
            <Link to='/settings'><img
              src={arrow_icon}
              style={{ minWidth: "24px", height: "24px" }}
              alt='pay' /></Link></div>
        </div>
        <div className='row profile-main'>
          <div className='col-2'><img src={help_icon} alt='pay' /></div>
          <div className='col'
          >Help Center</div>
          <div className='col-2'><img
            src={arrow_icon}
            alt='pay'
            style={{ minWidth: "24px", height: "24px" }} /></div>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default observer(Profile);