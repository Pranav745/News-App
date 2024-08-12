import React from 'react';
import '../css/signup.css';

function Signup() {
    return (
        <div className="container main-div">
            <div className="heading">
                <h2>Create an Account</h2>
                <p>Join us today!</p>
            </div>

            <div className="inputs">
                <div className="input-group mb-3">
                    <span className="input-group-text"><i className="fa-solid fa-user"></i></span>
                    <input type="text" className="form-control" placeholder="Name" aria-label="Name" />
                </div>

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
                <button type="button" className="btn btn-primary">Sign Up</button>
            </div>

            <div className="login">
                <p>Already have an account? <a href="/login">Log in</a></p>
            </div>
        </div>
    );
}

export default Signup;
