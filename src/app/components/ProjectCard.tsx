"use client";
import React, { useState, useEffect, useContext } from "react";
import style from "./style/ProjectCard.module.scss";
import Image from "next/image";

import linkIcon from "../../../public/icon/link.svg";
import githubIcon from "../../../public/icon/github.svg";
import PortfolioContext from "../context/context";

interface ILibraries {
  name: string;
  main?: boolean;
}

interface ProjectCardProps {
  img: any;
  title: string;
  description: string;
  librariesArr: ILibraries[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
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

  useEffect(() => {
    if (pageWidth ? pageWidth < 920 : window.innerWidth < 920) {
      const libraries = librariesArr.slice(0, 3);
      setSelectedLibrariesArr(libraries);
    } else {
      const libraries = librariesArr.slice(0, 4);
      setSelectedLibrariesArr(libraries);
    }
  }, [pageWidth]);

  const libraries = selectedLibrariesArr.map((item, index) => {
    // console.log(selectedLibrariesArr.length);
    let showAllLibraries = false;
    if (selectedLibrariesArr >= librariesArr) showAllLibraries = true;

    if (showAllLibraries) {
      return (
        <div key={item.name} className={`${item.main ? style.main : ""}`}>
          <span>{item.name}</span>
        </div>
      );
    } else {
      if (index < selectedLibrariesArr.length - 1) {
        return (
          <div key={item.name} className={`${item.main ? style.main : ""}`}>
            <span>{item.name}</span>
          </div>
        );
      } else {
        return (
          <div key={item.name} className={style.seeMore}>
            <span>See more...</span>
          </div>
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
    <div className={style.ProjectCard}>
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
    </div>
  );
};

export default ProjectCard;
