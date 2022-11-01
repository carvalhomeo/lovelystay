import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button = ({ text, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{text}</StyledButton>;
};
