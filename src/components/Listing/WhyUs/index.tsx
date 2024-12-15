import image2 from "@/assets/whyUs/agent.svg";
import image3 from "@/assets/whyUs/buy.svg";
import image1 from "@/assets/whyUs/findHome.svg";
import image4 from "@/assets/whyUs/listProperty.svg";
import Image from "next/image";

const data = [
  {
    title: "Знайдіть свій майбутній дім",
    desc: "Ми допомагаємо вам знайти новий дім, пропонуючи розумний досвід у сфері нерухомості",
    image: image1
  },
  {
    title: "Досвідчені агенти",
    desc: "Знайдіть досвідченого агента, який найкраще знає ваш ринок",
    image: image2
  },
  {
    title: "Купуйте або орендуйте будинки",
    desc: "Мільйони будинків та квартир у ваших улюблених містах",
    image: image3
  },
  {
    title: "Перелічіть свою власність",
    desc: "Зареєструйтесь зараз і продавайте або орендуйте свою власність",
    image: image4
  }
];

export const WhyUs = () => {
  return (
    <section className="min-h-[655px] rounded-[24px] bg-[#E7C873] text-[#1a1a1a] flex items-center justify-center text-center">
      <div>
        <div className="mb-[50px]">
          <h3 className="text-[40px] leading-[52px] font-medium  mb-[10px]">
            Чому обирають нас
          </h3>
          <p className="text-[17px] leading-[32.3px]">
            Ми пропонуємо найкращі послуги у сфері нерухомості.
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
