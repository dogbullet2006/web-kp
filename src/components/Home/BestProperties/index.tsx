import Image3 from "@/assets/bestProperties/bg-video.jpg.png";
import Image1 from "@/assets/bestProperties/div.property-banner-inner.png";
import Image2 from "@/assets/bestProperties/elements (1).png";
import Arrow from "@/assets/bestProperties/next.svg";
import Play from "@/assets/icons/play.svg";
import { MainLayout } from "@/components/ui/MailLayout";
import Image from "next/image";

export const BestProperties = () => {
  return (
    <MainLayout additionalStyles="!bg-[#2D3A4F] text-[#fff]">
      <div className="max-w-[1200px] w-full flex flex-col gap-10 text-center items-center">
        <div>
          <h2 className="text-[40px] leading-[52px] font-medium mb-1">
            Exclusive Properties
          </h2>
          <p className="text-[17px] leading-[33px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>

        <div className="flex gap-[30px]">
          <div className="rounded-[16px] flex-1">
            <Image src={Image1} alt="Villa one hyde park" />
          </div>
          <div className="flex flex-col gap-[30px] text-[#000] flex-1">
            <div className="rounded-[16px]">
              <Image src={Image2} alt="Villa one hyde park" />
            </div>
            <div className="flex gap-[30px]">
              <div className="relative">
                <Image src={Image3} alt="video" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image src={Play} alt="play" />{" "}
                </div>
              </div>
              <div className="p-5 w-[330px] bg-primary-yellow rounded-[16px] flex flex-col text-left text-white">
                <p className="text-[40px] leading-[52px] font-medium">280+</p>
                <p className="text-[19px] leading-[34.2px]">Properties</p>
                <p className="text-[15px] leading-[28.5px]">
                  Explore our wide variety of properties to fid your dream home
                  today
                </p>
                <div className="flex justify-end items-center">
                  <Image src={Arrow} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
