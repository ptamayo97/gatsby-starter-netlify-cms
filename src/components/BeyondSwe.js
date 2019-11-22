import React from "react";
import "./style.css";

const Beyond = class extends React.Component {
  render() {
    return (
      <aside class='beyond'>
        <h3>Beyond SWE</h3>
        <h4>Come see what SWE has to offer outside UCSD!</h4>
        <div class='beyond__tabs'>
          <span>
            <a
              href='http://www.swesandiego.org/'
              target='_blank noopener noreferrer'
            >
              San Diego SWE
            </a>
          </span>
          <span>
            <a
              href='http://societyofwomenengineers.swe.org/'
              target='_blank noopener noreferrer'
            >
              National SWE
            </a>
          </span>
          <span>
            <a
              href='http://societyofwomenengineers.swe.org/swenext'
              target='_blank noopener noreferrer'
            >
              SWE Next
            </a>
          </span>
        </div>
      </aside>
    );
  }
};

export default Beyond;
