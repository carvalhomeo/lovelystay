import React, { ReactNode, InputHTMLAttributes } from "react";
import { StyledInput } from "./styles";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {}

export const SearchInput = ({ ...props }: SearchProps) => {
  return <StyledInput type="text" {...props}></StyledInput>;
};
