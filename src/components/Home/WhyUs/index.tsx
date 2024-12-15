import Properties from "@/assets/icons/properties.svg";
import Rent from "@/assets/icons/rent.svg";
import Trust from "@/assets/icons/trust.svg";
import { MainLayout } from "@/components/ui/MailLayout";
import Image from "next/image";

const data = [
  {
    title: "Wide Range of Properties",
    desc: "We offer expert legal help for all related property items in Dubai.",
    img: Properties
  },
  {
    title: "Buy or Rent Homes",
    desc: "We sell your home at the best market price and very quickly as well.",
    img: Rent
  },
  {
    title: "Trusted by Thousands",
    desc: "We offer you free consultancy to get a loan for your new home.",
    img: Trust
  }
];

export const WhyUs = () => {
  return (
    <MainLayout additionalStyles="bg-[#fff] text-[#1a1a1a]">
      <div className="max-w-[1200px] w-full flex flex-col gap-10 text-center items-center">
        <div>
          <h2 className="font-medium text-[40px] leading-[52xp] ">
            Why You Should Work With Us
          </h2>
          <p className="text-[17px] leading-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex gap-[75px]">
          {data.map((item, index) => (
            <div
              className="flex flex-col items-center gap-[15px] max-w-[300px] text-[#1a1a1a]"
              key={index}
            >
              <Image src={item.img} alt={item.title} className="mb-[10px]" />
              <h4 className="text-[19px] font-medium">{item.title}</h4>
              <p className="text-[15px] leading-[28.5px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};
