import {
  Grid,
  CategoryCard,
  SectionTitle,
  CategoryCardSkeleton,
} from "../../../components";
import { useState, useEffect } from "react";
import useHttp from "../../../hooks/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { StateInterface } from "../../../store";
import {
  getAllOriginsAction,
  getAllDietTypesAction,
  getAllDishtypesAction,
  getAllMealCoursesAction,
} from "../../../store/category/actions";
import { AnyAction } from "redux";

const CategoriesSkeleton = () => {
  return (
    <Grid
      items={[1, 2, 3, 4].map((item) => {
        return <CategoryCardSkeleton key={item} />;
      })}
    />
  );
};

const CategoriesSections = () => {
  const { sendRequest: getCategories } = useHttp();
  const dispatch = useDispatch();
  const {
    diet,
    dishTypes: dishType,
    mealCourses: mealType,
    origins: origin,
  } = useSelector((state: StateInterface) => state.category);

  useEffect(() => {
    dispatch(getAllOriginsAction(getCategories) as unknown as AnyAction);
    dispatch(getAllDietTypesAction(getCategories) as unknown as AnyAction);
    dispatch(getAllDishtypesAction(getCategories) as unknown as AnyAction);
    dispatch(getAllMealCoursesAction(getCategories) as unknown as AnyAction);
  }, [dispatch]);

  return (
    <div className="w-full">
      {origin.loading && <CategoriesSkeleton />}
      {!origin.loading && (
        <div>
          {(origin.list.length > 0 || origin.loading) && (
            <SectionTitle title="Origin" />
          )}
          <Grid
            description="Cuisines from all over the world. Enjoy the taste of different cultures."
            items={origin.list.map((category) => {
              return <CategoryCard key={category.id} category={category} />;
            })}
          />
        </div>
      )}
      {dishType.loading && <CategoriesSkeleton />}
      {!dishType.loading && (
        <div>
          {(dishType.list.length > 0 || dishType.loading) && (
            <SectionTitle title="DishType" />
          )}
          <Grid
            description="Find recipes based on the type of dish. From appetizers to desserts. We have it all."
            items={dishType.list.map((category) => {
              return <CategoryCard key={category.id} category={category} />;
            })}
          />
        </div>
      )}
      {diet.loading && <CategoriesSkeleton />}
      {!diet.loading && (
        <div>
          {(diet.list.length > 0 || diet.loading) && (
            <SectionTitle title="Diet" />
          )}
          <Grid
            description="Find recipes that fit your diet. No matter what diet you follow, we have it all."
            items={diet.list.map((category) => {
              return <CategoryCard key={category.id} category={category} />;
            })}
          />
        </div>
      )}
      {mealType.loading && <CategoriesSkeleton />}
      {!mealType.loading && (
        <div>
          {(mealType.list.length > 0 || mealType.loading) && (
            <SectionTitle title="MealCourse" />
          )}
          <Grid
            description="Explore different meal courses. From breakfast to dinner. We have it all."
            items={mealType.list.map((category) => {
              return <CategoryCard key={category.id} category={category} />;
            })}
          />
        </div>
      )}
    </div>
  );
};

export default CategoriesSections;
