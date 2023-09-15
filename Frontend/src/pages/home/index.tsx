import {
  NewsLetter,
  Hero,
  FeaturedSection,
  PopularCategories,
  Testimonials,
  RecentRecipes,
  TopRated,
} from "./components";

import TempSkeletons from "./temp/sk";

const HomePage = () => {
  return (
    <div className="w-full">
      {/* <TempSkeletons /> */}
      <Hero />
      <FeaturedSection />
      <TopRated />
      <NewsLetter />
      <PopularCategories />
      <Testimonials />
      <RecentRecipes />
    </div>
  );
};

export default HomePage;
