import React, { Fragment, useState } from 'react';
// import Header from '../components/Header';
import './Contact.css';

const Contact = () => {
  const [showMsg, setShowMsg] = useState('Copy');

  const handleCopy = (e) => {
    e.preventDefault();

    navigator.clipboard.writeText('yokotatakuya@gmail.com');
    setShowMsg('Copied!');
  };

  return (
    <Fragment>
      <div className="main">
        {/* <div className="main-header">
          <Header />
        </div> */}
        <div className="contact-container">
          <h2>Contact me</h2>
          <p>yokotatakuya@gmail.com</p>
          <button onClick={(e) => handleCopy(e)}>{showMsg}</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;