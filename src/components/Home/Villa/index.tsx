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
        <Image src={VillaImage} alt="villa" className="max-w-[700px] flex-1" />
        <div className="flex-1">
          <div className="flex flex-col gap-5">
            <h2 className="font-medium text-[40px] leading-[48px]">
              Villa One Hyde Park
            </h2>
            <div className="flex items-center gap-2">
              <Image src={locationIcon} alt="location" />
              <p className="text-[16px] leading-[30px]">
                2050 Bloomingdale Ave
              </p>
            </div>
            <p className="text-[16px] leading-[30px]">
              Enchanting three bedroom, three bath home with spacious one
              bedroom, one bath cabana, in-laws quarters. Charming living area
              features fireplace and fabulous art deco details.
            </p>
            <div className="divide-x-[1px] flex mt-[10px]">
              <div className="flex items-center pr-[15px] gap-[10px]">
                <Image src={bed} alt="bed" /> <p>4 Beds</p>
              </div>
              <div className="flex items-center px-[15px] gap-[10px]">
                <Image src={bath} alt="bath" /> <p>2 Baths</p>
              </div>
              <div className="flex items-center px-[15px] gap-[10px]">
                <Image src={ft} alt="sqft" /> <p>350 sqft</p>
              </div>
            </div>

            <p className="text-[26px] leading-[39px] font-semibold text-[#EB664E]">
              $120,000
            </p>

            <div>
              <Button>
                <p>Learn More </p>
                <Arrow fill="#1a1a1a" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
