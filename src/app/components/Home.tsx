"use client";
import React, { useContext, useState } from "react";
import style from "./style/Home.module.scss";
import Image from "next/image";

import { motion } from "framer-motion";

import logoIcon from "../../../public/icon/logo.svg";

import linkedinIcon from "../../../public/icon/linkedin.svg";
import githubIcon from "../../../public/icon/github.svg";

import htmlIcon from "../../../public/icon/tech/html.svg";
import cssIcon from "../../../public/icon/tech/css.svg";
import sassIcon from "../../../public/icon/tech/sass.svg";
import jsIcon from "../../../public/icon/tech/js.svg";
import tsIcon from "../../../public/icon/tech/ts.svg";
import reactIcon from "../../../public/icon/tech/react.svg";
import nextIcon from "../../../public/icon/tech/next.svg";
import firebaseIcon from "../../../public/icon/tech/firebase.svg";

import meSquareImg from "../../../public/img/me-square.png";
import meImg from "../../../public/img/me2.png";
import PortfolioContext from "../context/context";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const context = useContext(PortfolioContext);
  const { pageWidth } = context;

  const random = () => Math.random() * 200;

  const nameVariant = {
    initial: {
      x: random(),
      y: random(),
      opacity: 0,
    },
    animate: (id: number) => ({
      x: 0,
      y: 0,
      opacity: 1,
      scale: [0, 0.1, 0.5, 0.1, 1],
      transition: {
        duration: 0.1 * id + 1,
      },
    }),
  };

  const randomFromTo = (
    fromX: number,
    toX: number,
    fromY: number,
    toY: number
  ) => {
    const randomX = Math.random() * (toX - fromX) + fromX;
    const randomY = Math.random() * (toY - fromY) + fromY;

    return { x: randomX, y: randomY };
  };

  const randomArrF: any[] = [];
  for (let i = 0; i < 23; i++) {
    randomArrF.push(randomFromTo(-300, 300, -400, 400));
  }
  const [randomArr] = useState<any[]>(randomArrF);

  const nameArr = ["Front-end", "React", "Developer"];

  const charName = nameArr.map((item, index) => {
    return item.split("").map((char, charIndex) => {
      let id: number = 0;
      if (index == 0) id = charIndex;
      else if (index == 1) id = charIndex + nameArr[index - 1].length;
      else if (index == 2)
        id = charIndex + nameArr[index - 1].length + nameArr[index - 2].length;
      return (
        <motion.span
          key={id}
          variants={nameVariant}
          initial={{ x: randomArr[id]?.x, y: randomArr[id]?.y, opacity: 0 }} //tu jest błąd
          animate="animate"
          custom={id}
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={0.8}
        >
          {char}
        </motion.span>
      );
    });
  });

  const name = charName.map((item, index) => {
    return (
      <div key={index}>
        <span className={style.word}>{item}</span>
        <span> </span>
      </div>
    );
  });

  const techArr = [
    { icon: htmlIcon, name: "html" },
    { icon: cssIcon, name: "css" },
    { icon: sassIcon, name: "sass" },
    { icon: jsIcon, name: "javaScript" },
    { icon: tsIcon, name: "typeScript" },
    { icon: reactIcon, name: "React" },
    { icon: nextIcon, name: "Next.js" },
    { icon: firebaseIcon, name: "fireBase" },
  ];

  const tech = techArr.map((item) => {
    return <Image key={item.name} src={item.icon} alt={item.name} />;
  });

  return (
    <div className={style.Home}>
      <div className={style.right}>
        <div className={style.circleContainer}>
          <div className={style.logoContainer}>
            <Image src={logoIcon} alt="logo" />
          </div>
          <div className={style.imgContainer}>
            {/* daj tutaj potem window ale z useeffectu bo coś się kurwa spierdala chuj jebany kurwa */}
            {/* {pageWidth ? (
              pageWidth < 820 ? (
                <Image priority={true} src={meSquareImg} alt="Krystian" />
              ) : (
                <Image priority={true} src={meImg} alt="Krystian" />
              )
            ) : window.innerWidth < 820 ? (
              <Image priority={true} src={meSquareImg} alt="Krystian" />
            ) : (
              <Image priority={true} src={meImg} alt="Krystian" />
            )} */}
          </div>
        </div>
      </div>

      <div className={style.left}>
        <div className={style.center}>
          <h1>{name}</h1>
          <h3>
            Hi, I’m Krystian Załuski. Front-end React Developer from Poland,
            Warsaw
          </h3>

          <div className={style.linkContainer}>
            <div className={style.githubContainer}>
              <Image src={githubIcon} alt="GitHub" />
            </div>
            <div className={style.linkedinContainer}>
              <Image src={linkedinIcon} alt="LinkedIn" />
            </div>
          </div>
        </div>
        <div className={style.techStack}>
          <h4>Tech stack:</h4>
          <div className={style.techStackIconContainer}>{tech}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
