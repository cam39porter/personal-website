import React from "react";
import { Link, navigate } from "gatsby";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className={`dt w-100 pt4 pb3`}>
        <div
          className={`dn dtc-l v-mid tl h-100 f2 ttl pointer`}
          onClick={() => navigate("/")}
        >
          Cameron Porter |{" "}
          <span className={`f3 fw3`}>Learning to found and fund companies</span>
        </div>
        <div
          className={`dn-l dtc v-mid tl h-100 f4 ttl pointer`}
          onClick={() => navigate("/")}
        >
          CP |{" "}
          <span className={`f6 fw3`}>Learning to found and fund companies</span>
        </div>
        <img
          className={`dn dtc-l tr v-mid pointer grow`}
          src={`../img/logo.png`}
          height={64}
          onClick={() => navigate("/")}
        />
        <img
          className={`dn-l dtc tr v-mid pointer grow`}
          src={`../img/logo.png`}
          height={40}
          onClick={() => navigate("/")}
        />
      </nav>
    );
  }
};

export default Navbar;
