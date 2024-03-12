"use client";
import React, {
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import style from "./style/About.module.scss";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useInView,
  useAnimation,
} from "framer-motion";

import meImg from "../../../public/img/me-square.png";

import { IComponentsHeight } from "../types/type";
import PortfolioContext from "../context/context";

interface HomeProps {
  setComponentsHeight: React.Dispatch<SetStateAction<IComponentsHeight>>;
}

const About: React.FC<HomeProps> = ({ setComponentsHeight }) => {
  const context = useContext(PortfolioContext);
  const { pageWidth } = context;

  const aboutRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef(null);

  const isInView = useInView(descriptionRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("animate");
  }, [isInView]);

  useEffect(() => {
    if (aboutRef.current) {
      setComponentsHeight((prev: IComponentsHeight) => ({
        ...prev,
        about: aboutRef.current?.offsetHeight ?? prev.home,
      }));
    }
  }, [pageWidth]);

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

  const h2Variant = {
    initial: {
      opacity: 0,
      y: 75,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2, type: "spring", damping: 12 },
    },
  };
  const pVariant = {
    initial: {
      opacity: 0,
      y: 75,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
        type: "spring",
        damping: 12,
      },
    },
  };

  return (
    <div className={style.About} ref={aboutRef}>
      <motion.h2
        ref={descriptionRef}
        variants={h2Variant}
        initial="initial"
        animate={mainControls}
      >
        About
      </motion.h2>

      <motion.p variants={pVariant} initial="initial" animate={mainControls}>
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
