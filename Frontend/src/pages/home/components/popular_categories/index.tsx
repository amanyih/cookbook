import { useEffect } from "react";
import useHttp from "../../../../hooks/useHttp";
import {
  SectionTitle,
  CategoryCard,
  Grid,
  CategoryCardSkeleton,
} from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { StateInterface } from "../../../../store";
import getPopularCategories from "../../../../store/category/popular/actions";
import { AnyAction } from "redux";

const PopularCategories = () => {
  const { sendRequest: getCategories } = useHttp();
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state: StateInterface) => state.poularCategories
  );

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getPopularCategories(getCategories) as unknown as AnyAction);
    }
  }, [dispatch]);

  return (
    <div className="mb-10">
      {(loading || categories.length >= 0) && (
        <SectionTitle title="Popular Categories" />
      )}
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
        <Grid
          items={Array(4)
            .fill(4)
            .map((num, index) => (
              <CategoryCardSkeleton key={index} />
            ))}
        />
      )}
    </div>
  );
};

export default PopularCategories;
