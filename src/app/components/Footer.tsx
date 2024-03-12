"use client";
import React, { SetStateAction, useEffect, useRef } from "react";
import style from "./style/Footer.module.scss";
import Image from "next/image";

import { motion, useAnimation, useInView } from "framer-motion";
import topIcon from "../../../public/icon/top.svg";

import { IMenuArr } from "../types/type";

interface FooterProps {
  setWhere: React.Dispatch<SetStateAction<IMenuArr | null>>;
  setMenuClick: React.Dispatch<SetStateAction<number>>;
}

const Footer: React.FC<FooterProps> = ({ setWhere, setMenuClick }) => {
  const footerRef = useRef(null);

  const isInView = useInView(footerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("animate");
  }, [isInView]);

  const goTop = () => {
    setWhere("HOME");
    setMenuClick((prev) => prev + 1);
  };

  const leftVariant = {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.7,
        type: "spring",
        damping: 12,
      },
    },
  };
  const rightVariant = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.7,
        type: "spring",
        damping: 12,
      },
    },
  };

  return (
    <footer className={style.Footer}>
      <motion.div
        ref={footerRef}
        variants={leftVariant}
        initial="initial"
        animate={mainControls}
        className={style.left}
      >
        <h5>
          Made by{" "}
          <a
            href="https://www.linkedin.com/in/krystian-zaluski"
            target="_blank"
          >
            Krystian Załuski
          </a>{" "}
          2024
        </h5>
      </motion.div>
      <motion.div
        variants={rightVariant}
        initial="initial"
        animate={mainControls}
        className={style.right}
        onClick={goTop}
      >
        <span>Back to top</span>
        <div className={style.iconContainer}>
          <Image src={topIcon} alt="back to top" />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
