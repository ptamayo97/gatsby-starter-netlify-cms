import React from "react";
import { StaticQuery, graphql } from "gatsby";
import moment from "moment";

const RecentEvents = () => {
  return (
    <StaticQuery
      query={graphql`
        query EventsComponentTemplate {
          markdownRemark(
            frontmatter: { templateKey: { eq: "recent-events" } }
          ) {
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
        <center>
          <div className="events z-depth-3">
            {data.markdownRemark.frontmatter.featuredEvents.map(event => (
              <div className="events__row">
                <span>{event.title}</span>
                <time>{moment(event.date).format("dddd, MMMM D")}</time>
                <span>
                  <a href={event.link} target="_blank noopener noreferrer">
                    RSVP
                  </a>
                </span>
              </div>
            ))}
          </div>
        </center>
      )}
    />
  );
};

export default RecentEvents;
