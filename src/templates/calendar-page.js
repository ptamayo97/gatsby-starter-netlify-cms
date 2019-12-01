import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import "../components/style.css";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Main from "../components/Main";
import RecentEvents from "./recent-events";
import Tabs from "../components/Tabs";

export const CalendarPageTemplate = ({
  image,
  title,
  subheading,
  sectionTitle,
  sectionDescription
}) => (
  <Fragment>
    <HeroSection image={image} title={title} subheading={subheading} />
    <Tabs />
    <Main mainTitle={sectionTitle} mainDescription={sectionDescription}>
      <RecentEvents />
    </Main>
  </Fragment>
);

CalendarPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string
};

const CalendarPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <CalendarPageTemplate
        image={frontmatter.imageUrl}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

CalendarPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default CalendarPage;

export const pageQuery = graphql`
  query CalendarPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "calendar-page" } }) {
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
