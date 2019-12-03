import React, { Fragment } from "react";
import { StaticQuery, graphql } from "gatsby";

const Sponsors = () => {
  return (
    <StaticQuery
      query={graphql`
        query SponsorsComponentTemplate {
          markdownRemark(frontmatter: { templateKey: { eq: "sponsors" } }) {
            frontmatter {
              title
              featuredSponsors {
                title
                imgLink {
                  id
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Fragment>
          <h2>{data.markdownRemark.frontmatter.title}</h2>
          <div className=" container">
            <div className="row">
              {data.markdownRemark.frontmatter.featuredSponsors.map(
                (sponsor, idx) => (
                  <div className="col-md-3" key={idx}>
                    <figure>
                      <img src={sponsor.imgLink} alt={sponsor.title} />
                    </figure>
                  </div>
                )
              )}
            </div>
          </div>
        </Fragment>
      )}
    />
  );
};

export default Sponsors;
