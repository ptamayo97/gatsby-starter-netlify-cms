import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import "../components/style.css";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Main from "../components/Main";
import Tabs from "../components/Tabs";

export const OutreachPageTemplate = ({
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

OutreachPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string
};

const OutreachPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <OutreachPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        sectionTitle={frontmatter.sectionTitle}
        sectionDescription={frontmatter.sectionDescription}
      />
    </Layout>
  );
};

OutreachPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default OutreachPage;

export const pageQuery = graphql`
  query OutreachPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "outreach-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subheading
        sectionTitle
        sectionDescription
      }
    }
  }
`;
