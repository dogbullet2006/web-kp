import classNames from "classnames";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  additionalStyles?: string;
}

export const MainLayout: FC<Props> = ({ children, additionalStyles }) => {
  return (
    <section
      className={classNames(
        "bg-[#f9f9f9] flex items-center justify-center py-[150px]",
        additionalStyles
      )}
    >
      {children}
    </section>
  );
};
