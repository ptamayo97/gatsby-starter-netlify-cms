import React, { Fragment } from "react";
import { StaticQuery, graphql } from "gatsby";

const PageEvents = () => {
  return (
    <StaticQuery
      query={graphql`
        query PageEventsComponentTemplate {
          markdownRemark(frontmatter: { templateKey: { eq: "page-events" } }) {
            frontmatter {
              pageEvents {
                eventTitle
                eventImage
                eventDescription
              }
            }
          }
        }
      `}
      render={data => (
        <div class="module-container">
          {data.markdownRemark.frontmatter.pageEvents.map((event, idx) => (
            <div class="module">
              <center>
                <img
                  src={event.eventImage}
                  alt={event.eventTitle}
                  class="z-depth-3"
                />
              </center>

              <a href="http://ucsdenvision.wixsite.com/envision ">
                <h3>{event.eventTitle}</h3>
              </a>
              <p>{event.eventDescription}</p>
            </div>
          ))}
        </div>
      )}
    />
  );
};

export default PageEvents;
