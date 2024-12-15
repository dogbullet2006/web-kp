import { ListingHero } from "@/components/Listing/Hero";
import { Homes } from "@/components/Listing/Homes";
import { Properties } from "@/components/Listing/Properties";
import { WhyUs } from "@/components/Listing/WhyUs";

const ListingPage = () => {
  return (
    <main>
      <ListingHero />
      <Homes />
      <Properties />
      <WhyUs />
    </main>
  );
};

export default ListingPage;
