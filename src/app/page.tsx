"use client";
import React, { useEffect, useState } from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import styles from "./page.module.scss";

import { IComponentsHeight, IMenuArr } from "./types/type";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import LogoAnimation from "./components/UI/LogoAnimation";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const [componentsHeight, setComponentsHeight] = useState<IComponentsHeight>({
    nav: 60,
    home: 0,
    about: 0,
    projects: 0,
  });

  const [where, setWhere] = useState<IMenuArr | null>(null);
  const [menuClick, setMenuClick] = useState<number>(0);

  const [logoAnimation, setLogoAnimation] = useState<boolean>(false);

  const scroll = () => {
    let top: number | null = null;
    if (where == "HOME") top = 0;
    else if (where == "ABOUT") {
      top = componentsHeight.nav + componentsHeight.home;
    } else if (where == "PROJECTS") {
      top =
        componentsHeight.nav + componentsHeight.home + componentsHeight.about;
    } else if (where == "CONTACT") {
      top =
        componentsHeight.nav +
        componentsHeight.home +
        componentsHeight.about +
        componentsHeight.projects;
    }

    if (top !== null) {
      window.scrollTo({
        top,
        behavior: "instant",
      });
    }
  };

  useEffect(() => {
    let timeId = setTimeout(() => {
      setLogoAnimation(false);
      scroll();
    }, 400);

    return () => {
      clearTimeout(timeId);
    };
  }, [logoAnimation]);

  useEffect(() => {
    if (menuClick !== 0) {
      setLogoAnimation(true);
    }
  }, [where, menuClick]);

  return (
    <div className={styles.Page}>
      <AnimatePresence>{logoAnimation && <LogoAnimation />}</AnimatePresence>
      <Nav setWhere={setWhere} setMenuClick={setMenuClick} />
      <Home setComponentsHeight={setComponentsHeight} />
      <About setComponentsHeight={setComponentsHeight} />
      <Projects setComponentsHeight={setComponentsHeight} />
      <Contact />
      <Footer setWhere={setWhere} setMenuClick={setMenuClick} />
    </div>
  );
}
