import {
  Grid,
  RecipeCardSkeleton,
  CategoryCardSkeleton,
} from "../../../components";

const TempSkeletons = () => {
  return (
    <div>
      <Grid items={Array(6).fill(<CategoryCardSkeleton />)} />
      <Grid items={Array(6).fill(<RecipeCardSkeleton />)} />
    </div>
  );
};

export default TempSkeletons;
