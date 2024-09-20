import React, { ReactNode } from "react";

const adminLayout = ({ children }: { children: ReactNode }) => {
  return <div>
    <p>Admin Layout or side bar</p>
    {children}</div>;
};

export default adminLayout;
