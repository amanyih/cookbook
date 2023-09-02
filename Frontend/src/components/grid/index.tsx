import { ReactNode } from "react";

interface GridProps {
  title?: string;
  description?: string;
  items: ReactNode[];
}

const Grid: React.FC<GridProps> = (props) => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold mb-2">{props.title}</h1>
      </div>
      <div>
        <p className="text-md text-gray-600 mb-10">{props.description}</p>
      </div>
      <div className="w-full flex flex-wrap">
        {props.items.map((item, index) => {
          return item;
        })}
      </div>
    </div>
  );
};

export default Grid;
