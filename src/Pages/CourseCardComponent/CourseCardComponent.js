import React from "react";
import { FaStarHalfAlt, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCardComponent = ({ course }) => {
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
  return (
    <div className="m-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{rating.badge}</div>
          </h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              <FaStarHalfAlt className="mr-1" />
              {rating.number}
            </div>
            <div className="badge badge-outline">
              <FaRegEye className="mr-1" />
              {total_view}
            </div>
          </div>
          <Link to={`/courses/${id}`} className="btn btn-primary">
            Go to Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCardComponent;
