import React from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "ulamaa.com",
    description:
      "A website where Muslims can find lectures, audios, books, and ask questions of their favorite scholars around the globe.",
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1727823479/Home_1_s6p0ao.png",
    link: "/ulamaa",
  },
  {
    title: "Flow Grant",
    description:
      "Flow Grant is a platform built to connect innovators and funders in the Flow ecosystem, and also to empower the blockchain’s future.",
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1727823486/Flow_1_hnj0ff.png",
    link: "/flow-grant",
  },
  {
    title: "Lavender",
    description:
      "Food ordering mobile app designed to make food ordering and tracking easy, with a user friendly interface and navigation.",
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1727823495/apple-606761_1920_1_jfwdxy.png",
    link: "/lavender",
  },
  {
    title: "Unimind Jobs",
    description:
      "Human resource website created for are hiring managers and those looking for jobs, to connect, employ, and get employed.",
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1727823500/Screenshot_2022-12-13_092004_1_i4bul7.png",
    link: "/unimind-jobs",
  },
  {
    title: "H R Website",
    description:
      "Saas website for job seekers, hiring managers and companies to post jobs and find jobs.",
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1727823510/Applicants_List_1_z8qdx3.png",
    link: "https://www.figma.com/proto/tbUmB3ZztYTnG2OYWdlECg/Hr?page-id=0%3A1&node-id=2%3A1391&viewport=761%2C656%2C0.04&scaling=contain&starting-point-node-id=2%3A1118&fuid=874351982583981638",
  },
  {
    title: "Jupit",
    description:
      "Jupitapp.co website landing page, web dashboard page, landing page progressive web application and dashboard PWA redesign",
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1727823518/Dashboard_Page_1_qhuzox.png",
    link: "/jupit",
  },
  {
    title: "Landing Page UI",
    description:
      "Landing page of an educational institute that focuses on using AI chatbot to create a better learning path",
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1727823526/Screenshot_2023-01-28_234829_1_cop0br.png",
    link: "/landing-page-ui",
  },
  {
    title: "Peace Flowers",
    description:
      "One-page website that makes it easy for users to book and order flowers for their occasions and loved ones.",
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1727823532/Peace_1_j7iube.png",
    link: "/peace-flowers",
  },
];

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <div className="flex flex-row  bg-white shadow-md shadow-[#7B7770] rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-[55%] p-6 rounded-md " />
      <div className="p-4 w-[45%] ">
        <h3 className="text-[32px] font-bold font-roboto-serif text-[#625E57] mb-3">
          {title}
        </h3>
        <p className="text-xl font-normal font-nunito text-[#7B7770] mb-3">
          {description}
        </p>
        <a
          href={link}
          className="text-[#7B7770] hover:text-blue-500 text-xl font-nunito font-bold"
          target="_blank"
          rel="noopener noreferrer">
          View Details
        </a>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="container px-[60px] py-10">
      <h2 className="font-bold font-roboto-serif text-[40px] text-[#33302A] py-[50px]">
        My design projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-14">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
