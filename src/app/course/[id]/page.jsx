// course/[id]/page.jsx
"use client";
import Image from "next/image";
import courses from "../courseData";
import { useParams } from "next/navigation"; // Import useParams
import Link from "next/link";

const CourseDetails = () => {
  const { id } = useParams(); // Get the course id from the URL

  // Find the course in the data based on the id
  const course = courses.find((c) => c.id === id);

  // Handle the case where the course is not found
  if (!course) {
    return <div>Course not found</div>; // Or redirect, or display an error message
  }

  return (
    <>
      <div
        id="details"
        className="details w-full h-auto md:px-28 py-3 md:py-24 flex flex-col-reverse md:flex-row gap-6 justify-around items-center "
      >
        <div className="right flex flex-col gap-8 font-inter w-10/12">
          <div className="top">
            <h1 className="w-full text-2xl md:text-4xl underline font-bold font-kanit text-yellow-50">
              {course.courseName}
            </h1>
            <p className="mt-2 leading-5 text-justify text-sm md:text-base ">{course.description}</p>
          </div>
          <div className="details flex flex-col gap-6">
            <div className="1 ">
              <h1 className="text-xl md:text-2xl font-semibold">Course Schedule</h1>
              <div className="list text-sm md:text-base">
                <h1 className="font-semibold">
                  Duration:{" "}
                  <span className="font-medium text-yellow-200">
                    {course.duration}
                  </span>
                </h1>
                <h1 className="font-semibold">
                  Classes:{" "}
                  <span className="font-medium text-yellow-200">
                    {course.classes}
                  </span>
                </h1>
                <h1 className="font-semibold">
                  Practical Sessions:{" "}
                  <span className="font-medium text-yellow-200 ">
                    {course.sessions}
                  </span>
                </h1>
              </div>
            </div>
            <div className="2 ">
              <h1 className="text-xl md:text-2xl font-semibold">What You'll Learn</h1>
              <div className="list text-sm md:text-base">
                <ul className="grid md:grid-cols-2 list-disc  list-inside">
                  {course.learn.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="3">
              <h1 className="text-xl md:text-2xl font-semibold">Join Now!</h1>
              <h1 className="text-sm md:text-base">
                Turn your passion into performance.{" "}
                <span className="text-yellow-200">
                  Let’s make music together!
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="left flex flex-col gap-4 font-inter">
          <Image
            className="rounded-2xl"
            alt="singing"
            src={course.imageSrc}
            width={900}
            height={500}
          />
          <div className="last flex items-center justify-around">
            <h1 className="text-white font-bold text-center text-sm md:text-base">{course.price}</h1>
            <Link href= "/forum">
              <button className="px-10 md:px-20 py-3 rounded-xl bg-white text-yellow-800 font-bold text-sm md:text-base">
                Enroll Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
