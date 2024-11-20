import Banner from "./Banner";
import Cards from "./Cards";
import Question from "./Question";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <section>
        <Cards></Cards>
      </section>
      <section>
        <Question></Question>
      </section>
    </div>
  );
};

export default Home;
