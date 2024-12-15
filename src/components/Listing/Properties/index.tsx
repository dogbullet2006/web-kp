import thumb1 from "@/assets/thumbs/c1.jpg.png";
import thumb2 from "@/assets/thumbs/c2.jpg.png";
import thumb3 from "@/assets/thumbs/c3.jpg.png";
import thumb4 from "@/assets/thumbs/c4.jpg.png";
import thumb5 from "@/assets/thumbs/c5.jpg.png";
import thumb6 from "@/assets/thumbs/c6.jpg.png";
import Image from "next/image";

const data = [
  {
    image: thumb1,
    title: "New York",
    desc: "8 Properties"
  },
  {
    image: thumb2,
    title: "Chicago",
    desc: "2 Properties"
  },
  {
    image: thumb3,
    title: "Los Angeles",
    desc: "1 Properties"
  },
  {
    image: thumb4,
    title: "San Diego",
    desc: "0 Properties"
  },
  {
    image: thumb5,
    title: "Florida",
    desc: "3 Properties"
  },
  {
    image: thumb6,
    title: "Miami",
    desc: "2 Properties"
  }
];

export const Properties = () => {
  return (
    <section className="min-h-[1300px] flex items-center justify-center flex-col bg-[#fff]">
      <h3 className="text-[#1a1a1a] leading-[51px] text-[40px] font-medium">
        Find Properties in These Cities
      </h3>
      <p className="mt-[5px] mb-[30px] text-[#1a1a1a] leading-[32.3px] text-[17px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-4 gap-[30px] h-[830px] w-full grid-rows-2 max-w-[1400px]">
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative border-[#000] rounded-[16px] h-fit ${
              index === 0 || index === data.length - 1 ? "col-span-2" : ""
            }`}
          >
            <Image src={item.image} className="rounded-[16px] h-full" alt="" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#000] to-transparent opacity-50 rounded-[16px]"></div>
            <div className="absolute top-[45px] left-[50px] text-white flex flex-col gap-[10px]">
              <p className="text-[15px]">{item.desc}</p>
              <h4 className="text-[21px] font-medium">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
