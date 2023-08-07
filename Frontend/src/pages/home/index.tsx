import SectionTitle from "../../components/SectionTitle";
import HorizontalScroll from "../../components/HorizontalScroll";

import { NewsLetter, Hero } from "./components";
import { CategoriesSections } from "../categories/components";

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero></Hero>
      <div className="w-full">
        <SectionTitle any="Recent Posts" />
        <HorizontalScroll />
      </div>
      <NewsLetter />
      <CategoriesSections />
    </div>
  );
};

export default HomePage;
