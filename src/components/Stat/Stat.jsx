import React from "react";
import PropTypes from "prop-types";

export default function User ({stat}) {
  console.log(stat)
  return (
    <>
    <span className="label">Views</span>
    <span className="quantity">{stat}</span>
    </>
  );
}
