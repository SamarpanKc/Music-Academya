
'use clent';
import React from "react";
import { useUser } from "@clerk/nextjs";
import courses from "../course/courseData";

export default function Form({ courseId }) {
  const { user } = useUser();

  const course = courses.find((course) => course.id === courseId);
  const courseName = course ? course.courseName : "the course";

  if (!user) return <div>Not signed in</div>;

  return (
    <>
      <div className="form w-auto flex flex-col items-center justify-center font-semibold text-[clamp(1rem,2vw,1.6rem)] text-yellow-50">
        <div>Hello {user?.firstName}!</div>
        <div className="text-center">
          Reserve your spot for{" "}
          <span className="italic underline text-yellow-400">{courseName}</span>
        </div>
      </div>
    </>
  );
}
