import React from "react";

const date = new Date();
const currentDate = date.getFullYear();

function Footer() {
  return <footer> Copyright © {currentDate}</footer>;
}

export default Footer;
