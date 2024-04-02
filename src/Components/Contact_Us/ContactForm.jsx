import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";
import "./ContactForm.css";
import Common from "../../Common";

const ContactForm = () => {
  const position = [-37.773226874139255, 144.75179182883596];
  const [fNameText, setfNameText] = useState("");
  const [lNameText, setlNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [subjectText, setSubjectText] = useState("");
  const [messageText, setMessageText] = useState("");
  //   const {}
  const {
    inquiry,
    inquiryText,
    headOffice,
    headOfficeAddress,
    headOfficeMail,
    headOfficeTelephone,
    employement,
    exmpoymenetText,
    contactUs,
    firstName,
    lastName,
    email,
    subject,
    message,
    submit,
    getA_Qoute,
    socialMedia,
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
    <div>
      <label style={{ display: "block" }}>{title}</label>
      <input
        type="text"
        value={stateVal}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
  return (
    <div className="container" style={{ paddingTop: 100 }}>
      <div className="row map-Container">
        <MapContainer
          center={position}
          zoom={13}
          style={{
            height: `${window.innerWidth * 0.25}px`,
            width: `${window.innerWidth * 0.64}px`,
          }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>A marker indicating a location.</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="row contact-info">
        <div className="col-12" style={{ display: "flex" }}>
          <div className="col-6">{showingData(inquiry, inquiryText)}</div>
          <div className="col-5">
            {showingData(headOffice, headOfficeAddress)}
            <p
              dangerouslySetInnerHTML={{ __html: headOfficeMail }}
              className="col-space"
            />
            <p dangerouslySetInnerHTML={{ __html: headOfficeTelephone }} />
          </div>
        </div>
      </div>
      <div className="row contact-info">
        <div className="col-12" style={{ display: "flex" }}>
          <div className="col-6">
            <h4 className="col-space" style={{ fontSize: "x-large" }}>
              {contactUs}
            </h4>
            {inputFields(firstName, fNameText, setfNameText)}

            {inputFields(lastName, lNameText, setlNameText)}

            {inputFields(email, emailText, setEmailText)}

            {inputFields(subject, subjectText, setSubjectText)}

            {inputFields(message, messageText, setMessageText)}
          </div>
          <div className="col-5">
            {showingData(headOffice, headOfficeAddress)}
            <p
              dangerouslySetInnerHTML={{ __html: headOfficeMail }}
              className="col-space"
            />
            <p dangerouslySetInnerHTML={{ __html: headOfficeTelephone }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
