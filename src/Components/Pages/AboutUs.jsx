import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div className="mx-auto w-10/12">
        <Helmet>
            <title>About Us</title>
        </Helmet>
      <div className="my-5">
        <h2 className="font-bold text-3xl my-4">About Us</h2>
        <p>
          Welcome to GoalPath, your trusted partner in finding the perfect
          career guidance, personal growth, and learning opportunities. At
          GoalPath, we are dedicated to helping you unlock your potential and
          achieve your career goals through insightful counseling, personalized
          advice, and expert-led services. Our mission is simple: to empower
          individuals by providing tailored career counseling that fits their
          unique skills, interests, and ambitions. Whether you are just starting
          your professional journey or looking to make a career transition, our
          expert counselors are here to guide you every step of the way.
        </p>
      </div>
      <div>
        <h2 className="font-bold text-3xl my-4">What We Do</h2>
        <p>
          At GoalPath, we offer a range of services designed to assist you in
          making informed career choices. Our offerings include:
          <ul>
            <li>
              Personalized Career Counseling: One-on-one sessions to help you
              discover your strengths, interests, and career path.
            </li>
            <li>
              Skill Development: Practical advice on how to build and enhance
              the skills necessary for the career you desire.
            </li>
            <li>
              Industry Insights: Information about various fields and job roles
              to help you navigate the evolving job market.
            </li>
            <li>
              Job Search Support: Resume building, interview preparation, and
              strategies to secure your dream job.
            </li>
            <li>
              Career Transition Assistance: For those looking to switch
              industries, we offer guidance on how to make a smooth and
              successful transition.
            </li>
          </ul>
        </p>
      </div>
      <div className="my-5">
        <h2 className="font-bold text-3xl my-4">Our Vision</h2>
        <p>
          Our vision is to become a leading resource for career counseling,
          empowering individuals to make confident decisions about their future.
          We believe that everyone has the potential to succeed, and with the
          right guidance, anyone can find a career path that aligns with their
          passions and talents.
        </p>
      </div>
      <div className="my-5">
        <h2 className="font-bold text-3xl my-4">Our Values</h2>
        <p>
          <ul>
            <li>
              Integrity: We provide honest, unbiased advice to help you make the
              best decisions for your future.
            </li>
            <li>
              Expertise: Our team of career counselors is highly trained and
              dedicated to providing expert guidance based on current market
              trends and personal insights.
            </li>
            <li>
              Empathy: We understand the challenges that come with career
              planning, and we are here to offer support with compassion and
              understanding.
            </li>
            <li>
              Growth: We believe in continuous learning and strive to empower
              our clients by providing the tools they need to succeed in their
              careers.
            </li>
          </ul>
        </p>
      </div>
      <div className="my-5">
        <h2 className="font-bold text-3xl my-4">Why Choose Us?</h2>
        <p>
          <ul>
            <li>
              Personalized Approach: We take the time to understand your unique
              needs and craft solutions that fit you best.
            </li>
            <li>
              Expert Counselors: Our team consists of experienced professionals
              who are passionate about helping you achieve your career goals.
            </li>
            <li>
              Proven Track Record: We have successfully helped numerous clients
              find fulfilling careers and make significant professional
              advancements.
            </li>
            <li>
              Holistic Support: From self-assessment to job placement, we offer
              comprehensive support for every stage of your career journey.
            </li>
          </ul>
        </p>
      </div>
      <p>
        At GoalPath, we are committed to helping you find your ideal career and
        reach your fullest potential. We look forward to partnering with you and
        helping you take the next step toward a successful and fulfilling
        future.
      </p>
    </div>
  );
};

export default AboutUs;
