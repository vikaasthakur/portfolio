import { NextPage } from "next";
import React from "react";

const info: NextPage = () => {
  return (
    <div className="mx-12 sm:mx-40 my-20 cursor-default font-poppins">
      <h1 className="  text-[1.5rem] sm:text-[2.5rem]    font-medium  leading-relaxed  text-[#DEDEDE] font-poppins   ">
        Hey 🙋 I&#39;m Vikas. I build things that are a feast for the eyes and a
        joy to use
      </h1>
      <p className="text-[#646463]   text-2xl font-medium mt-5">Get in touch</p>

      <ul className="flex  flex-col gap-5    text-[#DEDEDE] text-xl   items-start font-light mt-10">
        <li className=" font-normal ">
          <a href="mailto:hellooo.vikas@gmail.com">
            Email : hellooo.vikas@gmail.com
          </a>
        </li>
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
  );
};

export default info;
