"use client";
import React, { useEffect, useState } from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import styles from "./page.module.scss";

import { IComponentsHeight } from "./types/type";

export default function App() {
  const [componentsHeight, setComponentsHeight] = useState<IComponentsHeight>({
    nav: 60,
    home: 0,
    about: 0,
    projects: 0,
  });

  return (
    <div className={styles.Page}>
      <Home setComponentsHeight={setComponentsHeight} />
      <About setComponentsHeight={setComponentsHeight} />
      <Projects setComponentsHeight={setComponentsHeight} />
      <Contact />
    </div>
  );
}
