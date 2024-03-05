"use client";
import React from "react";
import style from "./style/Projects.module.scss";
import FlyingChars from "./UI/FlyingChars";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

import mechanicsPageImg from "../../../public/img/mechanicspage.png";
import zaluskyyShopImg from "../../../public/img/zaluskyyshop.png";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({}) => {
  interface ILibraries {
    name: string;
    main?: boolean;
  }

  interface IProjectsArr {
    img: any;
    title: string;
    description: string;
    librariesArr: ILibraries[];
  }

  const projectsArr: IProjectsArr[] = [
    {
      img: zaluskyyShopImg,
      title: "ZaluskyyShop",
      description:
        "An e-commerce website for electronics. I designed the website in Figma. I implemented the front-end using Next.js. I created the back-end using Firebase. The website supports login, adding products to the cart, and the ordering process.",
      librariesArr: [
        { name: "Next.js" },
        { name: "TypeScript", main: true },
        { name: "SCSS" },
        { name: "Framer-Motion" },
        { name: "Firebase" },
        { name: "Formik" },
        { name: "Swiper.js" },
        { name: "React-cookie" },
        { name: "React-hot-toast" },
        { name: "Dotenv" },
      ],
    },
    {
      img: mechanicsPageImg,
      title: "Mechanic-website",
      description:
        "Single-Page Application for a Mechanic. The website has been created to inform customers about the mechanical services offered by the company",
      librariesArr: [
        { name: "Next.js", main: true },
        { name: "SCSS" },
        { name: "Framer-Motion" },
        { name: "React-Leaflet" },
        { name: "React-copy-to-clickboard" },
      ],
    },
  ];

  const projects = projectsArr.map((item, index) => {
    return (
      <ProjectCard
        key={item.title}
        cardIndex={index}
        img={item.img}
        title={item.title}
        description={item.description}
        librariesArr={item.librariesArr}
      />
    );
  });

  return (
    <div className={style.Projects}>
      <motion.h2
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, type: "spring", damping: 12 }}
      >
        Projects
        {/* <FlyingChars
          name={"Projects"}
          fromX={-300}
          toX={300}
          fromY={-400}
          toY={400}
          duration={0.8}
          delay={0.2}
          startDelay={0.1}
        /> */}
      </motion.h2>
      <div className={style.projectsContainer}>{projects}</div>
    </div>
  );
};

export default Projects;
