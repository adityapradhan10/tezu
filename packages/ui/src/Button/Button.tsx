import { ButtonProps } from "./Button.types";

export const Button = ({ children, className }: ButtonProps) => {
  return <button className={className}>{children}</button>;
};
