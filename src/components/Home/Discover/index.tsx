import { Arrow } from "@/assets/icons/Arrow";
import { Button } from "@/components/ui/Button";
import { MainLayout } from "@/components/ui/MailLayout";

export const Discover = () => {
  return (
    <MainLayout additionalStyles="bg-[url('../assets/Home/discoverBg.jpg')] w-full bg-no-repeat text-[#fff] relative bg-cover">
      <div className="max-w-[1200px] w-full text-center flex flex-col gap-[30px] items-center">
        <h2 className="text-[60px] leading-[78px] font-medium">
          Досліджуй місця де ти
          <br />
          хочеш жити
        </h2>
        <p className="text-[16px] leading-[30px]">
          Відкрийте для себе найкращі місця для життя.
          <br /> Виберіть свою майбутню домівку з нашою допомогою
        </p>

        <Button additionalStyles="!font-medium !text-[15px] !leading-[50px]">
          Дізнатися більше
          <Arrow fill="#1a1a1a" />
        </Button>
      </div>
    </MainLayout>
  );
};
