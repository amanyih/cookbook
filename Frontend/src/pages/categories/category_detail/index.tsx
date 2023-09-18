import {
  SectionTitle,
  RecipeCard,
  Grid,
  LoadingSpinner,
} from "../../../components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useHttp from "../../../hooks/useHttp";
import { useSelector, useDispatch } from "react-redux";
import { StateInterface } from "../../../store";
import { AnyAction } from "redux";
import { getCategoryAction } from "../../../store/actions";
import constants from "../../../constants";

const CategoryDetail = () => {
  const dispatch = useDispatch();
  const { name } = useParams<{ name: string }>();
  const { category, loading } = useSelector(
    (state: StateInterface) => state.categoryDetail
  );
  const { sendRequest: getCategory } = useHttp();

  useEffect(() => {
    dispatch(getCategoryAction(getCategory, name!) as unknown as AnyAction);
  }, [name]);

  return (
    <div>
      {category && (
        <div>
          <SectionTitle title={name!} />
          <div className="mb-10">{category.description}</div>
          <img
            src={category.image || constants.categoryImagePlaceholder}
            className="w-full object-cover h-96 mb-10"
            alt=""
          />
          <div className=" text-2xl font-semibold mb-10 text-primary-400">
            {category.recipes.length} recipes
          </div>

          <Grid
            items={category.recipes.map((recipe: any) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          />
        </div>
      )}
      {loading && <LoadingSpinner />}
    </div>
  );
};

export default CategoryDetail;
