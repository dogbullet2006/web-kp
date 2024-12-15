import { FC, InputHTMLAttributes, ReactNode } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  suffix?: ReactNode;
}

export const TextInput: FC<TextInputProps> = ({ suffix, ...props }) => {
  return (
    <div className="flex items-center bg-[#fff] rounded-[60px] border-[#EBEBEB] border-[1px] overflow-hidden p-5 w-full">
      <input
        type="text"
        className="flex-grow p-2 border-none focus:outline-none"
        {...props}
      />
      {suffix && suffix}
    </div>
  );
};
