

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full mb-10">
        <div id="item1" className="carousel-item w-full h-[500px]">
          <img
            src="https://i.ibb.co.com/JBz4LJ6/career1.png"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
           src="https://i.ibb.co.com/X7GCG0N/carr.png"
           
            className="w-full h-[500px]"
          />
        </div>
        <div id="item3" className="carousel-item w-full  h-[500px]">
          <img
            src="https://i.ibb.co.com/rG3S25c/Career-Counselling-2.png"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co.com/jk8yrm4/career-guidance-slide1.png"
            className="w-full h-[500px]"
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
