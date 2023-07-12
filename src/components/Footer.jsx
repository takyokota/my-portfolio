import React, { Fragment, useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [showMsg, setShowMsg] = useState('Copy');

  const handleCopy = (e) => {
    e.preventDefault();

    navigator.clipboard.writeText('yokotatakuya@gmail.com');
    setShowMsg('Copied!');
  };

  return (
    <Fragment>
      <div className="footer-contact">
        <h2>Contact Me</h2>
        <p>yokotatakuya@gmail.com</p>
        <button onClick={(e) => handleCopy(e)}>{showMsg}</button>
      </div>
    </Fragment>
  );
};

export default Footer;