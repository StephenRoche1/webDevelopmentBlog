import React from "react";
import QForm from "./QForm";
import './QModal.css';

function QModal({ isOpen, onClose, onSubmit }) {
  if (!isOpen) {
    return null; // Render nothing if modal is closed
  }

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <QForm onSubmit={onSubmit} /> {/* Pass onSubmit function down to QForm */}
        <button className='close' type='submit' onClick={onClose}>
          Close Modal
        </button>
      </div>
    </div>
  );
}

export default QModal;
