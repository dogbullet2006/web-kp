import image2 from "@/assets/whyUs/agent.svg";
import image3 from "@/assets/whyUs/buy.svg";
import image1 from "@/assets/whyUs/findHome.svg";
import image4 from "@/assets/whyUs/listProperty.svg";
import Image from "next/image";

const data = [
  {
    title: "Find your future home",
    desc: "We help you find a new home by offering a smart real estate experience",
    image: image1
  },
  {
    title: "Experienced agents",
    desc: "Find an experienced agent who knows your market best",
    image: image2
  },
  {
    title: "Buy or rent homes",
    desc: "Millions of houses and apartments in yourfavourite cities",
    image: image3
  },
  {
    title: "List your own property",
    desc: "Sign up now and sell or rent your own properties",
    image: image4
  }
];

export const WhyUs = () => {
  return (
    <section className="min-h-[655px] rounded-[24px] bg-[#E7C873] text-[#1a1a1a] flex items-center justify-center text-center">
      <div>
        <div className="mb-[50px]">
          <h3 className="text-[40px] leading-[52px] font-medium  mb-[10px]">
            Why Choose Us
          </h3>
          <p className="text-[17px] leading-[32.3px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex gap-[75px]">
          {data.map((item, index) => (
            <div
              className="flex flex-col items-center gap-[15px] max-w-[300px] text-[#1a1a1a]"
              key={index}
            >
              <Image src={item.image} alt={item.title} className="mb-[10px]" />
              <h4 className="text-[19px] font-medium">{item.title}</h4>
              <p className="text-[15px] leading-[28.5px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
