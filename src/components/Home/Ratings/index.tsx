import Quote from "@/assets/icons/quote.svg";
import Stars from "@/assets/icons/stars.png";
import Companies from "@/assets/thumbs/companies.png";
import Designer from "@/assets/thumbs/designer.png";
import Developer from "@/assets/thumbs/developer.png";
import Marketing from "@/assets/thumbs/marketing.png";
import { MainLayout } from "@/components/ui/MailLayout";
import Image from "next/image";

const data = [
  {
    name: "Cameron Williamson",
    position: "Designer",
    review:
      "I have been using it for a while now and I can say that it is the best product I have ever used. It is very easy to use and the results are amazing.",
    img: Designer
  },
  {
    name: "Esther Howard",
    position: "Marketing",
    review: `Sed ut perspiciatis unde omnis iste natus error
     sit voluptatem accusantium doloremque
     laudantium, totam rem aperiam, eaque ipsa
     quae ab illo inventore veritatis et quasi
     architecto beatae vitae.`,
    img: Marketing
  },
  {
    name: "Devon Lane",
    position: "Developer",
    review: `Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia
      consequuntur magni dolores eos qui ratione
      voluptatem sequi nesciunt. Neque porro
      quisquam est.`,
    img: Developer
  }
];

export const Ratings = () => {
  return (
    <MainLayout additionalStyles="bg-[#fff] text-[#1a1a1a]">
      <div className="max-w-[1200px] flex flex-col items-center gap-5 w-full">
        <div className="flex justify-between items-center w-full">
          <h3 className="text-[40px] leading-[52px] font-medium">
            What our customers are
            <br /> saying us?
          </h3>
          <div className="flex gap-10">
            <div className="flex flex-col">
              <p className="font-medium text-[26px] leading-[34px]">10m+</p>
              <p className="text-[15px] leading-[38px]">Happy People</p>
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-[26px] leading-[34px]">4.88</p>
              <p className="text-[15px] leading-[38px]">Overall rating</p>
              <div className="flex">
                <Image src={Stars} alt="stars" className="w-[80px] h-2.5" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[30px] text-[#1a1a1a] mb-[100px]">
          {data.map(review => (
            <div className="bg-[#f9f9f9] rounded-[16px] p-10 flex flex-col gap-5">
              <header className="flex justify-between items-center">
                <div className="flex gap-5">
                  <Image src={review.img} alt="thumb" />
                  <div>
                    <h4 className="text-[20px] font-medium leading-[23px]">
                      {review.name}
                    </h4>
                    <p className="text-[15px] leading-[28px]">
                      {review.position}
                    </p>
                  </div>
                </div>
                <Image src={Quote} alt="quote" />
              </header>
              <p className="text-[17px] leading-[33px]">{review.review}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 text-[#1a1a1a] text-center">
          <p className="text-[17px] leading-[33px]">
            Thousands of world’s leading companies trust Space
          </p>
          <Image src={Companies} alt="companies" />
        </div>
      </div>
    </MainLayout>
  );
};
