import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Card from "./Card";

const Cards = () => {
  // const data = useLoaderData();
  // console.log(data);
  const [all, setAll] = useState([]);
  useEffect(() => {
    fetch("allData.json")
      .then((res) => res.json())
      .then((data) => setAll(data));
  }, []);
  console.log(all);

  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="w-11/12 mx-auto mb-6">
        <div className="text-center">
          <h2 className="text-4xl font-semibold my-4">
            Find Your Perfect Guide
          </h2>
          <p className="text-gray-500 mb-5">
            Connecting You to the Best Counselors
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {all.slice(0, 8).map((card) => (
            <Card card={card} key={card.id}></Card>
          ))}
        </div>
      </div>

      <div className="pl-16">
        <Link to="/cards" className="bg-slate-800 px-4 py-3 text-white font-semibold rounded-lg">
          Show All...
        </Link>
      </div>
    </div>
  );
};

export default Cards;
