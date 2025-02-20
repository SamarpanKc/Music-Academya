Okay, let's break down how to connect your course listing page (where you display course cards) to the detailed course page and dynamically populate the details based on which course was clicked.

**1. Understanding the Goal**

*   **Dynamic Routing:**  You're using Next.js, which supports dynamic routes (like `/course/[id]`).  This means the `[id]` part of the URL will change depending on the course you want to view.
*   **Data Fetching:** You need to retrieve the correct course data based on the `id` from the URL.
*   **Component Rendering:**  You'll pass that course data to your `CourseDetails` component to display it.

**2. Changes to `course/page.jsx` (Course Listing)**

The key change here is to make sure the `Link` component sends the correct `id` to the details page.

```javascript
// course/page.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import courses from "./courseData";

const Course = ({ courseName, description, duration, price, imageSrc, id }) => { // Added id prop
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="card w-80 h-auto bg-white border-solid border-2 border-yellow-50 rounded-xl flex flex-col justify-between"
      >
        <motion.div className="card-image flex flex-col justify-center items-center">
          <Image
            className="mt-4 rounded-2xl md:w-72"
            src={imageSrc}
            alt={courseName}
            width={250}
            height={250}
          />
        </motion.div>
        <div className="Title mx-5 my-3">
          <h1 className="text-2xl font-bold text-yellow-950">{courseName}</h1>
          <p className="text-gray-800 leading-5">{description}</p>
        </div>

        <div className="price flex justify-between   items-center mx-5">
          <p className="text-yellow-950 font-inter">{duration}</p>
          <h1 className="text-yellow-950 font-inter font-semibold">{price}</h1>
        </div>

        <div className="buttons flex justify-between items-center m-4">
          {/* Use the course id in the link */}
          <Link href={`/course/${id}`}>  
            <motion.button
              whileHover={{
                opacity: 0.7,
              }}
              className="border-solid border-2 border-yellow-900 text-yellow-950 font-inter font-bold md:py-1 md:px-4 px-1 rounded-lg"
            >
              Details
            </motion.button>
          </Link>
          <Link href={"../signuppage"}>
            <motion.button
              whileHover={{
                color: "#3e150a",
                backgroundColor: "transparent",
                border: "2px solid #6d2c1a",
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-yellow-600 text-yellow-50 font-inter font-bold py-1 px-6 md:px-12 rounded-lg flex items-center gap-2"
            >
              Enroll Now
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

const CoursesPage = () => {
  return (
    <div>
      {courses.map((course) => (
        <Course
          key={course.id}
          id={course.id} // Pass the id as a prop
          courseName={course.courseName}
          description={course.description}
          duration={course.duration}
          price={course.price}
          imageSrc={course.imageSrc}
        />
      ))}
    </div>
  );
};

export default CoursesPage; // Renamed component to CoursesPage for clarity
```

**Important Changes in `course/page.jsx`:**

*   **Added `id` Prop to `Course` Component:**  We now pass the `id` of each course as a prop to the `Course` component.
*   **Dynamic Link:**  The `Link` now uses template literals (backticks) to create the dynamic URL:  ``/course/${id}``
*   **Mapping:** The `courses` array needs to be rendered using `.map()` function.

**3. Changes to `course/[id]/page.jsx` (Course Details Page)**

```javascript
// course/[id]/page.jsx
"use client";
import Image from "next/image";
import Singing from "@/app/images/singingman.webp";
import courses from "../courseData";
import { useParams } from 'next/navigation'; // Import useParams

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
        className="details w-full h-screen px-28 py-6 mb-20 flex gap-4 "
      >
        <div className="right flex flex-col gap-8 font-inter">
          <div className="top">
            <h1 className="text-4xl underline font-bold font-kanit text-yellow-50">
              {course.courseName}
            </h1>
            <p className="mt-2 leading-5">
              {course.description}
            </p>
          </div>
          <div className="details flex flex-col gap-6">
            <div className="1 ">
              <h1 className="text-2xl font-semibold">Course Schedule</h1>
              <div className="list">
                <h1 className="font-semibold">
                  Duration:{" "}
                  <span className="font-medium text-yellow-200">{course.duration}</span>
                </h1>
                <h1 className="font-semibold">
                  Classes:{" "}
                  <span className="font-medium text-yellow-200">
                    {course.classes}
                  </span>
                </h1>
                <h1 className="font-semibold">
                  Practical Sessions:{" "}
                  <span className="font-medium text-yellow-200">
                    {course.sessions}
                  </span>
                </h1>
              </div>
            </div>
            <div className="2 ">
              <h1 className="text-2xl font-semibold">What You'll Learn</h1>
              <div className="list">
                <ul className="grid grid-cols-2 list-disc  list-inside">
                  {course.learn.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
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
            src={course.imageSrc}
            width={900}
            height={500}
          />
          <div className="last flex items-center justify-around">
            <h1 className="text-white font-bold text-center">
              {course.price}
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
```

**Key Changes in `course/[id]/page.jsx`:**

*   **`useParams` Hook:**  We import and use `useParams` from `next/navigation`. This hook gives you access to the dynamic segments of the URL (in this case, the `id`).
*   **Data Retrieval:** We use `courses.find((c) => c.id === id)` to find the course object in your `courses` array that matches the `id` from the URL.  **Important:**  Make sure the `id` in your `courseData.js` is a *string* to match the string value you get from `useParams()`.
*   **Error Handling:**  We added a check for `if (!course)` to handle the case where the `id` in the URL doesn't match any of your course IDs.  This prevents errors.  You could customize the error message or redirect the user.
*   **Dynamic Data Rendering:**  We replaced hardcoded values in the `CourseDetails` component with data from the `course` object (e.g., `{course.courseName}`, `{course.description}`).  I've also updated the Image `src` to use `course.imageSrc`.

**4. Changes to `courseData.js`:**
Nothing much to change here, but here is the complete example again:

```javascript
const courses = [
  {
    id: "1",
    courseName: "Singing Masterclass",
    description:
      "Refine your skills and build confidence in singing. This course is designed to help students explore and develop their vocal abilities, regardless of their starting point. Whether you’re a beginner or an intermediate vocalist, this program will refine your skills and build your confidence in singing.",
    duration: "8 weeks",
    classes: "Twice a week (1.5 hours per session)",
    sessions: "Weekly individual performance practice",
    price: "NRP 12999",
    imageSrc: "/images/singingman.webp",
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
    description: "Master the art of guitar playing.",
    duration: "6 weeks",
    classes: "Three times a week (1 hour per session)",
    sessions: "Weekly jam sessions",
    price: "NRP 8999",
    imageSrc: "/images/guitar.webp",
    learn: [
      "Chords & Strumming",
      "Music Theory",
      "Fingerstyle Techniques",
      "Soloing",
    ],
  },
];

export default courses;
```

**How to Run This**

1.  Make sure you have Next.js installed and set up correctly.
2.  Create the `course` folder in your `pages` directory (or `app` if you're using the app router).
3.  Create the `[id]` folder inside `course`.
4.  Create the `page.jsx` files in `course` and `course/[id]`.
5.  Copy the code from above into the appropriate files.
6.  Run `npm run dev` (or `yarn dev`, or `pnpm dev`) to start your Next.js development server.
7.  Navigate to your course listing page (e.g., `http://localhost:3000/course`).
8.  Click the "Details" button on a course card. You should be taken to the details page, and the information should be specific to the course you clicked.

**Important Notes and Best Practices**

*   **Error Handling:**  The `if (!course)` check is *essential*. Always handle the case where the data might not be found (e.g., a user enters an invalid ID in the URL).
*   **Data Fetching on the Server:** For more complex applications, you might want to fetch the course data from an API or database *on the server-side* using `getServerSideProps` (if you're using the `pages` directory) or a server action (if you're using the `app` directory). This improves performance and security.  But for this simple example, fetching from a local `courseData.js` is fine.
*   **Type Safety:**  Consider using TypeScript to add type safety to your code.  This will help you catch errors earlier and make your code more maintainable.
*   **Component Structure:**  As your application grows, consider breaking down your components into smaller, reusable pieces.

Let me know if you have any other questions. Good luck!
