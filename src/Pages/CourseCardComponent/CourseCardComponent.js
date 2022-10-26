import React from "react";

const CourseCardComponent = ({ course }) => {
  const {
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
            <div className="badge badge-outline">{rating.number}</div>
            <div className="badge badge-outline">{total_view}</div>
          </div>
          <button className="btn btn-primary">Go to Course</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCardComponent;
