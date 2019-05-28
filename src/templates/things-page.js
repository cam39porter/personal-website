import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Card from "../components/HomeCard";

export const ThingsPageTemplate = () => (
  <div className={`pb3 f6 fw1`}>
    <div className={`flex flex-wrap items-center justify-center pb3`}>
      <Card title={`read.me`}>
        <p>
          It's been a winding path to get here. I grew up in southwest Ohio,
          found{" "}
          <a
            className={`link dim underline off-white`}
            target="_blank"
            href="http://www.dailyprincetonian.com/article/2019/04/once-a-tiger-cameron-porter"
          >
            my way to Princeton
          </a>
          , learned my first lessons in{" "}
          <a
            className={`link dim underline off-white`}
            target="_blank"
            href="https://www.ivyresearchcouncil.com/"
          >
            entrepreneurship with IRC
          </a>
          , dropped out of college to{" "}
          <a
            className={`link dim underline off-white`}
            target="_blank"
            href="https://www.youtube.com/watch?v=yv-OZSuob98"
          >
            kick a ball
          </a>
          , started (and quickly shut down){" "}
          <a
            className={`link dim underline off-white`}
            target="_blank"
            href="http://tangleapp.co:3000/format/list/recent"
          >
            a startup
          </a>
          , and am now founding and funding companies full-time.*
        </p>
        <p className={``}>
          *Professional -{" "}
          <a
            className={`b link dim underline off-white`}
            target="_blank"
            href="https://www.alleycorp.com"
          >
            AlleyCorp
          </a>{" "}
          | Personal -{" "}
          <Link className="b link dim underline off-white" to="/hex-ventures">
            Hex Ventures
          </Link>
        </p>
        <p />
      </Card>
    </div>
  </div>
);

const ThingsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ThingsPageTemplate />
    </Layout>
  );
};
export default ThingsPage;

export const pageQuery = graphql`
  query ThingsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "things-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
