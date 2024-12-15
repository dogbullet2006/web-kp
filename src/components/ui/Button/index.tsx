import classNames from "classnames";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  additionalStyles?: string;
}

export const Button: FC<Props> = ({ children, additionalStyles, ...props }) => {
  return (
    <button
      className={classNames(
        "bg-primary-yellow px-5 flex gap-2 items-center text-[#1a1a1a] rounded-[15px] font-medium text-[15px] leading-[56px]",
        additionalStyles
      )}
      {...props}
    >
      {children}
    </button>
  );
};
