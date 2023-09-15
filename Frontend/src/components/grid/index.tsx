import { ReactNode } from "react";

interface GridProps {
  title?: string;
  description?: string;
  items: ReactNode[];
  showFive?: boolean;
  showFour?: boolean;
  gap?: number | string;
}

const Grid: React.FC<GridProps> = ({
  title,
  description,
  items,
  showFive = false,
  showFour = true,
  gap,
}) => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
      </div>
      <div>
        <p className="text-md text-gray-600 mb-10">{description}</p>
      </div>
      <div
        className={`grid grid-cols-1 
        sm:grid-cols-2
         md:grid-cols-2 lg:grid-cols-3 ${
           showFour ? "xl:grid-cols-4" : ""
         } gap-${gap ?? "10"} justify-center ${
          showFive ? "2xl:grid-cols-5" : ""
        }`}
      >
        {items.map((item, index) => {
          return item;
        })}
      </div>
    </div>
  );
};

export default Grid;
