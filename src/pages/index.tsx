import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import people from "../assets/people.gif";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vikas Thakur — FrontEnd Developer</title>
      </Head>
      <main>
        <header>
          <div className=" cursor-default   my-28   px-5    ">
            <h1 className="  text-[1.3rem] sm:text-[4rem] font-poppins     text-[#dedede]  font-medium    text-center  mx-3  sm:mx-28 leading-relaxed">
              Love building websites that will make your users say
              <span className="text-[#14D87A] font-bold   font-poppins ml-2 ">
                &#39;Wow&#39;
              </span>
            </h1>
            <div className="  flex items-center justify-center  ">
              <Image src={people} alt="loading..." />
            </div>
          </div>
        </header>
      </main>
    </>
  );
};
export default HomePage;
