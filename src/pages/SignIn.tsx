import React, { useState } from "react";
import { ModalWindow } from "../common/ModalWindow/ModalWindow";
import { Form, Field } from "react-final-form";
import SimpleForm from '../common/SimpleForm';

const SignIn = () => {
  const [showSignModal, changeSignModal] = useState(false);
  const [showSignUpModal, changeSignUpModal] = useState(false);

  const onChangeSignModal = () => {
    changeSignModal(true);
  };
  const onChangeSignUpModal = () => {
    changeSignUpModal(true);
  };

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
          <p className="subheader">Join Twitter today.</p>
          <div className="buttons">
            <button onClick={onChangeSignModal} className="btn btn-login">
              Sign Up
            </button>
            <button onClick={onChangeSignUpModal} className="btn btn-login">
              Log In
            </button>
          </div>
        </div>
      </div>
      {showSignModal && (
        <ModalWindow setVisible={changeSignModal} title="Sign Up">
          <SignUpForm />
        </ModalWindow>
      )}

      {showSignUpModal && (
        <ModalWindow setVisible={changeSignUpModal} title="Log In to Twitter">
          <SignInForm />
        </ModalWindow>
      )}
    </div>
  );
};

const SignInForm = () => {
  return (
    <SimpleForm onSend={(e) => console.log(e)}>
      <div>
        <label>Login</label>
        <Field name="login" component="input" placeholder="Login" />
      </div>
      <div>
        <label>Password</label>
        <Field name="password" component="input" placeholder="Password" />
      </div>
      <button type="submit">Log In</button>
    </SimpleForm>
  );
};

const SignUpForm = () => {
  return (
    <SimpleForm onSend={(e) => console.log(e)}>
      <div>
        <label>Login</label>
        <Field name="login" component="input" placeholder="Login" />
      </div>
      <div>
        <label>Password</label>
        <Field name="password" component="input" placeholder="Password" />
      </div>
      <button type="submit">Log In</button>
    </SimpleForm>
  );
};

export default SignIn;
