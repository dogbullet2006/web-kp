import Favicon from "@/assets/faviconFull.svg";
import SocialList from "@/assets/Home/socialList.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#F2F1F1] h-[100px] flex justify-center text-[#1a1a1a]">
      <div className="max-w-[1200px] w-full flex justify-between items-center py-5 px-10">
        <p className="text-[15px] leading-[30px]">Copyright © 2024. JustHome</p>
        <Image src={Favicon} alt="JustHome" />
        <Image
          src={SocialList}
          alt="Social List"
          className="max-h-[40px] object-contain max-w-[300px]"
        />
      </div>
    </footer>
  );
};
