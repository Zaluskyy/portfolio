"use client";
import React, {
  useState,
  useEffect,
  useContext,
  SetStateAction,
  useRef,
} from "react";
import style from "./style/ProjectCard.module.scss";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

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
  setComponentHeightChanged: React.Dispatch<SetStateAction<number>>;
  href: { code: string; live: string };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  cardIndex,
  img,
  title,
  description,
  librariesArr,
  setComponentHeightChanged,
  href,
}) => {
  const context = useContext(PortfolioContext);
  const { pageWidth } = context;

  const cardRef = useRef(null);

  const isInView = useInView(cardRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("animate");
  }, [isInView]);

  const linksArr = [
    { name: "Code", icon: githubIcon, href: href.code },
    { name: "Live", icon: linkIcon, href: href.live },
  ];

  const [selectedLibrariesArr, setSelectedLibrariesArr] = useState<any[]>([]);
  const [showMoreLibraries, setShowMoreLibraries] = useState<boolean>(false);
  const [threeOrFour, setThreeOrFour] = useState<3 | 4>(3);

  useEffect(() => {
    setComponentHeightChanged((prev) => prev + 1);
  }, [showMoreLibraries]);

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

  const libraryVariant = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
  };

  const libraries = selectedLibrariesArr.map((item, index) => {
    let showAllLibraries = false;
    if (selectedLibrariesArr >= librariesArr) showAllLibraries = true;

    if (showAllLibraries) {
      return (
        <motion.div
          variants={libraryVariant}
          initial="initial"
          animate="animate"
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
            variants={libraryVariant}
            initial="initial"
            animate={mainControls}
            transition={{ delay: index * 0.1 + 0.9 }}
            key={item.name}
            className={`${item.main ? style.main : ""}`}
          >
            <span>{item.name}</span>
          </motion.div>
        );
      } else {
        return (
          <motion.div
            variants={libraryVariant}
            initial="initial"
            animate={mainControls}
            transition={{ delay: index * 0.1 + 0.9 }}
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
      <a key={item.name} href={item.href} target="_blank">
        <span>{item.name}</span>
        <Image src={item.icon} alt={item.name} />
      </a>
    );
  });

  const cardVariant = {
    initial: {
      opacity: 0,
      x: 200,
    },
    animate: () => ({
      opacity: 1,
      x: 0,
      transition: { delay: cardIndex * 0 + 0.5 },
    }),
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariant}
      initial="initial"
      animate={mainControls}
      className={style.ProjectCard}
    >
      <div className={style.left}>
        <a href={href.live} target="_blank" className={style.imgContainer}>
          <Image src={img} alt="page" />
        </a>
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
