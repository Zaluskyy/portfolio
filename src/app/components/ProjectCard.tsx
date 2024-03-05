"use client";
import React, { useState, useEffect, useContext } from "react";
import style from "./style/ProjectCard.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

import linkIcon from "../../../public/icon/link.svg";
import githubIcon from "../../../public/icon/github.svg";
import PortfolioContext from "../context/context";

interface ILibraries {
  name: string;
  main?: boolean;
}

interface ProjectCardProps {
  cardIndex: number;
  img: any;
  title: string;
  description: string;
  librariesArr: ILibraries[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  cardIndex,
  img,
  title,
  description,
  librariesArr,
}) => {
  const context = useContext(PortfolioContext);
  const { pageWidth } = context;

  const linksArr = [
    { name: "Code", icon: githubIcon },
    { name: "Live", icon: linkIcon },
  ];

  const [selectedLibrariesArr, setSelectedLibrariesArr] = useState<any[]>([]);
  const [showMoreLibraries, setShowMoreLibraries] = useState<boolean>(false);
  const [threeOrFour, setThreeOrFour] = useState<3 | 4>(3);

  useEffect(() => {
    if (!showMoreLibraries) {
      if (pageWidth ? pageWidth < 850 : window.innerWidth < 850) {
        const libraries = librariesArr.slice(0, 3);
        setSelectedLibrariesArr(libraries);
        setThreeOrFour(3);
      } else {
        const libraries = librariesArr.slice(0, 4);
        setSelectedLibrariesArr(libraries);
        setThreeOrFour(4);
      }
    } else {
      setSelectedLibrariesArr(librariesArr);
    }
  }, [pageWidth, showMoreLibraries]);

  const libraries = selectedLibrariesArr.map((item, index) => {
    let showAllLibraries = false;
    if (selectedLibrariesArr >= librariesArr) showAllLibraries = true;

    if (showAllLibraries) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: (index - threeOrFour) * 0.1 }}
          key={item.name}
          className={`${item.main ? style.main : ""}`}
        >
          <span>{item.name}</span>
        </motion.div>
      );
    } else {
      if (index < selectedLibrariesArr.length - 1) {
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.4 + cardIndex * 0.5 }}
            key={item.name}
            className={`${item.main ? style.main : ""}`}
          >
            <span>{item.name}</span>
          </motion.div>
        );
      } else {
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.4 + cardIndex * 0.5 }}
            exit={{ opacity: 0, scale: 0 }}
            key={item.name}
            className={style.seeMore}
            onClick={() => setShowMoreLibraries(true)}
          >
            <span>See more...</span>
          </motion.div>
        );
      }
    }
  });

  const links = linksArr.map((item) => {
    return (
      <div key={item.name}>
        <span>{item.name}</span>
        <Image src={item.icon} alt={item.name} />
      </div>
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: cardIndex * 0.5 + 0.3 }}
      className={style.ProjectCard}
    >
      <div className={style.left}>
        <div className={style.imgContainer}>
          <Image src={img} alt="page" />
        </div>
      </div>
      <div className={style.right}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={style.bottomContainer}>
          <div className={style.libraryContainer}>{libraries}</div>
          <div className={style.linkContainer}>{links}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
