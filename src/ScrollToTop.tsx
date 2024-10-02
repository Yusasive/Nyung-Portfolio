import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0); 
    window.addEventListener("scroll", toggleVisibility); 

    return () => {
      window.removeEventListener("scroll", toggleVisibility); 
    };
  }, [pathname]);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-4 z-10 p-3 bg-blue-500 text-white rounded-full shadow-md transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
