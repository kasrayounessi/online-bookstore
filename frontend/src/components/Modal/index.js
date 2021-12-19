import React, { useRef } from "react";
import ReactDom from "react-dom";

/**DONT REALLY NEED TO DO ANYTHING HERE, I HAVE A FEW FUNCTIONS SUCH AS CLOSEMODAL THAT DONT HAVE MUCH FUNCTIONALITY
 * RIGHT NOW BUT IT DOESN'T BREAK THE SITE SO IT CAN STAY FOR NOW.
 */
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};
const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000,
};
const Modal = ({ open, children, handleClose }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      console.log("click to close");
    }
  };
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={closeModal}></div>
      <div style={MODAL_STYLES}>{children}</div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
