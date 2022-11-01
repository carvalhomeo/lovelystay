import React, { FormEventHandler, FormHTMLAttributes, ReactNode } from "react";
import { StyledForm } from "./styles";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

export const Form = ({ children, ...props }: FormProps) => {
  return (
    <StyledForm onSubmit={() => console.log("fdx")} {...props}>
      {children}
    </StyledForm>
  );
};
