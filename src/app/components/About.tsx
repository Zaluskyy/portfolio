import React from "react";
import style from "./style/About.module.scss";

interface HomeProps {}

const About: React.FC<HomeProps> = ({}) => {
  return (
    <div className={style.About}>
      <h2 className={style.kurwa}>About</h2>
      <p>
        I am Krystian Załuski. Since 2020, I have been learning front-end
        development. I started by creating games in pure JavaScript. Currently,
        I am working on business websites using the React and Next.js
        frameworks. I am currently studying computer science. I am seeking a
        position as a junior front-end developer and am eager to expand my
        skills in this field.
      </p>
    </div>
  );
};

export default About;
