import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Home = () => {
  const { checkdata } = useContext(AuthContext);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/S34k10t/Business-SVG.png"
            className="max-w-sm rounded-lg shadow-2xl p-4"
            alt="Welcome,"
          />
          <div>
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
            <Link to="/register">
              <button className="btn btn-accent">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
