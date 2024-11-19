import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { image, serviceName, category, pricing, counselor, rating } = card;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-5 pt-5">
        <img
          src={image}
          alt={serviceName}
          className="rounded-xl h-[300px] w-[250px]"
        />
      </figure>
      <div className="card-body ">
        <div className="flex items-center justify-between gap-5">
          <h2 className="card-title">{serviceName}</h2>
          <p className="text-gray-500">({category})</p>
        </div>
        <p className="font-semibold">Counselor: {counselor}</p>
       <div className="flex justify-between items-center">
       <p className="text-lg font-bold text-green-500">{pricing}</p>
       <p>{rating}</p>
       </div>
        <div className="card-actions mt-2">
          <Link to={`/card/${card.id}`}  className="btn bg-[#E6533C] text-base-200">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
