import React from "react";
import ContentLoader from "react-content-loader";
import "./Loader.css";

const ThreeDots = (props) => (
  <ContentLoader
    className="ContentLoader"
    viewBox="0 0 400 160"
    height={160}
    width={400}
    backgroundColor="rgba(249,248,113,0.6)"
    {...props}
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>
);

export { ThreeDots };
