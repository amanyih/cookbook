// import { CategoryCard } from "../../components";
import { CategoriesSections } from "./components";
import useHttp from "../../hooks/useHttp";
import { useEffect, useState } from "react";

const CategoriesPage = () => {
  const { error, loading, sendRequest } = useHttp();
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await sendRequest({ url: "/category" });
      setData(res);
    };
    getData();
    console.log(error);
    console.log(data);
    console.log(loading);
  }, []);

  return (
    <div className="w-full flex flex-col justify-start h-full ">
      <CategoriesSections />
    </div>
  );
};

export default CategoriesPage;
