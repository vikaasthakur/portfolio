import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" text-[#DEDEDE]   cursor-default flex flex-col  pt-28  px-7 py-8  font-poppins">
      <div className="flex flex-col  items-center gap-10 mb-36">
        <h3 className="  text-[1.5rem] sm:text-[2.5rem]  text-center font-normal tracking-wider">
          Want to talk about a project?
        </h3>
        <Link
          href="/info"
          className=" py-3 px-6  rounded-full bg-white  text-black  text-base hover:bg-slate-400"
        >
          Get in touch
        </Link>
      </div>
      <div className="flex justify-between  items-end ">
        <ul className="flex   flex-col sm:flex-row gap-4   items-start">
          <li className="bg-white text-black py-1.5 px-3 rounded-full cursor-pointer hover:bg-slate-400">
            <Link href="/work"> Work</Link>
          </li>
          <li className="bg-white text-black py-1.5 px-3 rounded-full cursor-pointer hover:bg-slate-400">
            <Link href="/">Thinking</Link>
          </li>
          <li className="bg-white text-black py-1.5 px-3 rounded-full cursor-pointer hover:bg-slate-400">
            <Link href="/">Studio</Link>
          </li>
        </ul>
        <ul className="flex  flex-col gap-5  sm:flex-row items-end">
          <li className=" cursor-pointer  group">
            <a
              href="https://instagram.com/vikasthakur_._"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
              <hr className="  bg-gray-400 group-hover:bg-gray-50 h-[.5px] border-none" />
            </a>
          </li>
          <li className=" cursor-pointer group">
            <a
              href="https://twitter.com/hey_vikaas"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
              <hr className="  bg-gray-400 group-hover:bg-gray-50 h-[.5px] border-none " />
            </a>
          </li>
          <li className=" cursor-pointer group">
            <a
              href="https://www.linkedin.com/in/thakur-vikas/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <hr className="  bg-gray-400 group-hover:bg-gray-50 h-[.5px] border-none" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
