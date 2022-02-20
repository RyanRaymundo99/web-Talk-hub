import React from 'react';
import './footer.css'
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="talk-hub__footer section__padding">
  
    <div className="talk-hub__footer-links">
      <div className="talk-hub__footer-links_logo">
        <img src={logo} alt="gpt3_logo" />
      </div>
      <div className="talk-hub__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="talk-hub__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
    </div>

    <div className="talk-hub__footer-copyright">
      <p>@2021 TalkHub. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer