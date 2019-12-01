import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import "../components/style.css";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Main from "../components/Main";
import Tabs from "../components/Tabs";

export const EnvisionPageTemplate = ({
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

EnvisionPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string
};

const EnvisionPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <EnvisionPageTemplate
        image={frontmatter.imageUrl}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        sectionTitle={frontmatter.sectionTitle}
        sectionDescription={frontmatter.sectionDescription}
      />
    </Layout>
  );
};

EnvisionPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default EnvisionPage;

export const pageQuery = graphql`
  query EnvisionPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "envision-page" } }) {
      frontmatter {
        title
        imageUrl
        subheading
        sectionTitle
        sectionDescription
      }
    }
  }
`;
