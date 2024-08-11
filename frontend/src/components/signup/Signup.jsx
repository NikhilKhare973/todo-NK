import React, { useState } from 'react'
import "./signup.css"; 

// import HeadingComp from "./HeadingComp"; 
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const history = useNavigate();
  const [Inputs, setInputs] = useState({
    email:"",
    username: "",
    password: "",
  });
  const change = (e) =>{
    const {name, value } = e.target;
    setInputs({ ...Inputs, [name]: value});
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${window.location.origin}/api/v1/register`, Inputs)
      .then((response) => {
        if (response.data.message === "User Already Exists") {
          alert(response.data.message);
        } else {
          alert(response.data.message);
          setInputs({
            email: "",
            username: "",
            password: "",
          });
          history("/signin");
        }
      });
  };

  return (
    <div className='signup'>
      <div className="container">
        <div className="row">
            <div className="col-lg-8 column  d-flex justify-conetent-center align-items-center  "> 
                <div className=" margin d-flex flex-column w-100 p-3 ">
                    <input name='email'  className='p-2 my-3 input-signup ' type="email" placeholder='Enter Your Email ' onChange={change} value={Inputs.email} /> 
                    <input name='username' className='p-2 my-3 input-signup ' type="username" placeholder='Enter Your Usename' onChange={change} value={Inputs.username} />  
                    <input name='password' className='p-2 my-3 input-signup ' type="password" placeholder='Enter Your Password' onChange={change} value={Inputs.password} />    
                    <button className='btn-sign-up p-2' onClick={submit} > Sign Up</button>
                </div>     
            </div>
            <div className="col-lg-4 column col-left d-lg-flex justify-conetent-center align-items-center d-none "> 
                {/* <HeadingComp first="Sign" second='up' /> */}
                <h1 className='text-center sign-in-heading' >
                    Sign <br /> Up
                </h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
