import SectionTitle from "../../components/SectionTitle";
import HorizontalScroll from "../../components/HorizontalScroll";

import { NewsLetter, Hero } from "./components";

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero></Hero>
      <div className="w-full">
        <SectionTitle any="Recent Posts" />
        <HorizontalScroll />
      </div>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default HomePage;
