import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import twitter from "../img/social/twitter.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className={``}>
        <a title="twitter" href="https://twitter.com">
          <img
            className={``}
            src={twitter}
            alt="Twitter"
            style={{ width: "1em", height: "1em" }}
          />
        </a>
      </footer>
    );
  }
};

export default Footer;
