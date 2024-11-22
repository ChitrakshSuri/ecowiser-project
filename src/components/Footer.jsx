import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div>Copyright © {currentYear}</div>
      </footer>
    </>
  );
}

export default Footer;
