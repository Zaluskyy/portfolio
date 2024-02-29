"use client";
import React, { useEffect, useState } from "react";
import style from "./style/About.module.scss";
import Image from "next/image";
import FlyingChars from "./UI/FlyingChars";
import { AnimatePresence, motion } from "framer-motion";

import meImg from "../../../public/img/me-square.png";

interface HomeProps {}

const About: React.FC<HomeProps> = ({}) => {
  const [imgPosition, setImgPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const [hoverName, setHoverName] = useState<boolean>(false);

  const imgMove = (e: MouseEvent) => {
    setImgPosition({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", imgMove);
    return () => {
      window.removeEventListener("mousemove", imgMove);
    };
  }, []);

  return (
    <div className={style.About}>
      <h2 className={style.kurwa}>
        <FlyingChars
          name={"About"}
          fromX={-300}
          toX={300}
          fromY={-400}
          toY={400}
          duration={0.8}
          delay={0.2}
          startDelay={0.1}
        />
      </h2>

      <motion.p
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        I am{" "}
        <span
          className={style.name}
          onMouseMove={() => setHoverName(true)}
          onMouseLeave={() => setHoverName(false)}
        >
          Krystian Załuski
        </span>
        . Since 2020, I have been learning front-end development. I started by
        creating games in pure JavaScript. Currently, I am working on business
        websites using the React and Next.js frameworks. I am currently studying
        computer science. I am seeking a position as a junior front-end
        developer and am eager to expand my skills in this field.
      </motion.p>

      <AnimatePresence>
        {hoverName && (
          <motion.div
            initial={{ opacity: 0, scale: 0, x: "-50%", y: -200 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.2 }}
            className={style.imgContainer}
            style={{ left: imgPosition.x, top: imgPosition.y }}
          >
            <div className={style.background} />
            <Image src={meImg} alt="Me" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
