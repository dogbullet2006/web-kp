import VillaImage from "@/assets/Home/villa.png";
import { Arrow } from "@/assets/icons/Arrow";
import bath from "@/assets/icons/bath.svg";
import bed from "@/assets/icons/bed.svg";
import locationIcon from "@/assets/icons/location.svg";
import ft from "@/assets/icons/sqft.svg";
import { Button } from "@/components/ui/Button";
import { MainLayout } from "@/components/ui/MailLayout";
import Image from "next/image";

export const Villa = () => {
  return (
    <MainLayout additionalStyles="bg-[#fff] text-[#1a1a1a]">
      <div className="max-w-[1200px] flex items-center gap-[80px]">
        <Image src={VillaImage} alt="вілла" className="max-w-[700px] flex-1" />
        <div className="flex-1">
          <div className="flex flex-col gap-5">
            <h2 className="font-medium text-[40px] leading-[48px]">
              Вілла One Hyde Park
            </h2>
            <div className="flex items-center gap-2">
              <Image src={locationIcon} alt="локація" />
              <p className="text-[16px] leading-[30px]">
                2050 Bloomingdale Ave
              </p>
            </div>
            <p className="text-[16px] leading-[30px]">
              Чарівний будинок з трьома спальнями та трьома ванними кімнатами,
              простора однокімнатна кабана, житло для родичів. Затишна вітальня
              з каміном та чудовими арт-деко деталями.
            </p>
            <div className="divide-x-[1px] flex mt-[10px]">
              <div className="flex items-center pr-[15px] gap-[10px]">
                <Image src={bed} alt="ліжко" /> <p>4 Ліжка</p>
              </div>
              <div className="flex items-center px-[15px] gap-[10px]">
                <Image src={bath} alt="ванна" /> <p>2 Ванни</p>
              </div>
              <div className="flex items-center px-[15px] gap-[10px]">
                <Image src={ft} alt="кв. фут" /> <p>350 кв. фут</p>
              </div>
            </div>

            <p className="text-[26px] leading-[39px] font-semibold text-[#EB664E]">
              $120,000
            </p>

            <div>
              <Button>
                <p>Дізнатися більше </p>
                <Arrow fill="#1a1a1a" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
