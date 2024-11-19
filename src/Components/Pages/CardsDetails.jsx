import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CardsDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { id } = useParams();
  const [card, setCard] = useState(false);
  useEffect(() => {
    const singleCard = data.find(card => card.id === Number(id));
    console.log(singleCard);
    setCard(singleCard);
  }, [data, id]);
  const {image, serviceName, category, description, duration, availability} = card
  return (
    <div>
      <h2>{description}</h2>
    </div>
  );
};

export default CardsDetails;
