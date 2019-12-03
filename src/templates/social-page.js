import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import "../components/style.css";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Main from "../components/Main";
import Tabs from "../components/Tabs";

export const SocialPageTemplate = ({
  image,
  title,
  subheading,
  sectionTitle,
  sectionDescription
}) => (
  <Fragment>
    <HeroSection image={image} title={title} subheading={subheading} />
    <Tabs />
    <Main mainTitle={sectionTitle} mainDescription={sectionDescription}></Main>
  </Fragment>
);

SocialPageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subheading: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string
};

const SocialPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SocialPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        sectionTitle={frontmatter.sectionTitle}
        sectionDescription={frontmatter.sectionDescription}
      />
    </Layout>
  );
};

SocialPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default SocialPage;

export const pageQuery = graphql`
  query SocialPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "social-page" } }) {
      frontmatter {
        title
        image
        subheading
        sectionTitle
        sectionDescription
      }
    }
  }
`;
