import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ rating, half = true }: { rating: number; half: boolean }) => {
  return (
    <div className={`${half ? "w-1/2" : ""} flex`}>
      <span className=" flex items-center text-red-400 text-xl mb-2">
        {Array.from({ length: rating }, (_, i) => (
          <FontAwesomeIcon icon={faStar} className="ml-1" key={i} />
        ))}
      </span>
      <span className=" flex items-center text-red-400 text-xl mb-2">
        {Array.from({ length: 5 - rating }, (_, i) => (
          <FontAwesomeIcon icon={faStarRegular} className="ml-1" key={i} />
        ))}
      </span>
    </div>
  );
};

export default Rating;
