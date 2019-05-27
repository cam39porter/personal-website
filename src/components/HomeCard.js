import React from "react";

class HomeCard extends React.Component {
  render() {
    const { title, children, link } = this.props;
    return (
      <div
        className={`measure-ns w-100 pa3 ttl`}
        style={{
          flexGrow: 1
        }}
      >
        <a className={`link off-white`} href={link} target="_blank">
          <div className={`w-100 ba bw2 pa3 grow pointer h5-l`}>
            <div className={`pb`}>
              <section className={`dib f3 fw4 w-75 tl`}>{title}</section>
            </div>
            <div className={`f6 fw4 lh-copy`}>{children}</div>
          </div>
        </a>
      </div>
    );
  }
}

export default HomeCard;
