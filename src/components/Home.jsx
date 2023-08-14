import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full flex-col px-4 lg:flex-row">
        <div className="flex flex-col justify-center mt-10 py-10 h-full">
          <h2 className="text-4xl font-bold text-white"> 
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Student at College of Engineerg,Trivandrum
          <br></br>Learning Initiatives Intern at TinkerHub Foundation</p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-ful py-4 mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
