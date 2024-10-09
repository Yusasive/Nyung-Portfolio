import React from 'react'
import { useLocation } from "react-router-dom";
const Footer = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
  return (
    <div className={`${isHomePage ? "bg-[#91C2F2]" : "bg-white"} place-content-center h-[50px]`}>
      <p className='text-base lg:text-2xl text-[#1E1B16] text-center font-bold font-roboto-serif'>Copyright Abdulsalam Ibrahim Adisa 2024</p>
    </div>
  )
}

export default Footer;
