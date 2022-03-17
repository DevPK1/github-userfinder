import React from 'react'
import LoginImg from "../images/login.png"
const Login=()=>{
    return(
        <div className="container login-wrapper">
            <div className="row">
                <div className="col-lg-6">
                    <img src={LoginImg} alt="login-img" className="img-fluid" />
                </div>
                <div className="col-lg-4">
                    <h1>Github User</h1>
                    <button className="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    )
}
export default Login