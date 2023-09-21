import React from "react";
import './Footer.scss';

function Footer() {
  return (
    <>
    <div className="bg-black footer-1 text-grey py-5">
      <div className="containerr">
        <p>Questions? Call 000-800-919-1694</p>
      </div>
      <div className="containerr d-md-flex justify-content-between align-items-start pt-2">
        <div className="col-md-3">
          <p>FAQ</p>
          <p>Investor Relations</p>
          <p>Privacy</p>
          <p>Speed Test</p>
          <select name="English" className="lang mb-4 mt-2">
            <option value="english">English</option>
            <option value="tamil">Tamil</option>
          </select>
          <p>Netflix India</p>
        </div>
        <div className="col-md-3">
          <p>Help Centre</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
          <p>Legal Notice</p>
        </div>
        <div className="col-md-3">
          <p>Account</p>
          <p>Ways to Watch</p>
          <p>Corporate Information</p>
          <p>Only on Netflix</p>
        </div>
        <div className="col-md-3">
          <p>Media Center</p>
          <p>Terms of use</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>

    <div className="bg-black footer-2 text-grey py-5">
      <div className="containerr">
        <p>Questions? Call 000-800-919-1694</p>
      </div>
      <div className="containerr d-flex justify-content-start align-items-start pt-2">
        <div className="col-lg-6">
          <p>FAQ</p>
          <p>Account</p>
          <p>Investor Relations</p>
          <p>Ways to Watch</p>
          <p>Privacy</p>
          <p>Corporate Information</p>
          <p>Speed Test</p>
          <p>Only on Netflix</p>
          <select name="English" className="lang mb-4 mt-2">
            <option value="english">English</option>
            <option value="tamil">Tamil</option>
          </select>
          <p>Netflix India</p>
        </div>
        <div className="col-lg-6 mx-md-5 px-md-5 mx-5">
          <p>Help Centre</p>
          <p>Media Center</p>
          <p>Jobs</p>
          <p>Terms of use</p>
          <p>Cookie Preferences</p>
          <p>Contact Us</p>
          <p>Legal Notice</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
