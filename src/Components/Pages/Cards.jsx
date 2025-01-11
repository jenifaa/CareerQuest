import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Card from "./Card";

const Cards = () => {
  const [all, setAll] = useState([]);
  useEffect(() => {
    fetch("allData.json")
      .then((res) => res.json())
      .then((data) => setAll(data));
  }, []);

  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className=" mb-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold my-4">
            Find Your <span className="text-[#E6533C] text-5xl font">P</span>
            erfect Guide
          </h2>
          <p className="text-gray-500 mb-5">
            Connecting You to the Best Counselors
          </p>
        </div>
        <div className="bg-base-200 py-4">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-10  w-11/12 mx-auto">
            {all.slice(0, 8).map((card) => (
              <Card card={card} key={card.id}></Card>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <Link
              to="/cards"
              className="bg-slate-800 px-4 py-3 text-white font-semibold rounded-lg"
            >
              Show All...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
