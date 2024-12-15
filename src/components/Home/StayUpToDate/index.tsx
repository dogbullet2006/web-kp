import { Arrow } from "@/assets/icons/Arrow";
import Mail from "@/assets/icons/mail.png";
import { TextInput } from "@/components/ui/Input";
import { MainLayout } from "@/components/ui/MailLayout";
import Image from "next/image";

export const StayUpToDate = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-10 text-[#1a1a1a] items-center max-w-[800px] w-full">
        <Image src={Mail} alt="пошта" className="w-[60px] h-[60px]" />
        <h2 className="text-[40px] leading-10 font-medium">Будьте в курсі</h2>
        <p className="text-[15px] leading-7">
          Підпишіться на нашу розсилку, щоб отримувати наші щотижневі новини.
        </p>
        <TextInput
          type="email"
          placeholder="Введіть свою електронну адресу"
          suffix={
            <button className="text-[#1A1A1A] font-medium text-[15px] leading-[28px] flex items-center gap-2">
              <p>Надіслати</p>
              <Arrow fill="#1a1a1a" />
            </button>
          }
        />
      </div>
    </MainLayout>
  );
};