import React from "react";

const BeyondSwe = () => {
  return (
    <aside className="beyond">
      <h3>Beyond SWE</h3>
      <h4>Come see what SWE has to offer outside UCSD!</h4>
      <div className="beyond__tabs">
        <span>
          <a href="http://www.swesandiego.org/" target="_blank">
            San Diego SWE
          </a>
        </span>
        <span>
          <a href="http://societyofwomenengineers.swe.org/" target="_blank">
            National SWE
          </a>
        </span>
        <span>
          <a
            href="http://societyofwomenengineers.swe.org/swenext"
            target="_blank"
          >
            SWE Next
          </a>
        </span>
      </div>
    </aside>
  );
};

export default BeyondSwe;
