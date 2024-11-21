import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Cards from "./Cards";
import Question from "./Question";
import Career from "./Career";

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>CareerQuest</title>
        </Helmet>
      <Banner></Banner>
      <section>
        <Cards></Cards>
      </section>
      <section>
        <Question></Question>
      </section>
      <section>
        <Career></Career>
      </section>
    </div>
  );
};

export default Home;
