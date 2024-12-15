import { FC } from "react";

interface Props {
  fill?: string;
  rotate?: number;
}

export const Arrow: FC<Props> = ({ fill = "#E7C873", rotate = 0 }) => {
  return (
    <svg
      width="16"
      height="13"
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <g clipPath="url(#clip0_0_11)">
        <path
          d="M1.04743 5.92826H13.0581L8.45901 1.54902C8.21818 1.31969 8.20885 0.938709 8.43823 0.697959C8.66731 0.457509 9.04841 0.447879 9.28953 0.677194L14.5419 5.67878C14.7691 5.90628 14.8946 6.20843 14.8946 6.53013C14.8946 6.85153 14.7691 7.15398 14.5313 7.39141L9.28923 12.3828C9.17274 12.4938 9.02343 12.5489 8.87412 12.5489C8.71518 12.5489 8.55623 12.4863 8.43793 12.362C8.20855 12.1213 8.21788 11.7406 8.45871 11.5113L13.077 7.13201H1.04743C0.715093 7.13201 0.445374 6.86237 0.445374 6.53013C0.445374 6.1979 0.715093 5.92826 1.04743 5.92826Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_0_11">
          <rect
            width="15"
            height="12.84"
            fill="white"
            transform="translate(0.169983 0.109863)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
