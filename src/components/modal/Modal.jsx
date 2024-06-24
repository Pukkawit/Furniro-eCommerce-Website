import React from "react";
import "./modal.scss";
import Overlay from "../backdrop-overlay/Overlay";
const Modal = ({
  heading,
  main,
  btn1,
  btn2,
  actionBtn1,
  actionBtn2,
  productName,
}) => {
  return (
    <div>
      <Overlay className="overlay" />
      <div className="notification-modal">
        <div className="modal-head"></div>
        <div className="modal-body">
          <div className="heading" align={"center"}>
            <h3>{heading}</h3>
          </div>
          <main align={"center"}>
            {productName && (
              <p style={{ fontWeight: "700", textTransform: "uppercase" }}>
                {" "}
                {productName}:
              </p>
            )}
            <p> {main}</p>
          </main>
          <footer>
            <div className="btns">
              <button onClick={actionBtn1}>{btn1 ? btn1 : "Cancel"}</button>
              <button className="secondBtn" onClick={actionBtn2}>
                {btn2 ? btn2 : "Delete"}
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Modal;
