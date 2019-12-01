import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Main from "../components/Main";
import Tabs from "../components/Tabs";
export const AboutPageTemplate = ({
  title,
  image,
  subheading,
  sectionTitle,
  sectionDescription
}) => {
  return (
    <Fragment>
      <HeroSection image={image} title={title} subheading={subheading} />
      <Tabs />
      <Main
        mainTitle={sectionTitle}
        mainDescription={sectionDescription}
      ></Main>
      <section class="section team">
        <h1 class="main__title team__title">SWE Officers</h1>

        <div class="team-container">
          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/DjlBbwM.jpg" alt="" />
            </center>
            <a href="mailto:mailto:btorquat@ucsd.edu">
              <h3>Brea Torquato</h3>
            </a>
            <p>President</p>
          </article>

          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/BZZyXFo.jpg" alt="" />
            </center>
            <a href="mailto:mailto:pks007@ucsd.edu ">
              <h3>Payal Singh</h3>
            </a>
            <p>Vice President External</p>
          </article>

          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/Y6rOo3m.jpg" alt="" />
            </center>
            <a href="mailto:mailto:mcgalvez@ucsd.edu ">
              <h3>Maria Galvez</h3>
            </a>
            <p>Vice President Internal</p>
          </article>

          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/T5fttM0.jpg" alt="" />
            </center>
            <a href="mailto:mailto:a1carden@ucsd.edu">
              <h3>Anne Cardenas</h3>
            </a>
            <p>Treasurer</p>
          </article>

          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/gYGheeA.jpg" alt="" />
            </center>
            <a href="mailto:mailto:mandrade@ucsd.edu">
              <h3>Maria Andrade</h3>
            </a>
            <p>Secretary</p>
          </article>

          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/GaHPYPQ.jpg" alt="" />
            </center>
            <a href="mailto:mailto:atg004@ucsd.edu">
              <h3>Agnes Garcia</h3>
            </a>
            <p>Envision Outreach Chair</p>
          </article>

          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/uDqIHtx.jpg" alt="" />
            </center>
            <a href="mailto:mailto:mac180@ucsd.edu">
              <h3>Magali Chavez</h3>
            </a>
            <p>ABLE Outreach Chair</p>
          </article>

          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/7joiTCv.jpg" alt="" />
            </center>
            <a href="mailto:mailto: nbangari@ucsd.edu">
              <h3>Nidhi Bangari</h3>
            </a>
            <p>SWENext Outreach Chair</p>
          </article>

          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/0adO7RP.jpg" alt="" />
            </center>
            <a href="mailto:mailto:soh024@ucsd.edu">
              <h3>Sophie Huang</h3>
            </a>
            <p>Academic Chair</p>
          </article>

          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/Kc9mKsA.jpg" alt="" />
            </center>
            <a href="mailto:mailto:marman@ucsd.edu">
              <h3>Madina Arman</h3>
            </a>
            <p>Project Team Coordinator</p>
          </article>

          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/y0hJ4sH.jpg" alt="" />
            </center>
            <a href="mailto:mailto:eshohet@ucsd.edu">
              <h3>Elianor Shohet</h3>
            </a>
            <p>Publicity Chair</p>
          </article>

          <article class="team__module">
            <center>
              <img src="https://i.imgur.com/XcMFcGL.jpg" alt="" />
            </center>
            <a href="mailto:mailto:N4lopez@ucsd.edu">
              <h3>Natalie Lopez</h3>
            </a>
            <p>Social Chair</p>
          </article>
        </div>
      </section>
    </Fragment>
  );
};

AboutPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string
};

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        sectionTitle={frontmatter.sectionTitle}
        sectionDescription={frontmatter.sectionDescription}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default AboutPage;

export const PageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
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
