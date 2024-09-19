import React, { ReactNode } from "react";

const homeLayout = ({
  children,
  recentPosts,
}: {
  children: ReactNode;
  recentPosts: ReactNode;
}) => {
  return (
    <>
      {children} {recentPosts}
    </>
  );
};

export default homeLayout;
