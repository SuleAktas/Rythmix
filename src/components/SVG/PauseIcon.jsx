import React from "react";

const PauseIcon = (props) => (
  <svg
    className={`icon ${props.className || ""}`}
    width="40px"
    height="24px"
    viewBox="0 0 20 20"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15 3h-2c-.553 0-1 .048-1 .6v12.8c0 .552.447.6 1 .6h2c.553 0 1-.048 1-.6V3.6c0-.552-.447-.6-1-.6zM7 3H5c-.553 0-1 .048-1 .6v12.8c0 .552.447.6 1 .6h2c.553 0 1-.048 1-.6V3.6c0-.552-.447-.6-1-.6z" />
  </svg>
);
export default PauseIcon;
