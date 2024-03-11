"use client";
import React, { SetStateAction } from "react";
import style from "./style/Footer.module.scss";
import Image from "next/image";

import topIcon from "../../../public/icon/top.svg";

import { IMenuArr } from "../types/type";

interface FooterProps {
  setWhere: React.Dispatch<SetStateAction<IMenuArr | null>>;
  setMenuClick: React.Dispatch<SetStateAction<number>>;
}

const Footer: React.FC<FooterProps> = ({ setWhere, setMenuClick }) => {
  const goTop = () => {
    setWhere("HOME");
    setMenuClick((prev) => prev + 1);
  };

  return (
    <footer className={style.Footer}>
      <div className={style.left}>
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
      </div>
      <div className={style.right} onClick={goTop}>
        <span>Back to top</span>
        <Image src={topIcon} alt="back to top" />
      </div>
    </footer>
  );
};

export default Footer;
