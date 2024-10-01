import React from "react";
import NyungLogo from "../assets/images/Logo.png";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row py-[50px] px-4 lg:px-[60px]">
      <div className="lg:w-[63%] justify-center content-center space-y-6">
        <p className="font-lato text-lg lg:text-2xl font-normal text-justify text-[#625E57] self-stretch">
          Hi. I’m <b>Abdulsalam Ibrahim Adisa,</b> a user experience designer
          and UX design tutor, with experience in designing a well user-centered
          products, and over two years of tutoring UX design.
        </p>
        <p className="font-lato text-lg lg:text-2xl font-normal text-justify text-[#625E57] self-stretch">
          I am dedicated to providing great insights and helping my clients
          bring out their imaginations to life by carefully understanding their
          needs and frustrations, and using this information to inform my design
          decisions.
        </p>
      </div>
      <div className="justify-center content-center lg:w-[37%]">
        <img src={NyungLogo} alt="Nyung Logo" className="w-auto h-[396px]" />
      </div>
    </div>
  );
};

export default Hero;
