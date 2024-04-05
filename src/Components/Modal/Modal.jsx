import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css"; // You can define styles for the modal in Modal.css

const Modal = ({ showModal, text }) => {
  const [showModalVal, setShowModalVal] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModalVal(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return showModalVal
    ? ReactDOM.createPortal(
        <div className="modal-overlay">
          <div className="modal-content">{showModal}</div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
