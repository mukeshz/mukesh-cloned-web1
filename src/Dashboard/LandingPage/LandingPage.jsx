import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import logo from "../../Assets/LandingPage/logo.png";
import "./LandingPage.scss";
import img1 from "../../Assets/LandingPage/img1.png";
import img2 from "../../Assets/LandingPage/img2.jpg";
import img3 from "../../Assets/LandingPage/img3.png";
import img4 from "../../Assets/LandingPage/img4.png";
import img5 from "../../Assets/LandingPage/img5.png";
import vid1 from "../../Assets/LandingPage/vid1.gif";
import vid2 from "../../Assets/LandingPage/vid2.gif";
import download from "../../Assets/LandingPage/download-icon.gif";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate(); 
  const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
  ))(({ theme }) => ({
    "& .MuiFilledInput-root": {
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(0,0,0, 0.5)",
      border: "1px solid #BBBBBB",
      color: 'white',
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      "&:hover": {
        backgroundColor: "rgb(0,0,0, 0.5)",
      },
      "&.Mui-focused": {
        backgroundColor: "rgb(0,0,0, 0.5)",
        boxShadow: `white 0 0 0 2px`,
        borderColor: "#BBBBBB",
      },
    },
  }));
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const handleQuestionClick = (questionNumber) => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);

    switch (questionNumber) {
      case 1:
        setIsOpen1(!isOpen1);
        break;
      case 2:
        setIsOpen2(!isOpen2);
        break;
      case 3:
        setIsOpen3(!isOpen3);
        break;
      case 4:
        setIsOpen4(!isOpen4);
        break;
      case 5:
        setIsOpen5(!isOpen5);
        break;
      case 6:
        setIsOpen6(!isOpen6);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="landing-page vh-100">
        <div className="intro vh-100">
          <div className="containerr pt-3">
            <div className="d-flex justify-content-between">
              <div className="p-2">
                <img className="logo" src={logo} alt="NETFLIX" />
              </div>
              <div className="d-flex">
                <div className="p-2 ms-auto">
                  <select name="English" className="lang">
                    <option value="english">English</option>
                    <option value="tamil">Tamil</option>
                  </select>
                </div>
                <div className="p-2">
                  <button className="btn btn-signIn" onClick={() => navigate('/signIn')}>Sign In</button>
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="white head text-center">
                The biggest Indian hits. The best Indian stories. All streaming
                here.
              </h1>
              <h4 className="white text-center my-3">
                Watch anywhere. Cancel anytime.
              </h4>
              <h5 className="white text-center mt-4">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h5>
              <div className="d-md-flex justify-content-center  mt-4">
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <RedditTextField
                    label="Email address"
                    variant="filled"
                    InputLabelProps={{
                      style: {
                        color: "#BBBBBB",
                      },
                    }}
                    className="input"
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <button className="btn mx-2 btn-signUp" onClick={() => navigate('/signIn')}>
                    <h5>
                      Get Started<span> &gt; </span>{" "}
                    </h5>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-color"></div>
      <div className="bg-black pb-5 pt-1">
        <div className="containerr d-lg-flex justify-content-around pb-4">
          <div className="col-lg-6 py-lg-5">
            <h1 className="head mb-4">Enjoy on your TV</h1>
            <h4 className="content">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h4>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center" style={{position:'relative'}}>
            <img className="imag abs-1" src={img1} />
            <img src={vid1} className="abs-2" /> 
          </div>
        </div>
      </div>
      <div className="border-color"></div>
      <div className="bg-black pb-5 pt-1">
        <div className="containerr d-lg-flex justify-content-around">
          <div className="col-lg-6 py-lg-5 order-2">
            <h1 className="head mb-4">Download your shows to watch offline</h1>
            <h4 className="content">
              Save your favourites easily and always have something to watch.
            </h4>
          </div>
          <div className="col-lg-6 pb-5 d-flex justify-content-center align-items-center  order-1" style={{position:'relative'}}>
            <img className="imag-2 img-fluid abs-5" src={img2} />
            <div className="card bg-black border rounded abs-6 p-1">
              <div className="d-flex justify-content-between align-items-center">
              <img src={img5} style={{width:'35px', height:'50px'}} className="rounded img img-fluid" />
              <p className="white" style={{fontSize:'13px'}}>Stranger Things <br /> <span style={{color:'blue'}}>Downloading...</span></p>
              <img src={download} style={{width:'40px', height: '50px'}} className="rounded img img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-color"></div>
      <div className="bg-black pb-5 pt-1 pt-lg-5">
        <div className="containerr d-lg-flex justify-content-around pb-4">
          <div className="col-lg-6 py-lg-5">
            <h1 className="head mb-4">Watch everywhere</h1>
            <h4 className="contents content">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h4>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center" style={{position:'relative'}}>
            <img className="imag1 abs-3" src={img3} />
            <img src={vid2} className="abs-4" /> 
          </div>
        </div>
      </div>
      <div className="border-color"></div>
      <div className="bg-black pb-4 pt-1 pt-lg-5">
        <div className="containerr d-lg-flex justify-content-around">
          <div className="col-lg-6 py-lg-5 order-2">
            <h1 className="head mb-4">Create profiles for kids</h1>
            <h4 className="contents content">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </h4>
          </div>
          <div className="col-lg-6 pb-5 d-flex justify-content-center align-items-center order-1">
            <img className="img img-fluid" src={img4} />
          </div>
        </div>
      </div>
      <div className="border-color"></div>
      <div className="bg-black pt-3 pb-5">
        <div className="containerr d-md-flex justify-content-center">
          <div className="col-12">
            <h1 className="head my-md-5 mb-4 text-center content">
              Frequently Asked Questions
            </h1>
            <div
              className="question d-flex justify-content-between align-items-center"
              onClick={() => {
                handleQuestionClick(1);
              }}
            >
              <h4>What is Netflix ?</h4>
              <h4>
                {isOpen1 ? (
                  <ClearIcon style={{ fontSize: 40 }} />
                ) : (
                  <AddIcon style={{ fontSize: 40 }} />
                )}
              </h4>
            </div>
            {isOpen1 && (
              <div>
                <h4 className="answer">
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  – on thousands of internet-connected devices. <br /> <br />
                  You can watch as much as you want, whenever you want, without
                  a single ad – all for one low monthly price. There's always
                  something new to discover, and new TV shows and movies are
                  added every week!
                </h4>
              </div>
            )}
            <div
              className="question d-flex justify-content-between align-items-center"
              onClick={() => {
                handleQuestionClick(2);
              }}
            >
              <h4>How much does Netflix cost?</h4>
              <h4>
                {isOpen2 ? (
                  <ClearIcon style={{ fontSize: 40 }} />
                ) : (
                  <AddIcon style={{ fontSize: 40 }} />
                )}
              </h4>
            </div>
            {isOpen2 && (
              <div>
                <h4 className="answer">
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                </h4>
              </div>
            )}
            <div
              className="question d-flex justify-content-between align-items-center"
              onClick={() => {
                handleQuestionClick(3);
              }}
            >
              <h4>Where can I watch?</h4>
              <h4>
                {isOpen3 ? (
                  <ClearIcon style={{ fontSize: 40 }} />
                ) : (
                  <AddIcon style={{ fontSize: 40 }} />
                )}
              </h4>
            </div>
            {isOpen3 && (
              <div>
                <h4 className="answer">
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles. <br /> <br />
                  You can also download your favourite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  Netflix with you anywhere.
                </h4>
              </div>
            )}
            <div
              className="question d-flex justify-content-between align-items-center"
              onClick={() => {
                handleQuestionClick(4);
              }}
            >
              <h4>How do I cancel?</h4>
              <h4>
                {isOpen4 ? (
                  <ClearIcon style={{ fontSize: 40 }} />
                ) : (
                  <AddIcon style={{ fontSize: 40 }} />
                )}
              </h4>
            </div>
            {isOpen4 && (
              <div>
                <h4 className="answer">
                  Netflix is flexible. There are no annoying contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </h4>
              </div>
            )}
            <div
              className="question d-flex justify-content-between align-items-center"
              onClick={() => {
                handleQuestionClick(5);
              }}
            >
              <h4>What can I watch on Netflix?</h4>
              <h4>
                {isOpen5 ? (
                  <ClearIcon style={{ fontSize: 40 }} />
                ) : (
                  <AddIcon style={{ fontSize: 40 }} />
                )}
              </h4>
            </div>
            {isOpen5 && (
              <div>
                <h4 className="answer">
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </h4>
              </div>
            )}
            <div
              className="question d-flex justify-content-between align-items-center"
              onClick={() => {
                handleQuestionClick(6);
              }}
            >
              <h4>Is Netflix good for kids?</h4>
              <h4>
                {isOpen6 ? (
                  <ClearIcon style={{ fontSize: 40 }} />
                ) : (
                  <AddIcon style={{ fontSize: 40 }} />
                )}
              </h4>
            </div>
            {isOpen6 && (
              <div>
                <h4 className="answer">
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and films in their own space. <br /> <br />
                  Kids profiles come with PIN-protected parental controls that
                  let you restrict the maturity rating of content kids can watch
                  and block specific titles you don’t want kids to see.
                </h4>
              </div>
            )}
          </div>
        </div>
        <h5 className="white text-center mt-5 pt-2">
          Ready to watch? Enter your email to create or restart your membership.
        </h5>
        <div className="d-md-flex justify-content-center  mt-4">
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <RedditTextField
                    label="Email address"
                    variant="filled"
                    InputLabelProps={{
                      style: {
                        color: "#BBBBBB",
                      },
                    }}
                    className="input"
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <button className="btn mx-2 btn-signUp" onClick={() => navigate('/signIn')}>
                    <h5>
                      Get Started<span> &gt; </span>{" "}
                    </h5>
                  </button>
                </div>
              </div>
      </div>
      <div className="border-color"></div>
      <Footer />
    </>
  );
}

export default LandingPage;
