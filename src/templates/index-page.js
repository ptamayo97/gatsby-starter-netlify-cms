import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import "../components/style.css";
import Layout from "../components/Layout";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  // <div>
  //   <div
  //     className="full-width-image margin-top-0"
  //     style={{
  //       backgroundImage: `url(${
  //         !!image.childImageSharp ? image.childImageSharp.fluid.src : image
  //       })`,
  //       backgroundPosition: `top left`,
  //       backgroundAttachment: `fixed`,
  //     }}
  //   >
  //     <div
  //       style={{
  //         display: 'flex',
  //         height: '150px',
  //         lineHeight: '1',
  //         justifyContent: 'space-around',
  //         alignItems: 'left',
  //         flexDirection: 'column',
  //       }}
  //     >
  //       <h1
  //         className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
  //         style={{
  //           boxShadow:
  //             'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
  //           backgroundColor: 'rgb(255, 68, 0)',
  //           color: 'white',
  //           lineHeight: '1',
  //           padding: '0.25em',
  //         }}
  //       >
  //         {title}
  //       </h1>
  //       <h3
  //         className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
  //         style={{
  //           boxShadow:
  //             'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
  //           backgroundColor: 'rgb(255, 68, 0)',
  //           color: 'white',
  //           lineHeight: '1',
  //           padding: '0.25em',
  //         }}
  //       >
  //         {subheading}
  //       </h3>
  //     </div>
  //   </div>
  //   <section className="section section--gradient">
  //     <div className="container">
  //       <div className="section">
  //         <div className="columns">
  //           <div className="column is-10 is-offset-1">
  //             <div className="content">
  //               <div className="content">
  //                 <div className="tile">
  //                   <h1 className="title">{mainpitch.title}</h1>
  //                 </div>
  //                 <div className="tile">
  //                   <h3 className="subtitle">{mainpitch.description}</h3>
  //                 </div>
  //               </div>
  //               <div className="columns">
  //                 <div className="column is-12">
  //                   <h3 className="has-text-weight-semibold is-size-2">
  //                     {heading}
  //                   </h3>
  //                   <p>{description}</p>
  //                 </div>
  //               </div>
  //               <Features gridItems={intro.blurbs} />
  //               <div className="columns">
  //                 <div className="column is-12 has-text-centered">
  //                   <Link className="btn" to="/products">
  //                     See all products
  //                   </Link>
  //                 </div>
  //               </div>
  //               <div className="column is-12">
  //                 <h3 className="has-text-weight-semibold is-size-2">
  //                   Latest stories
  //                 </h3>
  //                 <BlogRoll />
  //                 <div className="column is-12 has-text-centered">
  //                   <Link className="btn" to="/blog">
  //                     Read more
  //                   </Link>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // </div>
  <Fragment>
    <section
      className='hero section'
      style={{
        background: "url('https://i.imgur.com/MgNHcA4.jpg')",
        noRepeat: true,
        center: true,
        fixed: true,
        backgroundSize: "cover"
      }}
    >
      <article className='hero__content z-depth-3'>
        <h1>{title}</h1>
        <img src='/assets/img/zag.svg' alt='' />
        <p>{subheading}</p>
      </article>
    </section>
    <section className='section tabs'>
      <span className='z-depth-3'>
        <a href='/social'>Social</a>
      </span>
      <span className='z-depth-3'>
        <a href='/professional'>Professional</a>
      </span>
      <span className='z-depth-3'>
        <a href='/outreach'>Outreach</a>
      </span>
    </section>

    <main className='section main'>
      <h1 className='main__title'>Recent Events</h1>

      <center>
        <div className='events z-depth-3'>
          {/* <div className='events__row'>
            <span>General Body Meeting #3</span>
            <time>Wednesday, November 14</time>
            <span>
              <a
                href='https://www.facebook.com/events/277367959765412/'
                target='_blank noopener noreferrer'
              >
                RSVP
              </a>
            </span>
          </div>

          <div className='events__row'>
            <span>Amway Info Session with AICHE</span>
            <time>Thursday, October 4</time>
            <span>
              <a
                href='https://www.facebook.com/events/555050548268485/'
                target='_blank noopener noreferrer'
              >
                RSVP
              </a>
            </span>
          </div>

          <div className='events__row'>
            <span>
              Anita Borg Leadership and Engagement (ABLE) Program KickOff Event
            </span>
            <time>Saturday, November 17</time>
            <span>
              <a
                href='http://education.sdsc.edu/studenttech/?page_id=678'
                target='_blank noopener noreferrer'
              >
                RSVP
              </a>
            </span>
          </div>

          <div className='events__row'>
            <span>UCSD SWE Presents: Envision</span>
            <time>Saturday, February 2</time>
            <span>
              <a
                href='http://ucsdenvision.wixsite.com/envision'
                target='_blank noopener noreferrer'
              >
                RSVP
              </a>
            </span>
          </div> */}
        </div>
      </center>
    </main>
  </Fragment>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
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

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
