"use client";
import React, { SetStateAction } from "react";
import style from "../components/style/HamburgerMenuNav.module.scss";

import { motion } from "framer-motion";
import { IMenuArr } from "../types/type";

interface HamburgerMenuNavProps {
  setWhere: React.Dispatch<SetStateAction<IMenuArr>>;
  setMenuClick: React.Dispatch<SetStateAction<number>>;
  setHamburgerMenu: React.Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenuNav: React.FC<HamburgerMenuNavProps> = ({
  setWhere,
  setMenuClick,
  setHamburgerMenu,
}) => {
  const liArr: IMenuArr[] = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];

  const liVariant = {
    initial: { opacity: 0, y: -20 },
    animate: ([index]: number[]) => ({
      opacity: 1,
      y: 0,
      transition: { delay: (index + 2) / 15, duration: 0.5, type: "spring" },
    }),
    exit: ([index, length]: number[]) => ({
      opacity: 0,
      y: -20,
      transition: { delay: (index * -1 + length) / 35, duration: 0.1 },
    }),
  };

  const li = liArr.map((item, index) => {
    const scroll = () => {
      setWhere(item);
      setMenuClick((prev) => prev + 1);
      setHamburgerMenu(false);
    };

    return (
      <motion.li
        key={item}
        variants={liVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        custom={[index, liArr.length]}
        onClick={scroll}
      >
        {item}
      </motion.li>
    );
  });

  return (
    <motion.ul className={style.hamburgerMenu}>
      <motion.div
        animate={{ scale: window.innerHeight / 20 }}
        exit={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className={style.background}
      />
      {li}
    </motion.ul>
  );
};

export default HamburgerMenuNav;
