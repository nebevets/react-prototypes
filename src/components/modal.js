import React from 'react';
import './modal.css';

const Modal = ({close, bubble, title, src}) => {
      return (
        <div className="modal" onClick={close}>
          <div className="modalContent" onClick={bubble}>
            <h1>
              {title}
            </h1>
              <img src={src} />
          </div>
        </div>
      );
}

export default Modal;