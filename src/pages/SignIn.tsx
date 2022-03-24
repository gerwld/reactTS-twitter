import React from "react";

const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="sign-in__block sign-in__block-1">
        <div className="block_content">
          <ul className="benefits">
            <li>Join your interests</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
      <div className="sign-in__block">
        <div className="block_content">
          <div className="logo">
            <img src="/" alt="Logo" />
          </div>
          <h1 className="header">See what's happening in the world right now</h1>
          <p className="subheader">Join twitter today.</p>
          <div className="buttons">
            <button className="btn btn-login">Sign Up</button>
            <button className="btn btn-login">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
