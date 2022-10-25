import React from "react";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <div className="hero-overlay bg-opacity-75"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md bg-stone-500 p-10 rounded-md">
            <h1 className="mb-5 text-5xl font-bold">
              Become A Software Engineer With Us
            </h1>
            <p className="mb-5 text-lg font-semibold">
              Software engineers, often referred to as software developers,
              design innovative software for businesses and clients. From a
              personal banking app to a company’s project management workflow
              system, software engineers are behind many of the essential apps
              and programs that make business and daily life more efficient.
              Interested in changing your career to software
              development/engineering?
            </p>
            <button className="btn btn-accent">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
