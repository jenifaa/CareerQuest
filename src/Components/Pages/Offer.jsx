import icon1 from "../../assets/25-percent.png";
import icon2 from "../../assets/10-percent.png";
import icon3 from "../../assets/sale.png";
import icon4 from "../../assets/coupon.png";
import icon5 from "../../assets/discount (1).png";
import icon6 from "../../assets/discount.png";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Offer = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto w-10/12">
        <Helmet>
            <title>CareerQuery | Offers</title>
        </Helmet>
      <div className="text-center my-5">
        <h1 className="text-5xl font-bold my-4 flex items-center justify-center">
          Exclusive Offers <img className="w-16 ml-3" src={icon4} alt="" />
        </h1>
        <p className="font text-xl mb-16">
          Unlock Amazing Discounts & Deals Just for You!
        </p>{" "}
      </div>
      <hr />
      <div className="grid md:grid-cols-10 my-5 items-center mt-16">
        <div className="md:col-span-4 text-3xl font-bold">
          Offer's for TeenAge Students
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="md:col-span-6 md:flex gap-5"
        >
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title  font text-green-700">
                <img className="w-16" src={icon1} alt="" />
                Unlock 50% Off: Your Exclusive Discount Awaits!
              </h2>
              <p className="text-xl font font-bold text-red-700 my-3">
                (For first 100 lucky person’s)
              </p>
              <div className="card-actions justify-start">
                <Link to="/cards" className="btn bg-green-700 text-white">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title  font text-green-700">
                <img className="w-16" src={icon3} alt="" />
                Unlock 25% Off: Your Exclusive Discount Awaits!
              </h2>
              <p className="text-xl font font-bold text-red-700 my-3">
                (For first 20 lucky person’s)
              </p>
              <div className="card-actions justify-start">
                <Link to="/cards" className="btn bg-green-700 text-white">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-10 my-5 items-center">
        <div className="md:col-span-4 text-3xl font-bold">
          Offer's for College Students
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="md:col-span-6 md:flex gap-5"
        >
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title  font text-green-700">
                <img className="w-16" src={icon5} alt="" />
                Unlock 15% Off: Your Exclusive Discount Awaits!
              </h2>
              <p className="text-xl font font-bold text-red-700 my-3">
                (For first 100 lucky person’s)
              </p>
              <div className="card-actions justify-start">
                <Link to="/cards" className="btn bg-green-700 text-white">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title  font text-green-700">
                <img className="w-16" src={icon6} alt="" />
                Unlock 30% Off: Your Exclusive Discount Awaits!
              </h2>
              <p className="text-xl font font-bold text-red-700 my-3">
                (For first 20 lucky person’s)
              </p>
              <div className="card-actions justify-start">
                <Link to="/cards" className="btn bg-green-700 text-white">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-10 my-5 items-center">
        <div className="md:col-span-4 text-3xl font-bold">
          Offer's for Job Candidates
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="md:col-span-6 md:flex gap-5"
        >
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title  font text-green-700">
                <img className="w-16" src={icon5} alt="" />
                Unlock 10% Off: Your Exclusive Discount Awaits!
              </h2>
              <p className="text-xl font font-bold text-red-700 my-3">
                (For first 100 lucky person’s)
              </p>
              <div className="card-actions justify-start">
                <Link to="/cards" className="btn bg-green-700 text-white">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title  font text-green-700">
                <img className="w-16" src={icon1} alt="" />
                Unlock 25% Off: Your Exclusive Discount Awaits!
              </h2>
              <p className="text-xl font font-bold text-red-700 my-3">
                (For first 20 lucky person’s)
              </p>
              <div className="card-actions justify-start">
                <Link to="/cards" className="btn bg-green-700 text-white">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-10 items-center">
        <div className="md:col-span-4 text-3xl font-bold">
          Offer's for Generals
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="md:col-span-6 md:flex gap-5"
        >
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title  font text-green-700">
                <img className="w-16" src={icon2} alt="" />
                Unlock 10% Off: Your Exclusive Discount Awaits!
              </h2>
              <p className="text-xl font font-bold text-red-700 my-3">
                (For first 100 lucky person’s)
              </p>
              <div className="card-actions justify-start">
                <Link to="/cards" className="btn bg-green-700 text-white">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title  font text-green-700">
                <img className="w-16" src={icon5} alt="" />
                Unlock 15% Off: Your Exclusive Discount Awaits!
              </h2>
              <p className="text-xl font font-bold text-red-700 my-3">
                (For first 20 lucky person’s)
              </p>
              <div className="card-actions justify-start">
                <Link to="/cards" className="btn bg-green-700 text-white">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
