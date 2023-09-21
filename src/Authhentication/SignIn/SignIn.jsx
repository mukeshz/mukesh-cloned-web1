import React from "react";
import "./SignIn.scss";
import logo from "../../Assets/LandingPage/logo.png";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

function SignIn() {
  const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
  ))(({ theme }) => ({
    "& .MuiFilledInput-root": {
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "#333333",
      color: "white",
      transition: theme.transitions.create(["background-color"]),
      "&:hover": {
        backgroundColor: "#333333",
      },
      "&.Mui-focused": {
        backgroundColor: "#333333",
      },
    },
  }));

  return (
    <div className="signIn">
      <div className="cover">
        <div className="signIn-outer-box">
          <img src={logo} className="logo m-3 m-md-4 mx-md-5" />
          <div className="d-flex justify-content-center align-items-center mx-3 mt-3">
            <div className="signIn-inner-box p-md-5">
              <h1 className="white text-start" style={{ fontSize: "32px" }}>
                Sign In
              </h1>
              <RedditTextField
                label="Email or phone number"
                variant="filled"
                InputLabelProps={{
                  style: {
                    color: "#BBBBBB",
                  },
                }}
                className="signIn-input my-3"
              />
              <RedditTextField
                label="Password"
                variant="filled"
                InputLabelProps={{
                  style: {
                    color: "#BBBBBB",
                  },
                }}
                className="signIn-input"
              />
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-sign-In py-2"
                  style={{ fontSize: 19 }}
                >
                  Sign In
                </button>
              </div>
              <div className="d-flex justify-content-between mt-2 checkbox">
                <p className="gray" style={{ fontSize: 14 }}>
                  <input type="checkbox" className="" /> Remember me
                </p>
                <p className="gray" style={{ fontSize: 14 }}>
                  Need help?
                </p>
              </div>
              <p className="gray my-2 mb-3 mt-md-4">
                New to Netflix? <span className="white">Sign Up Now.</span>
              </p>
              <p className="gray box-hieght-bottom" style={{ fontSize: 12 }}>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.<span style={{ color: "blue" }}> Learn more.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-box text-gray-footer-1">
          <div>
            <div className="containerr">
              <p className="pt-2">Questions? Call 000-800-919-1694</p>
            </div>
            <div className="containerr d-flex justify-content-start align-items-start pt-2">
              <div className="col-lg-6">
                <p>FAQ</p>
                <p>Terms of use</p>
                <p>Cookie Preferences</p>
                <select name="English" className="lang mb-4 mt-2">
                  <option value="english">English</option>
                  <option value="tamil">Tamil</option>
                </select>
              </div>
              <div className="col-lg-6 mx-md-5 px-md-5 mx-5">
                <p>Help Centre</p>
                <p>Privacy</p>
                <p>Corporate Information</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-box text-gray-footer-2">
          <div>
            <div className="containerr">
              <p className="pt-md-3 pt-lg-4">Questions? Call 000-800-919-1694</p>
            </div>
            <div className="containerr d-flex justify-content-start align-items-start pt-2">
              <div className="col-lg-3">
                <p>FAQ</p>
                <p>Cookie Preferences</p>
                <select name="English" className="lang mb-4 mt-2">
                  <option value="english">English</option>
                  <option value="tamil">Tamil</option>
                </select>
              </div>
              <div className="col-lg-3 mx-md-5 px-md-5 mx-5">
                <p>Help Centre</p>
                <p>Corporate Information</p>
              </div>
              <div className="col-lg-3">
                <p>Terms of use</p>
              </div>
              <div className="col-lg-3">
                <p>Privacy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
