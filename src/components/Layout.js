import React, { Fragment } from "react";
// import PropTypes from "prop-types";
// import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Beyond from "../templates/beyond-swe";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  // let title;
  // switch (window.location.pathname) {
  //   case "/":
  //     title = "Home";
  //     break;
  //   case "/about":
  //     title = "About";
  //     break;
  //   case "/calendar":
  //     title = "Calendar";
  //     break;
  //   case "/envision":
  //     title = "Envision";
  //     break;
  //   case "/social":
  //     title = "Social";
  //     break;
  //   case "/professional":
  //     title = "Professional";
  //     break;
  //   case "/outreach":
  //     title = "Outreach";
  //     break;
  //   case "/contact":
  //     title = "Contact";
  //     break;
  //   default:
  //     title = "";
  // }
  return (
    <div className="js">
      <Helmet>
        <html lang="en" />

        <title>{/*{title}&mdash;*/}Society of Women Engineers</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <Fragment>{children}</Fragment>
      <Beyond />
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
