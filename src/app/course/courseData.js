import Singing from "@/app/images/singingman.webp";
import Guitar from "@/app/images/guitarist.jpg";
import Piano from "@/app/images/pianoist.jpg";

const courses = [
  {
    id: "1",
    courseName: "Singing Masterclass",
    description:
      "Refine your skills and build confidence in singing. This course is designed to help students explore and develop their vocal abilities.",
    duration: "8 weeks",
    classes: "Twice a week (1.5 hours per session)",
    sessions: "Weekly individual performance practice",
    price: "NRP 12,999",
    imageSrc: Singing,
    learn: [
      "Fundamentals of Singing",
      "Voice Training & Control",
      "Music Theory for Singers",
      "Performance Skills",
      "Advanced Techniques",
      "Recording Basics",
    ],
  },
  {
    id: "2",
    courseName: "Guitar Lessons",
    description: "Master the art of guitar playing. Learn to play your favorite songs and develop your own unique style.",
    duration: "6 weeks",
    classes: "Three times a week (1 hour per session)",
    sessions: "Weekly jam sessions",
    price: "NRP 8,999",
    imageSrc: Guitar,
    learn: [
      "Chords & Strumming",
      "Music Theory",
      "Fingerstyle Techniques",
      "Soloing",
    ],
  },
  {
    id: "3",
    courseName: "Piano Masterclass",
    description: "Unlock your potential as a pianist. Develop your skills in playing classical, jazz, and contemporary music.",
    duration: "10 weeks",
    classes: "Once a week (2 hours per session)",
    sessions: "Weekly recitals",
    price: "NRP 14,999",
    imageSrc: Piano,
    learn: [
      "Piano Basics",
      "Scales & Arpeggios",
      "Chord Progressions",
      "Improvisation",
      "Composition",
    ],
  }
];

export default courses;