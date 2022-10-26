import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  //console.log(course);
  const {
    id,
    image_url,
    title,
    total_view,
    rating,
    instructor,
    details,
    duration,
  } = course;
  console.log(instructor);
  return (
    <div className="mt-20">
      <div className=" card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">{course.title}</h2>
          {/* stats starts */}
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Ratings</div>
              <div className="stat-value text-primary">{rating.number}</div>
              <div className="stat-desc">Featured: {rating.badge}</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Views</div>
              <div className="stat-value text-secondary">{total_view}</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar online"></div>
              </div>
              <div className="stat-value">{instructor}</div>
              <div className="stat-title">Instructor For the Course</div>
            </div>
          </div>
          {/* stats ends */}
          <p className="mt-4">{details}</p>

          <div className="card-actions justify-center">
            <Link to={`/checkout/${id}`}>
              <button className="mt-4 btn btn-primary btn-wide">
                Get Premium Access
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ul className="steps steps-vertical">
        <li className="step step-primary">Register With Us</li>
        <li className="step step-primary">Learn</li>
        <li className="step">Practice</li>
        <li className="step">Become A Software Engineer</li>
      </ul>
    </div>
  );
};

export default CourseDetails;
