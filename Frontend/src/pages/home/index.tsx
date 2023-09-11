import {
  NewsLetter,
  Hero,
  FeaturedSection,
  PopularCategories,
} from "./components";
import { CategoriesSections } from "../categories/components";

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <FeaturedSection />
      <NewsLetter />
      <CategoriesSections />
      <PopularCategories />
    </div>
  );
};

export default HomePage;
