import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import useService from "../../../../services/requests";
import PrimaryBtn from "../../../designComponents/PrimaryBtn";
import './signUp.scss';

function SignUP(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { POST_REG_USER } = useService();
  const handleDataChange = (e, setData) => {
    setData(e.target.value);
    console.log("ok");
  };

  const onRegistration = () => {
    const formData = {
      username: name,
      password: password,
      confirm_password: confirmPassword,
    };
    console.log();
    POST_REG_USER(formData)
      .then(() => {
        handleClick()
      })
  };
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/login");
  }

  return (
    <div className='container_login'>
      <div className='row mt-3'>
        <div className='col'>
          <h1>Signup and start
            <br />
            transfering
          </h1>
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-6'>
          <button type="button" className="btn">Google</button>
        </div>
        <div className='col-6'>
          <button type="button" className="btn">Facebook</button>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onRegistration();
        }}
      >
        <div className="row mt-4">
          <b>Email</b>
        </div>
        <div className="row">
          <input
            type="text"
            placeholder="Enter your email"
            value={name}
            onChange={(e) => {
              handleDataChange(e, setName);
            }}
          />
        </div>
        <div className="row mt-3">
          <b>Password</b>
        </div>
        <div className="row">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              handleDataChange(e, setPassword);
            }}
          />
        </div>
        <div className="row mt-3">
          <b>Renter password</b></div>
        <div className="row">
          <input
            type="password"
            placeholder="Enter your password again"
            value={confirmPassword}
            onChange={(e) => {
              handleDataChange(e, setConfirmPassword);
            }}
          />
        </div>
        <div className='row mt-4'>
          <PrimaryBtn text={"Create account"} />
        </div>
        <div className='row create_account mt-2'>
          <Link to='/login'>Already have account?</Link>
        </div>
      </form>
    </div>
  );
}

export default SignUP;
