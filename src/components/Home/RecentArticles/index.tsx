import { Arrow } from "@/assets/icons/Arrow";
import House1 from "@/assets/thumbs/house1.jpg";
import House2 from "@/assets/thumbs/house2.jpg";
import House3 from "@/assets/thumbs/house3.jpg";
import House4 from "@/assets/thumbs/house4.jpg";
import Image from "next/image";

const data = [
  {
    type: "Квартира",
    date: "19 березня 2024",
    desc: "Ринки житла, які найбільше змінилися цього тижня",
    img: House1
  },
  {
    type: "Квартира",
    date: "19 березня 2024",
    desc: "Read представляє найкращі канадські міста для велосипедистів",
    img: House2
  },
  {
    type: "Офіс",
    date: "19 березня 2024",
    desc: "10 міст, де можна жити доступно і ходити пішки",
    img: House3
  },
  {
    type: "Магазин",
    date: "19 березня 2024",
    desc: "Нові квартири в найкращих канадських містах",
    img: House4
  }
];

export const RecentArticles = () => {
  return (
    <section className="bg-[#fff] flex items-center justify-center text-[#1a1a1a] py-[150px]">
      <div className="max-w-[1200px] w-full flex flex-col gap-10">
        <div className="flex flex-col gap-2 w-full">
          <h2 className="font-medium text-[40px] leading-[52px] ">
            Останні статті та новини
          </h2>
          <div className="flex items-end justify-between w-full">
            <p className="text-[17px] leading-[32px]">
              Дізнайтеся про останні новини та оновлення
            </p>

            <div className="flex items-center gap-2 cursor-pointer">
              <p className="font-medium text-[15px] leading-4">
                Переглянути всі новини
              </p>
              <Arrow fill="#1a1a1a" />
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-5">
            {data.map((item, i) => (
              <div
                key={i}
                className="border-[1px] border-[#e9e9e9] bg-[#fff] rounded-[16px] overflow-hidden flex flex-col gap-5 text-center"
              >
                <Image
                  src={item.img}
                  alt={item.type}
                  className="max-h-[200px] w-full object-cover"
                />

                <div className="flex flex-col gap-2.5 text-[#3D3E3F] text-[15px] leading-[30px] items-center px-7 pb-7">
                  <div className="flex justify-center items-center gap-2">
                    <p>{item.type}</p>
                    <div className="w-1 h-1 rounded-full bg-[#3D3E3F]"></div>
                    <p>{item.date}</p>
                  </div>
                  <h4 className="text-[#1A1A1A] text-[17px] leading-[26px] font-medium">
                    {item.desc}
                  </h4>
                  <button className="flex gap-2 items-center group ~font-medium ~text-[15px] ~leading-[29px]">
                    Читати далі
                    <Arrow fill="#1A1A1A" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
