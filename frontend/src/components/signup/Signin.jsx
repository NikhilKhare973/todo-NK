import React from 'react';
import "./signup.css"; 
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import HeadingComp from "./HeadingComp"; 
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';


const SignIn= () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [Inputs, setInputs] = useState({
    email:"",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${window.location.origin}/api/v1/signin`,
        Inputs
      );
      console.log(response.data);
      if (response.data) {
        sessionStorage.setItem("id", response.data.user._id);
        dispatch(authActions.login());
        history("/todo");
      } else {
        // Handle the case where the response does not contain the expected data
        console.error("Response data or _id not found in the response.");
      }
    } catch (error) {
      // Handle any errors that occurred during the HTTP request
      console.error("An error occurred:", error);
    }
  };


  return (
    <div className='signup'>
    <div className="container">
      <div className="row">
      <div className="col-lg-4 column col-left d-none d-lg-flex justify-conetent-center align-items-center"> 
            <h1 className='text-center sign-in-heading' > 
                Sign <br /> In
            </h1> 
            </div>
          <div className="col-lg-8 column  d-flex justify-conetent-center align-items-center  "> 
              <div className=" margin d-flex flex-column w-100 p-3 ">
                  <input name='email'  className='p-2 my-3 input-signup ' type="email" placeholder='Enter Your Email' value={Inputs.email} onChange={change} /> 

                  <input
                  className="p-2 my-3 input-signup"
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  value={Inputs.password}
                  onChange={change}
                />    
                  <button className='btn-sign-up p-2' onClick={submit} > Sign In</button>
              </div>     
          </div>
          
              {/* <HeadingComp first="Sign" second='in' /> */}
               
          
      </div>
    </div>
  </div>
  )
}

export default SignIn;
