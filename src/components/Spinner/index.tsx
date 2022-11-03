import React from "react";
import { GridLoader } from "react-spinners";

export const Spinner = ({ ...props }) => {
  return <GridLoader color="#ac47cc" {...props} />;
};
