import React from "react";
import ReactDOM from "react-dom";

import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const Backdrop = ({ onBackdropClick }) => {
  return <div className={styles.backdrop} onClick={onBackdropClick}></div>;
};

const ModalOverlay = ({ error: { title, message }, onOkClick }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
      </header>
      <main className={styles.content}>
        <p>{message}</p>
      </main>
      <footer className={styles.actions}>
        <Button onClick={onOkClick}>OK</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ error, onOkClick }) => {
  function errorDismissHandler() {
    onOkClick(null);
  }

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onBackdropClick={errorDismissHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay error={error} onOkClick={errorDismissHandler} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ErrorModal;
