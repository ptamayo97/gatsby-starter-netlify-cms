import React from "react";
// import Zag from "./Zag";
// import "./style.css";
const HeroSection = props => {
  return (
    <section
      className="hero section"
      style={{
        background: "url('https://i.imgur.com/MgNHcA4.jpg')",
        noRepeat: true,
        center: true,
        fixed: true,
        backgroundSize: "cover"
      }}
    >
      <article className="hero__content z-depth-3">
        <h1>{props.title}</h1>
        {/* <Zag /> */}
        <img src="../img/zag.svg" alt="" />
        <p>{props.subheading}</p>
      </article>
    </section>
  );
};

export default HeroSection;
