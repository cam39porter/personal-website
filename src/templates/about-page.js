import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Card from "../components/HomeCard";

export const AboutPageTemplate = ({ news }) => (
  <div className={`pb3 f6 fw1`}>
    <div className={`flex flex-wrap items-center justify-center pb3`}>
      {news.map(n => (
        <Card title={n.name} link={n.link}>
          <p>{n.description}</p>
        </Card>
      ))}
    </div>
  </div>
);

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate news={frontmatter.news} />
    </Layout>
  );
};
export default AboutPage;

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        news {
          name
          description
          link
        }
      }
    }
  }
`;
