import React from 'react';

import './index.scss';

const Exp = () => (
  <div className="exp">
    <h3 className="exp__pe-title">Professional experience</h3>
    <p className="exp__accent-gray" />
    <p className="exp__pe-description">Six month of experience in frontend development (React/Redux/HTML/CSS/JS/WordPress)</p>
    <h3 className="exp__pe-title exp__pe-title-1">Professional skillset</h3>
    <p className="exp__accent-gray exp__accent-gray2" />
    <div className="exp__skillset">
      <div className="exp__item-wrap">
        <span className="exp__item">
          HTML:
        </span>
        <p className="exp__skill">
          HTML5 Pixel Perfect development, Bootstrap 4
        </p>
        <hr className="exp__hr" />
      </div>
      <div className="exp__item-wrap">
        <span className="exp__item">
          CSS:
        </span>
        <p className="exp__skill">
          Responsive Web Design, Sass, BEM, CSS animation, FlexBox, Grid,
          Cross-Browser compatibility knowledge, Semantic UI Animate.css
        </p>
        <hr className="exp__hr" />
      </div>
      <div className="exp__item-wrap">
        <span className="exp__item">
          Linters:
        </span>
        <p className="exp__skill">

          Stylelint
        </p>
        <hr className="exp__hr" />
      </div>
      <div className="exp__item-wrap">
        <span className="exp__item">
          Images:
        </span>
        <p className="exp__skill">

          SVG, icon fonts, FontAwesome
        </p>
        <hr className="exp__hr" />
      </div>
      <div className="exp__item-wrap">
        <span className="exp__item">
          JS:
        </span>
        <p className="exp__skill">

          JS native, React, Redux, JSON
        </p>
        <hr className="exp__hr" />
      </div>
      <div className="exp__item-wrap">
        <span className="exp__item">
          PSD to HTML:
        </span>
        <p className="exp__skill">

          Photoshop, Figma
        </p>
        <hr className="exp__hr" />
      </div>
      <div className="exp__item-wrap">
        <span className="exp__item">
          Version control:
        </span>
        <p className="exp__skill">

          Git Version Control Tool
        </p>
        <hr className="exp__hr" />
      </div>
      <div className="exp__item-wrap">
        <span className="exp__item">
          CMS:
        </span>
        <p className="exp__skill">

          WordPress
        </p>
        <hr className="exp__hr" />
      </div>
    </div>
  </div>
);

export default Exp;
