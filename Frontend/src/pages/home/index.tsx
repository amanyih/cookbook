import {
  NewsLetter,
  Hero,
  FeaturedSection,
  PopularCategories,
  Testimonials,
  RecentRecipes,
  TopRated,
} from "./components";

const HomePage = () => {
  return (
    <div className="w-full h-full">
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
