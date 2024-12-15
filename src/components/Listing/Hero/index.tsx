"use client";
import search from "@/assets/icons/search.svg";
import Image from "next/image";
import { useState } from "react";

const options = ["Продаж", "Оренда"];

export const ListingHero = () => {
  const [option, setOption] = useState(options[0]);

  return (
    <section
      className={`bg-[url('../assets/icons/hero.png')] h-screen w-full bg-no-repeat flex items-center bg-contain justify-center text-[#fff]`}
    >
      <div className="flex flex-col justify-center items-center text-center gap-[21px]">
        <div className="border-[1px] border-[#fff] w-fit px-5 h-[40px] rounded-full flex justify-center items-center">
          <p className="text-[13px] leading-[38px] font-medium">
            ДОЗВОЛЬТЕ НАМ ВЕСТИ ВАШ ДІМ
          </p>
        </div>
        <h2 className="text-[60px] font-medium leading-[78px]">
          Відкрийте для себе місце, яке вам <br /> сподобається жити
        </h2>
        <div className="mt-[9px] w-full flex flex-col gap-[30px]">
          <div className="flex justify-center items-start gap-[60px]">
            {options.map(x => (
              <div className="relative" key={x} onClick={() => setOption(x)}>
                <p className="cursor-pointer">{x}</p>
                {option === x && (
                  <div className="h-[2px] mt-[10px] w-full bg-[#fff]" />
                )}
              </div>
            ))}
          </div>
          <div className="bg-[#fff]  w-full h-[70px] rounded-[70px] pl-[30px] pr-[5px] py-[7px] text-[#000] flex items-center">
            <input
              className="h-full w-full border-none focus:border-none focus:outline-0"
              placeholder="Введіть ім'я, ключові слова..."
            />
            <div className="bg-[#E7C873] min-w-[60px] h-[60px] flex justify-center items-center rounded-full">
              <Image src={search} alt="пошук" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
