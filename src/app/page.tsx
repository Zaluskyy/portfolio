import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import styles from "./page.module.scss";

export default function App() {
  return (
    <div className={styles.Page}>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
