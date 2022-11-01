import React, { ReactNode } from "react";
import { StyledChip } from "./styles";

interface ChipProps {
  children: ReactNode;
}

export const Chip = ({ children }: ChipProps) => {
  return <StyledChip>{children}</StyledChip>;
};
