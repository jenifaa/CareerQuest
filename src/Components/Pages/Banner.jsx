import Marquee from "react-fast-marquee";
const Banner = () => {
  return (
    <div>
      <div className="flex  items-center w-10/12 mx-auto my-5 border-2 p-2 bg-base-200">
        <button className=" bg-slate-700 text-white  px-3 py-1 ">
          Unlock Your Future
        </button>

        <Marquee
          pauseOnHover
          speed={50}
          gradient={false}
          className=" text-gray-800"
        >
          🌟 Are you at a crossroads in your career or education? Struggling to
          find clarity in the vast world of opportunities? Don't let confusion
          hold you back! Career counseling is your roadmap to success, helping
          you identify your strengths, passions, and the perfect path for your
          unique journey. Whether you're a student exploring your future, a
          professional looking to grow, or someone ready to switch gears and
          follow your dreams, expert guidance can make all the difference. Your
          potential is limitless, and the right advice can unlock doors you
          never thought possible. Take the first step toward a brighter, more
          fulfilling future today! 🚀
        </Marquee>
      </div>

      <div className="carousel w-full mb-10">
        <div id="item1" className="carousel-item w-full h-[550px]">
          <img
            src="https://i.ibb.co.com/JBz4LJ6/career1.png"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co.com/X7GCG0N/carr.png"
            className="w-full h-[550px]"
          />
        </div>
        <div id="item3" className="carousel-item w-full  h-[550px]">
          <img
            src="https://i.ibb.co.com/rG3S25c/Career-Counselling-2.png"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co.com/jk8yrm4/career-guidance-slide1.png"
            className="w-full h-[550px]"
          />
        </div>
      </div>
      <div className="lg:hidden flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
