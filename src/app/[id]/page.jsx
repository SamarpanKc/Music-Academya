import Image from "next/image";
import Singing from "../images/singingman.webp";

const CourseDetails = ({Course, Description, Duration, Time, Price}) => {
  return (
    <>
      <div
        id="details"
        className="details w-full h-screen px-28 py-6 mb-20 flex gap-4 "
      >
        <div className="right flex flex-col gap-8 font-inter">
          <div className="top">
            <h1 className="text-4xl underline font-bold font-kanit text-yellow-50">
              Singing Course
            </h1>
            <p className="mt-2 leading-5">
              This course is designed to help students explore and develop their
              vocal abilities, regardless of their starting point. Whether
              you’re a beginner or an intermediate vocalist, this program will
              refine your skills and build your confidence in singing.
            </p>
          </div>
          <div className="details flex flex-col gap-6">
            <div className="1 ">
              <h1 className="text-2xl font-semibold">Course Schedule</h1>
              <div className="list">
                <h1 className="font-semibold">
                  Duration:{" "}
                  <span className="font-medium text-yellow-200">8 weeks</span>
                </h1>
                <h1 className="font-semibold">
                  Classes:{" "}
                  <span className="font-medium text-yellow-200">
                    Twice a week (1.5 hours per session)
                  </span>
                </h1>
                <h1 className="font-semibold">
                  Practical Sessions:{" "}
                  <span className="font-medium text-yellow-200">
                    Weekly individual performance practice
                  </span>
                </h1>
              </div>
            </div>
            <div className="2 ">
              <h1 className="text-2xl font-semibold">What You'll Learn</h1>
              <div className="list">
                <ul className="grid grid-cols-2 list-disc  list-inside">
                  <li>Fundamentals of Singing</li>
                  <li className="text-yellow-200">Voice Training & Control</li>
                  <li>Music Theory for Singers</li>
                  <li className="text-yellow-200">Performance Skills</li>
                  <li>Advanced Techniques</li>
                  <li className="text-yellow-200">Recording Basics</li>
                </ul>
              </div>
            </div>
            <div className="3">
              <h1 className="text-2xl font-semibold">Join Now!</h1>
              <h1 className="">
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
            src={Singing}
            width={900}
          /><div className="last flex items-center justify-around">
                <h1 className="text-white font-bold text-center">
                  NRP 12999
                </h1>
                <button className="px-20 py-3 rounded-xl bg-white text-yellow-800 font-bold">
                  Enroll Now
                </button>
              </div>
        </div>
      </div>
    </>
  );
};
export default CourseDetails;
