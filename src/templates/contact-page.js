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
    this.state = { isValidated: false, contactSubmitted: false };
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
      .then(() => {
        this.setState({
          contactSubmitted: true
        });
      })
      .catch(error => alert(error));
  };

  render() {
    return (
      <div className={`pb3 f6 fw1`}>
        <div className={`flex flex-wrap items-center justify-center pb3`}>
          <Card title={`Reasons to connect`}>
            <p>1/ You are also learning to found and fund companies</p>
            <p>
              2/ You know a young person who would benefit from soccer (footy)
              training. I benefited greatly from a trainer growing up and would
              like to pass that on
            </p>
            <p>3/ You have any reasonable reason to connect!</p>
          </Card>
          <Card title={`Connect with Me`}>
            {this.state.contactSubmitted ? (
              <p>
                thanks for reaching out! i go through these submissions on
                sundays so do not expect a response before then.
              </p>
            ) : (
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
                      className="input-reset button is-link pa2 mt1 off-white bg-base ba b--off-white grow pointer"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </p>
            )}
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
