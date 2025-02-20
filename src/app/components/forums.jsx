import React from "react";
import { currentUser } from "@clerk/nextjs/server";

export default async function Page() {
  const user = await currentUser();

  if (!user) return <div>Not signed in</div>;

  return (
    <>
    <div className="form flex flex-col items-center justify-center">
      <div>Hello {user?.firstName}!</div>
      <div>This is form page for course</div>
    </div>
    </>
  );
}
