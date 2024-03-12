"use client";
import React, {
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import style from "./style/Projects.module.scss";
import ProjectCard from "./ProjectCard";
import { motion, useAnimation, useInView } from "framer-motion";

import mechanicsPageImg from "../../../public/img/mechanicspage.png";
import zaluskyyShopImg from "../../../public/img/zaluskyyshop.png";

import { IComponentsHeight } from "../types/type";
import PortfolioContext from "../context/context";

interface ProjectsProps {
  setComponentsHeight: React.Dispatch<SetStateAction<IComponentsHeight>>;
}

const Projects: React.FC<ProjectsProps> = ({ setComponentsHeight }) => {
  interface ILibraries {
    name: string;
    main?: boolean;
  }

  interface IProjectsArr {
    img: any;
    title: string;
    description: string;
    librariesArr: ILibraries[];
    href: { code: string; live: string };
  }

  const [componentHeightChanged, setComponentHeightChanged] =
    useState<number>(0);

  const context = useContext(PortfolioContext);
  const { pageWidth } = context;

  const projectsRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef(null);

  const isInView = useInView(h2Ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("animate");
  }, [isInView]);

  useEffect(() => {
    if (projectsRef.current) {
      setComponentsHeight((prev: IComponentsHeight) => ({
        ...prev,
        projects: projectsRef.current?.offsetHeight ?? prev.home,
      }));
    }
  }, [pageWidth, componentHeightChanged]);

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
      href: {
        code: "https://github.com/Zaluskyy/ecommerce",
        live: "https://zaluskyyshop.vercel.app",
      },
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
      href: {
        code: "https://github.com/Zaluskyy/Mechanic-Website",
        live: "https://tadeuszaluski.netlify.app",
      },
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
        setComponentHeightChanged={setComponentHeightChanged}
        href={item.href}
      />
    );
  });

  const h2Variant = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, type: "spring", damping: 12 },
    },
  };

  return (
    <div className={style.Projects} ref={projectsRef}>
      <motion.h2
        ref={h2Ref}
        variants={h2Variant}
        initial="initial"
        animate={mainControls}
      >
        Projects
      </motion.h2>
      <div className={style.projectsContainer}>{projects}</div>
    </div>
  );
};

export default Projects;
