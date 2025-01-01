import Image from "next/image";
import HeroSection from "./components/herosec";
import Course from "./components/courses";
import SamllCard from "./components/smallcard";

export default function Home() {
  let details ={
    Courses:[{
    courseName: "Singing Lessons",
    description: "A course for your vocals and improve your singing abilities.",
    "duration": "4 weeks",
    price: "NPR 12,999",
    image: "./images/singingman.webp",}],
    Features:[{
      featureName:"Experienced instructors",
    }]

  }
  return (
    <>
      <HeroSection />
      <div className="courses h-full mx-auto flex flex-col px-36 gap-8">
        <h1 className="title text-3xl font-kanit font-semibold underline">
          Courses
        </h1>
        <div className="card flex flex-wrap gap-12 mb-24 justify-around ">
          <Course courseName="Guitar Lessons" description="An introductory course for those new to playing the guitar." price="NPR 9,999" image="./images/singingman.webp" />
          <Course courseName="Singing Course" description="A course for your vocals and improve your singing abilities." price="NPR 12,999" />
          <Course courseName="Piano Techniques" description="A course designed for experienced pianists looking to refine their skills." price="NPR 15,999" />
        </div>
      </div>
      <div className="features flex flex-col px-36 gap-8">
        <h1 className="title text-3xl font-kanit font-semibold underline">
          Features
        </h1>
        <div className="points flex flex-wrap justify-center gap-6 mb-24">
          <SamllCard featureName= "Experienced instructors" />
          <SamllCard featureName= "Flexible class schedules" />
          <SamllCard featureName= "State-of-the-art facilities" />
          <SamllCard featureName= "Individual & group lessons" />
          <SamllCard featureName= "Performance opportunities" />
          <SamllCard featureName= "Flexible class schedules" />
          
        </div>
      </div>
    </>
  );
}
