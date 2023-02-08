import React, { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";
import useScrollPosition from "@/hooks/useScrollPosition";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(true);
  const router = useRouter();
  const activeRoute = router.pathname;
  const scrollY = useScrollPosition();

  return (
    <div
      className={
        scrollY > 400 ? "  hidden" : "h-20  fixed  bottom-10   w-screen  "
      }
    >
      <div className="flex   justify-center items-center h-full">
        <div className="  bg-white   rounded-full    backdrop-blur-lg  bg-opacity-25  backdrop-filter    ">
          <div className="flex  items-center   p-3 hover:p-3.5">
            <ul className="flex items-center gap-2 ">
              <li
                className={
                  showMenu
                    ? "font-poppins  font-medium text-white  sm:text-base  text-sm cursor-default"
                    : "hidden"
                }
              >
                Show me:
              </li>
              <li
                className={
                  activeRoute === "/"
                    ? "bg-white text-black cursor-pointer font-poppins  sm:text-base  text-sm font-normal   rounded-full py-1 px-2.5 "
                    : "cursor-pointer font-poppins  sm:text-base  text-sm font-normal hover:text-white  text-gray-400 rounded-full py-1 px-2.5  "
                }
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <Link href="/">Everything</Link>
              </li>
            </ul>
            <ul className={showMenu ? "  hidden  " : "flex items-center "}>
              <li
                className={
                  activeRoute === "/work"
                    ? "bg-white text-black cursor-pointer font-poppins  sm:text-base  text-sm font-normal   rounded-full py-1 px-2.5 "
                    : "cursor-pointer font-poppins  sm:text-base  text-sm font-normal hover:text-white  text-gray-400 rounded-full py-1 px-2.5  "
                }
              >
                <Link href="/work">Work</Link>
              </li>
              <li className=" cursor-pointer font-poppins  sm:text-base  text-sm   font-normal hover:text-white  text-gray-400 rounded-full py-1 px-2.5 ">
                <Link href="/">Thinking</Link>
              </li>
              <li className=" cursor-pointer font-poppins  sm:text-base  text-sm font-normal hover:text-white  text-gray-400 rounded-full py-1 px-2.5 ">
                <Link href="/">Studio</Link>
              </li>
              <li
                className=" cursor-pointer font-poppins  text-white hover:text-gray-400  px-1.5 "
                onClick={() => {
                  setShowMenu(true);
                  router.push("/");
                }}
              >
                <HiOutlineX className=" h-4 w-4 " />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
