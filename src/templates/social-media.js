import React from "react";

const SocialLinks = () => {
  return (
    <StaticQuery
      query={graphql`
        query SocialMediaComponentTemplate {
          markdownRemark(frontmatter: { templateKey: { eq: "social-media" } }) {
            frontmatter {
              featuredEvents {
                date
                link
                title
              }
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

export default SocialLinks;
