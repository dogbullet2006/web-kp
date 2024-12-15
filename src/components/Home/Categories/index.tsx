import { Arrow } from "@/assets/icons/Arrow";
import House1 from "@/assets/thumbs/house1.jpg";
import House2 from "@/assets/thumbs/house2.jpg";
import House3 from "@/assets/thumbs/house3.jpg";
import House4 from "@/assets/thumbs/house4.jpg";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

const data = [
  { title: "Таунхаус", desc: "2 об'єкти", img: House1 },
  { title: "Сучасна вілла", desc: "10 об'єктів", img: House2 },
  { title: "Квартира", desc: "3 об'єкти", img: House3 },
  { title: "Односімейний будинок", desc: "5 об'єктів", img: House4 }
];

export const Categories = () => {
  return (
    <section className="bg-[#fff] flex items-center justify-center text-[#1a1a1a] py-[150px]">
      <div className="max-w-[1200px] w-full flex flex-col gap-10">
        <div className="flex flex-col gap-2 w-full">
          <h2 className="font-medium text-[40px] leading-[52px] ">
            Рекомендовані категорії
          </h2>
          <div className="flex items-end justify-between w-full">
            <p className="text-[17px] leading-[32px]">
              Виберіть категорію, яка вас цікавить
            </p>

            <div className="flex items-center gap-2 cursor-pointer">
              <p className="font-medium text-[15px] leading-4">
                Переглянути всі категорії
              </p>
              <Arrow fill="#1a1a1a" />
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-5">
            {data.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface CardProps {
  title: string;
  desc: string;
  img: StaticImageData;
}

const Card: FC<CardProps> = ({ title, desc, img }) => {
  return (
    <div className="relative rounded-lg overflow-hidden p-10 min-h-[300px] h-full">
      <Image
        src={img}
        alt={title}
        className="absolute inset-0 z-[2] object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1ACC] to-[#00000000] z-[3]"></div>

      <div className="flex flex-col gap-1 relative z-10 text-[#fff]">
        <p className="text-[19px] leading-[23px] font-medium">{title}</p>
        <p className="text-[15px] leading-[29px]">{desc}</p>
      </div>
    </div>
  );
};
