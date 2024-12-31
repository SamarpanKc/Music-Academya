import Image from "next/image";
import HeroSection from "./components/herosec";
import Course from "./components/courses";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="courses h-full mx-auto flex flex-col px-36 gap-8">
        <h1 className="title text-3xl font-kanit font-semibold underline">
          Courses
        </h1>
        <div className="card flex flex-wrap gap-12 mb-24 justify-around ">
          <Course />
          <Course />
          <Course />
        </div>
      </div>
    </>
  );
}
