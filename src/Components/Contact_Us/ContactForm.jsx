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
    <div className="container" style={{ paddingTop: 60 }}>
      <div className="col-9 contact-container">
        <h2 className="contact-heading">{contact}</h2>
        <div className="contact-dash-div" />
      </div>

      <div className="row map-Container">
        <div className="col-9">
          <MapContainer
            center={position}
            zoom={13}
            style={{
              height: `${window.innerWidth * 0.25}px`,
              width: "100%",
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
              <h4
                className="col-space"
                style={{ fontSize: "x-large", paddingBottom: "40px" }}
              >
                {contactUs}
              </h4>
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
              <h4 style={{ fontSize: "x-large", paddingTop: "150px" }}>
                {employement}
              </h4>

              <p
                dangerouslySetInnerHTML={{ __html: exmployementText }}
                className="employement-text"
              />
              <div className="qoute-dash-div" />
              <div style={{ display: "inline-block" }}>
                <h4 className="qoute-heading">{getA_Qoute}</h4>
                <div className="social-container">
                  <img
                    alt="Instagram"
                    fetchpriority="high"
                    src="https://static.wixstatic.com/media/11062b_6e9638ad803e4099a6116eb750b5a584~mv2.png/v1/fill/w_63,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_6e9638ad803e4099a6116eb750b5a584~mv2.png"
                    style={{
                      width: "63px",
                      height: "63px",
                      objectFit: "cover",
                    }}
                  />
                  <img
                    alt="Facebook"
                    fetchpriority="high"
                    src="https://static.wixstatic.com/media/11062b_366f7fdbcafc4effaeddb0dba92014c1~mv2.png/v1/fill/w_63,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_366f7fdbcafc4effaeddb0dba92014c1~mv2.png"
                    style={{
                      width: "63px",
                      height: "63px",
                      objectFit: "cover",
                    }}
                  />
                  <img
                    alt="TikTok"
                    fetchpriority="high"
                    src="https://static.wixstatic.com/media/11062b_ad1a1e62a5bb45c7835a3ec11d5188f2~mv2.png/v1/fill/w_63,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_ad1a1e62a5bb45c7835a3ec11d5188f2~mv2.png"
                    style={{
                      width: "63px",
                      height: "63px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h4
                  style={{
                    fontSize: "x-large",
                    padding: "15px 0",
                    textAlign: "center",
                  }}
                >
                  {socialMedia}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
