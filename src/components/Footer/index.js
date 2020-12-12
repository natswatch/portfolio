import React from 'react';

function Footer() {

  return (
    <div className="footer">
      <div className="follow">
        <div>
          <a href="https://linkedin.com/nathalie-cunanan">
          <img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-128.png" alt="linkedin" /></a>
        </div>
        <div>
          <a href="https://instagram.com/natswatch">
          <img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-128.png" alt="instagram"/></a>
        </div>
        <div>
          <a href="https://github.com/natswatch">
          <img src="https://cdn3.iconfinder.com/data/icons/social-media-2253/25/Group-512.png" alt="github"/></a>
        </div>
      </div>
      <h2>by yours truly</h2>
      <div>
          &copy; 2020
      </div>
    </div>
    )
};

export default Footer;
