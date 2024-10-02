import React from "react";
import { motion } from "framer-motion"; // Import motion
import NyungLogo from "../assets/images/Logo.png";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row pb-5 pt-16 lg:py-[50px] px-4 lg:px-[60px]">
      <motion.div
        className="lg:w-[63%] justify-center content-center space-y-6"
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }} 
      >
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
      </motion.div>
      <motion.div
        className="justify-center content-center lg:w-[37%]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }} 
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }} 
      >
        <img src={NyungLogo} alt="Nyung Logo" className="w-auto h-[396px]" />
      </motion.div>
    </div>
  );
};

export default Hero;
