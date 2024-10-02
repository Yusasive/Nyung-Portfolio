import React from "react";

type BlogPost = {
  id: number;
  title: string;
  description: string;
  paragraphTwo: string;
  image: string;
  link: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title:
      "Teaching Future Designers: The Equilibrium Of User Experience Design and Education",
    description:
      "In the rapidly evolving field of UX design, the intersection between design and education is becoming more crucial than ever. As the demand for user-centered solutions grows across industries, so does the need for skilled UX professionals who can create intuitive, accessible, and impactful experiences. This increasing demand puts educators and mentors uniquely positioned to shape the next generation of designers, ensuring they have the tools, mindset, and skills to thrive in this dynamic field.",
    paragraphTwo:
      "Having been both a UX designer and a tutor, I’ve had the privilege of experiencing the dual role of a practitioner and an educator. Teaching UX design offers its own challenges and rewards, and how we approach education in this field is integral to how future designers will approach their craft. In this blog post, I’ll explore the equilibrium of UX design and education, the key principles that inform my teaching, and how I incorporate UX methodologies into the learning process...",
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1727855030/Image_h9oznv.png",
    link: "https://www.linkedin.com/pulse/teaching-future-designers-equilibrium-user-experience-abdulsalam--s7bzf",
  },
];

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const BlogPosts: React.FC = () => {
  return (
    <div className="grid gap-6 px-6 pb-6 pt-14 lg:px-[60px] lg:pb-[50px] lg:pt-16 md:grid-cols-1 lg:grid-cols-1">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-lg shadow-md flex flex-col lg:flex-row overflow-hidden">
          <div className="lg:w-[45%] p-4">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="p-4 lg:w-[55%]">
            <h2 className="text-lg lg:text-[32px] text-[#494640] font-inter text-justify font-bold mb-2">
              {post.title}
            </h2>

            <p className="text-[#7B7770] text-base lg:text-xl font-lato font-normal text-justify mb-5">
              {truncateText(post.description, 460)}
            </p>

            <p className="text-[#7B7770] text-base lg:text-xl font-lato font-normal text-justify mb-5">
              {truncateText(post.paragraphTwo, 460)}
            </p>

            <a
              href={post.link}
              className="text-[#7B7770] text-base lg:text-xl font-lato font-bold text-justify mb-5 underline">
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
