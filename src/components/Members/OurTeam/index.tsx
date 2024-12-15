import { Arrow } from "@/assets/icons/Arrow";
import Bg from "@/assets/team/bg.png";
import People1 from "@/assets/team/nigga.png";
import People2 from "@/assets/team/normal.png";
import People4 from "@/assets/team/solidNigga.png";
import People3 from "@/assets/team/woman.png";
import { Button } from "@/components/ui/Button";
import { MainLayout } from "@/components/ui/MailLayout";
import Image from "next/image";

const TEAM_MEMBERS = [
  { name: "John Powell", role: "Підтримка сервісу", img: People1 },
  { name: "Thomas Powell", role: "Маркетинг", img: People2 },
  { name: "Tom Wilson", role: "Дизайнер", img: People3 },
  { name: "Samuel Palmer", role: "Маркетинг", img: People4 }
];

export const OurTeam = () => {
  return (
    <MainLayout additionalStyles="bg-[#fff] text-[#1a1a1a]">
      <div className="max-w-[1200px] w-full flex flex-col gap-[150px] text-center">
        <div className="flex flex-col gap-10">
          <header className="flex flex-col gap-1">
            <h2 className="text-[40px] leading-[52px] font-medium">
              Познайомтесь з нашою командою експертів
            </h2>
            <p className="text-[17px] leading-[33px]">
              Ми — команда професіоналів, які працюють над створенням якісних
              рішень для вас.
            </p>
          </header>
          <div className="grid grid-cols-4 gap-5">
            {TEAM_MEMBERS.map(member => (
              <div key={member.name} className="flex flex-col gap-5 text-left">
                <Image src={member.img} alt={member.name} />
                <div>
                  <h3 className="text-[21px] leading-[25px] font-medium">
                    {member.name}
                  </h3>
                  <p className="text-[15px] leading-[30px]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[16px] overflow-hidden bg-[#f9f9f9] flex items-center">
          <div className="flex-1 flex flex-col">
            <div className="px-10 flex flex-col items-start gap-5 text-left">
              <h2 className="font-medium text-[40px] leading-[52px]">
                Відкрийте для себе наш найкращий вибір
              </h2>
              <p className="text-[16px] leading-[31px]">
                Ми пропонуємо широкий асортимент продуктів, що відповідають
                найвищим стандартам якості. Переконайтеся самі!
              </p>
              <Button additionalStyles="!bg-[#000] !text-[#fff]">
                <p>Дізнатися більше</p>
                <Arrow />
              </Button>
            </div>
          </div>
          <Image
            src={Bg}
            alt="bg"
            className="max-h-[550px] w-fit object-cover"
          />
        </div>
      </div>
    </MainLayout>
  );
};
