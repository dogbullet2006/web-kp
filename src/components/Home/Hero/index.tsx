import { Arrow } from "@/assets/icons/Arrow";
import { MainLayout } from "@/components/ui/MailLayout";

export function Hero() {
  return (
    <MainLayout
      additionalStyles={`bg-[url('../assets/Home/bg.jpg')] h-screen w-full bg-no-repeat bg-cover flex items-center !justify-start px-[200px] text-white relative`}
    >
      <div className="flex flex-col gap-5">
        <p className="text-[60px] lading-[78px] font-semibold">
          Сайт <span className="text-primary-yellow font-medium">#1</span>,
          якому довіряють
          <br /> професіонали з нерухомості*
        </p>

        <p className="text-[15px] leading-5">
          Від лише $10 на день з обмеженими знижками.
        </p>

        <div className="flex items-center gap-4">
          <p className="text-[15px] leading-4 font-medium text-primary-yellow">
            Переглянути більше об'єктів
          </p>
          <Arrow />
        </div>
      </div>

      <div className="bg-primary-yellow absolute bottom-0 left-0 max-w-[900px] w-full rounded-tr-xl flex items-center justify-end gap-[100px] text-[#1A1A1A] py-[30px] px-[80px]">
        <div className="flex flex-col gap-1">
          <p className="text-[30px] leading-[30px] font-medium">680</p>
          <p className="text-[15px] leading-[37.5px]">Нагороди</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[30px] leading-[30px] font-medium">8K+</p>
          <p className="text-[15px] leading-[37.5px]">Задоволені клієнти</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[30px] leading-[30px] font-medium">500+</p>
          <p className="text-[15px] leading-[37.5px]">Готові об'єкти</p>
        </div>
      </div>
    </MainLayout>
  );
}
