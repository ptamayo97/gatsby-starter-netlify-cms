import React from "react";
import "./style.css";

const Tabs = () => {
  return (
    <section class="section tabs">
      <span class="z-depth-3">
        <a href="/social">Social</a>
      </span>
      <span class="z-depth-3">
        <a href="/professional">Professional</a>
      </span>
      <span class="z-depth-3">
        <a href="/outreach">Outreach</a>
      </span>
    </section>
  );
};

export default Tabs;
