"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import courses from "../course/courseData";

export default function Form() {
  const { user } = useUser();

  if (!user) return <div>Not signed in</div>;

  return (
    <>
      <div className="form flex flex-col items-center justify-center font-semibold">
        <div>Hello {user?.firstName}!</div>
        <div>Reserve your spot for the <span className="italic underline text-yellow-400">Singing Masterclass</span> course</div>
      </div>
    </>
  );
}
