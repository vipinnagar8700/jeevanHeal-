import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import loginBanner from "../../assets/images/login-banner.png";
import config from "config";
import { Link } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import { useCookies } from 'react-cookie';
import { setcookie } from "../../../Helper/Cookie";
import { loginaction } from "../../../API/login";
import { setlocalstroage } from "../../../Helper/localstorage";
import { useFormik } from 'formik';
import * as yup from 'yup'
import { Registerc } from "../../../Context/Registerauth";

const LoginContainer = (props) => {
  const history = useHistory();
  const [email_phone, setEmail_phone] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['user']);
   let {pat,setpat} = useContext(Registerc)
  // alert("vipin ");
  console.log(pat,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  useEffect(() => {

    document.body.classList.add("account-page");

    return () => document.body.classList.remove("account-page");
  }, []);
console.log(email_phone,password,"jkgiyf");
  const HandleClick = async (e) =>  {
    e.preventDefault();



    const res = await fetch("https://jeevan.studiomyraa.com/api/login_action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email_phone, password
      })
    })
    const data = await res.json();
    console.log(data, "datadli detail");
    
    if (data.role === "user") {
      window.alert("Login Succesfully");
      console.log("Login Succesfully");
      setlocalstroage('login2', data)
      setpat("ramesh");

      history.push("/patient/dashboard");
      
    }

    else if (data.role === "doctor") {

      window.alert("Login Succesfully");
      setlocalstroage('login2', data)
      console.log("Login Succesfully");
      if (data.token) {
        setcookie('login2', data.token)
      }

      history.push("/doctor/doctor-dashboard");

    }

    else if (data.role === "pharmacy") {

      window.alert("Login Succesfully");
      setlocalstroage('login2', data)
      console.log("Login Succesfully");
      if (data.token) {
        setcookie('login', data.token)
      }

      history.push("/Pharmacy/pharmacy-registerstep-1");

    }
    else if (data.role === "admin") {

      window.alert("Login Succesfully");
      setlocalstroage('login2', data)
      console.log("Login Succesfully");
      if (data.token) {
        setcookie('login', data.token)
      }

      history.push("/admin");

    } else {
      window.alert("Something went wrong please try again!");
      console.log("Something went wrong please try again!");

    }
  }



  
  return (
    <>
      <Header {...props} />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src={loginBanner}
                      className="img-fluid"
                      alt="Doccure Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="row">
                      <div className="col-md-3">

                        <div className="text-left dont-have1  mt-10 mb-8">

                          <Link to="/login">LOGIN</Link>
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="text-left dont-have dont-have  mt-10 mb-8">

                          <Link to="/register">SIGNUP</Link>
                        </div>
                      </div>
                    </div>
                    <br></br>
                    <div className=" login-right">
                      <div className="login-header">
                        <h3>
                          Login <span>JeevanHeal</span>
                        </h3>
                      </div>
                      <form >
                        <div className="form-group form-focus">
                          <input
                            className="form-control floating"
                            type="text"
                            name="email_phone"
                            value={email_phone}
                            onChange={(e)=>{
                              setEmail_phone(e.target.value)
                            }}
                           />




                          <label className="focus-label">Phone or Email</label>

                        </div>

                        <div className="form-group form-focus">
                        <input
                            className="form-control floating"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e)=>{
                              setPassword(e.target.value)
                            }}
                           />

                          
                          <label className="focus-label">Password</label>

                        
                        </div>
                        <div className="text-end">
                          <Link to="/forgot-password" className="forgot-link">
                            Forgot Password ?
                          </Link>
                        </div>
                        <button
                          className="btn btn-primary w-100 btn-lg login-btn"
                          type="submit"
                          onClick={HandleClick}
                         
                        >
                          Login
                        </button>
                        <div className="login-or">
                          <span className="or-line"></span>
                          <span className="span-or">or</span>
                        </div>
                        <div className="row form-row social-login">
                          <div className="col-6">
                            <a href="#0" className="btn btn-facebook w-100">
                              <i className="fab fa-facebook-f me-1"></i>Login
                            </a>
                          </div>
                          <div className="col-6">
                            <a href="#0" className="btn btn-google w-100">
                              <i className="fab fa-google me-1"></i>Login
                            </a>
                          </div>
                        </div>
                        <div className="text-center dont-have">
                          Don’t have an account?
                          <Link to="/register"> Register</Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </>
  );
};

export default LoginContainer;