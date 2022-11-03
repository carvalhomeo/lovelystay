import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
}

export const IconButton = ({
  text,
  iconRight,
  iconLeft,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {iconRight ? iconRight : null}
      {text}
      {iconLeft ? iconLeft : null}
    </StyledButton>
  );
};
