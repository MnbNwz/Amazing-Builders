import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";
import "./ContactForm.css";
import Common from "../../Common";
import ComponentHeader from "../ComponentHeader/ComponentHeader";

const ContactForm = () => {
  const position = [-37.773226874139255, 144.75179182883596];
  const [fNameText, setfNameText] = useState("");
  const [lNameText, setlNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [subjectText, setSubjectText] = useState("");
  const [messageText, setMessageText] = useState("");

  const {
    contact,
    inquiry,
    inquiryText,
    headOffice,
    headOfficeAddress,
    headOfficeMail,
    headOfficeTelephone,
    employement,
    exmployementText,
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

  const showingData = (text1, text2) => (
    <>
      <h4 className="col-space" style={{ fontSize: "x-large" }}>
        {text1}
      </h4>
      <p dangerouslySetInnerHTML={{ __html: text2 }} className="col-space" />
    </>
  );

  const inputFields = (title, stateVal, setState) => (
    <div style={{ marginBottom: "15px" }}>
      <label className="label-block">{title}</label>
      {title === "Message" ? (
        <textarea className="text-field text-area" rows={7} />
      ) : (
        <input
          type={title === "Email" ? "email" : "text"}
          value={stateVal}
          className="text-field input-text"
          onChange={(e) => setState(e.target.value)}
        />
      )}
    </div>
  );
  return (
    <div className="container">
      <ComponentHeader text={contact} />
      <div className="row map-Container">
        <div className="col-9">
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
        <div className="col-9">
          <div className="row contact-info-2">
            <div className="col-6">{showingData(inquiry, inquiryText)}</div>
            <div className="col-5">
              {showingData(headOffice, headOfficeAddress)}
              <p
                dangerouslySetInnerHTML={{ __html: headOfficeMail }}
                className="col-space"
              />
              <p dangerouslySetInnerHTML={{ __html: headOfficeTelephone }} />
            </div>
            <form className="col-6">
              <h4 className="col-space contact-us-heading">{contactUs}</h4>
              {inputFields(firstName, fNameText, setfNameText)}

              {inputFields(lastName, lNameText, setlNameText)}

              {inputFields(email, emailText, setEmailText)}

              {inputFields(subject, subjectText, setSubjectText)}

              {inputFields(message, messageText, setMessageText)}
              <div className="btn-container">
                <button onClick={() => {}} className="submit-btn">
                  {submit}
                </button>
              </div>
            </form>
            <div className="col-5">
              <h4 className="employee-heading">{employement}</h4>
              <p
                dangerouslySetInnerHTML={{ __html: exmployementText }}
                className="employement-text"
              />
              <div className="qoute-dash-div" />
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
    </div>
  );
};

export default ContactForm;
