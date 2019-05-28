import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Card from "../components/HomeCard";

export const ThingsPageTemplate = ({ things }) => (
  <div className={`pb3 f6 fw1`}>
    <div className={`flex flex-wrap items-center justify-center pb3`}>
      {things.map(thing => (
        <Card title={thing.name} link={thing.link}>
          <p>{thing.description}</p>
        </Card>
      ))}
    </div>
  </div>
);

const ThingsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ThingsPageTemplate things={frontmatter.things} />
    </Layout>
  );
};
export default ThingsPage;

export const pageQuery = graphql`
  query ThingsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "things-page" } }) {
      frontmatter {
        things {
          name
          description
          link
        }
      }
    }
  }
`;
