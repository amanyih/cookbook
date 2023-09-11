import { SectionTitle, RecipeCard } from "../../../components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useHttp from "../../../hooks/useHttp";

const CategoryDetail = () => {
  const { name } = useParams<{ name: string }>();
  console.log(name);
  const [category, setCategory] = useState<any>();
  const { sendRequest: getCategory } = useHttp();
  useEffect(() => {
    const get = async () => {
      const data = await getCategory({ url: `/category/name/${name}` });
      console.log(data);
      setCategory(data["data"]["category"]);
    };
    get();
  }, [name]);

  return (
    <div>
      {category && (
        <div>
          <SectionTitle title={name!} />
          <div className="mb-10">{category.description}</div>
          <img
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full object-cover h-96 mb-10"
            alt=""
          />
          <div
            className="
            text-2xl
            font-semibold
            mb-10
            text-primary-400
          "
          >
            {category.recipes.length} recipes
          </div>
          <div className="flex flex-wrap items-center justify-start">
            {category.recipes.map((recipe: any) => (
              <RecipeCard recipe={recipe} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDetail;
