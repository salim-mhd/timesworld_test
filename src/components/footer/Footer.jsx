import React from "react";
import {
  SlSocialFacebook,
  SlSocialGoogle,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="text-center mt-5">
      <div className="d-flex justify-content-center gap-3 mb-4">
        {/* Google Icon */}
        <button className="social-icon">
          <SlSocialGoogle size={18} />
        </button>

        {/* Facebook Icon */}
        <button className="social-icon">
          <SlSocialFacebook size={18} />
        </button>

        {/* LinkedIn Icon */}
        <button className="social-icon">
          <SlSocialLinkedin size={18} />
        </button>

        {/* Twitter Icon */}
        <button className="social-icon">
          <SlSocialTwitter size={18} />
        </button>
      </div>
      <p className="small-text">Example@gmail.com</p>
      <p className="small-text">
        Copyright &copy; 2025 Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
