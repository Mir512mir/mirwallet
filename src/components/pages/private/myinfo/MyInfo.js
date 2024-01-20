import React, { useState } from 'react';
import './myInfo.scss';
import back_icon from './../../../../assets/back_icon.png';
import { useNavigate } from 'react-router-dom';
import PrimaryBtn from '../../../designComponents/PrimaryBtn';
import profileStore from './../../private/profile/ProfileStore';

function MyInfo(props) {
    const { username, avatar } = profileStore;
    const [formData, setFormData] = useState({
        username: '',
        avatar: '',
        fullName: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            // Отправка данных на сервер методом PUT
            const token = localStorage.getItem("jwt")
            const response = await fetch('http://49.13.31.246:9191/me', {
                method: 'PUT',
                headers: {
                    "x-access-token": token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Обработка успешного ответа с сервера
                console.log('Профиль успешно обновлен');
            } else {
                // Обработка ошибки
                console.error('Ошибка при обновлении профиля');
            }
        } catch (error) {
            console.error('Ошибка при отправке запроса', error);
        }
    };
    const navigation = useNavigate();
    const handleClick = () => {
        navigation(-1);
    }
    return (
        <div className='my_info'>
            <div className='container'>
                <div className='row mt-3'>
                    <div className='col-2'>
                        <img className='back_icn' onClick={handleClick} src={back_icon} alt='back' />
                    </div>
                    <div className='col-8 text-center'>
                        <p className='title_myinfo'>My Info</p>
                    </div>
                    <div className='col-2'>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <div className='col text-center'>
                        <img className='prf_icon'
                            style={{ minWidth: "40px", height: "40px", borderRadius: "50%" }}
                            src={avatar}
                            alt='profile_icon'
                            onError={(e) => {
                                e.target.src = 'https://static-00.iconduck.com/assets.00/avatar-default-icon-248x256-bdv8pdld.png'
                            }} />
                    </div>
                </div>
                <form className='form_login' onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col'>
                            <b>User Name</b>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <input
                                className='names'
                                type="text"
                                placeholder="Enter your user name"
                                name="uname"
                                defaultValue={username}
                                onChange={handleChange}

                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <b>User Avatar</b>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <input
                                className='url_avatar'
                                type="text"
                                placeholder="Enter your url"
                                defaultValue={avatar}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <b>Phonenumber</b>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <input
                                className='phonenumber'
                                type="text"
                                placeholder="+48511067625"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='row mt-5 mb-2'>
                        <div className='col'>
                            <PrimaryBtn
                                text={'Save Changes'}
                                type="submit"
                            />
                        </div>
                    </div>


                </form>



            </div>


        </div>


    );
}

export default MyInfo;