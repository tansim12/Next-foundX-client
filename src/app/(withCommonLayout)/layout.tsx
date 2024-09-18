import React from "react";
import { Navbar } from "@/src/components/ui/navbar";
const withCommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {" "}
      <div>
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default withCommonLayout;
