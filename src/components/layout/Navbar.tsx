import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/Logo.svg";
import { useRouter } from "next/router";
import { HiOutlineX } from "react-icons/hi";
import Link from "next/link";

const Navbar = () => {
  const [showInfo, setShowInfo] = useState(false);
  const router = useRouter();

  return (
    <div className="flex justify-between   h-20  sticky  top-0   backdrop-blur z-50   items-center  px-4 sm:px-7 pt-7 font-poppins">
      <div className="  cursor-pointer  " onClick={() => router.push("/")}>
        <Image src={Logo} alt="ViKAS" height="65" />
      </div>
      <div className="flex items-center gap-5 justify-center">
        <span className=" py-1 px-4 bg-white rounded-full text-black font-poppins   cursor-pointer  text-base hover:bg-slate-200 sm:inline hidden leading-relaxed">
          Resume
        </span>
        <div className="  h-12  w-12 bg-white  font-poppins text-lg   rounded-full flex items-center justify-center cursor-pointer hover:scale-110 ">
          {router.pathname === "/" ? (
            <Link href="./info">i</Link>
          ) : (
            <HiOutlineX
              className=" h-6 w-6 text-black"
              onClick={() => {
                setShowInfo(!showInfo);
                router.push("/");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
