import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const CheckOutPage = () => {
  const course = useLoaderData();
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>Course Id: {course.id}</h2>
      <h2>
        User Name/ID:{user?.displayName} / {user?.uid}
      </h2>

      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${course.image_url})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="bg-gray-600 rounded-lg">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Congrats..</h1>
              <p className="mb-5">
                You have chosen our{" "}
                <span className="text-primary-focus text-xl">
                  {course.title}{" "}
                </span>{" "}
                course by {course.instructor} with {course.rating.number}{" "}
                <span className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                </span>
                ratings.
              </p>
              <input
                type="range"
                min="0"
                max="100"
                value="25"
                className="range"
                step="25"
              />
              <div className="w-full flex justify-between text-xs px-2">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
              </div>
              <p className="m-4 text-xl text-accent">
                This is just a first step of your journey. We wish you all the
                best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
