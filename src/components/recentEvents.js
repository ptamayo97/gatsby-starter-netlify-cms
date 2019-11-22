import React, { Fragment } from "react";

const RecentEvents = props => {
  return (
    <Fragment>
      <h1 className='main__title'>Recent Events</h1>
      <center>
        <div className='events z-depth-3'>
          {props.RecentEvents.map(event => (
            <div className='events__row'>
              <span>{event.title}</span>
              <time>{event.date}</time>
              <span>
                <a href={event.link} target='_blank noopener noreferrer'>
                  RSVP
                </a>
              </span>
            </div>
          ))}
        </div>
      </center>
    </Fragment>
  );
};

export default RecentEvents;
