"use client";
import React, { useContext } from "react";
import style from "./style/Home.module.scss";
import Image from "next/image";

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
            {pageWidth ? (
              pageWidth < 820 ? (
                <Image priority={true} src={meSquareImg} alt="Krystian" />
              ) : (
                <Image priority={true} src={meImg} alt="Krystian" />
              )
            ) : window.innerWidth < 820 ? (
              <Image priority={true} src={meSquareImg} alt="Krystian" />
            ) : (
              <Image priority={true} src={meImg} alt="Krystian" />
            )}
          </div>
        </div>
      </div>

      <div className={style.left}>
        <div className={style.center}>
          <h1>Front-end React developer</h1>

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
