import React from "react";

const Footer = () => {
  return (
    // Test again
    <footer
      style={{
        padding: "10px",
        textAlign: "center",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
