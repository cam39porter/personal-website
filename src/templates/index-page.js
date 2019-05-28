import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Card from "../components/HomeCard";

export const IndexPageTemplate = ({ title }) => (
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
      <Card
        title={`Principles`}
        link="https://www.notion.so/d6b96eb5c5514c45a3c902afaaa15bbb?v=0838fe9fbe9747578c7f5a3d964b632e"
      >
        <p>
          Inspired by{" "}
          <a
            className={`link dim underline off-white`}
            target="_blank"
            href="https://www.willminshew.com/principles/"
          >
            Will Minshew's personal constitution
          </a>
          , I track the principles that I hold to be true.
        </p>
        <p>
          I review these on a weekly basis to keep them top of mind and hope
          they influence my decision making.
        </p>
        <p>
          Feel free to critique or ask for clarifications. They are written for
          my comprehensibility.
        </p>
      </Card>
      <Card
        title={`Library`}
        link={
          "https://www.notion.so/4349a812604a48128c5f47e46baa26df?v=b3509ca6d659469eb2471fd2c922589f"
        }
      >
        <p>I started tracking the what I consumed because</p>
        <p>
          1/{" "}
          <a
            className={`link dim underline off-white`}
            target="_blank"
            href="http://augmentingcognition.com/ltm.html"
          >
            Spaced Repetition
          </a>{" "}
          - each week I review my notes and add photos (makes the info more
          sticky)
        </p>
        <p>2/ Patterns - can see trends in what I am interested in</p>
        <p>
          3/ Reference - can search for things when I inevitably forget them
        </p>
      </Card>
      <Card title={`Newsletter`} link={`https://incremental.substack.com`}>
        <p>
          i take{" "}
          <a
            className={`link dim underline off-white`}
            target="_blank"
            href="https://www.notion.so/4349a812604a48128c5f47e46baa26df?v=b3509ca6d659469eb2471fd2c922589f"
          >
            a lot of notes
          </a>
          . often times those notes serve as the backbone of interesting dinner
          conversations.
        </p>
        <p>
          instead of being the only one that gets any use out of the material, i
          decided each week to curate those notes into{" "}
          <a
            className={`link dim underline off-white`}
            target="_blank"
            href="incremental.substack.com"
          >
            a newsletter
          </a>{" "}
          with 3 long enough dives that can each serve as the cornerstone of a
          dinner conversation.
        </p>
      </Card>
      <Card title={`Things I Like`}>
        <p>
          <a className={`link dim underline off-white`} target="_blank" href="">
            Lamy fountain pen
          </a>{" "}
          for illegible rantings
        </p>
        <p>
          <a className={`link dim underline off-white`} target="_blank" href="">
            Bose QuietComfort
          </a>{" "}
          for NYC is loud
        </p>
        <p>
          <a className={`link dim underline off-white`} target="_blank" href="">
            Athletic Greens
          </a>{" "}
          for muscles and minds
        </p>
        <p>
          <a className={`link dim underline off-white`} target="_blank" href="">
            Timbuk2 messenger bag
          </a>{" "}
          for not losing things
        </p>
        <p>and much more (kind of)...</p>
      </Card>
      <Card title={`Connect`} to={"/contact"}>
        <p>
          The best way to reach me is{" "}
          <a
            className={`link dim underline off-white`}
            target="_blank"
            href="https://www.twitter.com/cam39porter/"
          >
            @cam39porter on Twitter
          </a>
          .
        </p>
        <p>
          If you are feeling formal feel free to use{" "}
          <a
            className={`link dim underline off-white`}
            target="_blank"
            href="https://www.linkedin.com/in/cam39porter/"
          >
            LinkedIn
          </a>
          .
        </p>
        <p>
          Can't get enough email?{" "}
          <a
            className={`link dim underline off-white`}
            target="_blank"
            href="mailto:"
          >
            cam @ incremental dot nyc
          </a>
        </p>
        <p>
          Or if you just like traditional web forms...
          <Link className="link dim underline off-white" to="/hex-ventures">
            try here!
          </Link>
        </p>
      </Card>
    </div>
  </div>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate title={frontmatter.title} />
    </Layout>
  );
};
export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
