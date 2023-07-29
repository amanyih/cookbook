import { Grid, CategoryCard } from "../../../components";

const CategoriesSections = () => {
  return (
    <div className="w-full">
      <Grid
        title="Cuisines"
        description="Cuisines from all over the world."
        items={[
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
        ]}
      />
      <Grid
        title="Dish Types"
        description=" Experince the taste of different dish types."
        items={[
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
          <CategoryCard />,
        ]}
      />
    </div>
  );
};

export default CategoriesSections;
