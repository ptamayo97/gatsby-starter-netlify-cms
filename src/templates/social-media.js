import React from "react";
import { StaticQuery, graphql } from "gatsby";

const SocialMedia = () => {
  return (
    <StaticQuery
      query={graphql`
        query SocialMediaComponentTemplate {
          markdownRemark(frontmatter: { templateKey: { eq: "social-media" } }) {
            frontmatter {
              emailLink
              instagram
              facebookLink
            }
          }
        }
      `}
      render={data => (
        <nav>
          <a href="mailto:swe@eng.ucsd.edu">Email</a>
          <a href="https://www.instagram.com/swe.ucsd/">Instagram</a>
          <a href="https://www.facebook.com/sweucsd/">Facebook</a>
        </nav>
      )}
    />
  );
};

export default SocialMedia;
