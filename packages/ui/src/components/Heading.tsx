import React from "react";

type HeadingProps = {};

export const Heading: React.FC<HeadingProps> = (props) => {
  return <h1 style={{ color: "#0066cc" }}>{props.children}</h1>;
};
