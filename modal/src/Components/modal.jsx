import React from 'react';
import styles from './modal.css';
import Button from './button';
import BackDrop from './backdrop';

const Modal = ({ children, isOpen, onClose }) =>
  isOpen && (
    <BackDrop>
      <div className={styles.modal}>
        <div className={styles.content}>{children}</div>
        <Button label="Close" onClick={onClose} />
      </div>
    </BackDrop>
  );

export default Modal;
