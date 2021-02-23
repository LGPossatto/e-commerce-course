import React, { Component } from "react";

import "./sign-up.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (password !== confirmPassword) {
        alert("Password don't match!");
        return;
      }

      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );

        await createUserProfileDocument(user, { displayName });

        this.setState({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.log(error);
      }
    };

    const handleChange = (e) => {
      const { name, value } = e.target;

      this.setState({ [name]: value });
    };

    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={handleChange}
            label="Display Name"
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={handleChange}
            label="Email"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={handleChange}
            label="Password"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={handleChange}
            label="Confirm Password"
            required
          ></FormInput>
          <CustomButton type="Submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
