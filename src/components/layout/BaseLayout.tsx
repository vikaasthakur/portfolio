import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Navigation from "./Navigation";

const BaseLayout: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className=" bg-black">
      <Navbar />
      {children}
      <Navigation />
      <Footer />
    </div>
  );
};
export default BaseLayout;
