import React from "react";

const reasons = [
  {
    title: "I have great skill in field of user experience design",
    description:
      "I have worked on numerous products that excelled in the market, as I was able to create products that are equitable, useful, and usable to everyone I have worked for or worked with.",
  },
  {
    title: "I have great personal and professional relationships",
    description:
      "Everyone that has met me always attests to one thing about me, and that is the fact I know how to relate with people accordingly and always respect everyone's opinion.",
  },
  {
    title: "I provide great insights and assistance",
    description:
      "I don’t just design, I put myself in the position of users that will use the product I am designing, this makes it easy for me to provide great insight that makes my designs enjoyable to users.",
  },
  {
    title: "Hiring me will make your life easier",
    description:
      "Till the last day we will be spending together as employer and employee, you will have to worry not about anything when it comes to UX design, as I take charge and work twice as hard to get the best results.",
  },
];

const WhyHireMe = () => {
  return (
    <div className="px-4 lg:px-[60px] py-[50px]">
      <h2 className="text-2xl lg:text-[40px] text-[#000000] font-roboto-serif font-bold my-[50px]">
        Why you should hire me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => (
          <div key={index} className="border-l-4 border-[#6B9999] pl-4 my-4 lg:my-0">
            <h3 className="text-lg lg:text-2xl text-[#494640] font-bold font-nunito mb-2">{reason.title}</h3>
            <p className="text-base lg:text-xl text-[#7B7770] font-nunito font-normal">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyHireMe;
