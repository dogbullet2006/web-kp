"use client";
import { Arrow } from "@/assets/icons/Arrow";
import { MainLayout } from "@/components/ui/MailLayout";
import { useState } from "react";
import { HouseCard } from "../HouseCard";
import { HouseModal } from "../HouseModal";
import { HARDCODED_HOUSES } from "./hardcode";

export const HouseGallery = () => {
  const [selectedHouse, setSelectedHouse] = useState<number | null>(null);
  const [sliderOffset, setSliderOffset] = useState(0);

  const handleOffset = (direction: "left" | "right") => {
    direction === "right"
      ? setSliderOffset(
          Math.min(sliderOffset + 480, HARDCODED_HOUSES.length * 480 - 480 * 3)
        )
      : setSliderOffset(Math.max(sliderOffset - 480, 0));
  };

  return (
    <MainLayout additionalStyles="bg-[#F9F9F9] flex items-center justify-center text-[#1a1a1a] overflow-hidden">
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
        <div
          className="flex gap-[30px]"
          style={{
            transform: `translateX(-${sliderOffset}px)`,
            transition: "transform 0.5s"
          }}
        >
          {HARDCODED_HOUSES.map((x, i) => (
            <HouseCard key={x.id} {...x} onClick={() => setSelectedHouse(i)} />
          ))}
        </div>

        <div className="flex items-center gap-5">
          <button
            className="border-[1px] border-[#E9E9E9] rounded-[40px] px-5 py-3 bg-[#fff]"
            onClick={() => handleOffset("left")}
          >
            <Arrow fill="#1a1a1a" rotate={180} />
          </button>
          <button
            className="border-[1px] border-[#E9E9E9] rounded-[40px] px-5 py-3 bg-[#fff]"
            onClick={() => handleOffset("right")}
          >
            <Arrow fill="#1a1a1a" />
          </button>
        </div>
      </div>

      <HouseModal
        open={selectedHouse !== null}
        onClose={() => setSelectedHouse(null)}
        data={HARDCODED_HOUSES[selectedHouse || 0]}
      />
    </MainLayout>
  );
};
