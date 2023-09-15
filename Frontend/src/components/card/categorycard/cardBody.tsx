interface CardBodyProps {
  title: string;
  description: string;
  reipes: number;

  children?: React.ReactNode;
}

const CardBody: React.FC<CardBodyProps> = (props) => {
  return (
    <div className="p-4 w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex flex-col">
            <div className="text-xl font-bold">{props.title}</div>
          </div>
        </div>

        <div className=" text-gray-500 dark:text-gray-50 text-sm font-bold">
          {props.reipes} {props.reipes > 1 ? "recipes" : "recipe"}
        </div>
      </div>
      <div className="text-sm mt-2">
        {props.description.length > 100
          ? props.description.substring(0, 100) + "..."
          : props.description}
      </div>
    </div>
  );
};

export default CardBody;
