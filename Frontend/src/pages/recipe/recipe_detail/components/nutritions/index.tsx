interface Nutrition {
  title: string;
  amount: number;
}

interface NutritionsProps {
  nutritions: Nutrition[];
}

const Nutritions: React.FC<NutritionsProps> = (props) => {
  return (
    <div className="bg-whiteish">
      <h1 className="text-2xl font-semibold">Nutritions</h1>
      <ul>
        {props.nutritions.map((nutrition, index) => (
          <li key={index}>
            <span className="mr-2">{nutrition.title}</span>
            <span className="font-semibold">{nutrition.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nutritions;
