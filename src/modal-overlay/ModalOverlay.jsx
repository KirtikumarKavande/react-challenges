import { useState } from "react";
import Modal from "./Modal";
import "./style.css";
const ModalOverlay = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  function handleModal(e) {
    e.stopPropagation();
    setIsShowModal(true);
  }
  return (
    <div className="wrapper">
      <div
        className="container"
        onClick={(e) => {
          e.preventDefault();
          setIsShowModal(false);
        }}
      >
        <button className="showOffer-btn" onClick={handleModal}>
          Show Offer
        </button>
      </div>
      <div>
        {isShowModal && (
          <div className="modal">
            <Modal setIsShowModal={setIsShowModal}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalOverlay;
