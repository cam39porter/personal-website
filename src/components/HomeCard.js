import React from "react";
import { Link } from "gatsby";
import { ArrowUpRight } from "react-feather";

class HomeCard extends React.Component {
  render() {
    const { title, children, link, to } = this.props;
    return (
      <div
        className={`measure-ns w-100 pa3 ttl`}
        style={{
          flexGrow: 1
        }}
      >
        {to ? (
          <div className={`w-100 ba bw2 pa3 h5-l`}>
            <Link className={`link off-white`} to={to}>
              <div className={`dim`}>
                <span className={`dib f3 fw4 w-75 tl`}>{title}</span>
                <span className={`fr grow pointer`}>
                  <ArrowUpRight />
                </span>
              </div>
            </Link>
            <div className={`f6 fw4 lh-copy`}>{children}</div>
          </div>
        ) : (
          <div className={`w-100 ba bw2 pa3 h5-l`}>
            <a className={`link off-white`} href={link} target="_blank">
              <div className={`dim`}>
                <span className={`dib f3 fw4 w-75 tl`}>{title}</span>
                {link && (
                  <span className={`fr grow pointer`}>
                    <ArrowUpRight />
                  </span>
                )}
              </div>
            </a>
            <div className={`f6 fw4 lh-copy`}>{children}</div>
          </div>
        )}
      </div>
    );
  }
}

export default HomeCard;
