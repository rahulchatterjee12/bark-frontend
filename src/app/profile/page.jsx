import React, { Suspense } from "react";
import Profile from "@/components/profile/Profile";

const page = () => {
  return (
    <Suspense fallback={<div>Loading profile...</div>}>
      <Profile />
    </Suspense>
  );
};

export default page;
