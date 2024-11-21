import { useState } from "react";

const Question = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  const handleToggle1 = () => {
    setIsExpanded1(!isExpanded1);
  };
  const handleToggle2 = () => {
    setIsExpanded2(!isExpanded2);
  };
  const handleToggle3 = () => {
    setIsExpanded3(!isExpanded3);
  };
  return (
    <div>
      <div className="text-center text-4xl my-5 font-bold">Enrich Your <span className="font text-7xl text-[#E6533C]">K</span>nowledge</div>
      <p className="mb-5 text-sm text-gray-500 text-center">Unlock New Perspectives, Enhance Skills, and Foster Continuous Growth</p>
      <div className="w-11/12 mx-auto my-20 grid md:grid-cols-10 bg-base-200 p-10">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          className="text-5xl font-bold md:col-span-5"
        >
          Career Counseling FA<span className="text-[#E6533C]">Q</span>s
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          data-aos-easing="ease-in-out"
          className="md:col-span-5"
        >
          <p className="font-bold text-2xl my-2">What is career counseling?</p>
          <p className="text-gray-700">
            Career counseling is a professional service designed to help
            individuals make informed decisions about their career paths. It
            involves guidance and support from trained counselors to identify
            career options that align with a person’s interests, skills, values,
            personality, and long-term goals.
            {isExpanded && (
              <span>
                {" "}
                Through self-assessment tools like personality tests and skill
                evaluations, career counseling helps individuals understand
                their strengths, weaknesses, and aptitudes. It also explores
                various career opportunities, offering insights into industries,
                roles, and requirements. Career counseling aids in setting
                realistic goals and creating actionable plans, such as selecting
                the right educational programs or certifications.
              </span>
            )}
          </p>
          <button onClick={handleToggle} className="text-blue-500">
            {isExpanded ? "Read Less..." : "Read More..."}
          </button>
          <p className="font-bold text-2xl my-2">
            How can someone benefit from a career counselor?
          </p>
          <p className="text-gray-700">
            A career counselor can provide invaluable support by helping
            individuals navigate the complexities of career planning and
            development. They assist in identifying strengths, interests, and
            values through personalized assessments, enabling individuals to
            align their career choices with their unique attributes.
            {isExpanded1 && (
              <span>
                {" "}
                Career counselors offer insights into various industries and job
                roles, helping clients explore opportunities they may not have
                considered. They guide the development of actionable plans,
                whether it involves pursuing further education, acquiring new
                skills, or preparing for interviews and job applications.
              </span>
            )}
          </p>
          <button onClick={handleToggle1} className="text-blue-500">
            {isExpanded1 ? "Read Less..." : "Read More..."}
          </button>
          <p className="font-bold text-2xl my-2">
            What should I expect from a career counseling service?
          </p>
          <p className="text-gray-700">
            From a career counseling service, you can expect personalized
            guidance tailored to your unique career needs and goals. It
            typically begins with an in-depth self-assessment to evaluate your
            skills, interests, values, and personality traits, helping you gain
            clarity about your strengths and areas for improvement.
            {isExpanded2 && (
              <span>
                {" "}
                Career counselors provide insights into various industries and
                job opportunities, offering detailed information about roles,
                responsibilities, required qualifications, and potential growth
                paths. They assist in setting realistic career goals and
                creating actionable plans to achieve them, such as pursuing
                specific education, training, or certifications. Additionally,
                you can expect practical support with resume building, interview
                preparation, and job search strategies.
              </span>
            )}
          </p>
          <button onClick={handleToggle2} className="text-blue-500">
            {isExpanded2 ? "Read Less..." : "Read More..."}
          </button>
          <p className="font-bold text-2xl my-2">
            Why is career counseling important?
          </p>
          <p className="text-gray-700">
            Career counseling is important because it provides individuals with
            the guidance and clarity needed to make informed decisions about
            their professional paths. In a world with countless career options
            and rapidly changing job markets,
            {isExpanded3 && (
              <span>
                {" "}
                it helps people navigate these complexities by identifying
                opportunities that align with their skills, interests, values,
                and long-term goals. Career counseling enables self-awareness
                through assessments and expert advice, ensuring individuals
                choose careers that match their personality and strengths. It is
                particularly valuable during pivotal moments such as
                transitioning from education to work, changing careers, or
                overcoming workplace challenges.
              </span>
            )}
          </p>
          <button onClick={handleToggle3} className="text-blue-500">
            {isExpanded3 ? "Read Less..." : "Read More..."}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
