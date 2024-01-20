import React from 'react';
import './login.scss';
import useService from '../../../../services/requests';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
function Login(props) {

    const { POST_LOGIN_USER: login } = useService();

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    let userData;
    const submittedData = (data) => {
        console.log('OK');
        userData = {
            "username": data.login,
            "password": data.password
        };
        login(userData)
            .then(data => {
                if (data.token) {
                    console.log(data);
                    localStorage.setItem('jwt', data.token);
                    navigate('/dashboard')
                }
            })
            .catch((error) => {
                console.log(error);

            })
            .finally(() => reset());
    }

    return (
        <div className='container_login container'>
            <div className='row mt-3'>
                <div className='col'>
                    <h1>Login and start
                        <br />
                        transfering
                    </h1>
                </div>
            </div>
            <div className='row mt-5 text-center'>
                <div className='col-6'>
                    <button type="button" className="btn">Google</button>
                </div>
                <div className='col-6'>
                    <button type="button" className="btn">Facebook</button>
                </div>
            </div>
            <div className='form_login'>
                <form onSubmit={handleSubmit(submittedData)}>
                    <div className='row mt-4'>
                        <b>Email</b>
                    </div>
                    <div className='row'>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="login"
                            {...register("login")} />
                    </div>
                    <div className='row mt-2'>
                        <b>Password</b>
                    </div>
                    <div className='row'>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="psw"
                            {...register("password")}
                        />
                    </div>
                    <div className='row forget_psw'>
                        <a className="forget-pass" href="/#">Forget password?</a>
                    </div>
                    <div className='row mt-5'>
                        <button className='btn_login' type="submit">Login</button>
                    </div>
                </form>
            </div>
            <div className='row mt-3 mb-3 create_account'>
                <Link to='/signUp'>Create new account</Link>
            </div>
        </div>
    );
}

export default Login;