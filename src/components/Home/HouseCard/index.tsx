import bath from "@/assets/icons/bath.svg";
import bed from "@/assets/icons/bed.svg";
import locationIcon from "@/assets/icons/location.svg";
import ft from "@/assets/icons/sqft.svg";
import Image from "next/image";
import { FC } from "react";
import { HouseItem } from "./type";

interface Props extends HouseItem {
  onClick?: () => void;
}

function formatPrice(price: number, isForRent: boolean): string {
  let formattedPrice = price.toLocaleString();
  if (isForRent) {
    formattedPrice += "/month";
  }

  return `$${formattedPrice}`;
}

export const HouseCard: FC<Props> = ({
  title,
  image,
  location,
  labels,
  price,
  beds,
  baths,
  sqft,
  onClick
}) => {
  return (
    <div
      className="bg-white rounded-[16px] min-w-[450px] border-[1px] border-[#E9E9E9] p-2.5 pb-5 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <Image className="rounded-[16px]" src={image} alt={title} />
        <div className="absolute top-[20px] left-[20px] flex items-center gap-[10px]">
          {labels.map(label => (
            <div
              key={label}
              className={`bg-[#1F4B43] text-[#fff] rounded-[33px] px-[15px] uppercase ${
                label === "featured" ? "!bg-[#E7C873] !text-[#1a1a1a]" : ""
              }`}
            >
              <p className="leading-[33px] text-[13px] font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-[20px] flex flex-col gap-[10px]">
        <div className="flex w-full justify-between items-center">
          <h3 className="font-medium text-[19px] text-[#1a1a1a] leading-[22.8px]">
            {title}
          </h3>
          <p className="text-[#EB664E] font-semibold text-[21px] leading-[31.5px]">
            {formatPrice(price, labels.includes("for rent"))}
          </p>
        </div>
        <div className="flex gap-[5px]">
          <Image src={locationIcon} alt="location" />
          <p>{location}</p>
        </div>
        <div className="divide-x-[1px] flex mt-[10px]">
          <div className="flex items-center pr-[15px] gap-[10px]">
            <Image src={bed} alt="bed" /> <p>{beds} Beds</p>
          </div>
          <div className="flex items-center px-[15px] gap-[10px]">
            <Image src={bath} alt="bath" /> <p>{baths} Baths</p>
          </div>
          <div className="flex items-center px-[15px] gap-[10px]">
            <Image src={ft} alt="sqft" /> <p>{sqft} sqft</p>
          </div>
        </div>
      </div>
    </div>
  );
};
