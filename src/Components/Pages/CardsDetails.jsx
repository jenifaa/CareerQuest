import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

const CardsDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { id } = useParams();
  const [card, setCard] = useState(false);
  useEffect(() => {
    const singleCard = data.find((card) => card.id === Number(id));
    console.log(singleCard);
    setCard(singleCard);
  }, [data, id]);
  const {
    image,
    serviceName,
    category,
    description,
    duration,
    availability,
    counselor,
    pricing,
  } = card;
  return (
    <div className="w-10/12 mx-auto mb-24">
        <Header></Header>
        <Navbar></Navbar>
      <div className=" grid grid-cols-9 gap-10 items-center mt-5">
        <figure className="px-5 pt-5 col-span-4">
          <img
            src={image}
            alt={serviceName}
            className="rounded-xl w-[400px]"
          />
        </figure>
        <div className="col-span-5">
        <p className="font-semibold text-3xl mb-3">Counselor: {counselor}</p>
        <p className="mb-4">{description}</p>
          <div className="flex items-center justify-between gap-5">
            <h2 className="text-xl font-semibold">{serviceName}</h2>
            <p className="text-gray-500">({category})</p>
          </div>
          
          <div className="flex justify-between items-center my-5">
            <p className="text-lg font-bold text-green-500"> <span className="font-bold text-black">Duration:</span> {duration}</p>
            <p className="text-white bg-green-500 px-2 py-1 rounded-full">{availability}</p>
          </div>
          <div className=" mt-2">
            <input type="text" placeholder="FeedBack" className="w-80 h-32 border-2 rounded-lg p-4"/>
            <button className="bg-slate-800 px-4 py-3 text-white font-semibold rounded-lg ml-7">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsDetails;
