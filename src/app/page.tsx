"use client";
import React, { useEffect, useState } from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import styles from "./page.module.scss";

import { IComponentsHeight, IMenuArr } from "./types/type";
import Nav from "./components/Nav";

export default function App() {
  const [componentsHeight, setComponentsHeight] = useState<IComponentsHeight>({
    nav: 60,
    home: 0,
    about: 0,
    projects: 0,
  });

  const [where, setWhere] = useState<IMenuArr>("HOME");
  const [menuClick, setMenuClick] = useState<number>(0);

  useEffect(() => {
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

    if (top) {
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  }, [where, menuClick]);

  return (
    <div className={styles.Page}>
      <Nav setWhere={setWhere} setMenuClick={setMenuClick} />
      <Home setComponentsHeight={setComponentsHeight} />
      <About setComponentsHeight={setComponentsHeight} />
      <Projects setComponentsHeight={setComponentsHeight} />
      <Contact />
    </div>
  );
}
