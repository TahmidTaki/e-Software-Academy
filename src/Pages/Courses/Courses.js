import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseCardComponent from "../CourseCardComponent/CourseCardComponent";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div>
      <h2>All Courses: {courses.length}</h2>

      <div class="flex mb-4">
        <div class="md:w-1/3 lg:w-1/4 bg-base-400 h-12">
          {courses.map((course) => (
            <Link key={course.id}>
              <li>
                {course.title}
                <div className="divider"></div>
              </li>
            </Link>
          ))}
        </div>
        <div className="md:w-1/2 lg:w-3/4 bg-base-500 h-12 mb-8">
          <div className="flex flex-wrap justify-center">
            {courses.map((course) => (
              <CourseCardComponent
                key={course.id}
                course={course}
              ></CourseCardComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
