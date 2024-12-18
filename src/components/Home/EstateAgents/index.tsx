import EstateAgentsImage from "@/assets/Home/estateAgents.png";
import { Arrow } from "@/assets/icons/Arrow";
import { Phone } from "@/assets/icons/phone";
import { Button } from "@/components/ui/Button";
import { MainLayout } from "@/components/ui/MailLayout";
import Image from "next/image";

export const EstateAgents = () => {
  return (
    <MainLayout additionalStyles="text-[#1a1a1a]">
      <div className="max-w-[1200px] w-full flex justify-between items-center gap-10">
        <div className="flex flex-col gap-5 max-w-[400px] w-full">
          <h2 className="text-[40px] leading-[52px] font-medium">
            Станьте агентом з нерухомості <br />
          </h2>
          <p className="text-[16px] leading-[30px]">
            Приєднуйтесь до нашої команди професіоналів з нерухомості. Ми
            надаємо всі необхідні інструменти та підтримку для вашого успіху.
          </p>
          <div className="flex justify-between items-center">
            <Button>
              Зареєструватися зараз
              <Arrow fill="#1a1a1a" />
            </Button>

            <div className="flex items-center gap-3">
              <div className="bg-[#fff] rounded-full p-2">
                <Phone fill="#1a1a1a" />
              </div>

              <p>+68 685 88666</p>
            </div>
          </div>
        </div>
        <Image
          src={EstateAgentsImage}
          alt="Агенти з нерухомості"
          className="max-w-[550px] w-full"
        />
      </div>
    </MainLayout>
  );
};
