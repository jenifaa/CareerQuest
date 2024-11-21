import { Link } from "react-router-dom";

const Career = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl">
        <div className="lg:w-1/2 text-slate-800 space-y-5 px-6 lg:px-12">
          <h2 className="text-4xl font-bold">Explore Your Career Options</h2>
          <p className="text-gray-600 leading-relaxed">
            Discover paths that inspire you and lead to success. Whether you're
            a creative thinker, problem solver, or visionary leader, there's a
            career for you!
          </p>
          <button className="px-6 py-3 bg-white text-indigo-500 font-semibold rounded-md shadow-md hover:bg-indigo-100">
            <Link to="/cards">Start Your Journey</Link>
          </button>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 mt-8 lg:mt-0 lg:w-1/2"
        >
          <div
            className="relative p-8 bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg rounded-lg"
            style={{
              transform: "skewY(-3deg) skewX(-3deg)",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0% 100%)",
            }}
          >
            <h3 className="text-xl font-bold text-white mb-2">
              Creative Designer
            </h3>
            <p className="text-white">
              Bring ideas to life with design. Shape the visual world and
              inspire audiences with your creativity.
            </p>
          </div>

          <div
            className="relative p-8 bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg rounded-lg"
            style={{
              transform: "skewY(-3deg) skewX(-3deg)",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0% 100%)",
            }}
          >
            <h3 className="text-xl font-bold text-white mb-2">
              Data Scientist
            </h3>
            <p className="text-white">
              Dive into data, uncover insights, and make a meaningful impact by
              solving complex problems.
            </p>
          </div>

          <div
            className="relative p-8 bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg rounded-lg"
            style={{
              transform: "skewY(-3deg) skewX(-3deg)",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0% 100%)",
            }}
          >
            <h3 className="text-xl font-bold text-white mb-2">Entrepreneur</h3>
            <p className="text-white">
              Start your own venture and turn ideas into impactful businesses
              that drive change.
            </p>
          </div>

          <div
            className="relative p-8 bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg rounded-lg"
            style={{
              transform: "skewY(-3deg) skewX(-3deg)",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0% 100%)",
            }}
          >
            <h3 className="text-xl font-bold text-white mb-2">
              Software Engineer
            </h3>
            <p className="text-white">
              Build innovative solutions with cutting-edge technology. Shape the
              future of software development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
