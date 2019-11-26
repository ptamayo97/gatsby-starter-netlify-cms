import React from "react";
// import "./style.css";
const Main = (props, { children }) => {
  return (
    <main className="section main">
      <h1 className="main__title">{props.mainTitle}</h1>
      <p className="lead subtitle">{props.mainDescription}</p>
      {children}
    </main>
  );
};

export default Main;
