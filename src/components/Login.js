import React from 'react';
import '../css/login.css';

function Login() {
    return (
        <div className="container main-div">
            <div className="heading">
                <h2>Welcome Back</h2>
                <p>Glad to see you again!</p>
            </div>

            <div className="inputs">
                <div className="input-group mb-3">
                    <span className="input-group-text"><i className="fa-solid fa-square-envelope"></i></span>
                    <input type="email" className="form-control" placeholder="Email" aria-label="Email" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text"><i className="fa-solid fa-key"></i></span>
                    <input type="password" className="form-control" placeholder="Password" aria-label="Password" />
                </div>
            </div>

            <div className="actions">
                <span className="forgot-password">Forgot password?</span>
                <button type="button" className="btn btn-primary">Login</button>
            </div>

            <div className="signup">
                <p>Don’t have an account? <a href="/">Sign up</a></p>
            </div>
        </div>
    );
}

export default Login;
