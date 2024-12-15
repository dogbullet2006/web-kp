import thumb1 from "@/assets/thumbs/thumb1.png";
import thumb2 from "@/assets/thumbs/thumb2.png";
import thumb3 from "@/assets/thumbs/thumb3.png";
import { HouseCard } from "@/components/Home/HouseCard";

const data = [
  {
    id: 1,
    title: "Skyper Pool Apartment",
    location: "1020 Bloomingdale Ave",
    labels: ["for sale"],
    price: 280000,
    beds: 4,
    baths: 2,
    sqft: 450,
    image: thumb1
  },
  {
    id: 2,
    title: "North Dillard Street",
    location: "4330 Bell Shoals Rd",
    labels: ["for rent"],
    price: 250,
    beds: 4,
    baths: 2,
    sqft: 400,
    image: thumb2
  },
  {
    id: 3,
    title: "Eaton Garth Penthouse",
    location: "7722 18th Ave, Brooklyn",
    labels: ["for sale", "featured"],
    price: 180000,
    beds: 4,
    baths: 2,
    sqft: 450,
    image: thumb3
  }
];

export const Homes = () => {
  return (
    <section className="mt-5 bg-[#F6F8FA] rounded-[24px] min-h-[593px] flex items-center justify-center flex-col text-[#1a1a1a] pt-[50px] pb-[150px]">
      <h2 className="font-medium text-[40px] leading-[52px]">Homes For You</h2>
      <p className="text-[17px] leading-[32.3px] mt-[5px] mb-[30px]">
        Based on your view history
      </p>
      <div className="flex gap-[30px]">
        {data.map(x => (
          <HouseCard key={x.id} {...x} />
        ))}
      </div>
    </section>
  );
};