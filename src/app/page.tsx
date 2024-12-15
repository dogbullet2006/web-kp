import { BestProperties } from "@/components/Home/BestProperties";
import { Categories } from "@/components/Home/Categories";
import { Discover } from "@/components/Home/Discover";
import { EstateAgents } from "@/components/Home/EstateAgents";
import { Hero } from "@/components/Home/Hero";
import { HouseGallery } from "@/components/Home/HouseGallery";
import { Ratings } from "@/components/Home/Ratings";
import { RecentArticles } from "@/components/Home/RecentArticles";
import { StayUpToDay } from "@/components/Home/StayUpToDate";
import { Villa } from "@/components/Home/Villa";
import { WhyUs } from "@/components/Home/WhyUs";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Categories />
      <HouseGallery />
      <WhyUs />
      <Discover />
      <Villa />
      <Ratings />
      <BestProperties />
      <EstateAgents />
      <RecentArticles />
      <StayUpToDay />

      <ScrollToTop />
    </main>
  );
}
