import React from "react";
import { BarLoader } from "react-spinners";

export const Loader = ({ ...props }) => {
  return <BarLoader color="#ac47cc" {...props} />;
};
