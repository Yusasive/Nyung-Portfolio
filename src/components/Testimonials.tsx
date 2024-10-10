import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Testimonial = {
  id: number;
  name: string;
  title: string;
  feedback: string;
  image: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Deepak Shelar Patil",
    title: "Founder, Unimind Cognition",
    feedback:
      "Abdulsalam Ibrahim Adisa is a wonderful user experience designer who puts his client front and center of his design decisions. It was very wonderful working with him on a human resource website which we had very little time to work on. He showed his credibility is as important to him as his skills, and he was able to come up with a wonderful design, despite the rush and pressure due to time constraints.",
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1728226216/Mask_group_7_nbayfb.png",
    role: "As a designer",
  },
  {
    id: 2,
    name: "Aishah Olaoti",
    title: "IDEAS Product Design Student",
    feedback:
      "The class was incredibly engaging and interactive, making the learning experience both enjoyable and insightful. I’m so glad I made the decision to shift my career focus from data analysis to product design. It’s been a rewarding change. I haven’t looked back since.",
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1728226399/Mask_group_7_1_eohg90.png",
    role: "As a tutor",
  },
  {
    id: 3,
    name: "Abdulaeez Tajudeen",
    title: "Managing Partner, Cypherdevs Technology",
    feedback:
      "I want to personally express my appreciation for your invaluable contribution to Cypherdevs. You have been a fantastic addition to the team, and your efforts are greatly valued. You've consistently demonstrated professionalism, intelligence, and dedication, setting a high standard for excellence.",
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1728226406/Mask_group_7_2_laalzg.png",
    role: "My personality",
  },
];
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-40px] lg:right-[-55px] cursor-pointer rounded-full"
      style={{ top: "50%", transform: "translateY(-50%)" }}
      onClick={onClick}>
      <svg
        className="w-[40px] lg:w-[50px] h-[40px] lg:h-[50px]"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="51"
        viewBox="0 0 50 51"
        fill="none">
        <circle cx="25" cy="25.5" r="25" fill="white" />
        <path
          d="M21 25.6562H29.3125M29.3125 25.6562L25.1562 21.5M29.3125 25.6562L25.1562 29.8125"
          stroke="#91AAF2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[-40px] lg:left-[-55px] cursor-pointer rounded-full"
      style={{ top: "50%", transform: "translateY(-50%)" }}
      onClick={onClick}>
      <svg
        className="w-[40px] lg:w-[50px] h-[40px] lg:h-[50px]"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="51"
        viewBox="0 0 50 51"
        fill="none">
        <circle cx="25" cy="25.5" r="25" fill="white" />
        <path
          d="M30 24.8125H20M20 24.8125L25 29.8125M20 24.8125L25 19.8125"
          stroke="#91C2F2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const TestimonialSlider: React.FC = () => {
  return (
    <section className="bg-[#91C2F2]">
      <div className="py-[50px] px-4 lg:px-[60px]">
        <h2 className="text-[40px] text-[#000] font-roboto-serif font-bold mb-2">
          Testimonials
        </h2>
        <p className="text-2xl text-[#494640] font-nunito font-bold text-justify">
          Here, you will find some of the great things my employers, co-workers,
          and students are saying about me.
        </p>
      </div>
      <div className="px-12 lg:px-[120px]">
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="py-4">
              <div className="flex flex-col items-center my-[50px] h-full">
                <p className="text-xl text-[#fff] font-nunito font-bold mb-[10px]">
                  {testimonial.role}
                </p>
                <div className="flex flex-col bg-white rounded-2xl shadow-lg min-h-[600px] lg:h-[508px] mx-1 justify-start">
                  <div className="flex justify-center mt-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover my-3"
                    />
                  </div>
                  <h3 className="text-xl text-[#91C2F2] font-nunito font-bold text-center mt-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-xl text-[#960202] font-bold font-nunito text-center mt-2">
                    {testimonial.title}
                  </p>
                  <p className="text-base text-[#000] font-nunito font-light text-justify px-4 pb-2 mt-2">
                    {testimonial.feedback}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
