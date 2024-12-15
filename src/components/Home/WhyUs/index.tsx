import Properties from "@/assets/icons/properties.svg";
import Rent from "@/assets/icons/rent.svg";
import Trust from "@/assets/icons/trust.svg";
import { MainLayout } from "@/components/ui/MailLayout";
import Image from "next/image";

const data = [
  {
    title: "Широкий вибір нерухомості",
    desc: "Ми пропонуємо експертну юридичну допомогу з усіх питань, пов'язаних з нерухомістю в Дубаї.",
    img: Properties
  },
  {
    title: "Купівля або оренда житла",
    desc: "Ми продаємо ваш будинок за найкращою ринковою ціною та дуже швидко.",
    img: Rent
  },
  {
    title: "Довіряють тисячі",
    desc: "Ми пропонуємо вам безкоштовну консультацію для отримання кредиту на новий будинок.",
    img: Trust
  }
];

export const WhyUs = () => {
  return (
    <MainLayout additionalStyles="bg-[#fff] text-[#1a1a1a]">
      <div className="max-w-[1200px] w-full flex flex-col gap-10 text-center items-center">
        <div>
          <h2 className="font-medium text-[40px] leading-[52xp] ">
            Чому варто працювати з нами
          </h2>
          <p className="text-[17px] leading-[32px]">
            Ми пропонуємо найкращі послуги на ринку нерухомості.
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
