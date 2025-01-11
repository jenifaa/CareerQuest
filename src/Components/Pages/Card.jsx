import { Link } from "react-router-dom";
import { Rating, ThinStar } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useState } from "react";

const Card = ({ card }) => {
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
  }
  const { image, serviceName, category, pricing, counselor, rating } = card;
  const [ratings, setRatings] = useState(rating);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-3 pt-3">
        <img
          src={image}
          alt={serviceName}
          className="rounded-xl h-[230px] w-full object-cover"
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
          <Rating className=""
            style={{ maxWidth: 90}}
            value={rating}
            readOnly
            itemStyles={myStyles}
           
          />({rating})
        </div>
        <div className="card-actions mt-2">
          <Link
            to={`/card/${card.id}`}
            className="btn bg-slate-800 text-base-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
