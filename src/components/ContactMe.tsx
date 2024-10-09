import React from "react";
import { useLocation } from "react-router-dom";

const contactMethods = [
  {
    icon: "https://res.cloudinary.com/ddxssowqb/image/upload/v1727848105/Whatsapp_mkoujb.png",
    title: "Whatsapp",
    linkText: "My Chat Inbox",
    url: "https://api.whatsapp.com/send/?phone=%2B2349090718281&text&type=phone_number&app_absent=0",
    bgColor: "bg-[#CCFFF3]",
  },
  {
    icon: "https://res.cloudinary.com/ddxssowqb/image/upload/v1727848111/Linkedin_wy4rzk.png",
    title: "LinkedIn",
    linkText: "My LinkedIn Profile",
    url: "https://www.linkedin.com/in/ibrahim-adisa-abdulsalam-88469819b",
    bgColor: "bg-[#DCE7F1]",
  },
  {
    icon: "https://res.cloudinary.com/ddxssowqb/image/upload/v1727848118/mail_txfsqh.png",
    title: "Email",
    linkText: "My Mail",
    url: "mailto:hyyungnim@gmail.com",
    bgColor: "bg-[#F5D1C5]",
  },
];

const ContactMe = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={`${isHomePage ? "bg-white" : "bg-[#91C2F2]"} py-12 px-4 lg:px-[60px] border-b-[1px] border-[#000]`}>
      <h1 className="text-[28px] lg:text-[40px] text-[#1E1B16] font-roboto-serif font-bold">
        Contact me
      </h1>
      <p className="text-base lg:text-lg text-[#494640] font-lato font-semibold mb-6 lg:mb-12">
        For project and mentorship inquiry
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-[70px]">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className={`w-full flex items-start p-6 rounded-lg shadow-sm shadow-[#1E1B16] ${method.bgColor} hover:shadow-lg transition-shadow duration-300`}>
            <div className="mr-4">
              <img src={method.icon} alt={method.title} className="w-12 h-12" />
            </div>
            <div>
              <h2 className="text-lg lg:text-xl text-[#1E1B16] font-lato font-bold">
                {method.title}
              </h2>
              <a
                href={method.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#494640] text-sm lg:text-base font-lato font-normal underline hover:text-[#72b4f7]">
                {method.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactMe;
