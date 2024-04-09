import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";
import "./ContactForm.css";
import ReactDOM from "react-dom";
import Common from "../../Common";
import ComponentHeader from "../ComponentHeader/ComponentHeader";
import { json, useNavigate } from "react-router";

const ContactForm = () => {
  const position = [-37.992040463074716, 145.20799188392283];
  const [fNameText, setfNameText] = useState("");
  const [lNameText, setlNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [subjectText, setSubjectText] = useState("");
  const [messageText, setMessageText] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModalVal, setShowModalVal] = useState("");

  const {
    contact,
    inquiry,
    inquiryText,
    headOffice,
    headOfficeAddress,
    headOfficeMailAmazingConcept,
    headOfficeMailAmazingMaster,
    headOfficeTelephone,
    employement,
    exmployementTextAmazingConcept,
    exmployementTextAmazingMaster,
    contactUs,
    firstName,
    lastName,
    email,
    subject,
    message,
    submit,
    getA_Qoute,
    socialMedia,
    instaLogo,
    fbLogo,
    tiktokLogo,
  } = Common;
  const navigation = useNavigate();
  const showingData = (text1, text2) => (
    <>
      <h4 className="col-space" style={{ fontSize: "x-large" }}>
        {text1}
      </h4>
      <p dangerouslySetInnerHTML={{ __html: text2 }} className="col-space" />
    </>
  );

  const inputFields = (title, stateVal, setState) => {
    return (
      <div style={{ marginBottom: "15px" }}>
        <label className="label-block">{title}</label>
        {title === "Message" ? (
          <textarea
            onChange={(e) => setState(e.target.value)}
            className="text-field text-area"
            rows={7}
            value={stateVal}
          />
        ) : (
          <input
            value={stateVal}
            className="text-field input-text"
            onChange={(e) => setState(e.target.value)}
          />
        )}
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = validEmailRegex.test(emailText);

    if (
      fNameText === "" ||
      lNameText === "" ||
      subjectText === "" ||
      messageText === ""
    ) {
      alert("empty Data submission");
      return;
    }
    if (!isValidEmail) {
      alert("Invalid email submission");
      return;
    }
    try {
      // Construct the request body
      const body = JSON.stringify({
        fName: fNameText,
        lName: lNameText,
        email: emailText,
        subject: subjectText,
        message: messageText,
      });

      // const response = await fetch(
      //   "https://jsonplaceholder.typicode.com/todos/1"
      // );
      // const data = await response.json();
      // console.log(data);
      // debugger;

      // setShowModalVal(data?.title);
      // setShowModal(true);

      // Make an HTTP POST request to sent-email.php with form data
      const response = await fetch("send-email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
      setShowModalVal(response?.message);
      if (response) {
        if (response?.message) {
          if (
            response?.message !== null &&
            response?.message !== "" &&
            response?.message !== undefined
          ) {
            setShowModal(true);
          }
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const resetingVal = () => {
    setEmailText("");
    setfNameText("");
    setlNameText("");
    setSubjectText("");
    setMessageText("");
  };

  const Modal = () => {
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowModalVal("");
        setShowModal(false);
        resetingVal();
      }, 3000);

      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="modal-overlay">
        <div className="modal-content">{showModalVal}</div>
      </div>
    );
  };

  return (
    <>
      {showModal && <Modal />}
      <div className="container">
        <ComponentHeader text={contact} />
        <div className="row map-Container">
          <div className={window.innerWidth < 768 ? "col-12" : "col-9"}>
            <MapContainer
              center={position}
              zoom={13}
              style={{
                height: `${window.innerWidth * 0.25}px`,
                width: "100%",
                zIndex: 0,
              }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={position}>
                <Popup>A marker indicating a location.</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <div className="row contact-info">
          <div className={window.innerWidth < 768 ? "col-12" : "col-9"}>
            <div className="row contact-info-2">
              <div className="col-6">{showingData(inquiry, inquiryText)}</div>
              <div className="col-5">
                {showingData(headOffice, headOfficeAddress)}
                <p
                  dangerouslySetInnerHTML={{
                    __html: headOfficeMailAmazingConcept,
                  }}
                  className="col-space"
                  style={{ overflow: "hidden" }}
                />
                <p dangerouslySetInnerHTML={{ __html: headOfficeTelephone }} />
              </div>
              <form onSubmit={handleSubmit} className="col-6">
                <h4 className="col-space contact-us-heading">{contactUs}</h4>
                {inputFields(firstName, fNameText, setfNameText)}

                {inputFields(lastName, lNameText, setlNameText)}

                {inputFields(email, emailText, setEmailText)}

                {inputFields(subject, subjectText, setSubjectText)}

                {inputFields(message, messageText, setMessageText)}
                <div className="btn-container">
                  <button type="submit" className="submit-btn">
                    {submit}
                  </button>
                </div>
              </form>
              <div className="col-5">
                <h4 className="employee-heading">{employement}</h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html: exmployementTextAmazingConcept,
                  }}
                  className="employement-text"
                />
                <div className="qoute-dash-container">
                  <div className="qoute-dash-div" />
                  <div style={{ display: "inline-block" }}>
                    <h4 className="qoute-heading">{getA_Qoute}</h4>
                    <div className="social-container">
                      <img
                        alt="Instagram"
                        fetchpriority="high"
                        src={instaLogo}
                      />
                      <img alt="Facebook" fetchpriority="high" src={fbLogo} />
                      <img alt="TikTok" fetchpriority="high" src={tiktokLogo} />
                    </div>
                    <h4 className="SM-heading">{socialMedia}</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="qoute-dash-container-mob">
              <div style={{ display: "inline-block" }}>
                <h4 className="qoute-heading">{getA_Qoute}</h4>
                <div className="social-container">
                  <img alt="Instagram" fetchpriority="high" src={instaLogo} />
                  <img alt="Facebook" fetchpriority="high" src={fbLogo} />
                  <img alt="TikTok" fetchpriority="high" src={tiktokLogo} />
                </div>
                <h4 className="SM-heading">{socialMedia}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
