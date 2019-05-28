import React from "react";
import { Link, graphql, navigate } from "gatsby";

import Layout from "../components/Layout";
import Card from "../components/HomeCard";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class HexVenturesPageTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div className={`pb3 f6 fw1`}>
        <div className={`flex flex-wrap items-center justify-center pb3`}>
          <Card title={`Hex Ventures`}>
            <p>
              Hex Ventures is the vehicle through which I angel invest thanks to
              crypto, soccer, and two good friends willing to go on the
              adventure with me.
            </p>
            <p>
              We usually write ~$15k checks. If you are raising funds or just
              looking for advice on how or why (not) to raise money, please
              reach out!
            </p>
          </Card>
          <Card title={`Reach Out`}>
            <p>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                className={`off-white`}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <div className="control mv2">
                    <input
                      className="input-reset input ba b--off-white bg-base off-white pa2 w-100"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                      placeholder={"email"}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control mv2">
                    <textarea
                      className="input-reset input ba b--off-white bg-base off-white pa2 w-100 textarea"
                      name={"message"}
                      onChange={this.handleChange}
                      id={"message"}
                      required={true}
                      placeholder={"message"}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control mv2">
                    <input
                      className="file-input input-reset"
                      type="file"
                      name="attachment"
                      onChange={this.handleAttachment}
                    />
                  </div>
                </div>
                <div className="field">
                  <button
                    className="input-reset fr button is-link pa2 off-white bg-base ba b--off-white grow pointer"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </p>
          </Card>
        </div>
      </div>
    );
  }
}

const HexVenturesPage = () => {
  return (
    <Layout>
      <HexVenturesPageTemplate />
    </Layout>
  );
};

export default HexVenturesPage;
