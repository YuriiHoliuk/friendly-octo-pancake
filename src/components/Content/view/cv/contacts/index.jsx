import React from 'react';

import './index.scss';

const Contacts = () => (
  <div className="contacts-wrap">
    <h3>Contact</h3>
    <p className="contacts-wrap__accent-yellow" />
    <ul className="contacts-wrap__contacts">
      <li className="contacts-wrap__contactme">
        <a className="contacts-wrap__call-link" href="tel:+380991177577">
          <div className="contacts-wrap__contact-title">
            <span className="contacts-wrap__contact-styles">Phone</span>
            <br />
            +38(099)11-77-5-77
          </div>
          <div className="contacts-wrap__icon-border contacts-wrap__icon-border1">
            <img src="icons/phone.png" alt="contact" />
          </div>
        </a>
      </li>
      <li className="contacts-wrap__contactme">
        <div className="contacts-wrap__contact-title">
          <span className="contacts-wrap__contact-styles">Email</span>
          <br />
          presnyakov.vladyslav
          <br />
          @gmail.com
        </div>
        <div className="contacts-wrap__icon-border contacts-wrap__icon-border2">
          <img src="icons/email.png" alt="contact" />
        </div>
      </li>
      <li className="contacts-wrap__contactme">
        <div className="contacts-wrap__contact-title">
          <a className="contacts-wrap__telegram-link" href="tg://resolve?domain=Vladyslav_dev">
            <span className="contacts-wrap__contact-styles">Telegram</span>
            <br />
            Or write here
          </a>
        </div>
        <div className="contacts-wrap__icon-border contacts-wrap__icon-border3"><img src="icons/telegram.png" alt="contact" /></div>

      </li>
      <li className="contacts-wrap__contactme">
        <a className="contacts-wrap__home-link" target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/rk4v5fCRW46GJL24A">
          <div className="contacts-wrap__contact-title">
            <span className="contacts-wrap__contact-styles">Address</span>
            <br />
            Kharkiv, Ukraine
          </div>
          <div className="contacts-wrap__icon-border contacts-wrap__icon-border4">
            <img src="icons/home.png" alt="contact" />
          </div>
        </a>
      </li>
    </ul>
  </div>
);

export default Contacts;
