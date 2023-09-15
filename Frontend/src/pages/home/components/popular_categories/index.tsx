import { useEffect, useState } from "react";
import useHttp from "../../../../hooks/useHttp";
import {
  SectionTitle,
  CategoryCard,
  Grid,
  CategoryCardSkeleton,
} from "../../../../components";
import { CategoryListDto } from "../../../../types";

const PopularCategories = () => {
  const { sendRequest: getCategories, data, error, loading } = useHttp();
  const [categories, setCategories] = useState<CategoryListDto[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories({
        url: "/category/origin",
      });

      if (data && !error) {
        setCategories(categories["data"]["origins"]);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="mb-10">
      <SectionTitle title="Popular Categories" />

      {categories && !loading && (
        <div>
          <Grid
            items={categories.map((category) => {
              return <CategoryCard key={category.id} category={category} />;
            })}
          />
        </div>
      )}
      {!categories && !loading && (
        <Grid items={Array(6).fill(<CategoryCardSkeleton />)} />
      )}
    </div>
  );
};

export default PopularCategories;
