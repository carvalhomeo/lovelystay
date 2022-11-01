import React from "react";
import { ArrowBack } from "./styles";

interface ArrowBackIconProps {
  onClick?: () => void;
}

export const ArrowBackIcon = ({ onClick }: ArrowBackIconProps) => {
  return <ArrowBack onClick={onClick} />;
};
