import LandingPage from "@/src/components/Module/Home/LandingPage";
import RecentPosts from "@/src/components/Module/Home/RecentPosts";
import React from "react";

const withCommonLayoutPage = () => {
  return (
    <div>
      <LandingPage />
      <RecentPosts />
    </div>
  );
};

export default withCommonLayoutPage;
