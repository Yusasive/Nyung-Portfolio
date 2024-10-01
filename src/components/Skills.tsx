import React from "react";
import { motion } from "framer-motion"; 
const cardData = [
  {
    title: "UX Design",
    icon: "https://res.cloudinary.com/ddxssowqb/image/upload/v1727807100/download-removebg-preview_emzpup.png",
    bgColor: "bg-[#E4FFCC]",
  },
  {
    title: "UI Design",
    icon: "https://res.cloudinary.com/ddxssowqb/image/upload/v1727807110/Responsive_Design_x7htj1.png",
    bgColor: "bg-[#FCD9CA]",
  },
  {
    title: "User Research",
    icon: "https://res.cloudinary.com/ddxssowqb/image/upload/v1727807120/download__3_-removebg-preview_ggdz1c.png",
    bgColor: "bg-[#FFCCD2]",
  },
  {
    title: "UX Tutor",
    icon: "https://res.cloudinary.com/ddxssowqb/image/upload/v1727807128/hugeicons_mentoring_jm1cfz.png",
    bgColor: "bg-[#FAF5CB]",
  },
  {
    title: "Wireframe",
    icon: "https://res.cloudinary.com/ddxssowqb/image/upload/v1727807135/download__1_-removebg-preview_jw7d5m.png",
    bgColor: "bg-[#39E1EE]",
  },
  {
    title: "Prototype",
    icon: "https://res.cloudinary.com/ddxssowqb/image/upload/v1727807143/Screenshot_2022-10-22_110047-removebg-preview_njxk3m.png",
    bgColor: "bg-[#EAC9ED]",
  },
  {
    title: "Site Mapping",
    icon: "https://res.cloudinary.com/ddxssowqb/image/upload/v1727807150/download_1_dceoki.png",
    bgColor: "bg-[#FCD9CA]",
  },
  {
    title: "User Flow",
    icon: "https://res.cloudinary.com/ddxssowqb/image/upload/v1727807157/download_yvju1k.png",
    bgColor: "bg-[#FFCCD2]",
  },
  {
    title: "Team Management",
    icon: "https://res.cloudinary.com/ddxssowqb/image/upload/v1727807164/download_1_1_lddmx0.png",
    bgColor: "bg-[#E4FFCC]",
  },
  {
    title: "Strategizing",
    icon: "https://res.cloudinary.com/ddxssowqb/image/upload/v1727807172/download_3_d7gijq.png",
    bgColor: "bg-[#EAC9ED]",
  },
  {
    title: "Interpersonal Relationship",
    icon: "https://res.cloudinary.com/ddxssowqb/image/upload/v1727807180/download_4_br5gti.png",
    bgColor: "bg-[#FAF5CB]",
  },
  {
    title: "User Testing",
    icon: "https://res.cloudinary.com/ddxssowqb/image/upload/v1727807187/download_2_gqvtvc.png",
    bgColor: "bg-[#39E1EE]",
  },
];

const Skills = () => {
  return (
    <div className="bg-[#91C2F2] px-1 lg:px-6 pb-14">
      <div>
        <h1 className="font-bold font-roboto-serif text-[40px] text-[#33302A] py-14 pl-[36px]">
          My skills
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 justify-items-center items-center">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className={`${card.bgColor} p-7 rounded-lg shadow-lg shadow-[#00000066] text-center w-[300px] h-[300px] flex flex-col justify-between`}
            whileHover={{ scale: 1.1 }} 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={card.icon}
              alt={card.title}
              className="w-28 h-28 mx-auto mb-4 bg-[#fff] p-5 rounded-3xl"
            />
            <h3 className="text-2xl text-[#625E57] font-roboto-serif font-bold">
              {card.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
