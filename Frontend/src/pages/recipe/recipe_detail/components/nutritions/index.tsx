interface Nutrition {
  title: string;
  amount: number;
}

interface NutritionsProps {
  nutritions: Nutrition[];
}

const Nutritions: React.FC<NutritionsProps> = (props) => {
  return (
    <div className="bg-whiteish dark:bg-slate-500 px-5 py-5">
      <h1 className="text-2xl font-semibold mb-3">Nutrition</h1>
      <ul>
        {props.nutritions.map((nutrition, index) => (
          <li key={index} className="text-xl mb-2">
            <span className="mr-2 ">{nutrition.title} :</span>
            <span className="font-semibold">{nutrition.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nutritions;
