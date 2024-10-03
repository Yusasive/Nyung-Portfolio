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
      "Abdulsalam Ibrahim Adisa is a wonderful user experience designer who puts his client front and center of his design decisions, it was very wonderful working with him on a human resource website which we had very little time to work on, he showed his credibility is as important to him as his skills, and he was able to come up with a wonderful design, despite the rush and pressure due to time constraints.",
    image: "/path-to-image/deepak.jpg",
    role: "As a designer",
  },
  {
    id: 2,
    name: "Aishah Olaoti",
    title: "IDEAS Product Design Student",
    feedback:
      "The class was incredibly engaging and interactive, making the learning experience both enjoyable and insightful. I’m so glad I made the decision to shift my career focus from data analysis to product design, it’s been a rewarding change. I haven’t looked back since.",
    image: "/path-to-image/aishah.jpg",
    role: "As a tutor",
  },
  {
    id: 3,
    name: "Abdulaeez Tajudeen",
    title: "Managing Partner, Cypherdevs Technology",
    feedback:
      "I want to personally express my appreciation for your invaluable contribution to Cypherdevs. You have been a fantastic addition to the team, and your efforts are greatly valued. You've consistently demonstrated professionalism, intelligence, and dedication, setting a high standard for excellence.",
    image: "/path-to-image/abdulaeez.jpg",
    role: "My personality",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
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
    <section className="lg:px-[60px] bg-[#91C2F2]">
      <div className="py-[50px]">
        <h2 className="text-[40px] text-[#000] font-roboto-serif font-bold  mb-2">
          Testimonials
        </h2>
        <p className="text-2xl text-[#494640] font-nunito font-bold">
          Here, you will find some of the great things my employers, co-workers,
          and students are saying about me.
        </p>
      </div>

      <Slider {...sliderSettings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4"> 
            <div className="flex flex-col items-center">
              <p className="text-xl text-[#fff] font-nunito font-bold mb-1">
                {testimonial.role}
              </p>
              <div className="bg-white rounded-2xl p-4 shadow-lg h- flex flex-col justify-between"> 
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl text-[#91C2F2] font-nunito font-bold text-center">
                  {testimonial.name}
                </h3>
                <p className="text-xl text-[#960202] font-bold font-nunito text-center mb-4">
                  {testimonial.title}
                </p>
                <p className="text-base text-[#000] font-nunito font-light text-justify overflow-y-auto">
                  {testimonial.feedback}
                </p> 
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialSlider;
