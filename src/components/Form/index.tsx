import React, { FormHTMLAttributes } from "react";
import { StyledForm } from "./styles";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

export const Form = ({ children, ...props }: FormProps) => {
  return <StyledForm {...props}>{children}</StyledForm>;
};
