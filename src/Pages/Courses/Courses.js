import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCardComponent from "../CourseCardComponent/CourseCardComponent";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <h2>All Courses: {courses.length}</h2>
      {courses.map((course) => (
        <CourseCardComponent
          key={course.id}
          course={course}
        ></CourseCardComponent>
      ))}
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            View in List Format
          </label>
        </div>

        {/* drawer  */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {courses.map((course) => (
              <li key={course.id}>
                <a>{course.title}</a>
                <div className="divider"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Courses;
