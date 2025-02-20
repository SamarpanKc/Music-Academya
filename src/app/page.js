"use client"
import Image from "next/image";

//Components
import HeroSection from "./components/herosec";
import Course from "./course/page";
import SamllCard from "./components/smallcard";

// images
import Singing from "./images/singingman.webp";
import Guitarist from "./images/guitarist.jpg"
import Pianoist from "./images/pianoist.jpg"
import User1 from "./images/test1.jpg"
import User2 from "./images/test2.jpg"


//icons
import { faPersonChalkboard, faUserClock, faBuildingUser, faUserGroup, faStar, faMedal } from "@fortawesome/free-solid-svg-icons";
import Testimonial from "./components/testimonial";


export default function Home() {

  return (
    <>
      <HeroSection />
      <div id="courses" className="courses h-full max-w-full mx-auto flex flex-col px-6 lg:px-36 gap-8">
        <h1 className="title text-3xl md:text -start font-kanit font-semibold underline">
          Courses
        </h1>
        <div className="card flex flex-wrap gap-12 mb-24 justify-around select-none">
          <Course />
        </div>
      </div>
      <div id="features" className="features flex flex-col px-6 lg:px-32 gap-8">
        <h1 className="title text-3xl md:text-start font-kanit font-semibold underline">
          Features
        </h1>
        <div className="points flex flex-wrap justify-center gap-6 mb-24 select-none">
          <SamllCard icons={faPersonChalkboard} featureName= "Experienced instructors"  description={"Learn from seasoned professionals with years of expertise in their respective fields, ensuring top-notch education and guidance tailored to your needs."} />
          <SamllCard icons={faUserClock} featureName= "Flexible class schedules" description={"Choose a schedule that works best for you with our variety of class timings, making it easier to balance learning with your busy lifestyle."} />
          <SamllCard icons={faBuildingUser} featureName= "State-of-the-art facilities" description={"Train and learn in modern facilities equipped with advanced technology and tools to enhance your learning experience."} />
          <SamllCard icons={faUserGroup} featureName= "Individual & group lessons" description={"Whether you prefer one-on-one mentoring or the collaborative energy of group classes, we offer both options to cater to your learning style."} />
          <SamllCard icons={faStar} featureName= "Performance opportunities" description={"Showcase your skills in live performances and events, gaining invaluable real-world experience and building your confidence."} />
          <SamllCard icons={faMedal} featureName= "Rewards Certificate" description={"Receive an official certificate upon course completion, recognizing your achievements and enhancing your professional profile."} />
        </div>
      </div>
      <div className="testimonials flex flex-col px-4 md:px-36 gap-8 mb-24">
      <h1 className="title text-3xl md:text-start font-kanit font-semibold underline">
      Testimonials
        </h1>
        <div className="cards flex flex-col md:flex-row p-4 justify-around gap-6 md:mb-24 select-none">
          <Testimonial imageSrc={User1} Name={"Roshni Rajabashi"} comment={"Joining Harmony Music Academy was a life-changing decision for me. Before enrolling, singing was just a hobby I kept to myself. Thanks to the incredible mentors, I was able to refine my skills, understand the art of performance, and even produce and release my very own song! The journey from learning to sing to becoming a recording artist has been truly magical, and it wouldn't have been possible without Harmony Music Academy."} icons={faStar} />
          <Testimonial imageSrc={User2} Name={"Ganesh Thapa"} comment={"I always dreamed of playing the guitar, but I never imagined that one day I’d be composing and releasing my own music. The instructors at Harmony are not just talented but also incredibly supportive. They taught me everything from the basics of guitar playing to advanced techniques and songwriting. With their guidance, I gained the confidence to create, perform, and even produce my own song."} icons={faStar} />
        </div>
      </div>
    </>
  );
}
